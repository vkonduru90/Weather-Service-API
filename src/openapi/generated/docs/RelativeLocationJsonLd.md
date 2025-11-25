# RelativeLocationJsonLd


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **string** |  | [optional] [default to undefined]
**state** | **string** |  | [optional] [default to undefined]
**distance** | [**QuantitativeValue**](QuantitativeValue.md) |  | [optional] [default to undefined]
**bearing** | [**QuantitativeValue**](QuantitativeValue.md) |  | [optional] [default to undefined]
**geometry** | **string** | A geometry represented in Well-Known Text (WKT) format. | [default to undefined]

## Example

```typescript
import { RelativeLocationJsonLd } from './api';

const instance: RelativeLocationJsonLd = {
    city,
    state,
    distance,
    bearing,
    geometry,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
