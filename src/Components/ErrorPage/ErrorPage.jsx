import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-4">
        <h1 className="text-6xl font-bold text-indigo-600 mt-4">404</h1>
        <h2 className="text-xl sm:text-2xl font-semibold mt-2">
          Page Not Found
        </h2>
        <p className="text-gray-600 mt-2 max-w-sm">
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </p>

        <a className="mt-5 px-5 py-2 bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700 transition">
          <Link to="/">Back to Home</Link>
        </a>
      </div>
    </>
  );
};

export default ErrorPage;
