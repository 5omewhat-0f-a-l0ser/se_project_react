const api = new Api({
    baseUrl: "https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}",
    headers: {
      authorization: "bc23274a36ce894d822fb4f33549a5dd",
      "Content-Type": "application/json"
    }
});


if (temperature >= 86) {
    return 'hot';
  } else if (temperature >= 66) {
    return 'warm';
  } else {
    return 'cold';
  }