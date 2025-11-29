import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { sdlaTasks } from "@/lib/data/strategic-data"
import { BookOpen, Database, FileSearch, Globe, Search, Shield } from "lucide-react"

export default function SDLAPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Database className="h-10 w-10 text-primary" />
            <div>
              <h1 className="text-4xl font-bold text-foreground">Somaliland Digital Legislative Archive</h1>
              <p className="text-muted-foreground text-lg">SDLA — Transparency is Sovereignty</p>
            </div>
          </div>
          <p className="text-muted-foreground max-w-3xl">
            A national initiative led by the House of Elders to digitize, verify, and publish all Somaliland laws from
            the Protectorate era (1884) through independence (1960) to the present day. The SDLA demonstrates
            legislative continuity and institutional legitimacy through transparent access to legal heritage.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid gap-4 md:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Legal Documents</CardTitle>
              <FileSearch className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">1,200+</div>
              <p className="text-xs text-muted-foreground">1884–present</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Akoma Ntoso</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">XML</div>
              <p className="text-xs text-muted-foreground">Structured format</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Languages</CardTitle>
              <Globe className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">2</div>
              <p className="text-xs text-muted-foreground">Somali & English</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Verification</CardTitle>
              <Shield className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">MoJ/AG</div>
              <p className="text-xs text-muted-foreground">Legal validation</p>
            </CardContent>
          </Card>
        </div>

        {/* Implementation Phases */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Implementation Roadmap (2025–2030)</CardTitle>
            <CardDescription>
              Four-phase approach to building Africa's most transparent legislative archive
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {sdlaTasks.map((task, index) => {
                const progress = task.status === "In progress" ? 60 : task.status === "Completed" ? 100 : 0
                return (
                  <div key={task.label} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{task.label}</p>
                          <Badge
                            variant={
                              task.status === "In progress"
                                ? "default"
                                : task.status === "Completed"
                                  ? "secondary"
                                  : "outline"
                            }
                            className="mt-1"
                          >
                            {task.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Technical Standards */}
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Technical Standards</CardTitle>
              <CardDescription>International compliance and best practices</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <p className="font-medium text-sm">ISO 9001 Quality Management</p>
                    <p className="text-xs text-muted-foreground">Document control and process standards</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <p className="font-medium text-sm">ISO 27001 Information Security</p>
                    <p className="text-xs text-muted-foreground">Data protection and access control</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <p className="font-medium text-sm">ISO 15489 Records Management</p>
                    <p className="text-xs text-muted-foreground">Archival standards and metadata</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <p className="font-medium text-sm">Akoma Ntoso XML Schema</p>
                    <p className="text-xs text-muted-foreground">Legislative document markup standard</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Integration with Guurti Website</CardTitle>
              <CardDescription>Seamless access to legislative information</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <p className="font-medium text-sm">Homepage Search Widget</p>
                    <p className="text-xs text-muted-foreground">Direct SDLA search from main site</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <p className="font-medium text-sm">SNPA-Branded PDFs</p>
                    <p className="text-xs text-muted-foreground">Professional documents with Somaliland emblem</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <p className="font-medium text-sm">Admin Validation Portal</p>
                    <p className="text-xs text-muted-foreground">MoJ/AG approval workflow for new uploads</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <div>
                    <p className="font-medium text-sm">Open Data API</p>
                    <p className="text-xs text-muted-foreground">Donor reporting and research access</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Partners */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Strategic Partners</CardTitle>
            <CardDescription>Collaboration for legal heritage preservation and access</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">AfricanLII / Laws.Africa</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Legal heritage partnership for 1884–1991 protectorate and 1991–present Somaliland legal continuity
                </p>
                <Badge>High Fit</Badge>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">British Library EAP</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Historic parliamentary and protectorate material digitization (2026–2029)
                </p>
                <Badge variant="outline">Drafting</Badge>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-foreground mb-2">SNPA</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Archival partner for professional document design and branding
                </p>
                <Badge variant="secondary">Active</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search Demo */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold mb-2">Search the SDLA</h3>
                <p className="text-sm opacity-90">Access 140+ years of Somaliland legislative history</p>
              </div>
              <Button variant="secondary" size="lg">
                <Search className="mr-2 h-4 w-4" />
                Launch Search
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
