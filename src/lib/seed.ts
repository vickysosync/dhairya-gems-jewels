import { IMG } from "./images";
import type { Category, Collection, DB, Product } from "./types";

type P = Omit<Product, "id" | "sku" | "status" | "createdAt" | "bestseller" | "featured" | "newArrival" | "stock"> & { flags?: string; days: number };

const RING_SIZES = ["10", "12", "14", "16", "18"];
const BANGLE_SIZES = ["2.4", "2.6", "2.8"];
const NECK = ["16 in", "18 in", "20 in"];

const raw: P[] = [
  { slug: "aurelia-temple-necklace", name: "Aurelia Temple Necklace", categories: ["gold-jewellery", "necklaces", "bridal-jewellery"], collection: "royal-gold", metal: "Yellow Gold", purity: "22K (demo)", weight: "68.4 g", stones: "Rubies (demo)", price: 485000, comparePrice: 520000, images: [IMG.goldNecklace, IMG.lifestyle], description: "A sculpted temple necklace with deity motifs, hand-chased in warm yellow gold and accented with ruby cabochons.", sizes: NECK, flags: "fb", days: 40 },
  { slug: "celeste-diamond-riviere", name: "Celeste Diamond Rivière", categories: ["diamond-jewellery", "necklaces"], collection: "diamond-elegance", metal: "White Gold", purity: "18K (demo)", weight: "24.1 g", stones: "Diamonds, approx. 9 ct (demo)", price: 925000, comparePrice: 0, images: [IMG.diamondNecklace, IMG.lifestyle], description: "A cascade of marquise and pear diamonds that settles softly along the collarbone, finishing in a single drop.", sizes: NECK, flags: "fbn", days: 6 },
  { slug: "solene-solitaire-ring", name: "Solène Solitaire Engagement Ring", categories: ["diamond-jewellery", "platinum-jewellery", "rings", "bridal-jewellery"], collection: "bridal", metal: "Platinum", purity: "PT950 (demo)", weight: "4.2 g", stones: "Round diamond, approx. 1.5 ct (demo)", price: 315000, comparePrice: 0, images: [IMG.engagement, IMG.eternity], description: "A four-prong platinum solitaire with a tapered cathedral band, designed to let a single brilliant stone speak.", sizes: RING_SIZES, flags: "fb", days: 30 },
  { slug: "noor-diamond-drops", name: "Noor Diamond Drop Earrings", categories: ["diamond-jewellery", "earrings"], collection: "diamond-elegance", metal: "Yellow Gold", purity: "18K (demo)", weight: "7.8 g", stones: "Diamonds (demo)", price: 186000, comparePrice: 205000, images: [IMG.earrings, IMG.lifestyle], description: "Graceful drop earrings that catch light with every movement, balanced between a floral top and a teardrop.", sizes: [], flags: "b", days: 55 },
  { slug: "petal-diamond-studs", name: "Petal Diamond Studs", categories: ["diamond-jewellery", "earrings"], collection: "everyday-luxury", metal: "Yellow Gold", purity: "18K (demo)", weight: "3.1 g", stones: "Diamonds (demo)", price: 64500, comparePrice: 0, images: [IMG.studs, IMG.earrings], description: "Petite petal-shaped studs for everyday brilliance, from desk to dinner.", sizes: [], flags: "bn", days: 4 },
  { slug: "maharani-bridal-set", name: "Maharani Bridal Set", categories: ["gold-jewellery", "bridal-jewellery", "necklaces"], collection: "bridal", metal: "Yellow Gold", purity: "22K (demo)", weight: "112 g", stones: "Polki & emeralds (demo)", price: 845000, comparePrice: 899000, images: [IMG.bridal, IMG.kundan], description: "A complete bridal ensemble of necklace and earrings, layered with heirloom-inspired detailing for the big day.", sizes: [], flags: "fb", days: 70 },
  { slug: "royal-kada-bangles", name: "Royal Kada Bangles (Pair)", categories: ["gold-jewellery", "bangles"], collection: "traditional", metal: "Yellow Gold", purity: "22K (demo)", weight: "42.6 g", stones: "None", price: 298000, comparePrice: 0, images: [IMG.bangles, IMG.roseBangle], description: "A pair of hand-engraved kadas with a rich, lustrous finish and secure screw closure.", sizes: BANGLE_SIZES, flags: "b", days: 90 },
  { slug: "vela-link-bracelet", name: "Vela Gold Link Bracelet", categories: ["gold-jewellery", "bracelets"], collection: "contemporary", metal: "Yellow Gold", purity: "18K (demo)", weight: "14.2 g", stones: "None", price: 118000, comparePrice: 129000, images: [IMG.bracelet, IMG.mensCuff], description: "Fluid sculptural links that drape effortlessly on the wrist.", sizes: ["S", "M", "L"], flags: "n", days: 3 },
  { slug: "regent-signet-ring", name: "Regent Men's Signet Ring", categories: ["gold-jewellery", "mens-jewellery", "rings"], collection: "signature", metal: "Yellow Gold", purity: "22K (demo)", weight: "11.5 g", stones: "Onyx (demo)", price: 96000, comparePrice: 0, images: [IMG.mensRing, IMG.mensCuff], description: "A confident signet with a polished bezel and bevelled shoulders.", sizes: ["18", "20", "22", "24"], flags: "b", days: 45 },
  { slug: "lumiere-gold-pendant", name: "Lumière Gold Pendant", categories: ["gold-jewellery", "pendants"], collection: "everyday-luxury", metal: "Yellow Gold", purity: "18K (demo)", weight: "4.6 g", stones: "Diamond accent (demo)", price: 42500, comparePrice: 48000, images: [IMG.pendant, IMG.floralPendant], description: "A softly glowing pendant on a fine chain, made for layering.", sizes: NECK, flags: "n", days: 2 },
  { slug: "fleur-floral-pendant", name: "Fleur Floral Pendant", categories: ["gold-jewellery", "diamond-jewellery", "pendants"], collection: "contemporary", metal: "Rose Gold", purity: "18K (demo)", weight: "5.2 g", stones: "Diamonds (demo)", price: 78500, comparePrice: 0, images: [IMG.floralPendant, IMG.pendant], description: "A blooming floral motif set with pavé diamonds.", sizes: NECK, flags: "fn", days: 8 },
  { slug: "nawab-emerald-ring", name: "Nawab Emerald Cocktail Ring", categories: ["gemstone-jewellery", "rings"], collection: "gemstone", metal: "Yellow Gold", purity: "18K (demo)", weight: "8.8 g", stones: "Emerald & diamonds (demo)", price: 212000, comparePrice: 235000, images: [IMG.gemstone, IMG.emeraldEarrings], description: "A statement cocktail ring crowned by a deep green emerald.", sizes: RING_SIZES, flags: "f", days: 60 },
  { slug: "ivory-silver-hoops", name: "Ivory Silver Hoops & Chain", categories: ["silver-jewellery", "earrings", "necklaces"], collection: "everyday-luxury", metal: "Sterling Silver", purity: "925 (demo)", weight: "18.0 g", stones: "None", price: 9800, comparePrice: 12500, images: [IMG.silver], description: "A modern silver set of chunky hoops and a curb chain.", sizes: [], flags: "n", days: 1 },
  { slug: "atelier-classic-band", name: "Atelier Classic Band", categories: ["gold-jewellery", "rings"], collection: "signature", metal: "Yellow Gold", purity: "18K (demo)", weight: "5.4 g", stones: "Diamonds (demo)", price: 58000, comparePrice: 0, images: [IMG.ring, IMG.eternity], description: "The house signature band, finished with a hand-polished comfort fit.", sizes: RING_SIZES, flags: "b", days: 100 },
  { slug: "rani-ruby-halo-ring", name: "Rani Ruby Halo Ring", categories: ["gemstone-jewellery", "gold-jewellery", "rings"], collection: "gemstone", metal: "Yellow Gold", purity: "18K (demo)", weight: "6.1 g", stones: "Ruby & diamond halo (demo)", price: 168000, comparePrice: 182000, images: [IMG.rubyRing, IMG.gemstone], description: "An oval ruby encircled by a brilliant diamond halo.", sizes: RING_SIZES, flags: "fbn", days: 5 },
  { slug: "verdant-emerald-drops", name: "Verdant Emerald Drops", categories: ["gemstone-jewellery", "earrings"], collection: "gemstone", metal: "Yellow Gold", purity: "18K (demo)", weight: "6.9 g", stones: "Emeralds & diamonds (demo)", price: 156000, comparePrice: 0, images: [IMG.emeraldEarrings, IMG.gemstone], description: "Pear emeralds framed in diamond halos for evening elegance.", sizes: [], flags: "n", days: 7 },
  { slug: "sultan-curb-chain", name: "Sultan Curb Chain", categories: ["gold-jewellery", "mens-jewellery", "necklaces"], collection: "royal-gold", metal: "Yellow Gold", purity: "22K (demo)", weight: "52.0 g", stones: "None", price: 389000, comparePrice: 0, images: [IMG.mensChain, IMG.mensCuff], description: "A bold Cuban-style curb chain with a secure box clasp.", sizes: ["20 in", "22 in", "24 in"], flags: "b", days: 35 },
  { slug: "aira-tennis-bracelet", name: "Aira Diamond Tennis Bracelet", categories: ["diamond-jewellery", "bracelets"], collection: "diamond-elegance", metal: "White Gold", purity: "18K (demo)", weight: "12.4 g", stones: "Diamonds, approx. 5 ct (demo)", price: 412000, comparePrice: 445000, images: [IMG.tennis, IMG.eternity], description: "An unbroken line of brilliant diamonds in four-prong settings.", sizes: ["S", "M", "L"], flags: "fb", days: 25 },
  { slug: "padmini-kundan-choker", name: "Padmini Kundan Choker", categories: ["gold-jewellery", "bridal-jewellery", "necklaces"], collection: "traditional", metal: "Yellow Gold", purity: "22K (demo)", weight: "86.0 g", stones: "Kundan, polki & pearls (demo)", price: 565000, comparePrice: 0, images: [IMG.kundan, IMG.bridal], description: "A regal kundan choker with cascading pearls.", sizes: [], flags: "fn", days: 9 },
  { slug: "moti-pearl-drops", name: "Moti Pearl Drop Earrings", categories: ["gold-jewellery", "earrings"], collection: "everyday-luxury", metal: "Yellow Gold", purity: "18K (demo)", weight: "4.0 g", stones: "Pearls (demo)", price: 36500, comparePrice: 0, images: [IMG.pearl, IMG.studs], description: "Lustrous pearls suspended from polished gold domes.", sizes: [], flags: "", days: 50 },
  { slug: "infinia-eternity-band", name: "Infinia Platinum Eternity Band", categories: ["platinum-jewellery", "diamond-jewellery", "rings", "bridal-jewellery"], collection: "bridal", metal: "Platinum", purity: "PT950 (demo)", weight: "5.0 g", stones: "Diamonds, approx. 3 ct (demo)", price: 248000, comparePrice: 0, images: [IMG.eternity, IMG.engagement], description: "A full circle of diamonds — a promise without end.", sizes: RING_SIZES, flags: "n", days: 10 },
  { slug: "blush-rose-bangles", name: "Blush Rose Gold Bangles", categories: ["gold-jewellery", "diamond-jewellery", "bangles"], collection: "contemporary", metal: "Rose Gold", purity: "18K (demo)", weight: "28.0 g", stones: "Diamonds (demo)", price: 228000, comparePrice: 249000, images: [IMG.roseBangle, IMG.bangles], description: "A stack of slim rose gold bangles accented with pavé diamonds.", sizes: BANGLE_SIZES, flags: "f", days: 15 },
  { slug: "neelam-sapphire-pendant", name: "Neelam Sapphire Pendant", categories: ["gemstone-jewellery", "platinum-jewellery", "pendants"], collection: "gemstone", metal: "Platinum", purity: "PT950 (demo)", weight: "4.8 g", stones: "Blue sapphire & diamonds (demo)", price: 192000, comparePrice: 0, images: [IMG.sapphire, IMG.diamondNecklace], description: "A royal blue sapphire in a diamond halo on a fine platinum chain.", sizes: NECK, flags: "fn", days: 12 },
  { slug: "monarch-cuff-set", name: "Monarch Cuff & Cufflinks Set", categories: ["gold-jewellery", "mens-jewellery", "bracelets"], collection: "signature", metal: "Yellow Gold", purity: "18K (demo)", weight: "38.0 g", stones: "None", price: 276000, comparePrice: 0, images: [IMG.mensCuff, IMG.mensChain], description: "A polished open cuff with matching square cufflinks.", sizes: ["M", "L"], flags: "b", days: 20 },
];

const now = Date.now();
export const seedProducts: Product[] = raw.map(({ flags = "", days, ...p }, i) => ({
  ...p,
  id: `p${i + 1}`,
  sku: `DGJ-${String(1001 + i)}`,
  status: "Active",
  featured: flags.includes("f"),
  bestseller: flags.includes("b"),
  newArrival: flags.includes("n"),
  stock: 3 + ((i * 7) % 18),
  createdAt: new Date(now - days * 86400000).toISOString(),
}));

const cat = (slug: string, name: string, group: Category["group"], image: string, description: string): Category =>
  ({ id: `c-${slug}`, slug, name, group, image, description, status: "Active" });
export const seedCategories: Category[] = [
  cat("gold-jewellery", "Gold Jewellery", "Metal", IMG.goldNecklace, "Warm, enduring gold in classic and contemporary forms."),
  cat("diamond-jewellery", "Diamond Jewellery", "Metal", IMG.diamondNecklace, "Brilliance set with precision."),
  cat("silver-jewellery", "Silver Jewellery", "Metal", IMG.silver, "Modern sterling silver for everyday wear."),
  cat("platinum-jewellery", "Platinum Jewellery", "Metal", IMG.eternity, "Rare, naturally white and made to last."),
  cat("gemstone-jewellery", "Gemstone Jewellery", "Metal", IMG.gemstone, "Emeralds, rubies and sapphires in rich colour."),
  cat("bridal-jewellery", "Bridal Jewellery", "Occasion", IMG.bridal, "Heirloom pieces for your celebrations."),
  cat("mens-jewellery", "Men's Jewellery", "Occasion", IMG.mensRing, "Bold rings, chains and cuffs for him."),
  cat("rings", "Rings", "Type", IMG.ring, "Solitaires, bands and cocktail rings."),
  cat("earrings", "Earrings", "Type", IMG.earrings, "Studs, drops and hoops."),
  cat("necklaces", "Necklaces", "Type", IMG.diamondNecklace, "Chokers, rivières and haars."),
  cat("bracelets", "Bracelets", "Type", IMG.bracelet, "Links, tennis bracelets and cuffs."),
  cat("bangles", "Bangles", "Type", IMG.bangles, "Kadas and stackable bangles."),
  cat("pendants", "Pendants", "Type", IMG.pendant, "Pendants for layering and gifting."),
];

const col = (slug: string, name: string, tagline: string, image: string, description: string, featured: boolean): Collection =>
  ({ id: `col-${slug}`, slug, name, tagline, image, description, featured, status: "Active" });
export const seedCollections: Collection[] = [
  col("bridal", "Bridal Collection", "For the most cherished day", IMG.bridal, "Opulent necklaces, solitaires and sets designed to be worn on your wedding day and treasured for generations.", true),
  col("royal-gold", "Royal Gold Collection", "Majestic 22K artistry", IMG.goldNecklace, "Temple motifs, bold chains and sculpted gold inspired by India's royal courts.", true),
  col("diamond-elegance", "Diamond Collection", "Light, captured", IMG.diamondNecklace, "Rivières, drops and tennis bracelets that celebrate the brilliance of diamonds.", true),
  col("everyday-luxury", "Everyday Luxury", "Fine jewellery, every day", IMG.studs, "Light, wearable pieces — studs, pendants and hoops — for daily elegance.", true),
  col("traditional", "Traditional Collection", "Heritage, reimagined", IMG.kundan, "Kundan, polki and engraved kadas rooted in Indian craft traditions.", false),
  col("contemporary", "Contemporary Collection", "Modern lines, soft glow", IMG.bracelet, "Sculptural links and fluid forms for the modern wardrobe.", false),
  col("gemstone", "Gemstone Collection", "A palette of precious colour", IMG.gemstone, "Emeralds, rubies and sapphires set to bring out their depth.", true),
  col("signature", "Signature Collection", "The house signatures", IMG.ring, "Defining designs of Dhairya Gems & Jewels — refined, confident and timeless.", false),
];

const d = (days: number) => new Date(now - days * 86400000).toISOString();
const item = (i: number, qty = 1) => {
  const p = seedProducts[i]!;
  return { productId: p.id, name: p.name, price: p.price, qty, image: p.images[0] ?? "" };
};
const order = (id: string, c: [string, string, string, string, string], items: ReturnType<typeof item>[], status: DB["orders"][number]["status"], days: number) => {
  const subtotal = items.reduce((s, x) => s + x.price * x.qty, 0);
  return { id, customerName: c[0], email: c[1], phone: c[2], city: c[3], state: c[4], address: "Demo address line", pin: "400001", items, subtotal, discount: 0, total: subtotal, payment: "Cash on Delivery (demo)", status, date: d(days) };
};
const C1: [string, string, string, string, string] = ["Ananya Mehta", "ananya.demo@example.com", "9800000001", "Mumbai", "Maharashtra"];
const C2: [string, string, string, string, string] = ["Rohan Kapoor", "rohan.demo@example.com", "9800000002", "Delhi", "Delhi"];
const C3: [string, string, string, string, string] = ["Isha Shah", "isha.demo@example.com", "9800000003", "Ahmedabad", "Gujarat"];
const C4: [string, string, string, string, string] = ["Vikram Rao", "vikram.demo@example.com", "9800000004", "Bengaluru", "Karnataka"];
const C5: [string, string, string, string, string] = ["Meera Iyer", "meera.demo@example.com", "9800000005", "Chennai", "Tamil Nadu"];

export function createSeed(): DB {
  return {
    products: seedProducts,
    categories: seedCategories,
    collections: seedCollections,
    orders: [
      order("DGJ-ORD-10421", C1, [item(2)], "Delivered", 28),
      order("DGJ-ORD-10422", C2, [item(8), item(16)], "Shipped", 12),
      order("DGJ-ORD-10423", C3, [item(4, 2)], "Processing", 6),
      order("DGJ-ORD-10424", C4, [item(17)], "Confirmed", 3),
      order("DGJ-ORD-10425", C5, [item(9), item(19)], "Pending", 1),
      order("DGJ-ORD-10426", C1, [item(14)], "Pending", 0),
      order("DGJ-ORD-10427", C3, [item(12)], "Cancelled", 18),
    ],
    customers: [C1, C2, C3, C4, C5].map((c, i) => ({ id: `cu${i + 1}`, name: c[0], email: c[1], phone: c[2], city: c[3], joined: d(60 - i * 9), status: "Active" as const })),
    banners: [
      { id: "b1", image: IMG.hero, heading: "Elegance That Lasts Forever", description: "Discover timeless jewellery crafted with passion, precision and exceptional artistry.", buttonText: "Explore Collections", buttonLink: "/collections", placement: "Hero", status: "Active" },
      { id: "b2", image: IMG.lifestyle, heading: "The Bridal Edit", description: "Heirloom-worthy pieces for every ceremony.", buttonText: "Discover Bridal", buttonLink: "/collections/bridal", placement: "Promo", status: "Active" },
      { id: "b3", image: IMG.tennis, heading: "Diamonds, Simply", description: "Brilliance for the everyday.", buttonText: "Shop Diamonds", buttonLink: "/shop?category=diamond-jewellery", placement: "Promo", status: "Inactive" },
    ],
    gallery: [
      ["Temple necklace", "Gold Jewellery", IMG.goldNecklace], ["Diamond rivière", "Diamond Jewellery", IMG.diamondNecklace], ["Bridal ensemble", "Bridal Jewellery", IMG.bridal],
      ["Solitaire in box", "Rings", IMG.engagement], ["Ruby halo", "Rings", IMG.rubyRing], ["Kundan choker", "Necklaces", IMG.kundan],
      ["Diamond drops", "Earrings", IMG.earrings], ["Emerald drops", "Earrings", IMG.emeraldEarrings], ["At the bench", "Manufacturing", IMG.craft],
      ["Final polish", "Craftsmanship", IMG.polishing], ["Royal kadas", "Gold Jewellery", IMG.bangles], ["Tennis bracelet", "Diamond Jewellery", IMG.tennis],
      ["Eternity band", "Rings", IMG.eternity], ["Sapphire pendant", "Necklaces", IMG.sapphire], ["Pearl drops", "Earrings", IMG.pearl], ["Bridal portrait", "Bridal Jewellery", IMG.lifestyle],
    ].map(([title, category, image], i) => ({ id: `g${i + 1}`, title: title!, category: category!, image: image!, description: `${title} — demo gallery image.` })),
    testimonials: [
      { id: "t1", name: "Priya S.", city: "Mumbai", feedback: "The bridal set was even more beautiful in person. The finishing is exquisite.", rating: 5, status: "Active" },
      { id: "t2", name: "Arjun M.", city: "Pune", feedback: "Chose an engagement ring with their guidance — a wonderful, unhurried experience.", rating: 5, status: "Active" },
      { id: "t3", name: "Kavya R.", city: "Hyderabad", feedback: "Lovely everyday studs. Light, comfortable and they sparkle all day.", rating: 4, status: "Active" },
      { id: "t4", name: "Neha T.", city: "Jaipur", feedback: "The kundan choker felt truly heirloom. Packaging was elegant too.", rating: 5, status: "Inactive" },
    ],
    coupons: [
      { id: "cp1", code: "DHAIRYA10", type: "Percentage", value: 10, validUntil: "2027-12-31", minOrder: 25000, status: "Active" },
      { id: "cp2", code: "WELCOME5000", type: "Flat", value: 5000, validUntil: "2027-06-30", minOrder: 50000, status: "Active" },
      { id: "cp3", code: "FESTIVE15", type: "Percentage", value: 15, validUntil: "2026-01-31", minOrder: 100000, status: "Inactive" },
    ],
    subscribers: [
      { id: "s1", email: "subscriber1.demo@example.com", date: d(20), status: "Subscribed" },
      { id: "s2", email: "subscriber2.demo@example.com", date: d(9), status: "Subscribed" },
      { id: "s3", email: "subscriber3.demo@example.com", date: d(3), status: "Unsubscribed" },
    ],
    enquiries: [
      { id: "e1", name: "Sana K.", email: "sana.demo@example.com", phone: "9800000010", subject: "Bridal consultation", message: "I'd like to book a consultation for bridal jewellery in February.", date: d(2), status: "New" },
      { id: "e2", name: "Dev P.", email: "dev.demo@example.com", phone: "9800000011", subject: "Custom ring", message: "Can you craft a custom signet ring with my initials?", date: d(5), status: "In Progress" },
    ],
    homepage: {
      heroHeading: "Elegance That Lasts Forever",
      heroDescription: "Discover timeless jewellery crafted with passion, precision and exceptional artistry.",
      heroImage: IMG.hero,
      featuredCollections: ["bridal", "royal-gold", "diamond-elegance", "gemstone"],
      showSections: { categories: true, bestsellers: true, collections: true, newArrivals: true, story: true, craft: true, editorial: true, testimonials: true, newsletter: true },
    },
    settings: {
      companyName: "Dhairya Gems and Jewels Private Limited",
      brandName: "Dhairya Gems & Jewels",
      phone: "2545545939",
      email: "dhairyagemsandjewels@gmail.com",
      address: "Plot No. 44/4 or 44/46, Floor 3, Jewel Co-op Housing Society, Zaveri Bazaar / Dhanji Street, Mumbai, Maharashtra, India - 400003",
      footerText: "Manufacturers of fine jewellery in gold, silver and precious metals, set with precious and semi-precious stones — crafted in Mumbai's Zaveri Bazaar.",
      announcement: "Complimentary insured shipping on demo orders · Book a private consultation",
      logoText: "DHAIRYA",
      instagram: "", facebook: "", youtube: "",
      adminName: "Store Administrator",
      adminEmail: "admin@dhairyagemsandjewels.com",
      adminPassword: "Admin@123",
    },
    cart: [], wishlist: [], recent: [], adminSession: false, lastOrderId: "",
  };
}
