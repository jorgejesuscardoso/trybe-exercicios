export type IconType = 'cloudy' | 'sunny' | 'storm' | 'rainy' | 'nan';

export type ForecastType = {
  weekday: string,
  date: string,
  temp: string,
  weather?: IconType | '',
};

export const cast: ForecastType[] = [
  {
    weekday: 'Monday',
    date: 'Jan 1',
    temp: '25º',
    weather: '',
  },
  {
    weekday: 'Tuesday',
    date: 'Jan 2',
    temp: '27º',
    weather: 'rainy',
  },
  {
    weekday: 'Wednesday',
    date: 'Jan 3',
    temp: '21º',
    weather: 'storm',
  },
  {
    weekday: 'Thursday',
    date: 'Jan 4',
    temp: '32º',
    weather: 'cloudy',
  },
  {
    weekday: 'Friday',
    date: 'Jan 5',
    temp: '33º',
    weather: 'rainy',
  },
  {
    weekday: 'Thursday',
    date: 'Jan 6',
    temp: '32º',
    weather: 'sunny',
  },
  {
    weekday: 'Thursday',
    date: 'Jan 7',
    temp: '32º',
    weather: 'storm',
  },
];
