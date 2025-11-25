# GeoJsonFeatureCollection

A GeoJSON feature collection. Please refer to IETF RFC 7946 for information on the GeoJSON format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**JsonLdContext**](JsonLdContext.md) |  | [optional] [default to undefined]
**type** | **string** |  | [default to undefined]
**features** | [**Array&lt;GeoJsonFeature&gt;**](GeoJsonFeature.md) |  | [default to undefined]

## Example

```typescript
import { GeoJsonFeatureCollection } from './api';

const instance: GeoJsonFeatureCollection = {
    context,
    type,
    features,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
