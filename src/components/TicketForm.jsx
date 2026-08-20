import { useState } from "react";

function TicketForm({ eventName, onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tickets, setTickets] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      name,
      email,
      tickets,
      eventName,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >

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

      <button
        type="submit"
        className="w-full bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600"
      >
        Continue
      </button>

    </form>
  );
}

export default TicketForm;