import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function BuyTicket() {

  const navigate = useNavigate();

  // Get event information from the previous page
  const location = useLocation();

  const eventName = location.state?.eventName || "Event";
  const price = location.state?.price || "0";

  // Ticket form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tickets, setTickets] = useState(1);

  // Submit ticket form
  const handleSubmit = (e) => {

    e.preventDefault();

    // Move to confirmation page
    navigate("/confirm-ticket", {

      state: {
        eventName,
        price,
        name,
        email,
        tickets,
      },

    });
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-amber-500 text-white p-5 flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          Buy Ticket
        </h1>

        <button
          onClick={() => navigate(-1)}
          className="bg-white text-amber-500 px-4 py-2 rounded-lg font-semibold"
        >
          Back
        </button>

      </div>

      <div className="max-w-xl mx-auto p-6">

        <div className="bg-white rounded-xl shadow-md p-6">

          <h2 className="text-2xl font-bold mb-2">
            {eventName}
          </h2>

          <p className="text-gray-500 mb-6">
            Ticket Price: Rs. {price}
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Full name */}
            <div>

              <label className="block font-semibold mb-1">
                Full Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />

            </div>

            {/* Email */}
            <div>

              <label className="block font-semibold mb-1">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />

            </div>

            {/* Number of tickets */}
            <div>

              <label className="block font-semibold mb-1">
                Number of Tickets
              </label>

              <input
                type="number"
                min="1"
                value={tickets}
                onChange={(e) => setTickets(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />

            </div>

            {/* Continue */}
            <button
              type="submit"
              className="w-full bg-amber-500 text-white py-3 rounded-lg font-semibold"
            >
              Continue
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default BuyTicket;