export const baseUrl = process.env.NODE_ENV === "production" 
  ? "https://api.weatherapp.rainbowcup.com"  // Note: using http instead of https
  : "http://localhost:3001";


export const weatherOpts = {
  day: {
    clear: new URL("../images/day/sunny.png", import.meta.url).href,
    Clouds: new URL("../images/day/cloudy.png", import.meta.url).href,
    rain: new URL("../images/day/rain.png", import.meta.url).href,
    storm: new URL("../images/day/storm.png", import.meta.url).href,
    snow: new URL("../images/day/snow.png", import.meta.url).href,
    misty: new URL("../images/day/mist.png", import.meta.url).href,
  },
  night: {
    clear: new URL("../images/night/night-sunny.png", import.meta.url).href,
    Clouds: new URL("../images/night/night-cloudy.png", import.meta.url).href,
    rain: new URL("../images/night/night-rain.png", import.meta.url).href,
    storm: new URL("../images/night/night-storm.png", import.meta.url).href,
    snow: new URL("../images/night/night-snow.png", import.meta.url).href,
    misty: new URL("../images/night/night-mist.png", import.meta.url).href,
  },
};

export const weatherDefaults = {
  day: {
    url: new URL("../images/day/undefined-day.png", import.meta.url).href,
  },
  night: {
    url: new URL("../images/night/night-undefined.png", import.meta.url).href,
  },
};

const getWeatherIcon = (isDay, condition) => {
  return weatherOpts[isDay ? "day" : "night"][condition] || "";
};

const iconUrl = getWeatherIcon(true, "rain");

export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

export const coords = {
  latitude: 38.581573,
  longitude: -121.4944,
};

export const APIKey = "bc23274a36ce894d822fb4f33549a5dd";
