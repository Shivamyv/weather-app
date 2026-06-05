# Weather App

A responsive weather application built using React, Vite, and Material UI. The application allows users to search for any city and view real-time weather information including temperature, humidity, weather conditions, and more using the OpenWeather API.

## Features

* Search weather by city name
* Real-time weather information
* Current temperature display
* Minimum and maximum temperature details
* Humidity information
* Feels-like temperature
* Weather condition description
* Dynamic weather-based visuals
* Responsive user interface
* Error handling for invalid city names

## Tech Stack

* React.js
* Vite
* JavaScript (ES6+)
* Material UI (MUI)
* OpenWeather API
* CSS3

## Screenshots

Add screenshots of your application here.

## Installation

### Clone the Repository

```bash
git clone https://github.com/Shivamyv/weather-app.git
```

### Navigate to Project Directory

```bash
cd weather-app
```

### Install Dependencies

```bash
npm install
```

### Create Environment Variables

Create a `.env` file in the root directory and add:

```env
VITE_WEATHER_API_KEY=YOUR_OPENWEATHER_API_KEY
```

### Run the Development Server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

## Build for Production

```bash
npm run build
```

## Project Structure

```text
weather-app/
│
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── WeatherApp.jsx
│   ├── SearchBox.jsx
│   ├── InfoBox.jsx
│   ├── App.css
│   ├── SearchBox.css
│   ├── InfoBox.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## API Used

OpenWeather API

Features used from the API:

* Current weather data
* Temperature information
* Humidity details
* Weather descriptions

## Environment Variables

| Variable             | Description         |
| -------------------- | ------------------- |
| VITE_WEATHER_API_KEY | OpenWeather API Key |

## Future Improvements

* 5-day weather forecast
* Current location weather support
* Dark mode support
* Weather history tracking
* Additional weather metrics
* Better error handling and loading states

## Author

**Shivam Kumar**

GitHub: https://github.com/Shivamyv

## Live Demo

Add your Vercel deployment link here after deployment.

live link:
https://weather-app-ten-flax-18.vercel.app/

## License

This project is developed for learning and portfolio purposes.
