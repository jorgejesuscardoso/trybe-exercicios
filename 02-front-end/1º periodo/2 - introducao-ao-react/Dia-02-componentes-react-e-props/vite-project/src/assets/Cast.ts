export type ForecastType = {
  weekday: string,
  date: string,
  temp: string,
  image: string,
  weather: string,
};

export const cast: ForecastType[] = [
  {
    weekday: 'Monday',
    date: 'Jan 1',
    temp: '25',
    image: 'https://raw.githubusercontent.com/betrybe/images/main/weather/cloudy.svg',
    weather: 'Cloudy',
  },
  {
    weekday: 'Tuesday',
    date: 'Jan 2',
    temp: '27',
    image: 'https://raw.githubusercontent.com/betrybe/images/main/weather/rainy-1.svg',
    weather: 'Rainy',
  },
  {
    weekday: 'Wednesday',
    date: 'Jan 3',
    temp: '21',
    image: 'https://raw.githubusercontent.com/betrybe/images/main/weather/thunder.svg',
    weather: 'Thuunderstorm',
  },
  {
    weekday: 'Thursday',
    date: 'Jan 1',
    temp: '32',
    image: 'https://betrybe.github.io/images/weather/day.svg',
    weather: 'Sunny',
  },
];
