export const weatherOpts = [
  {
    day: true,
    condtion: "clear",
    url: new URL("../images/day/sunny.png", import.meta.url).href,
  },
  {
    day: true,
    condtion: "Clouds",
    url: new URL("../images/day/cloudy.png", import.meta.url).href,
  },
  {
    day: true,
    condtion: "rain",
    url: new URL("../images/day/rain.png", import.meta.url).href,
  },
  {
    day: true,
    condtion: "storm",
    url: new URL("../images/day/storm.png", import.meta.url).href,
  },
  {
    day: true,
    condtion: "snow",
    url: new URL("../images/day/snow.png", import.meta.url).href,
  },
  {
    day: true,
    condtion: "misty",
    url: new URL("../images/day/mist.png", import.meta.url).href,
  },
  {
    day: false,
    condtion: "clear",
    url: new URL("../images/night/night-sunny.png", import.meta.url).href,
  },
  {
    day: false,
    condtion: "Clouds",
    url: new URL("../images/night/night-cloudy.png", import.meta.url).href,
  },
  {
    day: false,
    condtion: "rain",
    url: new URL("../images/night/night-rain.png", import.meta.url).href,
  },
  {
    day: false,
    condtion: "storm",
    url: new URL("../images/night/night-storm.png", import.meta.url).href,
  },
  {
    day: false,
    condtion: "snow",
    url: new URL("../images/night/night-snow.png", import.meta.url).href,
  },
  {
    day: false,
    condtion: "misty",
    url: new URL("../images/night/night-mist.png", import.meta.url).href,
  }
]

export const weatherDefaults = {
  day: {
    url: new URL("../images/day/undefined-day.png", import.meta.url).href,
  },
  night: {
    url: new URL("../images/night/night-undefined.png", import.meta.url).href,
  },
}



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
    }
]

export const coords = {
  latitude: 38.581573,
  longitude: -121.494400,
}

export const APIKey = "bc23274a36ce894d822fb4f33549a5dd";