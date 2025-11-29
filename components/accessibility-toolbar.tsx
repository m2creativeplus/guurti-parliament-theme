"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Accessibility, ZoomIn, ZoomOut, Minus, Sun, Moon, Type, Eye, X } from "lucide-react"
import { useState } from "react"

export function AccessibilityToolbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [fontSize, setFontSize] = useState(100)
  const [highContrast, setHighContrast] = useState(false)

  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 10, 150)
    setFontSize(newSize)
    document.documentElement.style.fontSize = `${newSize}%`
  }

  const decreaseFontSize = () => {
    const newSize = Math.max(fontSize - 10, 80)
    setFontSize(newSize)
    document.documentElement.style.fontSize = `${newSize}%`
  }

  const resetFontSize = () => {
    setFontSize(100)
    document.documentElement.style.fontSize = "100%"
  }

  const toggleHighContrast = () => {
    setHighContrast(!highContrast)
    document.documentElement.classList.toggle("high-contrast")
  }

  return (
    <>
      {/* Accessibility Button */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg"
        aria-label="Open accessibility tools"
        aria-expanded={isOpen}
      >
        <Accessibility className="h-6 w-6" />
      </Button>

      {/* Accessibility Panel */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-80 p-6 shadow-2xl animate-slide-up">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Accessibility className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Accessibility Tools</h3>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} aria-label="Close accessibility tools">
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-4">
            {/* Font Size Controls */}
            <div>
              <label className="text-sm font-medium mb-2 block flex items-center gap-2">
                <Type className="h-4 w-4" />
                Text Size ({fontSize}%)
              </label>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={decreaseFontSize} aria-label="Decrease font size">
                  <ZoomOut className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={resetFontSize} aria-label="Reset font size">
                  <Minus className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={increaseFontSize} aria-label="Increase font size">
                  <ZoomIn className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* High Contrast Toggle */}
            <div>
              <label className="text-sm font-medium mb-2 block flex items-center gap-2">
                <Eye className="h-4 w-4" />
                Visual Mode
              </label>
              <Button
                variant={highContrast ? "default" : "outline"}
                className="w-full gap-2"
                onClick={toggleHighContrast}
                aria-pressed={highContrast}
              >
                {highContrast ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                {highContrast ? "High Contrast" : "Normal Contrast"}
              </Button>
            </div>

            {/* WCAG Statement Link */}
            <div className="pt-4 border-t">
              <p className="text-xs text-muted-foreground mb-2">
                This website aims to comply with WCAG 2.1 Level AA standards.
              </p>
              <Button variant="link" size="sm" className="h-auto p-0 text-xs" asChild>
                <a href="/accessibility-statement">View Accessibility Statement</a>
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  )
}
