function Home({ setPage }) {
  return (
    <div className="min-h-screen bg-gray-100">

      <div className="bg-amber-500 text-white text-center py-6">
        <h1 className="text-3xl font-bold">
          EVENT MANAGEMENT SYSTEM
        </h1>
      </div>

      <div className="flex justify-center gap-6 mt-16">

        <button
          onClick={() => setPage("concert")}
          className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600"
        >
          Concert
        </button>

        <button
          onClick={() => setPage("workshop")}
          className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600"
        >
          Workshop
        </button>

        <button
          onClick={() => setPage("sports")}
          className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600"
        >
          Sports
        </button>

      </div>

    </div>
  );
}

export default Home;