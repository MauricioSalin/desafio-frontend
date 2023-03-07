const primaryColor = "#cea08e";
const primaryColorAlt = "#77877a";
const secondaryColor = "#606962";
const complementaryColor = "#6bad78";
const complementaryColorAlt = "#67886d";

const theme = {
  fonts: {
    base: `'Quicksand', sans-serif`,
    title: `'Quicksand', sans-serif`,
  },
  colors: {
    base: "#656565",
    background: "#fbfbfb",
    white: "#fff",
    primary: primaryColor,
    primaryDarker: "#ab816e",
    primaryDarker2: "#ab6247",
    primaryGradient: `linear-gradient(90deg, #cea08e 0%, #dca690 90%)`,
    primaryAlt: primaryColorAlt,
    primaryGradientAlt: `linear-gradient(90deg, #44a48d 0%, #59c3a9 100%)`,
    secondary: secondaryColor,
    tertiary: "#eaeaea",
    complementary: complementaryColor,
    complementaryAlt: complementaryColorAlt || "",
    complementaryAlt2: "#616c63",
    invalid: "#e53935",
    red: "#ff0000",
    accent: "#dc504d",
    like: "#c3706d",
    warning: "#ffeb3b",
    menuIcon: "#8c8c8c",
    lightGray: "#f8f8f8",
    lightGray2: "#c3c3c3",
    gray: "#898989",
    darkGray: "#565656",
    blue: "#1e88e5",
    seal: "#a58271",
    buttons: {
      green: "#19a219",
      disabledBg: "#f5f5f5",
      disabledColor: "rgba(0, 0, 0, 0.4)",
      actionColor: "#484848",
    },
    products: {
      logo: "#4EAEB7",
      site: "#a9a182",
      presenca: "#0277BD",
      universos: "#82A893",
      email: "#6A99CF",
      sistema: "#6A8C92",
    },
    plans: {
      specialist: "#c7b273",
      digital: "#9762d4",
      pro: "#9762d4",
      logo: "#489e60",
      graduated: "#bd8ef3",
      internet: "#58afe4",
    },
  },
  shadows: {
    default:
      "0 1px 5px rgb(0 0 0 / 20%), 0 2px 2px rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%)",
    defaultLighter:
      "0 1px 5px rgb(0 0 0 / 10%), 0 2px 2px rgb(0 0 0 / 7%), 0 3px 1px -2px rgb(0 0 0 / 6%)",
    defaultBigger: "0 6px 9px rgba(0, 0, 0, 0.32)",
    md: `
      rgba(0, 0, 0, 0.2) 0 8px 10px -5px,
      rgba(0, 0, 0, 0.14) 0 16px 24px 2px,
      rgba(0, 0, 0, 0.12) 0 6px 30px 5px
    `,
  },
} as const;

export default theme;
