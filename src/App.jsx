import { useState } from 'react';
import './index.css';
import OpenIconSpeedDial from './components/OpenIconSpeedDial';
import { toast } from 'react-toastify';
import styled from 'styled-components';

const API = {
  key: '5b9b9d0d65c877071c70662187021c5f',
  base: 'https://api.openweathermap.org/data/2.5/',
};

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const search = (evt) => {
    if (evt.key === 'Enter') {
      setLoading(true);
      setError('');

      fetch(`${API.base}weather?q=${query}&units=metric&APPID=${API.key}`)
        .then((res) => res.json())
        .then((result) => {
          if (result.cod === '404') {
            setError('No such city found.');
          } else {
            setWeather(result);
          }
        })
        .catch((error) => {
          setError('Error fetching weather data.');
        })
        .finally(() => {
          setLoading(false);
          setQuery('');
        });
    }
  };

  const dateBuilder = (d) => {
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let days = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
  };

  const city = () => toast.warn('Please write the city');

  return (
    <MobileStyle
      className={
        typeof weather.main !== 'undefined'
          ? weather.main.temp > 16
            ? 'app warm'
            : 'app'
          : 'app'
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
            onClick={city}
          />
          {loading && <div className="loading-message">Loading ...</div>}
          {error && <div className="error-message ">{error}</div>}
        </div>
        {typeof weather.main !== 'undefined' && !loading ? (
          <div>
            <div className="location-box">
              <div className="location">
                <StyleText>Weather App</StyleText>
                {weather.name},{weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {weather.main.temp}
                <StyleGradus>°</StyleGradus>C
              </div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
            <OpenIconSpeedDial />
          </div>
        ) : null}
      </main>
    </MobileStyle>
  );
}

export default App;

const StyleText = styled.h2`
  background: rgb(13, 23, 228);
  background: radial-gradient(
    circle,
    rgba(13, 23, 228, 1) 0%,
    rgba(12, 152, 239, 1) 100%,
    rgba(11, 166, 249, 1) 100%
  );
  border-radius: 0px 0px 16px 16px;
  margin: 3rem;
`;

const StyleGradus = styled.span`
  color: #002f46;
  text-shadow: none;
`;

const mobileBreakpoint = '768px';

const MobileStyle = styled.div`
  @media (max-width: ${mobileBreakpoint}) {
    .search-box {
      text-align: center;
    }

    .search-bar {
      width: 90%;
    }

    .loading-message,
    .error-message {
      font-size: 14px;
    }

    .location-box {
      text-align: center;
    }

    .location {
      margin: 0;
    }

    .date {
      margin: 0.5rem 0;
    }

    .temp {
      font-size: 2rem;
    }

    .weather {
      font-size: 1.5rem;
    }
  }
`;
