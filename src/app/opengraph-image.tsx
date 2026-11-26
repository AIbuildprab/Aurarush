import { ImageResponse } from "next/og";

export const alt = "AuraRush: digital growth agency";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const petals = ["#a23b8c", "#de2f4b", "#e8453c", "#f08a2a", "#f5c518", "#9bbf3a", "#5baa47", "#7fc8a9", "#3a82c0", "#4f6fb5", "#6b4e9e", "#8a4a96"];

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#fbfafc", padding: 80, flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="72" height="72" viewBox="0 0 100 100">
            {petals.map((fill, index) => (
              <path key={fill} d="M50 4 C61 17 61 31 50 41 C39 31 39 17 50 4Z" fill={fill} transform={`rotate(${index * 30} 50 50)`} />
            ))}
          </svg>
          <div style={{ fontSize: 44, fontWeight: 700, color: "#17141f" }}>AuraRush</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 80, lineHeight: 1.05, color: "#17141f", maxWidth: 980 }}>The growth agency for local businesses.</div>
          <div style={{ display: "flex", gap: 16, fontSize: 28, color: "#4a4557" }}>
            <span style={{ color: "#1f5f99" }}>Attention</span>
            <span>→</span>
            <span style={{ color: "#6b4e9e" }}>Conversion</span>
            <span>→</span>
            <span style={{ color: "#c42540" }}>Monetisation</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
