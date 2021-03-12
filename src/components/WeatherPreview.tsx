import * as React from 'react'

import { WeatherForecast } from '../App'

export default function WeatherPreview({
  weatherToday,
}: {
  weatherToday: WeatherForecast['today']
}) {
  const {
    city,
    state,
    country,
    description,
    temperature,
    highTemperature,
    lowTemperature,
    iconLink,
    iconName,
  } = weatherToday
  return (
    <>
      <p>{city}</p>
      <p>{state}</p>
      <p>{country}</p>
      <p>{description}</p>
      <p>{temperature}</p>
      <p>{highTemperature}</p>
      <p>{lowTemperature}</p>
      <img src={iconLink} alt={iconName} />{' '}
    </>
  )
}
