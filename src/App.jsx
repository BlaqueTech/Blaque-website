import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Work from "./pages/navwork";
import Case from "./pages/case";
import Layout from "./pages/layout";
import Letstalk from "./pages/letstalk";
import { ROUTES } from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.SERVICES} element={<Services />} />
          <Route path={ROUTES.WORK} element={<Work />} />
          <Route path={ROUTES.CASE} element={<Case />} />
          <Route path={ROUTES.CONNECT} element={<Letstalk />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<div>404 Page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
  
export default App;
