import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "CityChic Road Marking Services Ltd";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#1C1C1C",
          padding: 60,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "3px solid #ffffff",
            borderRadius: 80,
            padding: "40px 80px",
          }}
        >
          <span
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: 4,
            }}
          >
            CITYCHIC
          </span>
          <span
            style={{
              fontSize: 28,
              fontWeight: 500,
              color: "#ffffff",
              letterSpacing: 6,
              marginTop: 8,
            }}
          >
            ROAD MARKING SERVICES LTD
          </span>
        </div>
        <span
          style={{
            fontSize: 24,
            color: "#C9A227",
            marginTop: 40,
            letterSpacing: 3,
          }}
        >
          Precision Lines · Premium Quality · Safer Streets
        </span>
        <span style={{ fontSize: 20, color: "#888888", marginTop: 16 }}>
          Lagos, Nigeria
        </span>
      </div>
    ),
    { ...size }
  );
}
