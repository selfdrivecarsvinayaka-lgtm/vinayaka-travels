import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { business } from "../lib/site-data";

const PRODUCTION_ORIGIN = "https://www.vinayakaselfdrivecars.in";
const OG_IMAGE = `${PRODUCTION_ORIGIN}/cars/04-toyota-innova-crysta-z-2024/innova%20crysta%202024%20z-2.5%20front.jpg`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${PRODUCTION_ORIGIN}/#organization`,
      name: business.name,
      url: PRODUCTION_ORIGIN,
      telephone: `+91${business.phone}`,
    },
    {
      "@type": "WebSite",
      "@id": `${PRODUCTION_ORIGIN}/#website`,
      url: PRODUCTION_ORIGIN,
      name: business.name,
      publisher: { "@id": `${PRODUCTION_ORIGIN}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${PRODUCTION_ORIGIN}/#webpage`,
      url: `${PRODUCTION_ORIGIN}/`,
      name: "Vinayaka Self Drive Cars & Car Rentals in Warangal | Hanamkonda",
      isPartOf: { "@id": `${PRODUCTION_ORIGIN}/#website` },
      about: { "@id": `${PRODUCTION_ORIGIN}/#localbusiness` },
      description:
        "Book reliable self drive cars and car rentals in Hanamkonda, Warangal, Telangana. Choose from SUVs, MUVs, sedans and hatchbacks for local, outstation and travel needs.",
    },
    {
      "@type": "LocalBusiness",
      "@id": `${PRODUCTION_ORIGIN}/#localbusiness`,
      name: business.name,
      url: `${PRODUCTION_ORIGIN}/`,
      telephone: `+91${business.phone}`,
      image: OG_IMAGE,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Road No-8, Postal Colony, Julywada",
        addressLocality: "Hanamkonda",
        addressRegion: "Telangana",
        addressCountry: "IN",
      },
      areaServed: [
        { "@type": "City", name: "Warangal" },
        { "@type": "City", name: "Hanamkonda" },
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      serviceType: [
        "Self Drive Car Rentals",
        "Car Rental With Driver",
        "SUV Rentals",
        "Sedan Rentals",
        "Hatchback Rentals",
        "MUV Rentals",
        "Outstation Travel",
        "Wedding Transportation",
      ],
    },
  ],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page Not Found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Visit {business.shortName} homepage to browse our fleet.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          title:
            "Vinayaka Self Drive Cars & Car Rentals in Warangal | Hanamkonda",
        },
        {
          name: "description",
          content:
            "Book reliable self drive cars and car rentals in Hanamkonda, Warangal, Telangana. Choose from SUVs, MUVs, sedans and hatchbacks for local, outstation and travel needs.",
        },
        {
          name: "author",
          content: business.name,
        },
        // Open Graph
        {
          property: "og:title",
          content:
            "Vinayaka Self Drive Cars & Car Rentals in Warangal | Hanamkonda",
        },
        {
          property: "og:description",
          content:
            "Book reliable self drive cars and car rentals in Hanamkonda, Warangal, Telangana. Choose from SUVs, MUVs, sedans and hatchbacks for local, outstation and travel needs.",
        },
        { property: "og:url", content: `${PRODUCTION_ORIGIN}/` },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: business.name },
        { property: "og:image", content: OG_IMAGE },
        // Twitter / X
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content:
            "Vinayaka Self Drive Cars & Car Rentals in Warangal | Hanamkonda",
        },
        {
          name: "twitter:description",
          content:
            "Book reliable self drive cars and car rentals in Hanamkonda, Warangal, Telangana. Choose from SUVs, MUVs, sedans and hatchbacks for local, outstation and travel needs.",
        },
        { name: "twitter:image", content: OG_IMAGE },
      ],
      links: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Manrope:wght@400;500;600;700&display=swap",
        },
        {
          rel: "stylesheet",
          href: appCss,
        },
        {
          rel: "canonical",
          href: `${PRODUCTION_ORIGIN}/`,
        },
      ],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  },
);

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
