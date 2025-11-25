# AlertAtomFeed

An alert feed in Atom format

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**generator** | **string** |  | [optional] [default to undefined]
**updated** | **string** |  | [optional] [default to undefined]
**author** | [**AlertAtomFeedAuthor**](AlertAtomFeedAuthor.md) |  | [optional] [default to undefined]
**title** | **string** |  | [optional] [default to undefined]
**entry** | [**Array&lt;AlertAtomEntry&gt;**](AlertAtomEntry.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AlertAtomFeed } from './api';

const instance: AlertAtomFeed = {
    id,
    generator,
    updated,
    author,
    title,
    entry,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
