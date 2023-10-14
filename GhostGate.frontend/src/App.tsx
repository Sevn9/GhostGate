import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import GetConfigPage from "./pages/getConfigPage/GetConfigPage";
import GetQrCodePage from "./pages/GetQrCodePage/GetQrCodePage";

const App = (): React.ReactElement | null => {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/getConfig" element={<GetConfigPage />} />
        <Route path="/getQrCode" element={<GetQrCodePage />} />
      </Routes>
    </>
  );
};

export default App;
