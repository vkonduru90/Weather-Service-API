# GeoJSONPoint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**coordinates** | **Array&lt;number&gt;** | A GeoJSON coordinate. Please refer to IETF RFC 7946 for information on the GeoJSON format. | [default to undefined]
**bbox** | **Array&lt;number&gt;** | A GeoJSON bounding box. Please refer to IETF RFC 7946 for information on the GeoJSON format. | [optional] [default to undefined]

## Example

```typescript
import { GeoJSONPoint } from './api';

const instance: GeoJSONPoint = {
    type,
    coordinates,
    bbox,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
