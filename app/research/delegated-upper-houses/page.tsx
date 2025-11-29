import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MobileBottomNav } from "@/components/mobile-bottom-nav"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Calendar, User, ArrowLeft, Download, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DelegatedUpperHousesPage() {
  const countries = [
    {
      country: "Jarmalka (Germany)",
      upperHouse: "Bundesrat",
      method:
        "Waxaa soo magacaabaya dawladaha gobolada (Länder). Tirada codadka waxay ku xirantahay tirada dadka goboluhu.",
      constitutionalBasis: "Dastuurka Jamhuuriyadda Federaalka ah ee Jarmalka",
    },
    {
      country: "Hindiya (India)",
      upperHouse: "Rajya Sabha",
      method:
        "Qayb waxaa soo doorta baarlamaannada gobolada (State Assemblies) iyadoo loo marayo hab doorasho aan toos ahayn (indirect election). Qayb yar ayaa madaxweynuhu soo magacaabaa (12 xubnood)",
      constitutionalBasis: "Dastuurka Hindiya, Qodobka 80",
    },
    {
      country: "Jarmalka Jamhuuriyadda Dimuqraadiga ah ee Kongo (DRC)",
      upperHouse: "Senate",
      method: "Waxaa soo doorta golayaasha gobollada (provincial assemblies) doorasho aan toos ahayn.",
      constitutionalBasis: "Dastuurka 2006",
    },
    {
      country: "Itoobiya (Ethiopia)",
      upperHouse: "House of Federation",
      method:
        "Xubnaha waxaa soo doorta ama soo magacaabta golayaasha gobolada iyo maamulada ka socda umadaha kala duwan.",
      constitutionalBasis: "Dastuurka Federaalka ah ee Itoobiya, Qodobka 61",
    },
    {
      country: "Masar (Egypt - taariikhi ahaan)",
      upperHouse: "Shura Council (la joojiyay 2014)",
      method: "Qayb waxaa soo doortay shacabka, qaybna waxaa soo magacaabay madaxweynaha.",
      constitutionalBasis: "Dastuurkii hore ee 2012 (la bedelay)",
    },
    {
      country: "Pakistan",
      upperHouse: "Senate",
      method:
        "Waxaa soo doorta golayaasha gobollada (provincial assemblies) iyo golaha Islamabad Capital Territory doorasho aan toos ahayn.",
      constitutionalBasis: "Dastuurka Pakistan, Qodobka 59",
    },
    {
      country: "Jamhuuriyadda Dhexe Afrika (CAR)",
      upperHouse: "Waxaa jirtay Senate (muddo ahaan la joojiyay)",
      method: "Doorasho aan toos ah oo ay soo dhexdhexaadinayaan gole hoose iyo gole goboleed.",
      constitutionalBasis: "Dastuurka 2016",
    },
    {
      country: "Jamhuuriyadda Somaliland",
      upperHouse: "Golaha Guurtida",
      method:
        "Waxaa soo magacaaba odayaasha dhaqanka iyo beelaha dalka si loo ilaaliyo midnimada qaranka, nabadda bulshada, iyo dhaqanka.",
      constitutionalBasis: "Dastuurka Jamhuuriyadda Somaliland, Qodobka 57 & 58",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col pb-16 lg:pb-0">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-background py-16 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-5" />
          <div className="container relative">
            <div className="max-w-4xl mx-auto">
              <Link href="/research">
                <Button variant="ghost" className="gap-2 mb-6 hover:gap-3 transition-all">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Research
                </Button>
              </Link>

              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <Badge variant="outline" className="gap-1">
                  <BookOpen className="h-3 w-3" />
                  Parliamentary Research
                </Badge>
                <Badge variant="secondary">Comparative Study</Badge>
                <Badge className="bg-success text-success-foreground">Published</Badge>
              </div>

              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-balance">
                Dalalka Ay Golayaashooda Sare Yihiin Kuwo La Soo Magacaabo
              </h1>
              <p className="text-xl text-muted-foreground mb-6 text-balance">
                Delegated Upper Houses: A Comparative Study of Parliamentary Systems
              </p>

              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Nofeembar 8, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>Xafiiska Isgaadhsiinta iyo Xiriirka Dibadda</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button className="gap-2">
                  <Download className="h-4 w-4" />
                  Download PDF
                </Button>
                <Button variant="outline" className="gap-2 bg-transparent">
                  <Share2 className="h-4 w-4" />
                  Share Research
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <Card className="card-premium mb-8">
                <CardContent className="p-8 prose prose-lg max-w-none">
                  <h2 className="text-2xl font-heading font-bold mb-4">Hordhac</h2>
                  <p className="leading-relaxed mb-6">
                    Dunida maanta waxaa jira nidaamyo baarlamaan oo laba qaybood ah (bicameral systems) kuwaas oo ka
                    kooban aqal hoose iyo aqal sare. Aqalka sare (upper house) badanaa wuxuu qaataa doorka dib-u-eegista
                    sharciyada, ilaalinta danaha gobollada/maamul-goboleedyada, iyo xasilinta nidaamka siyaasadeed.
                  </p>
                  <p className="leading-relaxed mb-6">
                    Dalal badan oo federaal ah ama leh qaab-dhismeed bulsho oo qoto dheer waxay adeegsadaan hab{" "}
                    <em>delegation</em> ah, taas oo micnaheedu yahay in xubnaha aqalka sare aan si toos ah loo dooran,
                    balse lagu soo magacaabo ama lagu soo xulo gole kale oo hoose (gobol, beel, hay'ad dawlo ah).
                  </p>
                  <p className="leading-relaxed">
                    Jamhuuriyadda Somaliland waxay leedahay tusaale cad oo nidaamkan ah, waana{" "}
                    <strong>Golaha Guurtida</strong>, kaas oo ku dhisan xigmadda dhaqanka iyo dastuurka qaranka.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-premium mb-8">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-primary">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Seal_of_the_Somaliland_House_of_Elders-2-Ysl63cCzz2QEfxHVOEy86a2GN0DWYq.png"
                        alt="Golaha Guurtida Seal"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl font-heading font-bold">
                        Dalalka Adeegsada Nidaamka Delegated Upper House
                      </h2>
                      <p className="text-muted-foreground">Comparative analysis of 8 parliamentary systems worldwide</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    Hoos waxaa ku taxan dalal si rasmi ah u adeegsada ama qayb ahaan u adeegsada nidaamkan:
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-muted/50">
                          <th className="border border-border p-3 text-left font-semibold">#</th>
                          <th className="border border-border p-3 text-left font-semibold">Dalka</th>
                          <th className="border border-border p-3 text-left font-semibold">Magaca Aqalka Sare</th>
                          <th className="border border-border p-3 text-left font-semibold">
                            Habka Xubnaha Lagu Soo Xulo
                          </th>
                          <th className="border border-border p-3 text-left font-semibold">Saldhigga Dastuuriga ah</th>
                        </tr>
                      </thead>
                      <tbody>
                        {countries.map((item, index) => (
                          <tr key={index} className="hover:bg-muted/30 transition-colors">
                            <td className="border border-border p-3 font-medium">{index + 1}</td>
                            <td className="border border-border p-3 font-semibold">{item.country}</td>
                            <td className="border border-border p-3">
                              <Badge variant="outline">{item.upperHouse}</Badge>
                            </td>
                            <td className="border border-border p-3 text-sm leading-relaxed">{item.method}</td>
                            <td className="border border-border p-3 text-sm">{item.constitutionalBasis}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-premium mb-8 border-primary/20 bg-primary/5">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-heading font-bold mb-4">Golaha Guurtida: Tusaalaha Somaliland</h2>
                  <p className="leading-relaxed mb-4">
                    Golaha Guurtida waa hay'adda ugu sarreysa sharciga dejinta ee Jamhuuriyadda Somaliland, wuxuuna
                    qabaa kaalinta muhiimka ah ee ilaalinta midnimada qaranka iyo nabadgeliyada bulshada. Nidaamka
                    Golaha Guurtida wuxuu ku salaysan yahay:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Dhaqanka iyo dhaxalka soo jireenka ah ee bulshada Somaliland</li>
                    <li>Doorka odayaasha dhaqanka ee nabadaynta iyo dib-u-heshiisiin bulsheed</li>
                    <li>Maamulka qabiilada iyo isdhexgalka beelaha</li>
                    <li>Xasilinta nidaamka dastuuriga ah iyo xuquuqda aasaasiga ah</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-premium">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-heading font-bold mb-4">Faaidooyinka Nidaamka Delegated Upper House</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h3 className="font-semibold text-lg flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-success" />
                        Matalaad Ballaaran
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Waxa uu hubiyaa in gobolada, beelaha, ama kooxaha kala duwan ay ka qaybqaataan go'aamada
                        qaranka.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-semibold text-lg flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-success" />
                        Xasilinta Nidaamka
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Wuxuu yaraynayaa khilaafaadka siyaasadeed ee ka dhalan kara xaalado ay ku jiraan qeybaha
                        bulshaddu.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-semibold text-lg flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-success" />
                        Xirfadda iyo Aqoonta
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Wuxuu keenayaa dad leh aqoon iyo waayo-aragnimo ku saabsan arimaha bulshada iyo siyaasadda.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-semibold text-lg flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-success" />
                        Ilaalinta Dhaqanka
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Wuxuu ka caawiyaa ilaalinta dhaqanka iyo qaabka bulsho ee qaranka sida tusaalaha Somaliland.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Related Research */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-heading font-bold mb-6">Related Research</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="card-premium hover-lift">
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-3">
                      Comparative Study
                    </Badge>
                    <h3 className="font-semibold mb-2">Bicameral Systems in Federal States</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Analysis of upper house structures in federal parliamentary systems
                    </p>
                    <Link href="/research">
                      <Button variant="ghost" size="sm" className="gap-2">
                        Read More
                        <ArrowLeft className="h-3 w-3 rotate-180" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="card-premium hover-lift">
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-3">
                      Historical Analysis
                    </Badge>
                    <h3 className="font-semibold mb-2">Evolution of the Golaha Guurtida</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Historical development of Somaliland's House of Elders since 1993
                    </p>
                    <Link href="/research">
                      <Button variant="ghost" size="sm" className="gap-2">
                        Read More
                        <ArrowLeft className="h-3 w-3 rotate-180" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <MobileBottomNav />
    </div>
  )
}
