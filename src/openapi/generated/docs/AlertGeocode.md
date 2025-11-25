# AlertGeocode

Lists of codes for NWS public zones and counties affected by the alert.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UGC** | **Array&lt;string&gt;** | A list of NWS public zone or county identifiers. | [optional] [default to undefined]
**SAME** | **Array&lt;string&gt;** | A list of SAME (Specific Area Message Encoding) codes for affected counties. | [optional] [default to undefined]

## Example

```typescript
import { AlertGeocode } from './api';

const instance: AlertGeocode = {
    UGC,
    SAME,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
