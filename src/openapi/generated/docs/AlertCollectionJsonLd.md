# AlertCollectionJsonLd


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** | A title describing the alert collection | [optional] [default to undefined]
**updated** | **string** | The last time a change occurred to this collection | [optional] [default to undefined]
**pagination** | [**PaginationInfo**](PaginationInfo.md) |  | [optional] [default to undefined]
**context** | [**JsonLdContext**](JsonLdContext.md) |  | [optional] [default to undefined]
**graph** | [**Array&lt;Alert&gt;**](Alert.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AlertCollectionJsonLd } from './api';

const instance: AlertCollectionJsonLd = {
    title,
    updated,
    pagination,
    context,
    graph,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
