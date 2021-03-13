import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import SignUp from './components/SignUp'
import WeatherPreview from './components/WeatherPreview'

interface Weather {
  description: string
  temperature: string
  highTemperature: string
  lowTemperature: string
  humidity: string
  iconName: string
  iconLink: string
  country: string
  city: string
  state: string
  utcTime: string
}

export interface WeatherForecast {
  today: Weather
  daily: Weather[]
}

function App() {
  const [weatherForecast, setWeatherForecast] = useState<WeatherForecast | null>(null)
  const [userZipCode, setUserZipCode] = useState<number | null>(null)
  useEffect(() => {
    fetch('https://j9l4zglte4.execute-api.us-east-1.amazonaws.com/api/ctl/weather')
      .then(res => res.json())
      .then(res => setWeatherForecast(res))
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    weatherForecast &&
      document
        .querySelector<HTMLLinkElement>('.favicon')
        ?.setAttribute('href', weatherForecast.today.iconLink)
  }, [weatherForecast])

  return (
    <Main>
      <SignUp setZipCode={setUserZipCode} />
      {weatherForecast && <WeatherPreview weatherToday={weatherForecast.today} />}
      <p>{userZipCode}</p>
    </Main>
  )
}

export default App

const Main = styled.main``
