"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MobileBottomNav } from "@/components/mobile-bottom-nav"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, Filter, FileText, Calendar, Building2, Download, X } from "lucide-react"
import { useState } from "react"

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [dateRange, setDateRange] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const categories = [
    "Laws & Acts",
    "Committee Reports",
    "Press Releases",
    "Members & Leadership",
    "Strategic Documents",
    "Annual Reports",
    "Speeches & Statements",
    "International Agreements",
  ]

  const mockResults = [
    {
      title: "Budget Act 2025",
      category: "Laws & Acts",
      date: "2025-01-15",
      excerpt: "Annual budget allocation and expenditure framework for fiscal year 2025...",
      type: "PDF",
    },
    {
      title: "Foreign Affairs Committee Report Q4 2024",
      category: "Committee Reports",
      date: "2024-12-28",
      excerpt: "Quarterly report on international engagement activities and diplomatic initiatives...",
      type: "PDF",
    },
    {
      title: "Chairman's Address on Digital Transformation",
      category: "Speeches & Statements",
      date: "2025-01-10",
      excerpt: "Keynote address on the launch of the Somaliland Digital Legislative Archive...",
      type: "Video",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col pb-16 lg:pb-0">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section with Advanced Search */}
        <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-background py-12">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Advanced Search</h1>
                <p className="text-lg text-muted-foreground">
                  Search across all parliamentary documents, laws, reports, and media
                </p>
              </div>

              {/* Main Search Bar */}
              <Card className="card-premium">
                <CardContent className="pt-6">
                  <div className="relative mb-4">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      placeholder="Search laws, documents, news, members, events..."
                      className="pl-12 h-14 text-base"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      autoFocus
                    />
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 bg-transparent"
                      onClick={() => setShowFilters(!showFilters)}
                    >
                      <Filter className="h-4 w-4" />
                      Advanced Filters
                    </Button>

                    <div className="flex-1" />

                    <Button size="sm" className="gap-2">
                      <Search className="h-4 w-4" />
                      Search
                    </Button>
                  </div>

                  {/* Advanced Filters */}
                  {showFilters && (
                    <div className="mt-6 pt-6 border-t space-y-6 animate-slide-up">
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Date Range */}
                        <div className="space-y-2">
                          <Label htmlFor="dateRange" className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            Date Range
                          </Label>
                          <Input
                            id="dateRange"
                            type="date"
                            value={dateRange}
                            onChange={(e) => setDateRange(e.target.value)}
                          />
                        </div>

                        {/* Document Type */}
                        <div className="space-y-2">
                          <Label className="flex items-center gap-2">
                            <FileText className="h-4 w-4" />
                            Document Type
                          </Label>
                          <div className="flex flex-wrap gap-2">
                            <Badge
                              variant="outline"
                              className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                            >
                              PDF
                            </Badge>
                            <Badge
                              variant="outline"
                              className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                            >
                              Video
                            </Badge>
                            <Badge
                              variant="outline"
                              className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                            >
                              Audio
                            </Badge>
                            <Badge
                              variant="outline"
                              className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                            >
                              Image
                            </Badge>
                          </div>
                        </div>
                      </div>

                      {/* Categories */}
                      <div className="space-y-3">
                        <Label className="flex items-center gap-2">
                          <Building2 className="h-4 w-4" />
                          Content Categories
                        </Label>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                          {categories.map((category) => (
                            <div key={category} className="flex items-center space-x-2">
                              <Checkbox
                                id={category}
                                checked={selectedCategories.includes(category)}
                                onCheckedChange={(checked) => {
                                  if (checked) {
                                    setSelectedCategories([...selectedCategories, category])
                                  } else {
                                    setSelectedCategories(selectedCategories.filter((c) => c !== category))
                                  }
                                }}
                              />
                              <Label htmlFor={category} className="text-sm font-normal cursor-pointer">
                                {category}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setSearchQuery("")
                            setDateRange("")
                            setSelectedCategories([])
                          }}
                        >
                          Clear All
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Search Results */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-5xl mx-auto space-y-6">
              {/* Active Filters */}
              {(searchQuery || selectedCategories.length > 0 || dateRange) && (
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-medium">Active filters:</span>
                  {searchQuery && (
                    <Badge variant="secondary" className="gap-2">
                      Query: {searchQuery}
                      <X className="h-3 w-3 cursor-pointer" onClick={() => setSearchQuery("")} />
                    </Badge>
                  )}
                  {selectedCategories.map((category) => (
                    <Badge key={category} variant="secondary" className="gap-2">
                      {category}
                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={() => setSelectedCategories(selectedCategories.filter((c) => c !== category))}
                      />
                    </Badge>
                  ))}
                  {dateRange && (
                    <Badge variant="secondary" className="gap-2">
                      Date: {dateRange}
                      <X className="h-3 w-3 cursor-pointer" onClick={() => setDateRange("")} />
                    </Badge>
                  )}
                </div>
              )}

              {/* Results Count */}
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Showing {mockResults.length} results {searchQuery && `for "${searchQuery}"`}
                </p>
                <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                  <Download className="h-4 w-4" />
                  Export Results
                </Button>
              </div>

              {/* Result Cards */}
              {mockResults.map((result, index) => (
                <Card key={index} className="card-premium hover-lift cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">{result.category}</Badge>
                          <Badge variant="secondary">{result.type}</Badge>
                          <span className="text-xs text-muted-foreground">{result.date}</span>
                        </div>
                        <CardTitle className="text-xl mb-2 hover:text-primary transition-colors">
                          {result.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-2">{result.excerpt}</CardDescription>
                      </div>
                      <FileText className="h-8 w-8 text-muted-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                        <FileText className="h-4 w-4" />
                        View
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <MobileBottomNav />
    </div>
  )
}
