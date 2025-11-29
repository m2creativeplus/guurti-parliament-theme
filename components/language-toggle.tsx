"use client"

import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { useState } from "react"

export function LanguageToggle() {
  const [language, setLanguage] = useState<"so" | "en" | "ar">("so")

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <div className="flex gap-1 rounded-md bg-muted p-1">
        <Button
          variant={language === "so" ? "default" : "ghost"}
          size="sm"
          onClick={() => setLanguage("so")}
          className="h-7 px-3 text-xs"
          aria-pressed={language === "so"}
          aria-label="Switch to Somali"
        >
          SO
        </Button>
        <Button
          variant={language === "en" ? "default" : "ghost"}
          size="sm"
          onClick={() => setLanguage("en")}
          className="h-7 px-3 text-xs"
          aria-pressed={language === "en"}
          aria-label="Switch to English"
        >
          EN
        </Button>
        <Button
          variant={language === "ar" ? "default" : "ghost"}
          size="sm"
          onClick={() => setLanguage("ar")}
          className="h-7 px-3 text-xs font-arabic"
          aria-pressed={language === "ar"}
          aria-label="Switch to Arabic"
        >
          AR
        </Button>
      </div>
    </div>
  )
}
