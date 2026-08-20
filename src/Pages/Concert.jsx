import { useState } from "react";
import Create from "./Create";

const initialConcerts = [
  {
    id: 1,
    name: "Live Music Night",
    date: "September 15, 2026",
    time: "6:00 PM",
    location: "Kathmandu",
    price: "1500",
  },
  {
    id: 2,
    name: "Rock Festival",
    date: "September 18, 2026",
    time: "5:30 PM",
    location: "Pokhara",
    price: "1800",
  },
  {
    id: 3,
    name: "Nepali Music Evening",
    date: "September 20, 2026",
    time: "6:30 PM",
    location: "Kathmandu",
    price: "1200",
  },
  {
    id: 4,
    name: "Acoustic Night",
    date: "September 22, 2026",
    time: "7:00 PM",
    location: "Lalitpur",
    price: "1000",
  },
  {
    id: 5,
    name: "Jazz Evening",
    date: "September 25, 2026",
    time: "6:00 PM",
    location: "Kathmandu",
    price: "2000",
  },
  {
    id: 6,
    name: "Summer Beats",
    date: "September 28, 2026",
    time: "5:00 PM",
    location: "Bhaktapur",
    price: "1500",
  },
  {
    id: 7,
    name: "Indie Music Festival",
    date: "October 1, 2026",
    time: "4:30 PM",
    location: "Pokhara",
    price: "1700",
  },
  {
    id: 8,
    name: "Pop Music Night",
    date: "October 4, 2026",
    time: "6:00 PM",
    location: "Kathmandu",
    price: "1600",
  },
  {
    id: 9,
    name: "Guitar Festival",
    date: "October 7, 2026",
    time: "5:30 PM",
    location: "Lalitpur",
    price: "1300",
  },
  {
    id: 10,
    name: "Music Carnival",
    date: "October 10, 2026",
    time: "4:00 PM",
    location: "Kathmandu",
    price: "2200",
  },
  {
    id: 11,
    name: "Acoustic Festival",
    date: "October 13, 2026",
    time: "6:30 PM",
    location: "Pokhara",
    price: "1400",
  },
  {
    id: 12,
    name: "Classic Music Night",
    date: "October 16, 2026",
    time: "7:00 PM",
    location: "Kathmandu",
    price: "2500",
  },
  {
    id: 13,
    name: "Band Battle",
    date: "October 19, 2026",
    time: "5:00 PM",
    location: "Bhaktapur",
    price: "1200",
  },
  {
    id: 14,
    name: "Festival of Sounds",
    date: "October 22, 2026",
    time: "6:00 PM",
    location: "Lalitpur",
    price: "1900",
  },
  {
    id: 15,
    name: "Grand Music Festival",
    date: "October 25, 2026",
    time: "5:30 PM",
    location: "Kathmandu",
    price: "3000",
  },
];

function Concert({ setPage, onBuyTicket }) {
  const [events, setEvents] = useState(initialConcerts);
  const [showCreate, setShowCreate] = useState(false);

  const handleCreateEvent = (newEvent) => {
    setEvents((previousEvents) => [
      newEvent,
      ...previousEvents,
    ]);
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="bg-amber-500 text-white p-5 flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          Concert Events
        </h1>

        <div className="flex gap-3">

          <button
            onClick={() => setShowCreate(true)}
            className="bg-white text-amber-500 px-4 py-2 rounded-lg font-semibold"
          >
            Create Event
          </button>

          <button
            onClick={() => setPage("home")}
            className="bg-white text-amber-500 px-4 py-2 rounded-lg font-semibold"
          >
            Back
          </button>

        </div>

      </div>

      <div className="max-w-6xl mx-auto p-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {events.map((concert) => (
            <div
              key={concert.id}
              className="bg-white rounded-xl shadow-md p-5"
            >

              <h2 className="text-xl font-bold mb-3">
                {concert.name}
              </h2>

              <p className="text-gray-600">
                <strong>Date:</strong> {concert.date}
              </p>

              <p className="text-gray-600">
                <strong>Time:</strong> {concert.time}
              </p>

              <p className="text-gray-600">
                <strong>Location:</strong> {concert.location}
              </p>

              <p className="text-gray-600 mb-4">
                <strong>Price:</strong> Rs. {concert.price}
              </p>

              {concert.description && (
                <p className="text-gray-500 mb-4">
                  {concert.description}
                </p>
              )}

              <button
                onClick={() => onBuyTicket(concert.name)}
                className="bg-amber-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-amber-600"
              >
                Buy Ticket
              </button>

            </div>
          ))}

        </div>

      </div>

      {showCreate && (
        <Create
          onClose={() => setShowCreate(false)}
          eventType="Concert"
          onCreate={handleCreateEvent}
        />
      )}

    </div>
  );
}

export default Concert;