# Gridpoint12hForecast

A multi-day forecast for a 2.5km grid square.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**JsonLdContext**](JsonLdContext.md) |  | [optional] [default to undefined]
**geometry** | **string** | A geometry represented in Well-Known Text (WKT) format. | [optional] [default to undefined]
**units** | [**GridpointForecastUnits**](GridpointForecastUnits.md) |  | [optional] [default to undefined]
**forecastGenerator** | **string** | The internal generator class used to create the forecast text (used for NWS debugging). | [optional] [default to undefined]
**generatedAt** | **string** | The time this forecast data was generated. | [optional] [default to undefined]
**updateTime** | **string** | The last update time of the data this forecast was generated from. | [optional] [default to undefined]
**validTimes** | [**ISO8601Interval**](ISO8601Interval.md) |  | [optional] [default to undefined]
**elevation** | [**QuantitativeValue**](QuantitativeValue.md) |  | [optional] [default to undefined]
**periods** | [**Array&lt;Gridpoint12hForecastPeriod&gt;**](Gridpoint12hForecastPeriod.md) | An array of forecast periods. | [optional] [default to undefined]

## Example

```typescript
import { Gridpoint12hForecast } from './api';

const instance: Gridpoint12hForecast = {
    context,
    geometry,
    units,
    forecastGenerator,
    generatedAt,
    updateTime,
    validTimes,
    elevation,
    periods,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
