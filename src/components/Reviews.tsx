import { Star, ExternalLink, User } from "lucide-react";
import { business, reviews } from "@/lib/site-data";

export function Reviews() {
  const justdialUrl = "https://www.justdial.com/Warangal/Vinayaka-Self-Drive-Cars-and-Car-Rentals-Near-St-Girls-Hostel-Hanamkonda/9999PX870-X870-200531113054-P9Z4_BZDET?trkid=&term=&ncatid=11276270&area=&search=Showing%20Results%20for%20%22Vinayaka%20Self%20Drive%20Cars%20Hanamkonda%22%20in%20Warangal&mncatname=Vinayaka%20Self%20Drive%20Cars%20Hanamkonda&ftterm=Vinayaka%20Self%20Drive%20Cars%20Hanamkonda&csell=&oncatid=11276270&abd_btn=&abd_heading=&isFreetxt=1&bd=2&cat_b2b_flag=&searchfrom=lst&thumbnail=";

  return (
    <section className="py-16 md:py-24 bg-gray-50/50">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold font-display sm:text-4xl text-ink">
            Trusted by Our Customers
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Experience our top-rated car rental service in Warangal.
          </p>
        </div>
        
        <div className="mt-12 flex flex-col items-center gap-2 rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm">
          <p className="text-5xl font-bold font-display text-primary">{business.rating}</p>
          <div className="flex gap-1 text-primary my-2" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="size-6 fill-current" />
            ))}
          </div>
          <p className="text-sm font-semibold text-ink">
            {business.ratingSource} Rating
          </p>
        </div>
        
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="rounded-3xl border border-gray-100 bg-white p-6 md:p-8 flex flex-col h-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <User className="size-6" />
                </div>
                <div>
                  <h3 className="font-bold text-ink">{r.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex text-primary">
                      {Array.from({ length: r.rating }).map((_, i) => (
                        <Star key={i} className="size-3.5 fill-current" />
                      ))}
                    </div>
                    {r.date && (
                      <span className="text-xs text-muted-foreground font-medium">
                        {r.date}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed flex-1">
                "{r.text}"
              </p>
              
              {r.tags && r.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-gray-100">
                  {r.tags.map((tag, tIndex) => (
                    <span 
                      key={tIndex} 
                      className="inline-flex items-center rounded-full bg-gray-50 border border-gray-200 px-2.5 py-1 text-xs font-semibold text-ink"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex flex-col items-center justify-center gap-4">
          <a
            href={justdialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink px-8 text-sm font-bold text-white shadow-md hover:bg-ink/80 transition-all"
          >
            View More Reviews on Justdial
            <ExternalLink className="size-4" />
          </a>
          
          <div className="text-center mt-4">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Reviews sourced from Justdial
            </p>
            <a 
              href={justdialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-primary hover:underline mt-1 inline-block"
            >
              View on Justdial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
