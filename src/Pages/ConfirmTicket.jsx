import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
function ConfirmTicket({ setPage, ticketDetails }) {
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = () => {
    setConfirmed(true);
  };

  const qrData =
    ticketDetails.eventName +
    "-" +import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ConfirmTicket() {
  const navigate = useNavigate();
  const location = useLocation();

  const [confirmed, setConfirmed] = useState(false);

  const ticketDetails = location.state?.ticketDetails;

  if (!ticketDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            No ticket information found.
          </h1>

          <button
            onClick={() => navigate("/concert")}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Go to Concerts
          </button>
        </div>
      </div>
    );
  }

  const handleConfirm = () => {
    setConfirmed(true);
  };

  const qrData =
    ticketDetails.eventName +
    "-" +
    ticketDetails.name +
    "-" +
    ticketDetails.email;

  const qrUrl =
    "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" +
    encodeURIComponent(qrData);

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="bg-amber-500 text-white p-5 flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          {confirmed ? "Your Ticket" : "Confirm Ticket"}
        </h1>

        {!confirmed && (
          <button
            onClick={() => navigate("/buy-ticket", {
              state: {
                eventName: ticketDetails.eventName,
              },
            })}
            className="bg-white text-amber-500 px-4 py-2 rounded-lg font-semibold"
          >
            Back
          </button>
        )}

      </div>

      <div className="max-w-xl mx-auto p-6">

        <div className="bg-white rounded-xl shadow-md p-6">

          {!confirmed ? (
            <>
              <h2 className="text-2xl font-bold mb-6">
                Confirm Your Ticket
              </h2>

              <div className="bg-gray-50 rounded-lg p-5 space-y-4">

                <div>
                  <p className="text-gray-500">
                    Event
                  </p>

                  <p className="font-semibold text-lg">
                    {ticketDetails.eventName}
                  </p>
                </div>

                <div>
                  <p className="text-gray-500">
                    Name
                  </p>

                  <p className="font-semibold">
                    {ticketDetails.name}
                  </p>
                </div>

                <div>
                  <p className="text-gray-500">
                    Email
                  </p>

                  <p className="font-semibold">
                    {ticketDetails.email}
                  </p>
                </div>

                <div>
                  <p className="text-gray-500">
                    Number of Tickets
                  </p>

                  <p className="font-semibold">
                    {ticketDetails.tickets}
                  </p>
                </div>

              </div>

              <div className="flex gap-3 mt-6">

                <button
                  onClick={() =>
                    navigate("/buy-ticket", {
                      state: {
                        eventName: ticketDetails.eventName,
                      },
                    })
                  }
                  className="w-1/2 border border-gray-300 py-3 rounded-lg font-semibold"
                >
                  Edit
                </button>

                <button
                  onClick={handleConfirm}
                  className="w-1/2 bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600"
                >
                  Confirm Ticket
                </button>

              </div>
            </>
          ) : (
            <>
              <div className="text-center">

                <h2 className="text-2xl font-bold text-green-600 mb-2">
                  Ticket Confirmed!
                </h2>

                <p className="text-gray-500 mb-6">
                  Show this QR code at the event entrance.
                </p>

              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">

                <h3 className="text-xl font-bold mb-5">
                  {ticketDetails.eventName}
                </h3>

                <img
                  src={qrUrl}
                  alt="Ticket QR Code"
                  className="w-56 h-56 mx-auto"
                />

                <p className="text-gray-500 mt-5">
                  Scan this QR code to verify your ticket.
                </p>

              </div>

              <div className="bg-gray-50 rounded-lg p-4 mt-5 space-y-2">

                <p>
                  <strong>Name:</strong>{" "}
                  {ticketDetails.name}
                </p>

                <p>
                  <strong>Email:</strong>{" "}
                  {ticketDetails.email}
                </p>

                <p>
                  <strong>Tickets:</strong>{" "}
                  {ticketDetails.tickets}
                </p>

              </div>

              <button
                onClick={() => navigate("/")}
                className="w-full mt-6 bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600"
              >
                Back to Home
              </button>

            </>
          )}

        </div>
      </div>

    </div>
  );
}

export default ConfirmTicket;
    ticketDetails.name +
    "-" +
    ticketDetails.email;

  const qrUrl =
    "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" +
    encodeURIComponent(qrData);

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="bg-amber-500 text-white p-5 flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          {confirmed ? "Your Ticket" : "Confirm Ticket"}
        </h1>

        {!confirmed && (
          <button
            onClick={() => setPage("buyTicket")}
            className="bg-white text-amber-500 px-4 py-2 rounded-lg font-semibold"
          >
            Back
          </button>
        )}

      </div>

      <div className="max-w-xl mx-auto p-6">

        <div className="bg-white rounded-xl shadow-md p-6">

          {!confirmed ? (
            <>
              <h2 className="text-2xl font-bold mb-6">
                Confirm Your Ticket
              </h2>

              <div className="bg-gray-50 rounded-lg p-5 space-y-4">

                <div>
                  <p className="text-gray-500">
                    Event
                  </p>

                  <p className="font-semibold text-lg">
                    {ticketDetails.eventName}
                  </p>
                </div>

                <div>
                  <p className="text-gray-500">
                    Name
                  </p>

                  <p className="font-semibold">
                    {ticketDetails.name}
                  </p>
                </div>

                <div>
                  <p className="text-gray-500">
                    Email
                  </p>

                  <p className="font-semibold">
                    {ticketDetails.email}
                  </p>
                </div>

                <div>
                  <p className="text-gray-500">
                    Number of Tickets
                  </p>

                  <p className="font-semibold">
                    {ticketDetails.tickets}
                  </p>
                </div>

              </div>

              <div className="flex gap-3 mt-6">

                <button
                  onClick={() => setPage("buyTicket")}
                  className="w-1/2 border border-gray-300 py-3 rounded-lg font-semibold"
                >
                  Edit
                </button>

                <button
                  onClick={handleConfirm}
                  className="w-1/2 bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600"
                >
                  Confirm Ticket
                </button>

              </div>
            </>
          ) : (
            <>
              <div className="text-center">

                <h2 className="text-2xl font-bold text-green-600 mb-2">
                  Ticket Confirmed!
                </h2>

                <p className="text-gray-500 mb-6">
                  Show this QR code at the event entrance.
                </p>

              </div>

              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">

                <h3 className="text-xl font-bold mb-5">
                  {ticketDetails.eventName}
                </h3>

                <img
                  src={qrUrl}
                  alt="Ticket QR Code"
                  className="w-56 h-56 mx-auto"
                />

                <p className="text-gray-500 mt-5">
                  Scan this QR code to verify your ticket.
                </p>

              </div>

              <div className="bg-gray-50 rounded-lg p-4 mt-5 space-y-2">

                <p>
                  <strong>Name:</strong>{" "}
                  {ticketDetails.name}
                </p>

                <p>
                  <strong>Email:</strong>{" "}
                  {ticketDetails.email}
                </p>

                <p>
                  <strong>Tickets:</strong>{" "}
                  {ticketDetails.tickets}
                </p>

              </div>

              <button
                onClick={() => setPage("home")}
                className="w-full mt-6 bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600"
              >
                Back to Home
              </button>

            </>
          )}

        </div>

      </div>

    </div>
  );
}

export default ConfirmTicket;