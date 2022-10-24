import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=ea74801d7d13eaf3b920bffc469f851e`;

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };
  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight pt-2 text-center">
        Weather Forecast
      </h2>
      <div className="mx-auto max-w-screen-md mt-4 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 from-cyan-700 to-blue-700">
        <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6  sm:pb-24 lg:max-w-7xl lg:px-8 ">
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
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyPress={searchLocation}
              className="h-9 block rounded-md border-gray-300 pl-9 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Search City"
              style={{ width: "-webkit-fill-available" }}
            />
          </div>

          <div className="mt-5">
            <div className="city_name">
              <p className="text-white text-3xl place-content-center flex">
                <MapPinIcon
                  className="mt-2 mr-3 h-6 w-6 text-white"
                  aria-hidden="true"
                />
                {data.name}
              </p>
            </div>

            <div
              className="current_weather"
              style={{ textAlign: "-webkit-center" }}
            >
              <img
                alt="weather"
                className="w-23 h-23"
                src={`http://openweathermap.org/img/wn/${
                  data.weather && data.weather[0].icon
                }.png`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
