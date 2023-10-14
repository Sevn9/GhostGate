import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { useTelegram } from "../../hooks/useTelegram";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";

const defaultTheme = createTheme();

const GetQrCodePage = () => {
  const { tg } = useTelegram();
  const navigate = useNavigate();
  tg.BackButton.show();
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
            marginTop: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "var(--tg-theme-text-color)",
          }}
        >
          <h2>Ваш QR-код:</h2>
          <Card variant="outlined" sx={{ width: 280 }}>
            <CardMedia
              component="img"
              image="../public/qrCodeTestImage-377x377.png"
              title="QRCode"
            />
          </Card>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default GetQrCodePage;
