import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/home";
import Concert from "./Pages/Concert";
import Workshop from "./Pages/Workshop";
import Sports from "./Pages/Sports";
import BuyTicket from "./Pages/BuyTicket";
import ConfirmTicket from "./Pages/confirmTicket";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/concert"
          element={<Concert />}
        />

        <Route
          path="/workshop"
          element={<Workshop />}
        />

        <Route
          path="/sports"
          element={<Sports />}
        />

        <Route
          path="/buy-ticket"
          element={<BuyTicket />}
        />

        <Route
          path="/confirm-ticket"
          element={<ConfirmTicket />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;