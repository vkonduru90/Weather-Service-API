# AlertCollectionGeoJson


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**JsonLdContext**](JsonLdContext.md) |  | [optional] [default to undefined]
**type** | **string** |  | [default to undefined]
**features** | [**Array&lt;AlertCollectionGeoJsonAllOfFeatures&gt;**](AlertCollectionGeoJsonAllOfFeatures.md) |  | [default to undefined]
**title** | **string** | A title describing the alert collection | [optional] [default to undefined]
**updated** | **string** | The last time a change occurred to this collection | [optional] [default to undefined]
**pagination** | [**PaginationInfo**](PaginationInfo.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AlertCollectionGeoJson } from './api';

const instance: AlertCollectionGeoJson = {
    context,
    type,
    features,
    title,
    updated,
    pagination,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
