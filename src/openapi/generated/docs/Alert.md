# Alert

An object representing a public alert message. Unless otherwise noted, the fields in this object correspond to the National Weather Service CAP v1.2 specification, which extends the OASIS Common Alerting Protocol (CAP) v1.2 specification and USA Integrated Public Alert and Warning System (IPAWS) Profile v1.0. Refer to this documentation for more complete information. http://docs.oasis-open.org/emergency/cap/v1.2/CAP-v1.2-os.html http://docs.oasis-open.org/emergency/cap/v1.2/ipaws-profile/v1.0/cs01/cap-v1.2-ipaws-profile-cs01.html https://vlab.noaa.gov/web/nws-common-alerting-protocol/cap-documentation 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | The identifier of the alert message. | [optional] [default to undefined]
**areaDesc** | **string** | A textual description of the area affected by the alert. | [optional] [default to undefined]
**geocode** | [**AlertGeocode**](AlertGeocode.md) |  | [optional] [default to undefined]
**affectedZones** | **Array&lt;string&gt;** | An array of API links for zones affected by the alert. This is an API-specific extension field and is not part of the CAP specification.  | [optional] [default to undefined]
**references** | [**Array&lt;AlertReferencesInner&gt;**](AlertReferencesInner.md) | A list of prior alerts that this alert updates or replaces. | [optional] [default to undefined]
**sent** | **string** | The time of the origination of the alert message. | [optional] [default to undefined]
**effective** | **string** | The effective time of the information of the alert message. | [optional] [default to undefined]
**onset** | **string** | The expected time of the beginning of the subject event of the alert message. | [optional] [default to undefined]
**expires** | **string** | The expiry time of the information of the alert message. | [optional] [default to undefined]
**ends** | **string** | The expected end time of the subject event of the alert message. | [optional] [default to undefined]
**status** | [**AlertStatus**](AlertStatus.md) |  | [optional] [default to undefined]
**messageType** | [**AlertMessageType**](AlertMessageType.md) |  | [optional] [default to undefined]
**category** | **string** | The code denoting the category of the subject event of the alert message. | [optional] [default to undefined]
**severity** | [**AlertSeverity**](AlertSeverity.md) |  | [optional] [default to undefined]
**certainty** | [**AlertCertainty**](AlertCertainty.md) |  | [optional] [default to undefined]
**urgency** | [**AlertUrgency**](AlertUrgency.md) |  | [optional] [default to undefined]
**event** | **string** | The text denoting the type of the subject event of the alert message. | [optional] [default to undefined]
**sender** | **string** | Email address of the NWS webmaster. | [optional] [default to undefined]
**senderName** | **string** | The text naming the originator of the alert message. | [optional] [default to undefined]
**headline** | **string** | The text headline of the alert message. | [optional] [default to undefined]
**description** | **string** | The text describing the subject event of the alert message. | [optional] [default to undefined]
**instruction** | **string** | The text describing the recommended action to be taken by recipients of the alert message.  | [optional] [default to undefined]
**response** | **string** | The code denoting the type of action recommended for the target audience. This corresponds to responseType in the CAP specification.  | [optional] [default to undefined]
**parameters** | **{ [key: string]: Array&lt;any&gt; | undefined; }** | System-specific additional parameters associated with the alert message. The keys in this object correspond to parameter definitions in the NWS CAP specification.  | [optional] [default to undefined]
**scope** | **string** | The code denoting the intended distribution of the alert message. | [optional] [default to undefined]
**code** | **string** | The code denoting the special handling of the alert message. | [optional] [default to undefined]
**language** | **string** | The code denoting the language of the info sub-element of the alert message. | [optional] [default to undefined]
**web** | **string** | The identifier of the hyperlink associating additional information within the alert message. | [optional] [default to undefined]
**eventCode** | **{ [key: string]: Array&lt;any&gt; | undefined; }** | System-specific code identifiying the event type of the alert message The keys in this object correspond to eventCode definitions in the NWS CAP specification.  | [optional] [default to undefined]

## Example

```typescript
import { Alert } from './api';

const instance: Alert = {
    id,
    areaDesc,
    geocode,
    affectedZones,
    references,
    sent,
    effective,
    onset,
    expires,
    ends,
    status,
    messageType,
    category,
    severity,
    certainty,
    urgency,
    event,
    sender,
    senderName,
    headline,
    description,
    instruction,
    response,
    parameters,
    scope,
    code,
    language,
    web,
    eventCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
