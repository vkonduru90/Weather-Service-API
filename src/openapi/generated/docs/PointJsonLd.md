# PointJsonLd


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**JsonLdContext**](JsonLdContext.md) |  | [default to undefined]
**geometry** | **string** | A geometry represented in Well-Known Text (WKT) format. | [default to undefined]
**id** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to undefined]
**cwa** | [**NWSForecastOfficeId**](NWSForecastOfficeId.md) |  | [optional] [default to undefined]
**forecastOffice** | **string** |  | [optional] [default to undefined]
**gridId** | [**NWSForecastOfficeId**](NWSForecastOfficeId.md) |  | [optional] [default to undefined]
**gridX** | **number** |  | [optional] [default to undefined]
**gridY** | **number** |  | [optional] [default to undefined]
**forecast** | **string** |  | [optional] [default to undefined]
**forecastHourly** | **string** |  | [optional] [default to undefined]
**forecastGridData** | **string** |  | [optional] [default to undefined]
**observationStations** | **string** |  | [optional] [default to undefined]
**relativeLocation** | [**PointRelativeLocation**](PointRelativeLocation.md) |  | [optional] [default to undefined]
**forecastZone** | **string** |  | [optional] [default to undefined]
**county** | **string** |  | [optional] [default to undefined]
**fireWeatherZone** | **string** |  | [optional] [default to undefined]
**timeZone** | **string** |  | [optional] [default to undefined]
**radarStation** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { PointJsonLd } from './api';

const instance: PointJsonLd = {
    context,
    geometry,
    id,
    type,
    cwa,
    forecastOffice,
    gridId,
    gridX,
    gridY,
    forecast,
    forecastHourly,
    forecastGridData,
    observationStations,
    relativeLocation,
    forecastZone,
    county,
    fireWeatherZone,
    timeZone,
    radarStation,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
