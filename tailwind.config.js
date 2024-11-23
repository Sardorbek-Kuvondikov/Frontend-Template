/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      boxShadow: {
        custom: "rgba(0, 0, 0, 0.09) 0px 3px 12px;",
        customBlue: "0px 0px 3px 4px rgba(59, 130, 246, 0.4)",
        customGray: "0px 0px 3px 4px rgba(210,210,210,0.4)",
      },
    },
  },
  plugins: [],
};
