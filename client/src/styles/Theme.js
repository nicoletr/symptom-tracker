import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#51addc",
      light: "#a0d2e6",
      dark: "#0070a8",
      contrastText: "rgba(255,255,255,0.87)",
    },
    secondary: {
      main: "#304ffe",
      dark: "#1a2d90",
      light: "#6a81fd",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "primary" },
          style: {
            backgroundColor: "#51addc",
            "&:hover": {
              backgroundColor: "#0070a8",
            },
            border: "none",
            color: "white",
            marginTop: "0.5rem",
          },
        },
      ],
    },
  },
});

export default theme;
