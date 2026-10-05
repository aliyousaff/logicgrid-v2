import { ImageResponse } from "next/og";

export const alt = "LogicGrid Ops — websites, automation and AI integrations";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "66px 76px", background: "#09090b", color: "#fafafa" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 22, fontSize: 30 }}>
        <div style={{ display: "flex", width: 48, height: 48, flexWrap: "wrap", gap: 4 }}>
          {["#52525b", "#7c3aed", "#52525b", "#52525b"].map((background, i) => <div key={i} style={{ width: 22, height: 22, background }} />)}
        </div>
        LogicGrid Ops
      </div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 68, lineHeight: 1.16, fontWeight: 700 }}>
        <span>Websites.</span><span>Automation.</span><span style={{ color: "#a78bfa" }}>AI integrations.</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", color: "#a1a1aa", fontSize: 24 }}>
        <span>Systems your business can own.</span><span>logicgridops.com</span>
      </div>
    </div>, size,
  );
}
