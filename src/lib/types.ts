export type Status = "Active" | "Inactive";
export interface Product {
  id: string; slug: string; name: string; sku: string;
  categories: string[]; collection: string; metal: string; purity: string; weight: string; stones: string;
  price: number; comparePrice: number; images: string[]; description: string; sizes: string[];
  stock: number; status: Status; featured: boolean; newArrival: boolean; bestseller: boolean; createdAt: string;
}
export interface Category { id: string; slug: string; name: string; group: "Metal" | "Type" | "Occasion"; image: string; description: string; status: Status; }
export interface Collection { id: string; slug: string; name: string; tagline: string; image: string; description: string; featured: boolean; status: Status; }
export type OrderStatus = "Pending" | "Confirmed" | "Processing" | "Shipped" | "Delivered" | "Cancelled";
export interface OrderItem { productId: string; name: string; price: number; qty: number; image: string; size?: string | undefined; }
export interface Order {
  id: string; customerName: string; email: string; phone: string; address: string; city: string; state: string; pin: string;
  items: OrderItem[]; subtotal: number; discount: number; total: number; payment: string; status: OrderStatus; date: string;
}
export interface Customer { id: string; name: string; email: string; phone: string; city: string; joined: string; status: Status; }
export interface Banner { id: string; image: string; heading: string; description: string; buttonText: string; buttonLink: string; placement: "Hero" | "Promo"; status: Status; }
export interface GalleryItem { id: string; image: string; title: string; category: string; description: string; }
export interface Testimonial { id: string; name: string; city: string; feedback: string; rating: number; status: Status; }
export interface Coupon { id: string; code: string; type: "Percentage" | "Flat"; value: number; validUntil: string; minOrder: number; status: Status; }
export interface Subscriber { id: string; email: string; date: string; status: "Subscribed" | "Unsubscribed"; }
export interface Enquiry { id: string; name: string; email: string; phone: string; subject: string; message: string; date: string; status: "New" | "In Progress" | "Resolved"; }
export interface Homepage {
  heroHeading: string; heroDescription: string; heroImage: string;
  featuredCollections: string[];
  showSections: { categories: boolean; bestsellers: boolean; collections: boolean; newArrivals: boolean; story: boolean; craft: boolean; editorial: boolean; testimonials: boolean; newsletter: boolean; };
}
export interface Settings {
  companyName: string; brandName: string; phone: string; email: string; address: string; footerText: string;
  announcement: string; logoText: string; instagram: string; facebook: string; youtube: string;
  adminName: string; adminEmail: string; adminPassword: string;
}
export interface CartItem { productId: string; qty: number; size?: string | undefined; }
export interface DB {
  products: Product[]; categories: Category[]; collections: Collection[]; orders: Order[]; customers: Customer[];
  banners: Banner[]; gallery: GalleryItem[]; testimonials: Testimonial[]; coupons: Coupon[]; subscribers: Subscriber[];
  enquiries: Enquiry[]; homepage: Homepage; settings: Settings;
  cart: CartItem[]; wishlist: string[]; recent: string[]; adminSession: boolean; lastOrderId: string;
}
