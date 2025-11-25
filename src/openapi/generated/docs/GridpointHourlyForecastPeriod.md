# GridpointHourlyForecastPeriod

An object containing forecast information for a specific time period (generally 12-hour or 1-hour). 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number** | **number** | Sequential period number. | [optional] [default to undefined]
**name** | **string** | A textual identifier for the period. This value will not be present for hourly forecasts.  | [optional] [default to undefined]
**startTime** | **string** | The starting time that this forecast period is valid for. | [optional] [default to undefined]
**endTime** | **string** | The ending time that this forecast period is valid for. | [optional] [default to undefined]
**isDaytime** | **boolean** | Indicates whether this period is daytime or nighttime. | [optional] [default to undefined]
**temperature** | [**GridpointHourlyForecastPeriodTemperature**](GridpointHourlyForecastPeriodTemperature.md) |  | [optional] [default to undefined]
**temperatureUnit** | **string** | The unit of the temperature value (Fahrenheit or Celsius). This property is deprecated. Future versions will indicate the unit within the quantitative value object for the temperature property. To make use of the future standard format now, set the \&quot;forecast_temperature_qv\&quot; feature flag on the request.  | [optional] [default to undefined]
**temperatureTrend** | **string** | If not null, indicates a non-diurnal temperature trend for the period (either rising temperature overnight, or falling temperature during the day)  | [optional] [default to undefined]
**probabilityOfPrecipitation** | [**QuantitativeValue**](QuantitativeValue.md) |  | [optional] [default to undefined]
**dewpoint** | [**QuantitativeValue**](QuantitativeValue.md) |  | [optional] [default to undefined]
**relativeHumidity** | [**QuantitativeValue**](QuantitativeValue.md) |  | [optional] [default to undefined]
**windSpeed** | [**GridpointHourlyForecastPeriodWindSpeed**](GridpointHourlyForecastPeriodWindSpeed.md) |  | [optional] [default to undefined]
**windGust** | [**GridpointHourlyForecastPeriodWindGust**](GridpointHourlyForecastPeriodWindGust.md) |  | [optional] [default to undefined]
**windDirection** | **string** | The prevailing direction of the wind for the period, using a 16-point compass. | [optional] [default to undefined]
**icon** | **string** | A link to an icon representing the forecast summary. | [optional] [default to undefined]
**shortForecast** | **string** | A brief textual forecast summary for the period. | [optional] [default to undefined]
**detailedForecast** | **string** | A detailed textual forecast for the period. | [optional] [default to undefined]

## Example

```typescript
import { GridpointHourlyForecastPeriod } from './api';

const instance: GridpointHourlyForecastPeriod = {
    number,
    name,
    startTime,
    endTime,
    isDaytime,
    temperature,
    temperatureUnit,
    temperatureTrend,
    probabilityOfPrecipitation,
    dewpoint,
    relativeHumidity,
    windSpeed,
    windGust,
    windDirection,
    icon,
    shortForecast,
    detailedForecast,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
