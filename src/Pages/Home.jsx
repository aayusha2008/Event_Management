import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="bg-amber-500 text-white text-center py-6">
        <h1 className="text-3xl font-bold">
          EVENT MANAGEMENT SYSTEM
        </h1>
      </div>

      <div className="flex justify-center gap-6 mt-16">

        <button
          onClick={() => navigate("/concert")}
          className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600"
        >
          Concert
        </button>

        <button
          onClick={() => navigate("/workshop")}
          className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600"
        >
          Workshop
        </button>

        <button
          onClick={() => navigate("/sports")}
          className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600"
        >
          Sports
        </button>

      </div>

    </div>
  );
}

export default Home;