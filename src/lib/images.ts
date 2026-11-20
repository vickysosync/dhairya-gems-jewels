import bangles from "@/assets/dhairya-bangles.jpg.asset.json";
import bracelet from "@/assets/dhairya-bracelet.jpg.asset.json";
import bridal from "@/assets/dhairya-bridal.jpg.asset.json";
import craft from "@/assets/dhairya-craft.jpg.asset.json";
import diamondNecklace from "@/assets/dhairya-diamond-necklace.jpg.asset.json";
import earrings from "@/assets/dhairya-earrings.jpg.asset.json";
import emeraldEarrings from "@/assets/dhairya-emerald-earrings.jpg.asset.json";
import engagement from "@/assets/dhairya-engagement.jpg.asset.json";
import eternity from "@/assets/dhairya-eternity.jpg.asset.json";
import floralPendant from "@/assets/dhairya-floral-pendant.jpg.asset.json";
import gemstone from "@/assets/dhairya-gemstone.jpg.asset.json";
import goldNecklace from "@/assets/dhairya-gold-necklace.jpg.asset.json";
import hero from "@/assets/dhairya-hero.jpg.asset.json";
import kundan from "@/assets/dhairya-kundan.jpg.asset.json";
import lifestyle from "@/assets/dhairya-lifestyle.jpg.asset.json";
import mensChain from "@/assets/dhairya-mens-chain.jpg.asset.json";
import mensCuff from "@/assets/dhairya-mens-cuff.jpg.asset.json";
import mensRing from "@/assets/dhairya-mens-ring.jpg.asset.json";
import pearl from "@/assets/dhairya-pearl.jpg.asset.json";
import pendant from "@/assets/dhairya-pendant.jpg.asset.json";
import polishing from "@/assets/dhairya-polishing.jpg.asset.json";
import ring from "@/assets/dhairya-ring.jpg.asset.json";
import roseBangle from "@/assets/dhairya-rose-bangle.jpg.asset.json";
import rubyRing from "@/assets/dhairya-ruby-ring.jpg.asset.json";
import sapphire from "@/assets/dhairya-sapphire.jpg.asset.json";
import silver from "@/assets/dhairya-silver.jpg.asset.json";
import studs from "@/assets/dhairya-studs.jpg.asset.json";
import tennis from "@/assets/dhairya-tennis.jpg.asset.json";

export const IMG = {
  bangles: bangles.url,
  bracelet: bracelet.url,
  bridal: bridal.url,
  craft: craft.url,
  diamondNecklace: diamondNecklace.url,
  earrings: earrings.url,
  emeraldEarrings: emeraldEarrings.url,
  engagement: engagement.url,
  eternity: eternity.url,
  floralPendant: floralPendant.url,
  gemstone: gemstone.url,
  goldNecklace: goldNecklace.url,
  hero: hero.url,
  kundan: kundan.url,
  lifestyle: lifestyle.url,
  mensChain: mensChain.url,
  mensCuff: mensCuff.url,
  mensRing: mensRing.url,
  pearl: pearl.url,
  pendant: pendant.url,
  polishing: polishing.url,
  ring: ring.url,
  roseBangle: roseBangle.url,
  rubyRing: rubyRing.url,
  sapphire: sapphire.url,
  silver: silver.url,
  studs: studs.url,
  tennis: tennis.url,
} as const;

export type ImgKey = keyof typeof IMG;
