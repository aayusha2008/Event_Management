import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Create from "./Create";

const initialSports = [
  {
    id: 1,
    name: "Football Tournament",
    date: "September 17, 2026",
    time: "2:00 PM",
    location: "Kathmandu",
    price: "800",
  },
  {
    id: 2,
    name: "Basketball Championship",
    date: "September 20, 2026",
    time: "3:00 PM",
    location: "Lalitpur",
    price: "700",
  },
  {
    id: 3,
    name: "Cricket Tournament",
    date: "September 23, 2026",
    time: "10:00 AM",
    location: "Kathmandu",
    price: "1000",
  },
  {
    id: 4,
    name: "Volleyball Championship",
    date: "September 26, 2026",
    time: "2:30 PM",
    location: "Pokhara",
    price: "600",
  },
  {
    id: 5,
    name: "Badminton Tournament",
    date: "September 29, 2026",
    time: "9:00 AM",
    location: "Bhaktapur",
    price: "500",
  },
  {
    id: 6,
    name: "Table Tennis Championship",
    date: "October 2, 2026",
    time: "10:00 AM",
    location: "Kathmandu",
    price: "450",
  },
  {
    id: 7,
    name: "Running Marathon",
    date: "October 5, 2026",
    time: "6:00 AM",
    location: "Kathmandu",
    price: "500",
  },
  {
    id: 8,
    name: "Swimming Competition",
    date: "October 8, 2026",
    time: "8:00 AM",
    location: "Lalitpur",
    price: "700",
  },
  {
    id: 9,
    name: "Chess Championship",
    date: "October 11, 2026",
    time: "11:00 AM",
    location: "Kathmandu",
    price: "400",
  },
  {
    id: 10,
    name: "Cycling Competition",
    date: "October 14, 2026",
    time: "7:00 AM",
    location: "Pokhara",
    price: "900",
  },
  {
    id: 11,
    name: "Karate Championship",
    date: "October 17, 2026",
    time: "1:00 PM",
    location: "Kathmandu",
    price: "600",
  },
  {
    id: 12,
    name: "Athletics Competition",
    date: "October 20, 2026",
    time: "9:00 AM",
    location: "Bhaktapur",
    price: "550",
  },
  {
    id: 13,
    name: "Tennis Tournament",
    date: "October 23, 2026",
    time: "2:00 PM",
    location: "Lalitpur",
    price: "750",
  },
  {
    id: 14,
    name: "Boxing Championship",
    date: "October 26, 2026",
    time: "4:00 PM",
    location: "Kathmandu",
    price: "1000",
  },
  {
    id: 15,
    name: "Grand Sports Festival",
    date: "October 29, 2026",
    time: "10:00 AM",
    location: "Pokhara",
    price: "1200",
  },
];

function Sports() {
  const navigate = useNavigate();

  const [events, setEvents] = useState(initialSports);
  const [showCreate, setShowCreate] = useState(false);

  const handleCreateEvent = (newEvent: any) => {
    setEvents((previousEvents) => [
      newEvent,
      ...previousEvents,
    ]);
  };

  const handleBuyTicket = (eventName: string) => {
    navigate("/buy-ticket", {
      state: {
        eventName: eventName,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="bg-amber-500 text-white p-5 flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          Sports Events
        </h1>

        <div className="flex gap-3">

          <button
            onClick={() => setShowCreate(true)}
            className="bg-white text-amber-500 px-4 py-2 rounded-lg font-semibold"
          >
            Create Event
          </button>

          <button
            onClick={() => navigate("/")}
            className="bg-white text-amber-500 px-4 py-2 rounded-lg font-semibold"
          >
            Back
          </button>

        </div>

      </div>

      <div className="max-w-6xl mx-auto p-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {events.map((sport) => (
            <div
              key={sport.id}
              className="bg-white rounded-xl shadow-md p-5"
            >

              <h2 className="text-xl font-bold mb-3">
                {sport.name}
              </h2>

              <p className="text-gray-600">
                <strong>Date:</strong> {sport.date}
              </p>

              <p className="text-gray-600">
                <strong>Time:</strong> {sport.time}
              </p>

              <p className="text-gray-600">
                <strong>Location:</strong> {sport.location}
              </p>

              <p className="text-gray-600 mb-4">
                <strong>Price:</strong> Rs. {sport.price}
              </p>

              {sport.description && (
                <p className="text-gray-500 mb-4">
                  {sport.description}
                </p>
              )}

              <button
                onClick={() => handleBuyTicket(sport.name)}
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
          eventType="Sports"
          onCreate={handleCreateEvent}
        />
      )}

    </div>
  );
}

export default Sports;