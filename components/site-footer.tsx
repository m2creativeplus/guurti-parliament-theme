import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Youtube, Linkedin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Seal_of_the_Somaliland_House_of_Elders-2-8bNsigD3jQkH4tadEhU5GLjU8aXRZl.png"
                alt="Seal of the Somaliland House of Elders"
                width={56}
                height={56}
                className="h-14 w-14"
              />
              <div>
                <p className="text-sm font-semibold">Golaha Guurtida</p>
                <p className="text-xs text-muted-foreground">JSL</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Guriga xasilloonida siyaasadda, dhaqanka iyo wadajirka qaranka.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Ku Saabsan</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about/mandate" className="text-muted-foreground hover:text-foreground transition-colors">
                  Awoodda & Doorarka
                </Link>
              </li>
              <li>
                <Link href="/about/history" className="text-muted-foreground hover:text-foreground transition-colors">
                  Taariikhda Golaha
                </Link>
              </li>
              <li>
                <Link href="/about/structure" className="text-muted-foreground hover:text-foreground transition-colors">
                  Qaab-dhismeedka
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Xiriir</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Hargaysa, Jamhuuriyadda Somaliland</li>
              <li>+252 (0)63-0000000</li>
              <li>info@guurti.gov.somaliland</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Nala Soo Xidhiidh</h3>
            <div className="flex gap-3">
              <Link
                href="#"
                className="h-9 w-9 rounded-md bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Facebook className="h-4 w-4 text-primary" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="h-9 w-9 rounded-md bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Twitter className="h-4 w-4 text-primary" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="h-9 w-9 rounded-md bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Youtube className="h-4 w-4 text-primary" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link
                href="#"
                className="h-9 w-9 rounded-md bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="h-4 w-4 text-primary" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <h3 className="text-sm font-semibold mb-6 text-center">International Partners & Supporters</h3>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center justify-center p-4 rounded-lg bg-background/50 hover:bg-background transition-colors">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hdcW0MlnwslwUVOeuUGTBlRTSoXfaW.png"
                alt="Foreign, Commonwealth & Development Office"
                width={200}
                height={80}
                className="h-16 w-auto object-contain dark:brightness-0 dark:invert"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 Golaha Guurtida Jamhuuriyadda Somaliland – All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/accessibility" className="hover:text-foreground transition-colors">
              Accessibility Statement
            </Link>
            <Link href="/downloads" className="hover:text-foreground transition-colors">
              Download Centre
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
