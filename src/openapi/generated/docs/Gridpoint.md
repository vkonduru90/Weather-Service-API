# Gridpoint

Raw forecast data for a 2.5km grid square. This is a list of all potential data layers that may appear. Some layers may not be present in all areas. * temperature * dewpoint * maxTemperature * minTemperature * relativeHumidity * apparentTemperature * heatIndex * windChill * wetBulbGlobeTemperature * skyCover * windDirection * windSpeed * windGust * weather * hazards: Watch and advisory products in effect * probabilityOfPrecipitation * quantitativePrecipitation * iceAccumulation * snowfallAmount * snowLevel * ceilingHeight * visibility * transportWindSpeed * transportWindDirection * mixingHeight * hainesIndex * lightningActivityLevel * twentyFootWindSpeed * twentyFootWindDirection * waveHeight * wavePeriod * waveDirection * primarySwellHeight * primarySwellDirection * secondarySwellHeight * secondarySwellDirection * wavePeriod2 * windWaveHeight * dispersionIndex * pressure: Barometric pressure * probabilityOfTropicalStormWinds * probabilityOfHurricaneWinds * potentialOf15mphWinds * potentialOf25mphWinds * potentialOf35mphWinds * potentialOf45mphWinds * potentialOf20mphWindGusts * potentialOf30mphWindGusts * potentialOf40mphWindGusts * potentialOf50mphWindGusts * potentialOf60mphWindGusts * grasslandFireDangerIndex * probabilityOfThunder * davisStabilityIndex * atmosphericDispersionIndex * lowVisibilityOccurrenceRiskIndex * stability * redFlagThreatIndex 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**JsonLdContext**](JsonLdContext.md) |  | [optional] [default to undefined]
**geometry** | **string** | A geometry represented in Well-Known Text (WKT) format. | [optional] [default to undefined]
**id** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to undefined]
**updateTime** | **string** |  | [optional] [default to undefined]
**validTimes** | [**ISO8601Interval**](ISO8601Interval.md) |  | [optional] [default to undefined]
**elevation** | [**QuantitativeValue**](QuantitativeValue.md) |  | [optional] [default to undefined]
**forecastOffice** | **string** |  | [optional] [default to undefined]
**gridId** | **string** |  | [optional] [default to undefined]
**gridX** | **number** |  | [optional] [default to undefined]
**gridY** | **number** |  | [optional] [default to undefined]
**weather** | [**GridpointWeather**](GridpointWeather.md) |  | [optional] [default to undefined]
**hazards** | [**GridpointHazards**](GridpointHazards.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Gridpoint } from './api';

const instance: Gridpoint = {
    context,
    geometry,
    id,
    type,
    updateTime,
    validTimes,
    elevation,
    forecastOffice,
    gridId,
    gridX,
    gridY,
    weather,
    hazards,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
