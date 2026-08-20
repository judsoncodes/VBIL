import React, { useState, useMemo, memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";

/**
 * ROSE Global Distribution Map (Performance Optimized)
 * --------------------------------------------------------------
 * Memoized TopoJSON world geography rendering + GPU hardware acceleration.
 * --------------------------------------------------------------
 */

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const HQ = { name: "Hyderabad, India (Factory & HQ)", coordinates: [78.4867, 17.385] };

const EXPORT_MARKETS = [
  { name: "United Arab Emirates", coordinates: [54.3773, 24.4539], region: "Middle East Trade Hub", note: "Direct container shipments of Marie Delite, Osmania, and Wafers to Gulf retail networks." },
  { name: "Saudi Arabia", coordinates: [45.0792, 23.8859], region: "Middle East Trade Hub", note: "High-volume wholesale distribution across supermarket chains and super-stockists." },
  { name: "Kuwait", coordinates: [47.4818, 29.3117], region: "Middle East Trade Hub", note: "Popular market for ROSE Cream Touch series and Glucose energy biscuits." },
  { name: "Oman", coordinates: [55.9754, 21.4735], region: "Middle East Trade Hub", note: "Established distribution partners supplying tea-time Marie and Saltino biscuits." },
  { name: "Qatar", coordinates: [51.531, 25.2854], region: "Middle East Trade Hub", note: "Sealed foil packaging preserving freshness across hypermarkets and retail outlets." },
  { name: "United States", coordinates: [-95.7129, 37.0902], region: "North America", note: "Authentic South Indian Hyderabadi Osmania cookies and Fruit Rusk for Indian diaspora stores." },
  { name: "Canada", coordinates: [-106.3468, 56.1304], region: "North America", note: "B2B container imports serving ethnic grocery stores and international food distributors." },
  { name: "United Kingdom", coordinates: [-3.436, 55.3781], region: "Europe", note: "Specialty tea-time biscuit packs distributed to UK South Asian retail networks." },
  { name: "Singapore", coordinates: [103.8198, 1.3521], region: "Southeast Asia", note: "Port container deliveries for ASEAN retail markets and food service outlets." },
  { name: "Malaysia", coordinates: [101.9758, 4.2105], region: "Southeast Asia", note: "High demand for ROSE Chocolate Wafers, Saltino, and Coconut Crunch biscuits." },
  { name: "Australia", coordinates: [133.7751, -25.2744], region: "Oceania", note: "Direct import supply across Sydney, Melbourne, and Brisbane wholesale hubs." },
  { name: "South Africa", coordinates: [22.9375, -30.5595], region: "Africa", note: "FMCG distribution partnerships supplying retail chains across Southern Africa." },
  { name: "Kenya", coordinates: [37.9062, -0.0236], region: "East Africa", note: "Bulk exports of energy glucose biscuits and family biscuit packs." },
  { name: "Sri Lanka", coordinates: [80.7718, 7.8731], region: "South Asia", note: "Cross-border trade for ROSE papads, biscuits, and seasonal gift packs." },
];

// Memoized Geographies component to prevent 177+ SVG node recalculations on state changes
const MemoizedGeographies = memo(function MemoizedGeographies() {
  return (
    <Geographies geography={GEO_URL}>
      {({ geographies }) =>
        geographies.map((geo) => {
          const isIndia = geo.properties.name === "India";
          return (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              style={{
                default: {
                  fill: isIndia ? "#d4af69" : "rgba(244,236,224,0.10)",
                  stroke: "rgba(244,236,224,0.18)",
                  strokeWidth: 0.5,
                  outline: "none",
                },
                hover: {
                  fill: isIndia ? "#f2c879" : "rgba(244,236,224,0.22)",
                  outline: "none",
                },
                pressed: { outline: "none" },
              }}
            />
          );
        })
      }
    </Geographies>
  );
});

export default function WorldDistributionMap() {
  const [active, setActive] = useState(EXPORT_MARKETS[0]);

  const stats = useMemo(
    () => [
      { value: "20+", label: "Export Nations" },
      { value: "50,000+", label: "Retail Outlets" },
      { value: "6", label: "Key Indian States" },
      { value: "100+ Tons", label: "Daily Plant Baking" },
    ],
    []
  );

  return (
    <div
      className="rounded-3xl border border-gold-500/40 p-5 sm:p-8 text-cream-100 shadow-2xl relative overflow-hidden transform-gpu"
      style={{
        background: "linear-gradient(180deg, #3d070b 0%, #2a0407 100%)",
        fontFamily: "var(--font-sans, system-ui, sans-serif)",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* REAL TOPOJSON GEOGRAPHY MAP (7 Cols) */}
        <div
          className="lg:col-span-7 rounded-2xl border border-gold-500/30 overflow-hidden min-h-[380px] sm:min-h-[440px] relative shadow-inner flex items-center justify-center transform-gpu"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, rgba(212,175,105,0.12), transparent 65%), #240306",
          }}
        >
          <ComposableMap
            projectionConfig={{ scale: 155, center: [20, 15] }}
            style={{ width: "100%", height: "100%" }}
          >
            <MemoizedGeographies />

            {/* Glowing Arcs connecting Hyderabad HQ to each Export Destination */}
            {EXPORT_MARKETS.map((m) => (
              <Line
                key={`line-${m.name}`}
                from={HQ.coordinates}
                to={m.coordinates}
                stroke={
                  active.name === m.name
                    ? "#f2c879"
                    : "rgba(242,200,121,0.30)"
                }
                strokeWidth={active.name === m.name ? 2 : 0.8}
                strokeLinecap="round"
              />
            ))}

            {/* Hyderabad Manufacturing HQ Marker */}
            <Marker coordinates={HQ.coordinates}>
              <circle r={6} fill="#f2c879" stroke="#3d070b" strokeWidth={2} />
              <circle r={11} fill="none" stroke="#f2c879" strokeWidth={1.5} opacity={0.6} />
            </Marker>

            {/* Export Destination Markers */}
            {EXPORT_MARKETS.map((m) => {
              const isActive = active.name === m.name;
              return (
                <Marker
                  key={m.name}
                  coordinates={m.coordinates}
                  onMouseEnter={() => setActive(m)}
                  onClick={() => setActive(m)}
                  style={{ cursor: "pointer" }}
                >
                  <circle
                    r={isActive ? 7 : 4}
                    fill={isActive ? "#f2c879" : "#c98a4b"}
                    stroke="#3d070b"
                    strokeWidth={1.5}
                  />
                </Marker>
              );
            })}
          </ComposableMap>

          {/* Map Overlay Label */}
          <div className="absolute bottom-3 left-4 px-3 py-1 rounded-full bg-maroon-950/90 border border-gold-500/30 text-[10px] font-bold text-gold-400 uppercase tracking-widest pointer-events-none">
            • Hyderabad HQ Export Routes
          </div>
        </div>

        {/* SIDE PANEL (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
          <div className="bg-cream-50 text-espresso-950 rounded-2xl p-6 border-2 border-gold-500/70 shadow-xl space-y-3">
            <div className="text-[11px] font-extrabold uppercase tracking-widest text-gold-600">
              {active.region}
            </div>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-maroon-950 leading-tight">
              {active.name}
            </div>
            <div className="h-px bg-espresso-950/15 my-2" />
            <p className="text-xs sm:text-sm text-espresso-700 leading-relaxed font-sans font-medium">
              {active.note}
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-bold text-gold-400 uppercase tracking-widest">
              Global Export Markets
            </div>
            <div className="flex flex-wrap gap-2">
              {EXPORT_MARKETS.map((m) => {
                const isActive = active.name === m.name;
                return (
                  <button
                    key={m.name}
                    onMouseEnter={() => setActive(m)}
                    onClick={() => setActive(m)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                      isActive
                        ? "bg-gold-500 text-espresso-950 border border-gold-400 shadow-md scale-105"
                        : "bg-maroon-900/80 border border-gold-500/30 text-cream-100 hover:bg-maroon-800"
                    }`}
                  >
                    {m.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

      </div>

      {/* STAT STRIP AT BOTTOM */}
      <div className="mt-8 pt-6 border-t border-gold-500/25 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-maroon-950/80 border border-gold-500/30 rounded-2xl p-4 shadow-sm"
          >
            <div className="text-2xl sm:text-3xl font-serif font-bold text-gold-400">
              {s.value}
            </div>
            <div className="text-xs text-cream-200 uppercase tracking-wider font-sans mt-1">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
