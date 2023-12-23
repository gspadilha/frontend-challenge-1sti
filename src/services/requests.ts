import axios from 'axios';

// @TODO: colocar em um arquivo .env
const KEY = '65cbc9f4d9cb43afb8a74131232312';

export async function request(city: string) {
  const response = await axios.get(
    `https://api.weatherapi.com/v1/current.json?aqi=no&key=${KEY}&q=${city}`,
  );

  return response.data;
}
