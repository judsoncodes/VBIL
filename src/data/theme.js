/**
 * =============================================================================
 * VBIL / ROSE BISCUITS - MANUAL GOVERNANCE FESTIVAL THEMING SYSTEM
 * =============================================================================
 * 
 * GOVERNANCE POLICY:
 * 1. MANUAL TOGGLE ONLY:
 *    Festival themes (especially religious/cultural campaigns) MUST NOT be
 *    auto-detected from the calendar.
 * 
 * 2. EXPLICIT HUMAN APPROVAL:
 *    To activate a campaign theme, set `currentCampaign` to a valid campaign ID
 *    (e.g., "diwali", "sankranti", "eid", "holi", "rakhi", "ganesh", "christmas").
 * 
 * 3. DEFAULT REGULAR HOME SCREEN:
 *    Set `currentCampaign = null` to present the standard regular brand home screen.
 * =============================================================================
 */

// Explicit human-selected campaign key (e.g. "diwali", "sankranti", "eid", "holi", "rakhi", "ganesh", "christmas")
// Set `currentCampaign = null` to restore the standard regular brand home screen experience!
export const currentCampaign = null; 

export const CAMPAIGNS = {
  sankranti: {
    id: "sankranti",
    name: "Makar Sankranti & Pongal Harvest Festival",
    eyebrow: "🌾 Harvest Festival Special 🪁",
    headline: "Celebrate Harvest Sweetness & Family Traditions.",
    subheadline: "Ring in Sankranti and Pongal with oven-fresh ROSE Osmania Cookies, Butter Crunch, and Crunchy Papads made with wholesome harvest wheat.",
    primaryCta: "Explore Harvest Range",
    primaryCtaLink: "/products?category=biscuits",
    secondaryCta: "Bulk Festive Order",
    secondaryCtaLink: "/contact?type=sankranti",
    badgeText: "Harvest Special Batch 2026",
    accentBgBanner: "bg-gradient-to-r from-amber-600 via-yellow-700 to-maroon-900 text-cream-100",
    festiveVignette: "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/50 via-maroon-950 to-maroon-900"
  },
  holi: {
    id: "holi",
    name: "Holi Festival of Colors & Sweets",
    eyebrow: "🎨 Festival of Colors & Joy 🍬",
    headline: "Add Vibrant Flavors & Crunchy Delights to Your Holi.",
    subheadline: "Bursting with sweet, chocolatey, and savory goodness. Treat your family to ROSE Cream Touch wafers, Chocobullets, and Bourbon biscuits.",
    primaryCta: "View Holi Snack Combos",
    primaryCtaLink: "/products?category=wafers",
    secondaryCta: "Holi Wholesale Orders",
    secondaryCtaLink: "/contact?type=holi",
    badgeText: "Holi Celebration Edition",
    accentBgBanner: "bg-gradient-to-r from-rose-700 via-maroon-900 to-amber-600 text-cream-100",
    festiveVignette: "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-900/50 via-maroon-950 to-maroon-900"
  },
  eid: {
    id: "eid",
    name: "Ramzan & Eid-ul-Fitr Special",
    eyebrow: "🌙 Eid Mubarak & Ramzan Feast ✨",
    headline: "Authentic Hyderabadi Osmania & Rich Butter Delights.",
    subheadline: "Baked with pride in Hyderabad. Share the warmth of traditional Osmania cookies, Fruit Rusks, and Cream Wafers with friends and family this Eid.",
    primaryCta: "Explore Hyderabadi Classics",
    primaryCtaLink: "/products?category=cookies",
    secondaryCta: "Eid Gift Inquiries",
    secondaryCtaLink: "/contact?type=eid",
    badgeText: "Eid Royal Bakery Range",
    accentBgBanner: "bg-gradient-to-r from-emerald-800 via-maroon-900 to-gold-600 text-cream-100",
    festiveVignette: "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-950/60 via-maroon-950 to-maroon-900"
  },
  rakhi: {
    id: "rakhi",
    name: "Raksha Bandhan & Independence Month",
    eyebrow: "🎁 Raksha Bandhan Celebration 🎀",
    headline: "Sweet Traditions for Sibling Bonds & National Pride.",
    subheadline: "Treat your brothers and sisters to crisp Cream Wafers, Chocobullets, and rich Fruit Rusk packed in celebratory gift boxes.",
    primaryCta: "View Rakhi Combo Boxes",
    primaryCtaLink: "/products?category=cookies",
    secondaryCta: "Rakhi Bulk Orders",
    secondaryCtaLink: "/contact?type=rakhi",
    badgeText: "Rakhi Celebration Pack",
    accentBgBanner: "bg-gradient-to-r from-maroon-900 via-rose-700 to-amber-700 text-cream-100",
    festiveVignette: "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-900/40 via-maroon-950 to-maroon-900"
  },
  ganesh: {
    id: "ganesh",
    name: "Ganesh Chaturthi Festive Season",
    eyebrow: "🌺 Ganesh Utsav Festive Delights 🕉️",
    headline: "Offerings of Sweet Goodness & Crisp Baked Crunch.",
    subheadline: "Complement your festival prasad with handcrafted ROSE Butter Cookies, Marie Delite, and Crunchy Papads baked fresh daily.",
    primaryCta: "Explore Utsav Range",
    primaryCtaLink: "/products?category=biscuits",
    secondaryCta: "Prasad Supply Inquiries",
    secondaryCtaLink: "/contact?type=ganesh",
    badgeText: "Ganesh Utsav Batch",
    accentBgBanner: "bg-gradient-to-r from-amber-700 via-maroon-900 to-yellow-600 text-cream-100",
    festiveVignette: "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/50 via-maroon-950 to-maroon-900"
  },
  diwali: {
    id: "diwali",
    name: "Diwali & Dussehra Festival of Lights",
    eyebrow: "✨ Festival of Lights Special Gifting 🪔",
    headline: "Share Pure Joy & Golden Osmania Cookies This Diwali.",
    subheadline: "Celebrate India's sweetest season with handcrafted ROSE Butter Cookies, Wafer Rolls, and Custom Bulk Festive Gift Tins baked fresh at our Turkayamjal facility.",
    primaryCta: "Explore Diwali Gift Tins",
    primaryCtaLink: "/products?category=cookies",
    secondaryCta: "Bulk Festive Booking",
    secondaryCtaLink: "/contact?type=diwali",
    badgeText: "Diwali Special Batch 2026",
    accentBgBanner: "bg-gradient-to-r from-amber-600 via-maroon-900 to-amber-700 text-cream-100",
    festiveVignette: "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/50 via-maroon-950 to-maroon-900"
  },
  christmas: {
    id: "christmas",
    name: "Christmas & New Year Celebrations",
    eyebrow: "🎄 Holiday Season & New Year Joy ⭐",
    headline: "Wrap Your Holidays in Rich Fruit Rusk & Bakery Delights.",
    subheadline: "Welcome the New Year with oven-fresh ROSE Wafer Rolls, Chocolate Bourbon, and artisanal Butter Cookies crafted for holiday gifting.",
    primaryCta: "Explore Holiday Specials",
    primaryCtaLink: "/products?category=rusk",
    secondaryCta: "New Year Corporate Orders",
    secondaryCtaLink: "/contact?type=christmas",
    badgeText: "Holiday Edition 2026",
    accentBgBanner: "bg-gradient-to-r from-red-800 via-maroon-900 to-emerald-800 text-cream-100",
    festiveVignette: "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-950/60 via-maroon-950 to-maroon-900"
  }
};

export function getActiveCampaign() {
  if (currentCampaign && CAMPAIGNS[currentCampaign]) {
    return CAMPAIGNS[currentCampaign];
  }

  return null;
}
