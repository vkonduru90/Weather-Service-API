# Zone


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**JsonLdContext**](JsonLdContext.md) |  | [optional] [default to undefined]
**geometry** | **string** | A geometry represented in Well-Known Text (WKT) format. | [optional] [default to undefined]
**id** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [optional] [default to undefined]
**id** | **string** | UGC identifier for a NWS forecast zone or county. The first two letters will correspond to either a state code or marine area code (see #/components/schemas/StateTerritoryCode and #/components/schemas/MarineAreaCode for lists of valid letter combinations). The third letter will be Z for public/fire zone or C for county.  | [optional] [default to undefined]
**type** | [**NWSZoneType**](NWSZoneType.md) |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**effectiveDate** | **string** |  | [optional] [default to undefined]
**expirationDate** | **string** |  | [optional] [default to undefined]
**state** | **string** |  | [optional] [default to undefined]
**forecastOffice** | **string** |  | [optional] [default to undefined]
**gridIdentifier** | **string** |  | [optional] [default to undefined]
**awipsLocationIdentifier** | **string** |  | [optional] [default to undefined]
**cwa** | [**Array&lt;NWSForecastOfficeId&gt;**](NWSForecastOfficeId.md) |  | [optional] [default to undefined]
**forecastOffices** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**timeZone** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**observationStations** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**radarStation** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { Zone } from './api';

const instance: Zone = {
    context,
    geometry,
    id,
    type,
    id,
    type,
    name,
    effectiveDate,
    expirationDate,
    state,
    forecastOffice,
    gridIdentifier,
    awipsLocationIdentifier,
    cwa,
    forecastOffices,
    timeZone,
    observationStations,
    radarStation,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
