import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          bgcolor: "var(--tg-theme-bg-color)",
        }}
      >
        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "var(--tg-theme-text-color)",
          }}
        >
          <Avatar
            sx={{ m: 1, bgcolor: "secondary.main", width: 144, height: 144 }}
            alt="Remy Sharp"
            src="../public/icon_256.png"
          />
          <h1>Тариф не подключен</h1>

          <Button
            sx={{ marginTop: 3 }}
            variant="contained"
            size="large"
            onClick={() => navigate("getConfig")}
          >
            Подключить
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
