export const business = {
  name: "Vinayaka Self Drive Cars and Car Rentals",
  shortName: "Vinayaka Self Drive Cars",
  phone: "6300943161",
  additionalPhone: "9573668424",
  phoneHref: "tel:+916300943161",
  whatsapp: "https://wa.me/916300943161?text=Hi%2C%20I%27m%20interested%20in%20booking%20a%20self-drive%20car.",
  rating: "4.8",
  ratingSource: "Justdial",
  years: "9+ Years in Business",
  hours: "Open 24 Hours",
  area: "Hanamkonda, Warangal, Telangana",
  address: "Road No-8, Postal Colony, Julywada, Hanamkonda, Telangana",
  mapsUrl: "https://www.google.com/maps/place/VINAYAKA+SELF+DRIVE+CARS/@17.9898933,79.5509867,19.81z/data=!4m12!1m5!3m4!2zMTfCsDU5JzIzLjUiTiA3OcKwMzMnMDMuNCJF!8m2!3d17.989867!4d79.5509499!3m5!1s0x3a334f8f882ae2fd:0x4012e6d763fc6307!8m2!3d17.9899406!4d79.5509331!16s%2Fg%2F11jzqqd7nb?entry=ttu&g_ep=EgoyMDI2MDgxNi4wIKXMDSoASAFQAw%3D%3D",
  dealsIn: [
    "Self Drive Cars",
    "Car Rentals",
    "SUV Rentals",
    "Sedan Rentals",
    "Hatchback Rentals",
    "Wedding & Event Cars",
  ],
  tags: ["Self Drive", "Outstation", "Wedding", "Local Transport"],
  languages: "English, Telugu, Hindi",
};

export type Vehicle = {
  id: string;
  name: string;
  category: string;
  image: string;
  badge: string;
  seats: string;
  transmission: string;
  fuel: string;
  price12h: string;
  limit12h?: string;
  price24h: string;
  limit24h?: string;
  extraHr: string;
  extraKm: string;
  gallery?: string[];
  model: string;
  variant: string;
};

export const vehicles: Vehicle[] = [
  {
    id: "v01",
    name: "Maruti Suzuki Dzire",
    variant: "Petrol VXI",
    model: "2024",
    category: "Sedans",
    image: "/cars/01-maruti-dzire-2024-vxi/maruti suzuki dezire 2024 petrol side.jpg",
    gallery: [
      "/cars/01-maruti-dzire-2024-vxi/maruti suzuki dezire 2024 petrol front.jpg",
      "/cars/01-maruti-dzire-2024-vxi/maruti suzuki dezire 2024 petrol side.jpg",
      "/cars/01-maruti-dzire-2024-vxi/maruti suzuki dezire 2024 petrol side_2.jpg"
    ],
    badge: "Comfort Ride",
    seats: "5 Seats",
    transmission: "Manual",
    fuel: "Petrol",
    price12h: "₹1,499",
    limit12h: "200 km",
    price24h: "₹1,999",
    limit24h: "400 km",
    extraHr: "₹150",
    extraKm: "₹10",
  },
  {
    id: "v02",
    name: "Maruti Suzuki Dzire Dazzling",
    variant: "Petrol VXI",
    model: "2026",
    category: "Sedans",
    image: "/cars/02-maruti-dzire-2026-vxi/maruti suzuki swift dazzling dezire 2026 side.jpg",
    gallery: [
      "/cars/02-maruti-dzire-2026-vxi/maruti suzuki swift dazzling dezire 2026 front.jpg",
      "/cars/02-maruti-dzire-2026-vxi/maruti suzuki swift dazzling dezire 2026 side.jpg",
      "/cars/02-maruti-dzire-2026-vxi/maruti suzuki swift dazzling dezire 2026 side_2.jpg"
    ],
    badge: "Premium Sedan",
    seats: "5 Seats",
    transmission: "Manual",
    fuel: "Petrol",
    price12h: "₹1,899",
    limit12h: "299 km",
    price24h: "₹2,299",
    limit24h: "400 km",
    extraHr: "₹150",
    extraKm: "₹10",
  },
  {
    id: "v03",
    name: "Maruti Suzuki Swift",
    variant: "Petrol",
    model: "2023",
    category: "Hatchbacks",
    image: "/cars/03-maruti-swift-2023/maruti suzuki swift 2023 petrol side.jpg",
    gallery: [
      "/cars/03-maruti-swift-2023/maruti suzuki swift 2023 petrol front.jpg",
      "/cars/03-maruti-swift-2023/maruti suzuki swift 2023 petrol side.jpg",
      "/cars/03-maruti-swift-2023/maruti suzuki swift 2023 petrol side_2.jpg"
    ],
    badge: "Easy City Driver",
    seats: "5 Seats",
    transmission: "Manual",
    fuel: "Petrol",
    price12h: "₹1,399",
    limit12h: "299 km",
    price24h: "₹1,799",
    limit24h: "400 km",
    extraHr: "₹150",
    extraKm: "₹10",
  },
  {
    id: "v04",
    name: "Toyota Innova Crysta Z-2.5",
    variant: "Z 2.5",
    model: "2024",
    category: "MUVs",
    image: "/cars/04-toyota-innova-crysta-z-2024/innova crysta 2024 z-2.5 side.jpg",
    gallery: [
      "/cars/04-toyota-innova-crysta-z-2024/innova crysta 2024 z-2.5 front.jpg",
      "/cars/04-toyota-innova-crysta-z-2024/innova crysta 2024 z-2.5 interior.jpg",
      "/cars/04-toyota-innova-crysta-z-2024/innova crysta 2024 z-2.5 side.jpg"
    ],
    badge: "Group Travel",
    seats: "7 Seats",
    transmission: "Manual",
    fuel: "Diesel",
    price12h: "₹3,999",
    limit12h: "200 km",
    price24h: "₹4,999",
    limit24h: "400 km",
    extraHr: "₹300",
    extraKm: "₹18",
  },
  {
    id: "v05",
    name: "Toyota Innova Crysta G-2.5",
    variant: "G 2.5",
    model: "2025",
    category: "MUVs",
    image: "/cars/05-toyota-innova-crysta-g-2025/side innova crysta.jpeg",
    gallery: [
      "/cars/05-toyota-innova-crysta-g-2025/innova crysta 2025 g-2.5 front.jpg",
      "/cars/05-toyota-innova-crysta-g-2025/innova crysta 2025 g-2.5 interior.jpg",
      "/cars/05-toyota-innova-crysta-g-2025/innova crysta 2025 g-2.5 interior_seats.jpg",
      "/cars/05-toyota-innova-crysta-g-2025/side innova crysta.jpeg"
    ],
    badge: "Family MUV",
    seats: "7 Seats",
    transmission: "Manual",
    fuel: "Diesel",
    price12h: "₹3,999",
    limit12h: "200 km",
    price24h: "₹4,999",
    limit24h: "400 km",
    extraHr: "₹300",
    extraKm: "₹18",
  },
  {
    id: "v06",
    name: "Tata Altroz",
    variant: "XZ+S (Sunroof)",
    model: "2024",
    category: "Hatchbacks",
    image: "/cars/06-tata-altroz-xz-plus-s-2024/tata altroz side.jpg",
    gallery: [
      "/cars/06-tata-altroz-xz-plus-s-2024/tata altroz front.jpg",
      "/cars/06-tata-altroz-xz-plus-s-2024/tata altroz interior sunroof.jpg",
      "/cars/06-tata-altroz-xz-plus-s-2024/tata altroz interior.jpg",
      "/cars/06-tata-altroz-xz-plus-s-2024/tata altroz side.jpg"
    ],
    badge: "Premium Hatchback",
    seats: "5 Seats",
    transmission: "Manual",
    fuel: "Diesel",
    price12h: "₹1,799",
    limit12h: "200 km",
    price24h: "₹2,399",
    limit24h: "400 km",
    extraHr: "₹150",
    extraKm: "₹10",
  },
  {
    id: "v07",
    name: "Maruti Suzuki Ertiga",
    variant: "ZXI+",
    model: "2023",
    category: "MUVs",
    image: "/cars/07-maruti-ertiga-zxi-plus-2023/maruti suzuki ertiga zxti side.jpg",
    gallery: [
      "/cars/07-maruti-ertiga-zxi-plus-2023/maruti suzuki ertiga zxti front.jpg",
      "/cars/07-maruti-ertiga-zxi-plus-2023/maruti suzuki ertiga zxti interior.jpg",
      "/cars/07-maruti-ertiga-zxi-plus-2023/maruti suzuki ertiga zxti side.jpg"
    ],
    badge: "Family MUV",
    seats: "7 Seats",
    transmission: "Manual",
    fuel: "Petrol",
    price12h: "₹2,499",
    limit12h: "200 km",
    price24h: "₹2,499",
    limit24h: "400 km",
    extraHr: "₹250",
    extraKm: "₹15",
  },
  {
    id: "v08",
    name: "Maruti Suzuki Baleno",
    variant: "Diesel",
    model: "2019",
    category: "Hatchbacks",
    image: "/cars/08-maruti-baleno-2019/maruti suzuki baleno 2019 side.jpg",
    gallery: [
      "/cars/08-maruti-baleno-2019/maruti suzuki baleno 2019 front.jpg",
      "/cars/08-maruti-baleno-2019/maruti suzuki baleno 2019 side.jpg"
    ],
    badge: "Premium Hatchback",
    seats: "5 Seats",
    transmission: "Manual",
    fuel: "Diesel",
    price12h: "₹1,499",
    limit12h: "200 km",
    price24h: "₹1,999",
    limit24h: "400 km",
    extraHr: "₹150",
    extraKm: "₹10",
  }
];

export const reviews = [
  {
    name: "Rajasekhar",
    rating: 5,
    date: "03 Feb 2025",
    tags: ["Good service", "Clean vehicle"],
    text: "Vinayaka Self Drive Cars and Car Rentals provided excellent service. The vehicle was clean and well-maintained. Highly recommended!",
  },
  {
    name: "Sai",
    rating: 5,
    text: "Great service in warangal",
  },
  {
    name: "Ranjith",
    rating: 5,
    date: "20 Jun 2020",
    text: "Good service and good price",
  },
];
