/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Add Poppins font
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: ["winter", "coffee"],
    
    // themes: [
    //   {
    //     light: {
    //       "primary": "#7303c0",
    //       "secondary": "#ffaaff",
    //       "accent": "#ff3ab4",
    //       "neutral": "#EBD3F8",
    //       "info": "#00a1f1",
    //       "success": "#20b452",
    //       "warning": "#ffc75f",
    //       "error": "#de0042",
    //     },
    //     dark: {

    //     },
    //     mytheme: {
    //       // "primary": "#EDE8FF",
    //       // "secondary": "#744AFA",
    //       // "accent": "#521ED4",
    //       // "neutral": "#230B35",



    //       // "primary": "#2E073F",
    //       // "secondary": "#7A1CAC",
    //       // "accent": "#AD49E1",
    //       // "neutral": "#EBD3F8",
    //       // "info": "#0079de",
    //       // "success": "#8bc600",
    //       // "warning": "#ea6a00",
    //       // "error": "#de0042",



    //     },
    //   },
    // ],
  },
}