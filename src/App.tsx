import { useState } from "react";

import Registration from "./Pages/Registration";
import Home from "./Pages/Home";
import Concert from "./Pages/Concert";
import Workshop from "./Pages/Workshop";
import Sports from "./Pages/Sports";
import BuyTicket from "./Pages/BuyTicket";
import ConfirmTicket from "./Pages/ConfirmTicket";

function App() {
  const [page, setPage] = useState("registration");

  const [selectedEvent, setSelectedEvent] = useState("");

  const [ticketDetails, setTicketDetails] = useState({
    name: "",
    email: "",
    tickets: 1,
    eventName: "",
  });

  const handleBuyTicket = (eventName) => {
    setSelectedEvent(eventName);
    setPage("buyTicket");
  };

  const handleTicketDetails = (details) => {
    setTicketDetails(details);
    setPage("confirmTicket");
  };

  return (
    <>
      {page === "registration" && (
        <Registration setPage={setPage} />
      )}

      {page === "home" && (
        <Home
          setPage={setPage}
          onBuyTicket={handleBuyTicket}
        />
      )}

      {page === "concert" && (
        <Concert
          setPage={setPage}
          onBuyTicket={handleBuyTicket}
        />
      )}

      {page === "workshop" && (
        <Workshop
          setPage={setPage}
          onBuyTicket={handleBuyTicket}
        />
      )}

      {page === "sports" && (
        <Sports
          setPage={setPage}
          onBuyTicket={handleBuyTicket}
        />
      )}

      {page === "buyTicket" && (
        <BuyTicket
          setPage={setPage}
          eventName={selectedEvent}
          onSubmit={handleTicketDetails}
        />
      )}

      {page === "confirmTicket" && (
        <ConfirmTicket
          setPage={setPage}
          ticketDetails={ticketDetails}
        />
      )}
    </>
  );
}

export default App;