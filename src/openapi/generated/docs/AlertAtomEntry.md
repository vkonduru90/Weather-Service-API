# AlertAtomEntry

An alert entry in an Atom feed

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [optional] [default to undefined]
**updated** | **string** |  | [optional] [default to undefined]
**published** | **string** |  | [optional] [default to undefined]
**author** | [**AlertAtomEntryAuthor**](AlertAtomEntryAuthor.md) |  | [optional] [default to undefined]
**summary** | **string** |  | [optional] [default to undefined]
**event** | **string** |  | [optional] [default to undefined]
**sent** | **string** |  | [optional] [default to undefined]
**effective** | **string** |  | [optional] [default to undefined]
**expires** | **string** |  | [optional] [default to undefined]
**status** | **string** |  | [optional] [default to undefined]
**msgType** | **string** |  | [optional] [default to undefined]
**category** | **string** |  | [optional] [default to undefined]
**urgency** | **string** |  | [optional] [default to undefined]
**severity** | **string** |  | [optional] [default to undefined]
**certainty** | **string** |  | [optional] [default to undefined]
**areaDesc** | **string** |  | [optional] [default to undefined]
**polygon** | **string** |  | [optional] [default to undefined]
**geocode** | [**Array&lt;AlertXMLParameter&gt;**](AlertXMLParameter.md) |  | [optional] [default to undefined]
**parameter** | [**Array&lt;AlertXMLParameter&gt;**](AlertXMLParameter.md) |  | [optional] [default to undefined]

## Example

```typescript
import { AlertAtomEntry } from './api';

const instance: AlertAtomEntry = {
    id,
    updated,
    published,
    author,
    summary,
    event,
    sent,
    effective,
    expires,
    status,
    msgType,
    category,
    urgency,
    severity,
    certainty,
    areaDesc,
    polygon,
    geocode,
    parameter,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
