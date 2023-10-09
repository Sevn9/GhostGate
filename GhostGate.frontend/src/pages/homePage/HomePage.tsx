import { useState } from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";

const defaultTheme = createTheme();

export default function HomePage() {
  const [count, setCount] = useState(0);
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
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "var(--tg-theme-text-color)",
          }}
        >
          <h1>GhostGate</h1>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <AdminPanelSettingsOutlinedIcon />
          </Avatar>

          <Button
            sx={{ marginTop: 2 }}
            variant="contained"
            onClick={() => setCount((count) => count + 1)}
          >
            Подключено {count}
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
