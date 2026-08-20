import TicketForm from "../components/TicketForm";

function BuyTicket({ setPage, eventName, onSubmit }) {
  return (
    <div className="min-h-screen bg-gray-100">

      <div className="bg-amber-500 text-white p-5 flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          Buy Ticket
        </h1>

        <button
          onClick={() => setPage("home")}
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
            Enter your information to buy a ticket.
          </p>

          <TicketForm
            eventName={eventName}
            onSubmit={onSubmit}
          />

        </div>

      </div>

    </div>
  );
}

export default BuyTicket;