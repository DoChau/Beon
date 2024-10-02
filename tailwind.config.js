const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  daisyui: {
    themes: [
      {
        cupcake: {
            ...require("daisyui/src/theming/themes")["cupcake"],
            'primary' : 'rgb(159, 123, 80)',
            'primary-content' : 'black',
            'secondary' : 'white',
            'accent'  : 'rgb(242,196,148)',
            'accent-content'  : '#fff',
            'secondary-content' : 'rgb(237, 77, 51)',
            'base-100': "rgb(173, 194, 199)",
        },
      },
      {
        dark: {
            ...require("daisyui/src/theming/themes")["dark"],
            'primary' : '#571400',
            'secondary' : '#571400',
            'base-100': "#525252",
        },
      },
      "aqua",
    ],
    darkTheme: "cupcake", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
  darkMode: "class",
  presets: [require("@medusajs/ui-preset")],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@medusajs/ui/dist/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        width: "width margin",
        height: "height",
        bg: "background-color",
        display: "display opacity",
        visibility: "visibility",
        padding: "padding-top padding-right padding-bottom padding-left",
      },
      colors: {
        theme: {
          0: "rgb(134, 40, 51)", //h2 color / hover categories button 
          1: "rgb(134, 40, 51)", //input focus/ categories button 
          2: "rgb(247, 167, 201)",
          3: "white", 
          4: "black", //categories button text
          5: "rgb(237, 129, 230)",
          6: "rgb(134, 40, 51)", //button focus & active
          7: "rgb(243, 136, 119)", //button hover
          8: "rgb(245, 50, 172)", //
          9: "rgb(232, 58, 217)",
          10: "white", //page background
          11: "rgb(186, 92, 64)",
          12: "rgb(226, 138, 111)",
          13: "rgb(243, 243, 243)", //product background
          14: "rgb(127, 91, 92)", //menu bg
        },
        grey: {
          0: "#FFFFFF",
          5: "#F9FAFB",
          10: "#F3F4F6",
          20: "#E5E7EB",
          30: "#D1D5DB",
          40: "#9CA3AF",
          50: "#6B7280",
          60: "#4B5563",
          70: "#374151",
          80: "#1F2937",
          90: "#111827",
        },
      },
      borderRadius: {
        none: "0px",
        soft: "2px",
        base: "4px",
        rounded: "8px",
        large: "16px",
        circle: "9999px",
      },
      maxWidth: {
        "8xl": "100rem",
      },
      screens: {
        "2xsmall": "320px",
        xsmall: "512px",
        small: "1024px",
        medium: "1280px",
        large: "1440px",
        xlarge: "1680px",
        "2xlarge": "1920px",
      },
      fontSize: {
        "3xl": "2rem",
      },
      fontFamily: {
        futura: "Futura, sans-serif",
        dutch: "Dutch, sans-serif",
        coco: "Coco, sans-serif",
        sans: [
          "Futura",
          "Dutch",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Ubuntu",
          "sans-serif",
        ],
      },
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        'extra-bold': '800',
        black: '900',
      },
      keyframes: {
        scaleUp: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },
        ring: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        popupMove: {
          "0%": { transform:  "translateX(0%)"},
          "80%": { transform:  "translateX(0%)"},
          "100%": { transform: "translateX(100%)"},
        },
        moveXline1: {
          "0%": { transform:  "translateX(-20%)"},
          "100%": { transform: "translateX(20%)"},
        },
        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-in-top": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-top": {
          "0%": {
            height: "100%",
          },
          "99%": {
            height: "0",
          },
          "100%": {
            visibility: "hidden",
          },
        },
        "accordion-slide-up": {
          "0%": {
            height: "var(--radix-accordion-content-height)",
            opacity: "1",
          },
          "100%": {
            height: "0",
            opacity: "0",
          },
        },
        "accordion-slide-down": {
          "0%": {
            "min-height": "0",
            "max-height": "0",
            opacity: "0",
          },
          "100%": {
            "min-height": "var(--radix-accordion-content-height)",
            "max-height": "none",
            opacity: "1",
          },
        },
        enter: {
          "0%": { transform: "scale(0.9)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        appeared: {
          "0%": { opacity: 0 },
          "95%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        
        spinx: {
          "0%": { transform: "rotate(-120deg)" },
          "100%": { transform: "rotate(90deg)" },
        },
        ispin: {
          "0%": { transform: "rotate(450deg)" },
          "100%": { transform: "rotate(270deg)" },
        },
        flowdown: {
          "0%": { transform:  "translateY(-750px)" },
          "50%": { transform:  "translateY(-750px)" },
          "100%": { transform:  "translateY(0px)"},
        },
        flowup: {
          "0%": { opacity: 0, transform:  "translateY(300px)" },
          "50%": { opacity: 0, transform:  "translateY(300px)" },
          "100%": { opacity: 0.5, transform:  "translateY(0px)"},
        },
        falldown: {
          "0%": { opacity: 1, transform:  "translateY(0px)" },
          "50%": { opacity: 1, transform:  "translateY(0px)" },
          "100%": { opacity: 0.5, transform:  "translateY(250px)"},
        },
        leave: {
          "0%": { transform: "scale(1)", opacity: 1 },
          "100%": { transform: "scale(0.9)", opacity: 0 },
        },
        "slide-in": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        ring: "ring 2.2s cubic-bezier(0.5, 0, 0.5, 1) infinite",
        "fade-in-right":
          "fade-in-right 0.3s cubic-bezier(0.5, 0, 0.5, 1) forwards",
        "fade-in-top": "fade-in-top 0.2s cubic-bezier(0.5, 0, 0.5, 1) forwards",
        "fade-in-top-slow": "fade-in-top 6s cubic-bezier(0.5, 0, 0.5, 1) forwards",
        "fade-out-top":
          "fade-out-top 0.2s cubic-bezier(0.5, 0, 0.5, 1) forwards",
        "accordion-open":
          "accordion-slide-down 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards",
        "accordion-close":
          "accordion-slide-up 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards",
        enter: "enter 200ms ease-out",
        "slide-in": "slide-in 1.2s cubic-bezier(.41,.73,.51,1.02)",
        'spin-slow': 'spin 10s linear infinite',
        'ping-slow': 'ping 10s linear infinite',
        'moveXline1': 'moveXline1 10s ease infinite',
        'moveXline2': 'moveXline2 5s linear infinite',
        'popupMove': 'popupMove 5s linear forwards',
        'pulse-slow': 'pulse 10s linear infinite',
        'scale-up': 'scaleUp 0.5s ease forwards',
        'scale-up-loop': 'scaleUp 1s infinite',

        'flowup16': 'flowup 16s ease-in forwards',
        'appeared-fade-1': 'appeared 1s ease forwards',
        'appeared-fade-1.5': 'appeared 1.5s ease forwards',
        'fade-in-top-4': 'fade-in-top 4s ease forwards',
        'appeared-fade-3': 'appeared 3s ease forwards',
        'appeared-fade-4': 'appeared 4s ease forwards',
        'appeared-fade-5': 'appeared 5s linear forwards',
        'appeared-fade-8': 'appeared 8s linear forwards',
        'appeared-fade-9': 'appeared 9s linear forwards',
        'appeared-fade-10': 'appeared 10s linear forwards',
        "slide-in": "slide-in 1.2s cubic-bezier(.41,.73,.51,1.02)",
        'spin-slow': 'spin 10s linear infinite',
        'spin-slow40': 'spinx 30s linear infinite',
        'ispin-slow': 'ispin 30s linear infinite',

        leave: "leave 150ms ease-in forwards",
        'dropdown3': 'falldown 3s ease infinite',
        'flowdown16': 'flowdown 16s ease forwards',
        'flowup1': 'flowup 16s ease forwards',
        'flowup3': 'flowup 22s ease forwards',
        'flowup2': 'flowup 19s ease forwards',

      },
    },
  },
  plugins: [
    require("tailwindcss-radix")(),
    require('daisyui'),

  ],
  
}
