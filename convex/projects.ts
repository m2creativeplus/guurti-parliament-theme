import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getEcosystemData = query({
  args: {},
  handler: async (ctx) => {
    const projects = await ctx.db.query("projects").collect();
    let kpis = await ctx.db.query("kpis").first();
    
    // If no KPIs exist yet, calculate defaults
    if (!kpis) {
      const totalValue = projects.reduce((acc, curr) => acc + (parseFloat(curr.amount) || 0), 0);
      kpis = {
        _id: "default_kpi" as any,
        _creationTime: Date.now(),
        totalValue,
        activeProjects: projects.length,
        donorsEngaged: new Set(projects.map((p) => p.donor)).size,
        completionRate: 0,
      };
    }
    
    return { projects, kpis, updates: [] };
  },
});

export const bulkImport = mutation({
  args: {
    projects: v.array(v.object({
      code: v.string(),
      project_name: v.string(),
      amount: v.string(),
      donor: v.string(),
      category: v.string(),
      status: v.string(),
      priority: v.string(),
      alignment: v.string(),
      date: v.string(),
      description: v.string(),
    })),
    kpis: v.optional(v.object({
      totalValue: v.number(),
      activeProjects: v.number(),
      donorsEngaged: v.number(),
      completionRate: v.number(),
    })),
  },
  handler: async (ctx, args) => {
    // Wipe existing data (full replace for bulk import)
    const existingProjects = await ctx.db.query("projects").collect();
    for (const project of existingProjects) {
      await ctx.db.delete(project._id);
    }
    
    const existingKpis = await ctx.db.query("kpis").collect();
    for (const kpi of existingKpis) {
      await ctx.db.delete(kpi._id);
    }

    // Insert new projects
    for (const project of args.projects) {
      await ctx.db.insert("projects", project);
    }
    
    // Insert KPIs if provided, otherwise auto-calculate based on inserted projects
    if (args.kpis) {
      await ctx.db.insert("kpis", args.kpis);
    } else {
      const totalValue = args.projects.reduce((acc, curr) => acc + (parseFloat(curr.amount) || 0), 0);
      await ctx.db.insert("kpis", {
        totalValue,
        activeProjects: args.projects.length,
        donorsEngaged: new Set(args.projects.map(p => p.donor)).size,
        completionRate: 0,
      });
    }
    
    return { success: true, count: args.projects.length };
  },
});

export const updateProject = mutation({
  args: {
    id: v.id("projects"),
    updates: v.object({
      status: v.optional(v.string()),
      priority: v.optional(v.string()),
      amount: v.optional(v.string()),
    })
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, args.updates);
  }
});
