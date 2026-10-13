import { ImageResponse } from "next/og";
import { business } from "@/content/site";

export const alt = `${business.legalName}, plumbing and heating in ${business.region}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "#fff",
          background: "radial-gradient(circle at 80% 20%, rgba(66,217,255,.35), transparent 45%), linear-gradient(135deg, #071426 0%, #0B1F38 60%, #0d2a55 100%)",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 6, color: "#42D9FF", textTransform: "uppercase" }}>
          {business.baseTown}, {business.state} · {business.region}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.02, textTransform: "uppercase" }}>Savino Jr</div>
          <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.1, color: "#cfe3ff" }}>Plumbing &amp; Heating</div>
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#cfd8e6" }}>Boilers · Heating · Water heaters · Drains · Gas lines · {business.phone}</div>
      </div>
    ),
    size,
  );
}
