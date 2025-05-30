import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./*/.tsx"],
  theme: {
    container: { center: true },
    extend: {
      animation: {
        sliding: "sliding 30s linear infinite",
        spreadLeft: "spreadLeft 0.8s ease-out forwards",
        spreadRight: "spreadRight 0.8s ease-out forwards",
      },
      keyframes: {
        sliding: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        spreadLeft: {
          "0%": { transform: "translate(0, 0) scale(0.5)", opacity: "0" },
          "100%": { transform: "translateX(-200px) scale(1)", opacity: "1" },
        },
        spreadRight: {
          "0%": { transform: "translate(0, 0) scale(0.5)", opacity: "0" },
          "100%": { transform: "translateX(200px) scale(1)", opacity: "1" },
        },
      },
    },
    backgroundImage: {
      gifWave:
        "url('https://assets.decocache.com/people4tech/27456cd5-c565-43ff-aba3-bb82b7adbaa1/WhatsApp-Video-2025-05-18-at-12.19.28-AM.gif')",
    },
  },
};
