import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Example() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 from-cyan-700 to-blue-700">
      <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6  sm:pb-24 lg:max-w-7xl lg:px-8 ">
        <h2 className="text-3xl font-bold tracking-tight text-white text-center">
          Weather
        </h2>
        <div className="relative mt-3 mr-3  rounded-md ">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
            aria-hidden="true"
          >
            <MagnifyingGlassIcon
              className="mr-3 h-4 w-4 text-black"
              aria-hidden="true"
            />
          </div>
          <input
            type="text"
            name="search"
            id="search"
            className="w-6/12 h-8 block rounded-md border-gray-300 pl-9 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Search City"
          />
        </div>
        <div className="mt-12">
          <p>City Name</p>
          <p>Date</p>
          <p>Hourly forecast</p>
        </div>
      </div>
    </div>
  );
}
