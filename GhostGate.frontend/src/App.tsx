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
        <Route path="getConfig" element={<GetConfigPage />} />
        <Route path="getConfig/getQrCode" element={<GetQrCodePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
