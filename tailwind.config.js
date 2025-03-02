module.exports = {
    content: [".src/**/*.{html,jsx}"], // ✅ Specify which files should use Tailwind
    theme: {
      extend: {
        colors: {
          primary: "#1DA1F2",
          secondary: "#14171A",
        },
      },
    },
    plugins: [],
  };