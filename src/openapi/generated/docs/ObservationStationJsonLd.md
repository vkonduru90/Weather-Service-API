# ObservationStationJsonLd


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**JsonLdContext**](JsonLdContext.md) |  | [default to undefined]
**geometry** | **string** | A geometry represented in Well-Known Text (WKT) format. | [default to undefined]
**id** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to undefined]
**elevation** | [**QuantitativeValue**](QuantitativeValue.md) |  | [optional] [default to undefined]
**stationIdentifier** | **string** |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**timeZone** | **string** |  | [optional] [default to undefined]
**provider** | **string** | The data provider for this station. E.g., \&quot;ASOS,\&quot; \&quot;MesoWest,\&quot; etc. | [optional] [default to undefined]
**subProvider** | **string** | The sub-provider of for this station. E.g., \&quot;FAA,\&quot; \&quot;DOT,\&quot; etc. | [optional] [default to undefined]
**forecast** | **string** | A link to the NWS public forecast zone containing this station. | [optional] [default to undefined]
**county** | **string** | A link to the NWS county zone containing this station. | [optional] [default to undefined]
**fireWeatherZone** | **string** | A link to the NWS fire weather forecast zone containing this station. | [optional] [default to undefined]
**distance** | [**QuantitativeValue**](QuantitativeValue.md) |  | [optional] [default to undefined]
**bearing** | [**QuantitativeValue**](QuantitativeValue.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ObservationStationJsonLd } from './api';

const instance: ObservationStationJsonLd = {
    context,
    geometry,
    id,
    type,
    elevation,
    stationIdentifier,
    name,
    timeZone,
    provider,
    subProvider,
    forecast,
    county,
    fireWeatherZone,
    distance,
    bearing,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
