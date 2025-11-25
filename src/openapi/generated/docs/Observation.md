# Observation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**JsonLdContext**](JsonLdContext.md) |  | [optional] [default to undefined]
**geometry** | **string** | A geometry represented in Well-Known Text (WKT) format. | [optional] [default to undefined]
**id** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to undefined]
**elevation** | [**QuantitativeValue**](QuantitativeValue.md) |  | [optional] [default to undefined]
**station** | **string** |  | [optional] [default to undefined]
**stationId** | **string** |  | [optional] [default to undefined]
**stationName** | **string** |  | [optional] [default to undefined]
**timestamp** | **string** |  | [optional] [default to undefined]
**rawMessage** | **string** |  | [optional] [default to undefined]
**textDescription** | **string** |  | [optional] [default to undefined]
**icon** | **string** |  | [optional] [default to undefined]
**presentWeather** | [**Array&lt;MetarPhenomenon&gt;**](MetarPhenomenon.md) |  | [optional] [default to undefined]
**temperature** | [**QuantitativeValue**](QuantitativeValue.md) |  | [optional] [default to undefined]
**dewpoint** | [**QuantitativeValue**](QuantitativeValue.md) |  | [optional] [default to undefined]
**windDirection** | [**QuantitativeValue**](QuantitativeValue.md) |  | [optional] [default to undefined]
**windSpeed** | [**QuantitativeValue**](QuantitativeValue.md) |  | [optional] [default to undefined]
**windGust** | [**QuantitativeValue**](QuantitativeValue.md) |  | [optional] [default to undefined]
**barometricPressure** | [**QuantitativeValue**](QuantitativeValue.md) |  | [optional] [default to undefined]
**seaLevelPressure** | [**QuantitativeValue**](QuantitativeValue.md) |  | [optional] [default to undefined]
**visibility** | [**QuantitativeValue**](QuantitativeValue.md) |  | [optional] [default to undefined]
**maxTemperatureLast24Hours** | [**QuantitativeValue**](QuantitativeValue.md) |  | [optional] [default to undefined]
**minTemperatureLast24Hours** | [**QuantitativeValue**](QuantitativeValue.md) |  | [optional] [default to undefined]
**precipitationLastHour** | [**QuantitativeValue**](QuantitativeValue.md) |  | [optional] [default to undefined]
**precipitationLast3Hours** | [**QuantitativeValue**](QuantitativeValue.md) |  | [optional] [default to undefined]
**precipitationLast6Hours** | [**QuantitativeValue**](QuantitativeValue.md) |  | [optional] [default to undefined]
**relativeHumidity** | [**QuantitativeValue**](QuantitativeValue.md) |  | [optional] [default to undefined]
**windChill** | [**QuantitativeValue**](QuantitativeValue.md) |  | [optional] [default to undefined]
**heatIndex** | [**QuantitativeValue**](QuantitativeValue.md) |  | [optional] [default to undefined]
**cloudLayers** | [**Array&lt;ObservationCloudLayersInner&gt;**](ObservationCloudLayersInner.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Observation } from './api';

const instance: Observation = {
    context,
    geometry,
    id,
    type,
    elevation,
    station,
    stationId,
    stationName,
    timestamp,
    rawMessage,
    textDescription,
    icon,
    presentWeather,
    temperature,
    dewpoint,
    windDirection,
    windSpeed,
    windGust,
    barometricPressure,
    seaLevelPressure,
    visibility,
    maxTemperatureLast24Hours,
    minTemperatureLast24Hours,
    precipitationLastHour,
    precipitationLast3Hours,
    precipitationLast6Hours,
    relativeHumidity,
    windChill,
    heatIndex,
    cloudLayers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
