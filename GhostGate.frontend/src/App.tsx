import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";

const App = (): React.ReactElement | null => {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/404" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
