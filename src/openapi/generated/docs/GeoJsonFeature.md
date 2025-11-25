# GeoJsonFeature

A GeoJSON feature. Please refer to IETF RFC 7946 for information on the GeoJSON format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**JsonLdContext**](JsonLdContext.md) |  | [optional] [default to undefined]
**id** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [default to undefined]
**geometry** | [**GeoJsonGeometry**](GeoJsonGeometry.md) |  | [default to undefined]
**properties** | **object** |  | [default to undefined]

## Example

```typescript
import { GeoJsonFeature } from './api';

const instance: GeoJsonFeature = {
    context,
    id,
    type,
    geometry,
    properties,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
