import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#2323ff", // Blue button color
          foreground: "#ffffff",
        },
        purple: {
          DEFAULT: "#9254ff", // Main purple color
          light: "#8e65ff",
          dark: "#8781ff",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        gray: {
          50: "#f3f3f6",
          100: "#eaebee",
          600: "#64748b",
          900: "#161519",
        },
      },
      fontSize: {
        "heading-1": [
          "56px",
          {
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        "heading-2": [
          "40px",
          {
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        stats: [
          "32px",
          {
            lineHeight: "1.2",
            fontWeight: "700",
          },
        ],
      },
      spacing: {
        section: "80px",
        element: "32px",
        item: "16px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        swipe:{
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        'infinite-scroll-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'infinite-scroll-right': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        swipe: "swipe 5s linear infinite",
        "swipe-reverse": "swipe 5s linear infinite reverse",
        'infinite-scroll-left': 'infinite-scroll-left 20s linear infinite',
        'infinite-scroll-right': 'infinite-scroll-right 20s linear infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

