/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "left-gradient": "#21965a",
        "right-gradient": "#00b2c2 ",
        "body-color": "#111111",
        "hr": "#1a9d74 ",
        "banner": "#001e0ecf",
        "text-span": "rgba(34,149,92,0.17)",
        "power" : "#222222",
        "dart": "#2ddd86",
        "tokenomic": "rgba(255, 255, 255, 0.1)",
        "card-border" : "#29bc18",
        "faq-card": "#232323",
        "social-media": "#292929",
      },
      dropShadow: {
        "drop-green": "0px 0px 20px rgba(33,150,90,0.42)",
      },
      boxShadow: {
        "box-green": "0px 0px 20px rgba(33,150,90,0.42)",
        "dart-sh" : "0px 0px 20px rgb(45,221,135)",
      },
      fontWeight: {
        "200": "200",
      },
      animation: {
        "bounce-y": "bounceY 5s infinite",
      },
      backgroundImage: { 
        "joinus": "url('https://helpsteps.io/assets/img/area-for-connect.svg') "
      },
      keyframes: {
        bounceY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
