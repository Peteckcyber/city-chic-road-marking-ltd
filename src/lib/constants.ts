export const SITE = {
  name: "City Chic Road Marking Services Ltd",
  shortName: "City Chic",
  tagline: "Precision Lines. Premium Quality. Safer Streets.",
  phone: "07046983893",
  phoneFormatted: "07046 983893",
  phoneHref: "tel:+2347046983893",
  whatsappNumber: "2347046983893",
  whatsappHref: "https://wa.me/2347046983893",
  email: "abikeajiboye15@gmail.com",
  url: "https://www.citychicroadmarking.com",
  description:
    "Premium road marking services in Lagos, Nigeria. Expert highway markings, car park layout design, warehouse floor marking, thermoplastic road markings, sports court marking, and industrial line painting for commercial and estate developments.",
  address: {
    country: "NG",
    region: "Lagos",
    city: "Lagos",
  },
} as const;

export const LOCATIONS = [
  {
    id: "magodo",
    label: "Magodo Office",
    lines: [
      "32, Jaiye Oyedotun Street",
      "Magodo, Lagos",
      "Nigeria",
    ],
  },
  {
    id: "alausa",
    label: "Alausa Office",
    lines: [
      "Phase 2, G.R.A",
      "By Secretariat, Alausa Area",
      "Lagos, Nigeria",
    ],
  },
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export const SOCIAL_LINKS = [
  { name: "Facebook", href: "https://facebook.com", platform: "facebook" as const },
  { name: "Instagram", href: "https://instagram.com", platform: "instagram" as const },
  { name: "WhatsApp", href: SITE.whatsappHref, platform: "whatsapp" as const },
] as const;

export const IMAGES = {
  logo: "/images/logo.png",
  heroHighway: "/images/hero-highway.png",
  markingCrew1: "/images/marking-crew-1.png",
  markingCrew2: "/images/marking-crew-2.png",
  markingMachine: "/images/marking-machine.png",
  roadCurve: "/images/road-curve.png",
  zebraCrossing: "/images/zebra-crossing.png",
  carParkLayout: "/images/car-park-layout.png",
} as const;

export const TRUST_STATS = [
  { label: "Projects Completed", value: 850, suffix: "+" },
  { label: "Roads Marked", value: 320, suffix: "+" },
  { label: "Parking Bays Created", value: 4500, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
] as const;

export const TRUST_PILLARS = [
  {
    icon: "engineering",
    title: "Proven Expertise",
    description: "Years of precision road marking experience across Lagos and surrounding areas.",
  },
  {
    icon: "precision_manufacturing",
    title: "Professional Equipment",
    description: "Advanced thermoplastic applicators and laser-guided layout systems.",
  },
  {
    icon: "diamond",
    title: "Premium Materials",
    description: "High-friction thermoplastic and durable resin coatings built for heavy use.",
  },
  {
    icon: "verified_user",
    title: "Safety Compliance",
    description: "Every project meets transport, highway, and workplace safety standards.",
  },
] as const;

export const SERVICES = [
  {
    id: "road-highway",
    icon: "add_road",
    title: "Road & Highway Markings",
    shortDescription:
      "Precision centerlines, junctions, roundabouts, and pedestrian crossings for highways, estates, and urban roads across Lagos.",
    items: ["Centerlines", "Junctions", "Roundabouts", "Pedestrian Crossings"],
    image: IMAGES.heroHighway,
    benefits: [
      "Improved road safety and smoother traffic flow",
      "High-visibility thermoplastic markings that last",
      "Fully compliant with Nigerian road safety standards",
      "Durable finish in Lagos heat and heavy rainfall",
    ],
    process: [
      "Site survey and traffic flow assessment",
      "Surface preparation and cleaning",
      "Precision layout and marking application",
      "Quality inspection and project handover",
    ],
  },
  {
    id: "car-park",
    icon: "local_parking",
    title: "Car Park Layout & Design",
    shortDescription:
      "Professional parking bay layouts for malls, estates, offices, and commercial developments — including disabled spaces and EV zones.",
    items: ["Parking Bays", "Disabled Spaces", "EV Charging Zones"],
    image: IMAGES.carParkLayout,
    benefits: [
      "Optimised parking capacity and clear traffic flow",
      "Accessible disabled bay compliance",
      "Enhanced property value and curb appeal",
      "Crisp, long-lasting line markings",
    ],
    process: [
      "Layout design and space optimisation",
      "Regulatory compliance review",
      "Precision marking application",
      "Final inspection and signage coordination",
    ],
  },
  {
    id: "warehouse",
    icon: "warehouse",
    title: "Warehouse & Industrial Lining",
    shortDescription:
      "Walkways, forklift routes, and hazard zones for warehouses, factories, and industrial facilities.",
    items: ["Walkways", "Forklift Routes", "Hazard Zones"],
    image: IMAGES.markingMachine,
    benefits: [
      "Safer workplace operations",
      "Clearly defined operational zones",
      "Reduced accident and liability risk",
      "Health and safety compliance",
    ],
    process: [
      "Operational flow assessment",
      "Zone planning and layout design",
      "Industrial-grade marking application",
      "Safety audit and documentation",
    ],
  },
  {
    id: "sports",
    icon: "sports_tennis",
    title: "Sports Courts & Playgrounds",
    shortDescription:
      "Regulation-compliant court markings for schools, recreational centres, gyms, and estate playgrounds.",
    items: ["Schools", "Recreational Centers", "Gyms"],
    image: IMAGES.zebraCrossing,
    benefits: [
      "Accurate, regulation-compliant court lines",
      "Vibrant colours that withstand outdoor use",
      "Safe play area demarcation",
      "Professional finish on every surface",
    ],
    process: [
      "Surface condition assessment",
      "Layout templating and measurement",
      "Multi-coat precision application",
      "Final verification and handover",
    ],
  },
  {
    id: "line-removal",
    icon: "cleaning_services",
    title: "Line Removal & Refreshing",
    shortDescription:
      "Faded marking removal, repainting, and layout upgrades to restore clarity and compliance.",
    items: ["Faded Marking Removal", "Repainting", "Layout Upgrades"],
    image: IMAGES.markingCrew2,
    benefits: [
      "Clean surface restoration",
      "Updated, compliant layouts",
      "Restored visibility and safety",
      "Cost-effective refresh solutions",
    ],
    process: [
      "Existing marking assessment",
      "Safe removal or surface overlay",
      "Thorough surface preparation",
      "Fresh precision reapplication",
    ],
  },
] as const;

export const WHY_CHOOSE_US = [
  {
    icon: "shield",
    title: "Ultra-Durable Materials",
    description:
      "Premium thermoplastic and high-friction resins engineered to withstand Lagos traffic, heat, and seasonal rainfall.",
  },
  {
    icon: "schedule",
    title: "24/7 Flexible Scheduling",
    description: "We work nights and weekends to minimise disruption to your business or estate operations.",
  },
  {
    icon: "gavel",
    title: "Regulatory Compliance",
    description:
      "Every project adheres to transport, highway, and workplace safety regulations.",
  },
  {
    icon: "auto_awesome",
    title: "Flawless Finish",
    description: "Sharp edges, exact measurements, and maximum visibility on every line we paint.",
  },
] as const;

export const GALLERY_ITEMS = [
  { title: "Highway Markings", category: "Highway", image: IMAGES.heroHighway },
  { title: "Urban Road Marking", category: "Highway", image: IMAGES.markingCrew1 },
  { title: "Car Park Layout", category: "Car Park", image: IMAGES.carParkLayout },
  { title: "Industrial Lining", category: "Warehouse", image: IMAGES.markingMachine },
  { title: "Pedestrian Crossing", category: "Highway", image: IMAGES.zebraCrossing },
  { title: "Precision Crew Work", category: "Highway", image: IMAGES.markingCrew2 },
] as const;

export const TESTIMONIALS = [
  {
    name: "Adewale Ogunleye",
    role: "Estate Manager",
    company: "Magodo GRA Residents Association",
    rating: 5,
    text: "City Chic repainted our entire estate car park — every bay, arrow, and pedestrian crossing is crisp and compliant. Residents noticed the difference within days.",
    avatar: "AO",
  },
  {
    name: "Abiola Akinyemi",
    role: "Facilities Director",
    company: "Victoria Island Commercial Plaza",
    rating: 5,
    text: "Our multi-level car park layout was redesigned and marked to perfection. Traffic flow improved immediately and we have had zero complaints since completion.",
    avatar: "AA",
  },
  {
    name: "Tunde Adebayo",
    role: "Project Manager",
    company: "Lekki Infrastructure Developments",
    rating: 5,
    text: "They handled highway marking on our estate access roads with remarkable precision. The team worked overnight and delivered ahead of schedule.",
    avatar: "TA",
  },
  {
    name: "Yetunde Ojo",
    role: "Operations Head",
    company: "Apapa Logistics Hub",
    rating: 5,
    text: "Warehouse floor marking for our forklift routes and hazard zones was executed flawlessly. Our safety audit scores improved significantly.",
    avatar: "YO",
  },
  {
    name: "Olufemi Alabi",
    role: "Property Developer",
    company: "Alausa Business District",
    rating: 5,
    text: "From initial survey to final handover, City Chic demonstrated the professionalism we expect from a premium contractor. Highly recommended.",
    avatar: "OA",
  },
  {
    name: "Kemi Afolabi",
    role: "School Administrator",
    company: "Ikeja Academy",
    rating: 5,
    text: "Our sports courts and playground markings look outstanding. The lines are vibrant, accurate, and have held up beautifully through the rainy season.",
    avatar: "KA",
  },
  {
    name: "Bisi Adeyemi",
    role: "Shopping Mall Manager",
    company: "Surulere Retail Centre",
    rating: 5,
    text: "They refreshed our faded parking lines overnight without disrupting shoppers. The new thermoplastic markings are bright and clearly visible.",
    avatar: "BA",
  },
  {
    name: "Segun Ajayi",
    role: "Estate Developer",
    company: "Lekki Phase 1 Developments",
    rating: 5,
    text: "City Chic marked over 200 parking bays across our new estate development. Exact measurements, clean edges, and delivered on time.",
    avatar: "SA",
  },
] as const;

export const TESTIMONIAL_METRICS = [
  { label: "Satisfaction Rate", value: 98, suffix: "%" },
  { label: "Projects Completed", value: 850, suffix: "+" },
  { label: "Repeat Clients", value: 89, suffix: "%" },
  { label: "Compliance Score", value: 100, suffix: "%" },
] as const;

export const CORE_VALUES = [
  { icon: "straighten", title: "Precision", description: "Every line measured and applied to exact specifications." },
  { icon: "health_and_safety", title: "Safety", description: "Safety-first approach on every project, every time." },
  { icon: "handshake", title: "Reliability", description: "On-time delivery with consistent, dependable results." },
  { icon: "lightbulb", title: "Innovation", description: "Latest thermoplastic equipment and marking technology." },
  { icon: "star", title: "Excellence", description: "Uncompromising quality in every detail we deliver." },
] as const;

export const TIMELINE = [
  { year: "2012", title: "Foundation", description: "City Chic Road Marking Services Ltd established in Lagos with a commitment to precision marking solutions." },
  { year: "2015", title: "Commercial Expansion", description: "Expanded into major commercial car park and estate marking projects across Lagos." },
  { year: "2018", title: "Industrial Division", description: "Launched dedicated warehouse and industrial floor marking services." },
  { year: "2021", title: "Technology Upgrade", description: "Invested in next-generation thermoplastic application and laser-guided layout equipment." },
  { year: "2024", title: "Lagos Leadership", description: "Recognised as a leading premium road marking contractor with 850+ completed projects across Lagos." },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What road marking services do you provide in Lagos?",
    answer:
      "We provide comprehensive road marking services including highway and estate road markings, car park layout and design, warehouse and industrial floor lining, sports court markings, and line removal and refreshing. All services use premium thermoplastic and high-friction materials.",
  },
  {
    question: "How long do thermoplastic road markings last in Lagos?",
    answer:
      "Premium thermoplastic markings typically last 3–5 years under heavy traffic and up to 8 years in lower-traffic areas. Our high-friction resin coatings are specifically chosen to withstand Lagos heat, humidity, and seasonal rainfall.",
  },
  {
    question: "Do you work outside normal business hours?",
    answer:
      "Yes. We offer flexible 24/7 scheduling including nights and weekends to minimise disruption to your business operations, estate traffic, or commercial activities.",
  },
  {
    question: "Are your markings compliant with safety regulations?",
    answer:
      "Absolutely. Every project adheres to Nigerian transport and highway regulations, as well as workplace safety standards. We provide compliance documentation upon request.",
  },
  {
    question: "How do I get a free quote?",
    answer:
      "Contact us via phone at 07046983893, WhatsApp, or our online contact form. We offer free site assessments and detailed quotations with no obligation.",
  },
  {
    question: "What areas in Lagos do you cover?",
    answer:
      "We serve clients across Lagos including Magodo, Alausa, Victoria Island, Lekki, Ikeja, Apapa, Surulere, and surrounding areas — from single car parks to large estate and highway projects.",
  },
] as const;

export const KEYWORDS = [
  "Road Marking Services Lagos",
  "Highway Marking Contractors Nigeria",
  "Car Park Layout Design Lagos",
  "Parking Lot Line Painting",
  "Thermoplastic Road Marking Lagos",
  "Industrial Floor Marking Nigeria",
  "Warehouse Line Marking Lagos",
  "Sports Court Marking Lagos",
  "Line Removal Services Nigeria",
  "Road Safety Markings Lagos",
  "Traffic Management Markings",
  "Commercial Road Marking Services",
  "Professional Line Painting Contractors Lagos",
  "Traffic Safety Solutions Nigeria",
] as const;
