# AlertsActiveCount200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **number** | The total number of active alerts | [optional] [default to undefined]
**land** | **number** | The total number of active alerts affecting land zones | [optional] [default to undefined]
**marine** | **number** | The total number of active alerts affecting marine zones | [optional] [default to undefined]
**regions** | **{ [key: string]: number | undefined; }** | Active alerts by marine region | [optional] [default to undefined]
**areas** | **{ [key: string]: number | undefined; }** | Active alerts by area (state/territory) | [optional] [default to undefined]
**zones** | **{ [key: string]: number | undefined; }** | Active alerts by NWS public zone or county code | [optional] [default to undefined]

## Example

```typescript
import { AlertsActiveCount200Response } from './api';

const instance: AlertsActiveCount200Response = {
    total,
    land,
    marine,
    regions,
    areas,
    zones,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
