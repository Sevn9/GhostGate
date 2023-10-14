import React from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { useTelegram } from "../../hooks/useTelegram";

const defaultTheme = createTheme();

const GetConfigPage = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  function handleClick() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }
  const navigate = useNavigate();
  const { tg } = useTelegram();

  tg.BackButton.onClick(() => navigate(-1));

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
          <h2>Выберите удобный способ:</h2>

          <Button
            disabled={isLoading}
            sx={{ marginTop: 3, width: 200 }}
            variant="contained"
            size="large"
            onClick={() => navigate("/getQrCode")}
          >
            qr-код
          </Button>

          <Button
            disabled={isLoading}
            sx={{ marginTop: 3, width: 200 }}
            variant="contained"
            size="large"
            onClick={() => handleClick()}
          >
            файл
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default GetConfigPage;
