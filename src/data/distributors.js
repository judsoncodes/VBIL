/**
 * =============================================================================
 * REGIONAL DISTRIBUTORS & STOCKISTS DATASET
 * =============================================================================
 * INSTRUCTIONS FOR CLIENT DATA PASTE:
 * To populate with your real verified distributor network, simply replace the
 * objects inside the `DISTRIBUTORS_DATA` array below with your client spreadsheet.
 * Structure per entry:
 * {
 *   id: "dist-01",
 *   firmName: "Firm Name Ltd",
 *   contactPerson: "Contact Name",
 *   state: "Telangana",
 *   city: "Hyderabad",
 *   territory: "Territory / Area Covered",
 *   phone: "+91 98490 00000",
 *   email: "email@example.com",
 *   address: "Full Street Address",
 *   categoriesHandled: ["Biscuits", "Cookies", "Wafers"],
 *   type: "Authorized Stockist"
 * }
 * =============================================================================
 */

export const DISTRIBUTORS_DATA = [
  {
    id: "sample-placeholder-01",
    firmName: "Sample Stockist — Real Client Data Pending",
    contactPerson: "Regional Trade Desk",
    state: "Telangana",
    stateSlug: "telangana",
    city: "Hyderabad (Turkayamjal HQ)",
    citySlug: "hyderabad",
    territory: "Greater Hyderabad & Regional Hubs",
    phone: "+91 94909 00040",
    email: "info@veeramanibiscuits.com",
    address: "Kammagudem Village, Turkayamjal, R.R. District, Telangana - 501510",
    categoriesHandled: ["Biscuits", "Cookies", "Rusk", "Wafers", "Papad"],
    type: "Sample Entry — Real Data Pending"
  }
];

export const STATES_LIST = [
  "All States",
  "Telangana",
  "Andhra Pradesh",
  "Tamil Nadu",
  "Maharashtra",
  "Karnataka",
  "Kerala"
];
