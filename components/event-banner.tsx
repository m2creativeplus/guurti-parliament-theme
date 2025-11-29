import { Calendar, MapPin, CheckCircle2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { EventCountdown } from "./event-countdown"
import Image from "next/image"

interface EventBannerProps {
  eventNumber: number
  title: string
  date: string
  endDate?: string
  location: string
  venue: string
  status: "upcoming" | "ongoing" | "completed"
  gradient: string
  targetDate: Date
  logoUrl?: string
}

export function EventBanner({
  eventNumber,
  title,
  date,
  endDate,
  location,
  venue,
  status,
  gradient,
  targetDate,
  logoUrl,
}: EventBannerProps) {
  return (
    <Card className="overflow-hidden hover-lift card-premium">
      {/* Banner Header with Gradient */}
      <div className={`relative ${gradient} p-8 md:p-12 text-white`}>
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
                Event #{eventNumber}
              </Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2 text-balance">{title}</h2>
              <p className="text-white/90 text-lg">{date}</p>
            </div>
            {logoUrl && (
              <div className="hidden md:block">
                <div className="bg-white/90 rounded-xl p-4 w-24 h-24 flex items-center justify-center">
                  <Image
                    src={logoUrl || "/placeholder.svg"}
                    alt="Event Logo"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Decorative elements inspired by Parliament Magazine design */}
          <div className="flex gap-2">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={i} className="w-4 h-4 bg-white/30 rounded-sm" />
            ))}
          </div>
        </div>
      </div>

      {/* Event Details Panel */}
      <div className="p-6 md:p-8 space-y-6">
        {/* Countdown Timer */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-3">Time Until Event</h3>
          <EventCountdown targetDate={targetDate} />
        </div>

        {/* Event Information Grid */}
        <div className="grid md:grid-cols-2 gap-4 pt-4 border-t">
          <div className="space-y-3">
            <div>
              <div className="flex items-center gap-2 text-sm font-medium mb-1">
                <Calendar className="h-4 w-4 text-primary" />
                START DATE
              </div>
              <p className="text-sm text-muted-foreground">{date}</p>
            </div>
            {endDate && (
              <div>
                <div className="flex items-center gap-2 text-sm font-medium mb-1">
                  <Calendar className="h-4 w-4 text-primary" />
                  END DATE
                </div>
                <p className="text-sm text-muted-foreground">{endDate}</p>
              </div>
            )}
          </div>

          <div className="space-y-3">
            <div>
              <div className="flex items-center gap-2 text-sm font-medium mb-1">
                <CheckCircle2 className="h-4 w-4 text-success" />
                STATUS
              </div>
              <Badge
                variant={status === "completed" ? "secondary" : "default"}
                className={status === "upcoming" ? "bg-primary" : ""}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </Badge>
            </div>
            <div>
              <div className="flex items-center gap-2 text-sm font-medium mb-1">
                <MapPin className="h-4 w-4 text-primary" />
                LOCATION
              </div>
              <p className="text-sm text-muted-foreground">{location}</p>
            </div>
          </div>
        </div>

        {/* Venue */}
        <div className="pt-4 border-t">
          <div className="flex items-center gap-2 text-sm font-medium mb-1">
            <MapPin className="h-4 w-4 text-accent" />
            VENUE
          </div>
          <p className="text-sm text-muted-foreground">{venue}</p>
        </div>
      </div>
    </Card>
  )
}
