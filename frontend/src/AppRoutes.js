import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import Coaches from "./pages/Coaces/Coaces";
import Events from "./pages/Events/Events";
import Event from "./pages/Event/Event";
import EventDetails from "./pages/EventDetails/EventDetails";
import { ADMIN_URL } from "./secret";
import RequestPasswordPage from "./Admin/RequestPasswordPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detalii" element={<Details />} />
      <Route path="/antrenori" element={<Coaches />} />
      <Route path="/evenimente" element={<Events />} />
      <Route path="/evenimente/:title" element={<Event />} />
      <Route path="/evenimente/:title/:id" element={<EventDetails />} />
      <Route path={`/${ADMIN_URL}`} element={<RequestPasswordPage />} />
    </Routes>
  );
}
