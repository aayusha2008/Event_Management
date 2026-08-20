import { useState } from "react";

function Create({ onClose, eventType, onCreate }) {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    location: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEvent = {
      id: Date.now(),
      ...formData,
    };

    onCreate(newEvent);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-6 max-h-[90vh] overflow-y-auto">

        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl font-bold">
            Create {eventType} Event
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 text-2xl hover:text-black"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block font-semibold mb-1">
              Event Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter event name"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Date
            </label>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Time
            </label>

            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Location
            </label>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter location"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Ticket Price
            </label>

            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter ticket price"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Description
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter event description"
              rows="3"
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
            />
          </div>

          <div className="flex gap-3">

            <button
              type="button"
              onClick={onClose}
              className="w-1/2 border border-gray-300 py-2 rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="w-1/2 bg-amber-500 text-white py-2 rounded-lg font-semibold hover:bg-amber-600"
            >
              Create Event
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}

export default Create;