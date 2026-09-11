import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        core: {
          primary: "#00E5FF",
          secondary: "#00BCD4",
          bg: "#050505",
          card: "#0B0B0B",
          text: "#FFFFFF",
        },
      },
      fontFamily: {
        display: ["var(--font-orbitron)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(0,229,255,.35)",
        "glow-lg": "0 0 60px rgba(0,229,255,.35)",
        "glow-sm": "0 0 12px rgba(0,229,255,.45)",
      },
      backgroundImage: {
        "grid-cyber":
          "linear-gradient(rgba(0,229,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.06) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(circle at 50% 30%, rgba(0,229,255,0.12), transparent 60%)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      keyframes: {
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        scanline: "scanline 6s linear infinite",
        pulseGlow: "pulseGlow 2.4s ease-in-out infinite",
        floaty: "floaty 6s ease-in-out infinite",
        blink: "blink 1s step-start infinite",
      },
    },
  },
  plugins: [],
};
export default config;
