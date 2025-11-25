# PointRelativeLocation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**JsonLdContext**](JsonLdContext.md) |  | [optional] [default to undefined]
**id** | **string** |  | [optional] [default to undefined]
**type** | **string** |  | [default to undefined]
**geometry** | **string** | A geometry represented in Well-Known Text (WKT) format. | [default to undefined]
**properties** | [**RelativeLocation**](RelativeLocation.md) |  | [default to undefined]
**city** | **string** |  | [optional] [default to undefined]
**state** | **string** |  | [optional] [default to undefined]
**distance** | [**QuantitativeValue**](QuantitativeValue.md) |  | [optional] [default to undefined]
**bearing** | [**QuantitativeValue**](QuantitativeValue.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PointRelativeLocation } from './api';

const instance: PointRelativeLocation = {
    context,
    id,
    type,
    geometry,
    properties,
    city,
    state,
    distance,
    bearing,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
