import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Create from "./Create";

const initialWorkshops = [
  {
    id: 1,
    name: "Web Development Workshop",
    date: "September 16, 2026",
    time: "10:00 AM",
    location: "Kathmandu",
    price: "1000",
  },
  {
    id: 2,
    name: "UI/UX Design Workshop",
    date: "September 19, 2026",
    time: "11:00 AM",
    location: "Lalitpur",
    price: "1200",
  },
  {
    id: 3,
    name: "React Workshop",
    date: "September 22, 2026",
    time: "10:00 AM",
    location: "Kathmandu",
    price: "1500",
  },
  {
    id: 4,
    name: "JavaScript Workshop",
    date: "September 25, 2026",
    time: "9:30 AM",
    location: "Bhaktapur",
    price: "1300",
  },
  {
    id: 5,
    name: "Photography Workshop",
    date: "September 28, 2026",
    time: "1:00 PM",
    location: "Pokhara",
    price: "1800",
  },
  {
    id: 6,
    name: "Digital Marketing Workshop",
    date: "October 1, 2026",
    time: "11:00 AM",
    location: "Kathmandu",
    price: "1100",
  },
  {
    id: 7,
    name: "Graphic Design Workshop",
    date: "October 4, 2026",
    time: "10:00 AM",
    location: "Lalitpur",
    price: "1400",
  },
  {
    id: 8,
    name: "AI Workshop",
    date: "October 7, 2026",
    time: "2:00 PM",
    location: "Kathmandu",
    price: "2000",
  },
  {
    id: 9,
    name: "Python Workshop",
    date: "October 10, 2026",
    time: "10:00 AM",
    location: "Kathmandu",
    price: "1600",
  },
  {
    id: 10,
    name: "Public Speaking Workshop",
    date: "October 13, 2026",
    time: "1:00 PM",
    location: "Pokhara",
    price: "900",
  },
  {
    id: 11,
    name: "Entrepreneurship Workshop",
    date: "October 16, 2026",
    time: "11:00 AM",
    location: "Kathmandu",
    price: "1200",
  },
  {
    id: 12,
    name: "Creative Writing Workshop",
    date: "October 19, 2026",
    time: "10:30 AM",
    location: "Bhaktapur",
    price: "800",
  },
  {
    id: 13,
    name: "Leadership Workshop",
    date: "October 22, 2026",
    time: "2:00 PM",
    location: "Lalitpur",
    price: "1500",
  },
  {
    id: 14,
    name: "Career Development Workshop",
    date: "October 25, 2026",
    time: "11:00 AM",
    location: "Kathmandu",
    price: "1000",
  },
  {
    id: 15,
    name: "Technology Innovation Workshop",
    date: "October 28, 2026",
    time: "10:00 AM",
    location: "Pokhara",
    price: "1800",
  },
];

function Workshop() {
  const navigate = useNavigate();

  const [events, setEvents] = useState(initialWorkshops);
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
          Workshop Events
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

          {events.map((workshop) => (
            <div
              key={workshop.id}
              className="bg-white rounded-xl shadow-md p-5"
            >

              <h2 className="text-xl font-bold mb-3">
                {workshop.name}
              </h2>

              <p className="text-gray-600">
                <strong>Date:</strong> {workshop.date}
              </p>

              <p className="text-gray-600">
                <strong>Time:</strong> {workshop.time}
              </p>

              <p className="text-gray-600">
                <strong>Location:</strong> {workshop.location}
              </p>

              <p className="text-gray-600 mb-4">
                <strong>Price:</strong> Rs. {workshop.price}
              </p>

              {workshop.description && (
                <p className="text-gray-500 mb-4">
                  {workshop.description}
                </p>
              )}

              <button
                onClick={() => handleBuyTicket(workshop.name)}
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
          eventType="Workshop"
          onCreate={handleCreateEvent}
        />
      )}

    </div>
  );
}

export default Workshop;