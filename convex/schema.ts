import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  projects: defineTable({
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
  }).index("by_category", ["category"]),
  
  kpis: defineTable({
    totalValue: v.number(),
    activeProjects: v.number(),
    donorsEngaged: v.number(),
    completionRate: v.number(),
  }),
});
