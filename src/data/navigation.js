export const NAVIGATION_LINKS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Quality Control", path: "/quality" },
  { 
    name: "Products", 
    path: "/products",
    dropdown: [
      { name: "All Products", path: "/products", description: "Explore complete ROSE product catalog" },
      { name: "Biscuits", path: "/products/biscuits", description: "Marie, Saltino, Bourbon, Glucose & Cream Touch" },
      { name: "Cookies", path: "/products/cookies", description: "Butter, Osmania, Kaju & Birthday Cake Cookies" },
      { name: "Rusk", path: "/products/rusk", description: "Crunchy Fruit Rusk & Plain Tea Rusk" },
      { name: "Wafers & Rolls", path: "/products/wafers", description: "Crispy Wafer Sheets, Rolls & Chocobullets" },
      { name: "Papad & Snacks", path: "/products/papad", description: "Hyderabadi Biryani Papad, Potato Curls & Tubes" },
      { name: "Corn & Popcorn", path: "/products/corn-popcorn", description: "Crunchy Seasoned Corn & Butter Popcorn" },
      { name: "Upcoming Duet Series", path: "/products/new", description: "Teaser: Mango, Kulfi, Vanilla & Berry Duets", badge: "NEW" },
    ]
  },
  { name: "Chairman", path: "/chairman" },
  { name: "Leadership", path: "/leadership" },
  { name: "Infrastructure", path: "/infrastructure" },
  { name: "Contact Us", path: "/contact" },
];

export const CATEGORIES_LIST = [
  {
    id: "biscuits",
    name: "Biscuits",
    path: "/products/biscuits",
    tagline: "Crisp, flavorful baked delights for every tea-time moment",
    count: 17,
    featured: true,
    bgClass: "bg-maroon-800 text-cream-100",
    description: "From classic Marie Delite and crispy Saltino to indulgent Bourbon and Cream Touch variants."
  },
  {
    id: "cookies",
    name: "Cookies",
    path: "/products/cookies",
    tagline: "Rich, buttery handcrafted cookies baked to perfection",
    count: 10,
    featured: true,
    bgClass: "bg-gold-500 text-espresso-900",
    description: "Authentic Hyderabadi Osmania, rich Butter, Kaju, Choco, and Birthday Cake cookies."
  },
  {
    id: "wafers",
    name: "Wafers & Wafer Rolls",
    path: "/products/wafers",
    tagline: "Light, melt-in-mouth crisp layers with delicious cream fillings",
    count: 9,
    featured: true,
    bgClass: "bg-cream-200 text-espresso-800",
    description: "Fruit & Elachi wafer layers, Chocowafer rolls, and signature Hyderabadi Chocobullets."
  },
  {
    id: "rusk",
    name: "Rusk",
    path: "/products/rusk",
    tagline: "Double-baked crunch crafted for the perfect chai pairing",
    count: 2,
    featured: false,
    bgClass: "bg-maroon-900 text-gold-400",
    description: "Premium Fruit Rusk and classic Plain Rusk made from traditional bakery recipes."
  },
  {
    id: "papad",
    name: "Papad & Snacks",
    path: "/products/papad",
    tagline: "Savory, spicy Hyderabadi snack crunchies and seasoned papads",
    count: 10,
    featured: true,
    bgClass: "bg-espresso-800 text-cream-100",
    description: "Hyderabadi Biryani Papad, Salt & Spicy, Potato Tubes, Onion Rings, and 3D Magic."
  },
  {
    id: "corn-popcorn",
    name: "Corn & Popcorn",
    path: "/products/corn-popcorn",
    tagline: "Wholesome, roasted corn nibbles and gourmet seasoned popcorn",
    count: 2,
    featured: false,
    bgClass: "bg-gold-100 text-espresso-900",
    description: "Crunchy seasoned corn kernels and theater-style butter popcorn."
  },
  {
    id: "new",
    name: "Upcoming Duet Series",
    path: "/products/new",
    tagline: "The next generation of dual-cream taste explosions",
    count: 6,
    featured: true,
    badge: "TEASER",
    bgClass: "bg-rosePink-500 text-maroon-900",
    description: "Exotic Mango, Kulfi, Orange, Pineapple, Strawberry, and Vanilla Duet cream creations."
  }
];
