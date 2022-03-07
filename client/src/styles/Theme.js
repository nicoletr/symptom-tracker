import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#51addc",
      contrastText: "rgba(255,255,255,0.87)",
    },
    secondary: {
      main: "#304ffe",
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
