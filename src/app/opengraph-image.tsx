import { ImageResponse } from "next/og";

import { site } from "@/lib/company";

export const alt = site.tagline;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#071433",
          color: "#ffffff",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            CHERRVEY Construction Services
          </div>
          <div
            style={{
              width: 72,
              height: 8,
              background: "#E33629",
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              lineHeight: 1.05,
              fontWeight: 650,
              letterSpacing: "-0.03em",
            }}
          >
            Construction. Infrastructure. Technology. Built to perform.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.65)",
          }}
        >
          <span>PCAB No. {site.pcabNumber}</span>
          <span>{site.domain}</span>
        </div>
      </div>
    ),
    size
  );
}
