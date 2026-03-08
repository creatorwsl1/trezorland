import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Trezor Suite App (Official) | Desktop & Web Crypto Dashboard"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OgImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #00D4AA 0%, #00B894 100%)",
        fontFamily: "system-ui",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "32px",
          marginBottom: "40px",
        }}
      >
        <svg width="160" height="160" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 2C9.243 2 7 4.243 7 7V9H5C3.895 9 3 9.895 3 11V20C3 21.105 3.895 22 5 22H19C20.105 22 21 21.105 21 20V11C21 9.895 20.105 9 19 9H17V7C17 4.243 14.757 2 12 2ZM12 4C13.654 4 15 5.346 15 7V9H9V7C9 5.346 10.346 4 12 4ZM12 13C13.105 13 14 13.895 14 15C14 15.738 13.597 16.371 13 16.723V19H11V16.723C10.403 16.371 10 15.738 10 15C10 13.895 10.895 13 12 13Z"
            fill="#1A1A1A"
          />
        </svg>
      </div>
      <div
        style={{
          fontSize: "72px",
          fontWeight: 700,
          color: "#1A1A1A",
          marginBottom: "20px",
          letterSpacing: "-0.02em",
        }}
      >
        Trezor Suite App
      </div>
      <div
        style={{
          fontSize: "36px",
          fontWeight: 500,
          color: "#1A1A1A",
          opacity: 0.9,
          textAlign: "center",
          maxWidth: "900px",
        }}
      >
        Desktop & Web Crypto Dashboard
      </div>
      <div
        style={{
          fontSize: "28px",
          color: "#1A1A1A",
          opacity: 0.7,
          marginTop: "30px",
        }}
      >
        Trezor.io/start — Your Gateway to Secure Crypto Management
      </div>
    </div>,
    {
      ...size,
    },
  )
}
