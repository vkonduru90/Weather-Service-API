# ZoneForecast

An object representing a zone area forecast.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**JsonLdContext**](JsonLdContext.md) |  | [optional] [default to undefined]
**geometry** | **string** | A geometry represented in Well-Known Text (WKT) format. | [optional] [default to undefined]
**zone** | **string** | An API link to the zone this forecast is for. | [optional] [default to undefined]
**updated** | **string** | The time this zone forecast product was published. | [optional] [default to undefined]
**periods** | [**Array&lt;ZoneForecastPeriodsInner&gt;**](ZoneForecastPeriodsInner.md) | An array of forecast periods. | [optional] [default to undefined]

## Example

```typescript
import { ZoneForecast } from './api';

const instance: ZoneForecast = {
    context,
    geometry,
    zone,
    updated,
    periods,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
