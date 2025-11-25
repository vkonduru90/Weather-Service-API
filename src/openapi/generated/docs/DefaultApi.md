# DefaultApi

All URIs are relative to *https://api.weather.gov*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**alertsActive**](#alertsactive) | **GET** /alerts/active | |
|[**alertsActiveArea**](#alertsactivearea) | **GET** /alerts/active/area/{area} | |
|[**alertsActiveCount**](#alertsactivecount) | **GET** /alerts/active/count | |
|[**alertsActiveRegion**](#alertsactiveregion) | **GET** /alerts/active/region/{region} | |
|[**alertsActiveZone**](#alertsactivezone) | **GET** /alerts/active/zone/{zoneId} | |
|[**alertsQuery**](#alertsquery) | **GET** /alerts | |
|[**alertsSingle**](#alertssingle) | **GET** /alerts/{id} | |
|[**alertsTypes**](#alertstypes) | **GET** /alerts/types | |
|[**cwa**](#cwa) | **GET** /aviation/cwsus/{cwsuId}/cwas/{date}/{sequence} | |
|[**cwas**](#cwas) | **GET** /aviation/cwsus/{cwsuId}/cwas | |
|[**cwsu**](#cwsu) | **GET** /aviation/cwsus/{cwsuId} | |
|[**glossary**](#glossary) | **GET** /glossary | |
|[**gridpoint**](#gridpoint) | **GET** /gridpoints/{wfo}/{x},{y} | |
|[**gridpointForecast**](#gridpointforecast) | **GET** /gridpoints/{wfo}/{x},{y}/forecast | |
|[**gridpointForecastHourly**](#gridpointforecasthourly) | **GET** /gridpoints/{wfo}/{x},{y}/forecast/hourly | |
|[**gridpointStations**](#gridpointstations) | **GET** /gridpoints/{wfo}/{x},{y}/stations | |
|[**icons**](#icons) | **GET** /icons/{set}/{timeOfDay}/{first} | |
|[**iconsDualCondition**](#iconsdualcondition) | **GET** /icons/{set}/{timeOfDay}/{first}/{second} | |
|[**iconsSummary**](#iconssummary) | **GET** /icons | |
|[**latestProductTypeLocation**](#latestproducttypelocation) | **GET** /products/types/{typeId}/locations/{locationId}/latest | |
|[**locationProducts**](#locationproducts) | **GET** /products/locations/{locationId}/types | |
|[**obsStation**](#obsstation) | **GET** /stations/{stationId} | |
|[**obsStations**](#obsstations) | **GET** /stations | |
|[**office**](#office) | **GET** /offices/{officeId} | |
|[**officeHeadline**](#officeheadline) | **GET** /offices/{officeId}/headlines/{headlineId} | |
|[**officeHeadlines**](#officeheadlines) | **GET** /offices/{officeId}/headlines | |
|[**point**](#point) | **GET** /points/{latitude},{longitude} | |
|[**pointRadio**](#pointradio) | **GET** /points/{latitude},{longitude}/radio | |
|[**pointStations**](#pointstations) | **GET** /points/{latitude},{longitude}/stations | |
|[**product**](#product) | **GET** /products/{productId} | |
|[**productLocations**](#productlocations) | **GET** /products/locations | |
|[**productTypes**](#producttypes) | **GET** /products/types | |
|[**productsQuery**](#productsquery) | **GET** /products | |
|[**productsType**](#productstype) | **GET** /products/types/{typeId} | |
|[**productsTypeLocation**](#productstypelocation) | **GET** /products/types/{typeId}/locations/{locationId} | |
|[**productsTypeLocations**](#productstypelocations) | **GET** /products/types/{typeId}/locations | |
|[**radarProfiler**](#radarprofiler) | **GET** /radar/profilers/{stationId} | |
|[**radarQueue**](#radarqueue) | **GET** /radar/queues/{host} | |
|[**radarServer**](#radarserver) | **GET** /radar/servers/{id} | |
|[**radarServers**](#radarservers) | **GET** /radar/servers | |
|[**radarStation**](#radarstation) | **GET** /radar/stations/{stationId} | |
|[**radarStationAlarms**](#radarstationalarms) | **GET** /radar/stations/{stationId}/alarms | |
|[**radarStations**](#radarstations) | **GET** /radar/stations | |
|[**satelliteThumbnails**](#satellitethumbnails) | **GET** /thumbnails/satellite/{area} | |
|[**sigmet**](#sigmet) | **GET** /aviation/sigmets/{atsu}/{date}/{time} | |
|[**sigmetQuery**](#sigmetquery) | **GET** /aviation/sigmets | |
|[**sigmetsByATSU**](#sigmetsbyatsu) | **GET** /aviation/sigmets/{atsu} | |
|[**sigmetsByATSUByDate**](#sigmetsbyatsubydate) | **GET** /aviation/sigmets/{atsu}/{date} | |
|[**stationObservationLatest**](#stationobservationlatest) | **GET** /stations/{stationId}/observations/latest | |
|[**stationObservationList**](#stationobservationlist) | **GET** /stations/{stationId}/observations | |
|[**stationObservationTime**](#stationobservationtime) | **GET** /stations/{stationId}/observations/{time} | |
|[**taf**](#taf) | **GET** /stations/{stationId}/tafs/{date}/{time} | |
|[**tafs**](#tafs) | **GET** /stations/{stationId}/tafs | |
|[**zone**](#zone) | **GET** /zones/{type}/{zoneId} | |
|[**zoneForecast**](#zoneforecast) | **GET** /zones/{type}/{zoneId}/forecast | |
|[**zoneList**](#zonelist) | **GET** /zones | |
|[**zoneListType**](#zonelisttype) | **GET** /zones/{type} | |
|[**zoneObs**](#zoneobs) | **GET** /zones/forecast/{zoneId}/observations | |
|[**zoneStations**](#zonestations) | **GET** /zones/forecast/{zoneId}/stations | |

# **alertsActive**
> AlertCollectionGeoJson alertsActive()

Returns all currently active alerts

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let status: Array<'actual' | 'exercise' | 'system' | 'test' | 'draft'>; //Status (actual, exercise, system, test, draft) (optional) (default to undefined)
let messageType: Array<'alert' | 'update' | 'cancel'>; //Message type (alert, update, cancel) (optional) (default to undefined)
let event: Array<string>; //Event name (optional) (default to undefined)
let code: Array<string>; //Event code (optional) (default to undefined)
let area: Array<AreaCode>; //State/territory code or marine area code This parameter is incompatible with the following parameters: point, region, region_type, zone  (optional) (default to undefined)
let point: string; //Point (latitude,longitude) This parameter is incompatible with the following parameters: area, region, region_type, zone  (optional) (default to undefined)
let region: Array<MarineRegionCode>; //Marine region code This parameter is incompatible with the following parameters: area, point, region_type, zone  (optional) (default to undefined)
let regionType: 'land' | 'marine'; //Region type (land or marine) This parameter is incompatible with the following parameters: area, point, region, zone  (optional) (default to undefined)
let zone: Array<string>; //Zone ID (forecast or county) This parameter is incompatible with the following parameters: area, point, region, region_type  (optional) (default to undefined)
let urgency: Array<AlertUrgency>; //Urgency (immediate, expected, future, past, unknown) (optional) (default to undefined)
let severity: Array<AlertSeverity>; //Severity (extreme, severe, moderate, minor, unknown) (optional) (default to undefined)
let certainty: Array<AlertCertainty>; //Certainty (observed, likely, possible, unlikely, unknown) (optional) (default to undefined)

const { status, data } = await apiInstance.alertsActive(
    status,
    messageType,
    event,
    code,
    area,
    point,
    region,
    regionType,
    zone,
    urgency,
    severity,
    certainty
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **status** | **Array<&#39;actual&#39; &#124; &#39;exercise&#39; &#124; &#39;system&#39; &#124; &#39;test&#39; &#124; &#39;draft&#39;>** | Status (actual, exercise, system, test, draft) | (optional) defaults to undefined|
| **messageType** | **Array<&#39;alert&#39; &#124; &#39;update&#39; &#124; &#39;cancel&#39;>** | Message type (alert, update, cancel) | (optional) defaults to undefined|
| **event** | **Array&lt;string&gt;** | Event name | (optional) defaults to undefined|
| **code** | **Array&lt;string&gt;** | Event code | (optional) defaults to undefined|
| **area** | **Array&lt;AreaCode&gt;** | State/territory code or marine area code This parameter is incompatible with the following parameters: point, region, region_type, zone  | (optional) defaults to undefined|
| **point** | [**string**] | Point (latitude,longitude) This parameter is incompatible with the following parameters: area, region, region_type, zone  | (optional) defaults to undefined|
| **region** | **Array&lt;MarineRegionCode&gt;** | Marine region code This parameter is incompatible with the following parameters: area, point, region_type, zone  | (optional) defaults to undefined|
| **regionType** | [**&#39;land&#39; | &#39;marine&#39;**]**Array<&#39;land&#39; &#124; &#39;marine&#39;>** | Region type (land or marine) This parameter is incompatible with the following parameters: area, point, region, zone  | (optional) defaults to undefined|
| **zone** | **Array&lt;string&gt;** | Zone ID (forecast or county) This parameter is incompatible with the following parameters: area, point, region, region_type  | (optional) defaults to undefined|
| **urgency** | **Array&lt;AlertUrgency&gt;** | Urgency (immediate, expected, future, past, unknown) | (optional) defaults to undefined|
| **severity** | **Array&lt;AlertSeverity&gt;** | Severity (extreme, severe, moderate, minor, unknown) | (optional) defaults to undefined|
| **certainty** | **Array&lt;AlertCertainty&gt;** | Certainty (observed, likely, possible, unlikely, unknown) | (optional) defaults to undefined|


### Return type

**AlertCollectionGeoJson**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/geo+json, application/ld+json, application/atom+xml, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A collection of alerts. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**301** | Certain common queries may be redirected to discrete URLs |  -  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alertsActiveArea**
> AlertCollectionGeoJson alertsActiveArea()

Returns active alerts for the given area (state or marine area)

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    AreaCode
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let area: AreaCode; //State/area ID (default to undefined)

const { status, data } = await apiInstance.alertsActiveArea(
    area
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **area** | **AreaCode** | State/area ID | defaults to undefined|


### Return type

**AlertCollectionGeoJson**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/geo+json, application/ld+json, application/atom+xml, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A collection of alerts. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alertsActiveCount**
> AlertsActiveCount200Response alertsActiveCount()

Returns info on the number of active alerts

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.alertsActiveCount();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AlertsActiveCount200Response**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A data structure showing the counts of active alerts broken down by various categories |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alertsActiveRegion**
> AlertCollectionGeoJson alertsActiveRegion()

Returns active alerts for the given marine region

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let region: MarineRegionCode; //Marine region ID (default to undefined)

const { status, data } = await apiInstance.alertsActiveRegion(
    region
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **region** | **MarineRegionCode** | Marine region ID | defaults to undefined|


### Return type

**AlertCollectionGeoJson**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/geo+json, application/ld+json, application/atom+xml, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A collection of alerts. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alertsActiveZone**
> AlertCollectionGeoJson alertsActiveZone()

Returns active alerts for the given NWS public zone or county

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let zoneId: string; //NWS public zone/county identifier (default to undefined)

const { status, data } = await apiInstance.alertsActiveZone(
    zoneId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **zoneId** | [**string**] | NWS public zone/county identifier | defaults to undefined|


### Return type

**AlertCollectionGeoJson**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/geo+json, application/ld+json, application/atom+xml, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A collection of alerts. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alertsQuery**
> AlertCollectionGeoJson alertsQuery()

Returns all alerts

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let active: boolean; //List only active alerts (use /alerts/active endpoints instead) (optional) (default to undefined)
let start: string; //Start time (optional) (default to undefined)
let end: string; //End time (optional) (default to undefined)
let status: Array<'actual' | 'exercise' | 'system' | 'test' | 'draft'>; //Status (actual, exercise, system, test, draft) (optional) (default to undefined)
let messageType: Array<'alert' | 'update' | 'cancel'>; //Message type (alert, update, cancel) (optional) (default to undefined)
let event: Array<string>; //Event name (optional) (default to undefined)
let code: Array<string>; //Event code (optional) (default to undefined)
let area: Array<AreaCode>; //State/territory code or marine area code This parameter is incompatible with the following parameters: point, region, region_type, zone  (optional) (default to undefined)
let point: string; //Point (latitude,longitude) This parameter is incompatible with the following parameters: area, region, region_type, zone  (optional) (default to undefined)
let region: Array<MarineRegionCode>; //Marine region code This parameter is incompatible with the following parameters: area, point, region_type, zone  (optional) (default to undefined)
let regionType: 'land' | 'marine'; //Region type (land or marine) This parameter is incompatible with the following parameters: area, point, region, zone  (optional) (default to undefined)
let zone: Array<string>; //Zone ID (forecast or county) This parameter is incompatible with the following parameters: area, point, region, region_type  (optional) (default to undefined)
let urgency: Array<AlertUrgency>; //Urgency (immediate, expected, future, past, unknown) (optional) (default to undefined)
let severity: Array<AlertSeverity>; //Severity (extreme, severe, moderate, minor, unknown) (optional) (default to undefined)
let certainty: Array<AlertCertainty>; //Certainty (observed, likely, possible, unlikely, unknown) (optional) (default to undefined)
let limit: number; //Limit (optional) (default to 500)
let cursor: string; //Pagination cursor (optional) (default to undefined)

const { status, data } = await apiInstance.alertsQuery(
    active,
    start,
    end,
    status,
    messageType,
    event,
    code,
    area,
    point,
    region,
    regionType,
    zone,
    urgency,
    severity,
    certainty,
    limit,
    cursor
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **active** | [**boolean**] | List only active alerts (use /alerts/active endpoints instead) | (optional) defaults to undefined|
| **start** | [**string**] | Start time | (optional) defaults to undefined|
| **end** | [**string**] | End time | (optional) defaults to undefined|
| **status** | **Array<&#39;actual&#39; &#124; &#39;exercise&#39; &#124; &#39;system&#39; &#124; &#39;test&#39; &#124; &#39;draft&#39;>** | Status (actual, exercise, system, test, draft) | (optional) defaults to undefined|
| **messageType** | **Array<&#39;alert&#39; &#124; &#39;update&#39; &#124; &#39;cancel&#39;>** | Message type (alert, update, cancel) | (optional) defaults to undefined|
| **event** | **Array&lt;string&gt;** | Event name | (optional) defaults to undefined|
| **code** | **Array&lt;string&gt;** | Event code | (optional) defaults to undefined|
| **area** | **Array&lt;AreaCode&gt;** | State/territory code or marine area code This parameter is incompatible with the following parameters: point, region, region_type, zone  | (optional) defaults to undefined|
| **point** | [**string**] | Point (latitude,longitude) This parameter is incompatible with the following parameters: area, region, region_type, zone  | (optional) defaults to undefined|
| **region** | **Array&lt;MarineRegionCode&gt;** | Marine region code This parameter is incompatible with the following parameters: area, point, region_type, zone  | (optional) defaults to undefined|
| **regionType** | [**&#39;land&#39; | &#39;marine&#39;**]**Array<&#39;land&#39; &#124; &#39;marine&#39;>** | Region type (land or marine) This parameter is incompatible with the following parameters: area, point, region, zone  | (optional) defaults to undefined|
| **zone** | **Array&lt;string&gt;** | Zone ID (forecast or county) This parameter is incompatible with the following parameters: area, point, region, region_type  | (optional) defaults to undefined|
| **urgency** | **Array&lt;AlertUrgency&gt;** | Urgency (immediate, expected, future, past, unknown) | (optional) defaults to undefined|
| **severity** | **Array&lt;AlertSeverity&gt;** | Severity (extreme, severe, moderate, minor, unknown) | (optional) defaults to undefined|
| **certainty** | **Array&lt;AlertCertainty&gt;** | Certainty (observed, likely, possible, unlikely, unknown) | (optional) defaults to undefined|
| **limit** | [**number**] | Limit | (optional) defaults to 500|
| **cursor** | [**string**] | Pagination cursor | (optional) defaults to undefined|


### Return type

**AlertCollectionGeoJson**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/geo+json, application/ld+json, application/atom+xml, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A collection of alerts. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**301** | Certain common queries may be redirected to discrete URLs |  -  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alertsSingle**
> AlertGeoJson alertsSingle()

Returns a specific alert

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; //Alert identifier (default to undefined)

const { status, data } = await apiInstance.alertsSingle(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Alert identifier | defaults to undefined|


### Return type

**AlertGeoJson**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/geo+json, application/ld+json, application/cap+xml, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | An alert record |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **alertsTypes**
> AlertsTypes200Response alertsTypes()

Returns a list of alert types

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.alertsTypes();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**AlertsTypes200Response**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A list of recognized event types |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cwa**
> CenterWeatherAdvisoryGeoJson cwa()

Returns a list of Center Weather Advisories from a CWSU

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let cwsuId: NWSCenterWeatherServiceUnitId; //NWS CWSU ID (default to undefined)
let date: string; //Date (YYYY-MM-DD format) (default to undefined)
let sequence: number; //Sequence number (default to undefined)

const { status, data } = await apiInstance.cwa(
    cwsuId,
    date,
    sequence
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cwsuId** | **NWSCenterWeatherServiceUnitId** | NWS CWSU ID | defaults to undefined|
| **date** | [**string**] | Date (YYYY-MM-DD format) | defaults to undefined|
| **sequence** | [**number**] | Sequence number | defaults to undefined|


### Return type

**CenterWeatherAdvisoryGeoJson**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/geo+json, application/vnd.noaa.uswx+xml, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  -  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cwas**
> CenterWeatherAdvisoryCollectionGeoJson cwas()

Returns a list of Center Weather Advisories from a CWSU

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let cwsuId: NWSCenterWeatherServiceUnitId; //NWS CWSU ID (default to undefined)

const { status, data } = await apiInstance.cwas(
    cwsuId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cwsuId** | **NWSCenterWeatherServiceUnitId** | NWS CWSU ID | defaults to undefined|


### Return type

**CenterWeatherAdvisoryCollectionGeoJson**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/geo+json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  -  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cwsu**
> Office cwsu()

Returns metadata about a Center Weather Service Unit

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let cwsuId: NWSCenterWeatherServiceUnitId; //NWS CWSU ID (default to undefined)

const { status, data } = await apiInstance.cwsu(
    cwsuId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cwsuId** | **NWSCenterWeatherServiceUnitId** | NWS CWSU ID | defaults to undefined|


### Return type

**Office**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  -  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **glossary**
> Glossary200Response glossary()

Returns glossary terms

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.glossary();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Glossary200Response**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A set of glossary terms |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **gridpoint**
> GridpointGeoJson gridpoint()

Returns raw numerical forecast data for a 2.5km grid area

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let wfo: NWSForecastOfficeId; //Forecast office ID (default to undefined)
let x: number; //Forecast grid X coordinate (default to undefined)
let y: number; //Forecast grid Y coordinate (default to undefined)

const { status, data } = await apiInstance.gridpoint(
    wfo,
    x,
    y
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **wfo** | **NWSForecastOfficeId** | Forecast office ID | defaults to undefined|
| **x** | [**number**] | Forecast grid X coordinate | defaults to undefined|
| **y** | [**number**] | Forecast grid Y coordinate | defaults to undefined|


### Return type

**GridpointGeoJson**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/geo+json, application/ld+json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Gridpoint forecast data |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **gridpointForecast**
> Gridpoint12hForecastGeoJson gridpointForecast()

Returns a textual forecast for a 2.5km grid area

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let wfo: NWSForecastOfficeId; //Forecast office ID (default to undefined)
let x: number; //Forecast grid X coordinate (default to undefined)
let y: number; //Forecast grid Y coordinate (default to undefined)
let featureFlags: Array<'forecast_temperature_qv' | 'forecast_wind_speed_qv'>; //Enable future and experimental features (see documentation for more info): * forecast_temperature_qv: Represent temperature as QuantitativeValue * forecast_wind_speed_qv: Represent wind speed as QuantitativeValue  (optional) (default to undefined)
let units: GridpointForecastUnits; //Use US customary or SI (metric) units in textual output (optional) (default to undefined)

const { status, data } = await apiInstance.gridpointForecast(
    wfo,
    x,
    y,
    featureFlags,
    units
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **wfo** | **NWSForecastOfficeId** | Forecast office ID | defaults to undefined|
| **x** | [**number**] | Forecast grid X coordinate | defaults to undefined|
| **y** | [**number**] | Forecast grid Y coordinate | defaults to undefined|
| **featureFlags** | **Array<&#39;forecast_temperature_qv&#39; &#124; &#39;forecast_wind_speed_qv&#39;>** | Enable future and experimental features (see documentation for more info): * forecast_temperature_qv: Represent temperature as QuantitativeValue * forecast_wind_speed_qv: Represent wind speed as QuantitativeValue  | (optional) defaults to undefined|
| **units** | **GridpointForecastUnits** | Use US customary or SI (metric) units in textual output | (optional) defaults to undefined|


### Return type

**Gridpoint12hForecastGeoJson**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/geo+json, application/ld+json, application/vnd.noaa.dwml+xml, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A forecast for a gridpoint. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **gridpointForecastHourly**
> GridpointHourlyForecastGeoJson gridpointForecastHourly()

Returns a textual hourly forecast for a 2.5km grid area

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let wfo: NWSForecastOfficeId; //Forecast office ID (default to undefined)
let x: number; //Forecast grid X coordinate (default to undefined)
let y: number; //Forecast grid Y coordinate (default to undefined)
let featureFlags: Array<'forecast_temperature_qv' | 'forecast_wind_speed_qv'>; //Enable future and experimental features (see documentation for more info): * forecast_temperature_qv: Represent temperature as QuantitativeValue * forecast_wind_speed_qv: Represent wind speed as QuantitativeValue  (optional) (default to undefined)
let units: GridpointForecastUnits; //Use US customary or SI (metric) units in textual output (optional) (default to undefined)

const { status, data } = await apiInstance.gridpointForecastHourly(
    wfo,
    x,
    y,
    featureFlags,
    units
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **wfo** | **NWSForecastOfficeId** | Forecast office ID | defaults to undefined|
| **x** | [**number**] | Forecast grid X coordinate | defaults to undefined|
| **y** | [**number**] | Forecast grid Y coordinate | defaults to undefined|
| **featureFlags** | **Array<&#39;forecast_temperature_qv&#39; &#124; &#39;forecast_wind_speed_qv&#39;>** | Enable future and experimental features (see documentation for more info): * forecast_temperature_qv: Represent temperature as QuantitativeValue * forecast_wind_speed_qv: Represent wind speed as QuantitativeValue  | (optional) defaults to undefined|
| **units** | **GridpointForecastUnits** | Use US customary or SI (metric) units in textual output | (optional) defaults to undefined|


### Return type

**GridpointHourlyForecastGeoJson**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/geo+json, application/ld+json, application/vnd.noaa.dwml+xml, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A forecast for a gridpoint. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **gridpointStations**
> ObservationStationCollectionGeoJson gridpointStations()

Returns a list of observation stations usable for a given 2.5km grid area

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let wfo: NWSForecastOfficeId; //Forecast office ID (default to undefined)
let x: number; //Forecast grid X coordinate (default to undefined)
let y: number; //Forecast grid Y coordinate (default to undefined)
let limit: number; //Limit (optional) (default to 500)
let featureFlags: Array<'obs_station_provider'>; //Enable future and experimental features (see documentation for more info): * obs_station_provider: Include the data provider in the metadata about observation stations  (optional) (default to undefined)

const { status, data } = await apiInstance.gridpointStations(
    wfo,
    x,
    y,
    limit,
    featureFlags
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **wfo** | **NWSForecastOfficeId** | Forecast office ID | defaults to undefined|
| **x** | [**number**] | Forecast grid X coordinate | defaults to undefined|
| **y** | [**number**] | Forecast grid Y coordinate | defaults to undefined|
| **limit** | [**number**] | Limit | (optional) defaults to 500|
| **featureFlags** | **Array<&#39;obs_station_provider&#39;>** | Enable future and experimental features (see documentation for more info): * obs_station_provider: Include the data provider in the metadata about observation stations  | (optional) defaults to undefined|


### Return type

**ObservationStationCollectionGeoJson**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/geo+json, application/ld+json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A collection of observation stations. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **icons**
> File icons()

Returns a forecast icon. Icon services in API are deprecated.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    IconsSizeParameter
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let set: string; //. (default to undefined)
let timeOfDay: string; //. (default to undefined)
let first: string; //. (default to undefined)
let size: IconsSizeParameter; //Font size (optional) (default to undefined)
let fontsize: number; //Font size (optional) (default to undefined)

const { status, data } = await apiInstance.icons(
    set,
    timeOfDay,
    first,
    size,
    fontsize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **set** | [**string**] | . | defaults to undefined|
| **timeOfDay** | [**string**] | . | defaults to undefined|
| **first** | [**string**] | . | defaults to undefined|
| **size** | **IconsSizeParameter** | Font size | (optional) defaults to undefined|
| **fontsize** | [**number**] | Font size | (optional) defaults to undefined|


### Return type

**File**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/png, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iconsDualCondition**
> File iconsDualCondition()

Returns a forecast icon. Icon services in API are deprecated.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    IconsSizeParameter
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let set: string; //. (default to undefined)
let timeOfDay: string; //. (default to undefined)
let first: string; //. (default to undefined)
let second: string; //. (default to undefined)
let size: IconsSizeParameter; //Font size (optional) (default to undefined)
let fontsize: number; //Font size (optional) (default to undefined)

const { status, data } = await apiInstance.iconsDualCondition(
    set,
    timeOfDay,
    first,
    second,
    size,
    fontsize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **set** | [**string**] | . | defaults to undefined|
| **timeOfDay** | [**string**] | . | defaults to undefined|
| **first** | [**string**] | . | defaults to undefined|
| **second** | [**string**] | . | defaults to undefined|
| **size** | **IconsSizeParameter** | Font size | (optional) defaults to undefined|
| **fontsize** | [**number**] | Font size | (optional) defaults to undefined|


### Return type

**File**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/png, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iconsSummary**
> IconsSummary200Response iconsSummary()

Returns a list of icon codes and textual descriptions. Icon services in API are deprecated.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.iconsSummary();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**IconsSummary200Response**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **latestProductTypeLocation**
> TextProduct latestProductTypeLocation()

Returns latest text products of a given type for a given issuance location with product text

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let typeId: string; //. (default to undefined)
let locationId: string; //. (default to undefined)

const { status, data } = await apiInstance.latestProductTypeLocation(
    typeId,
    locationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **typeId** | [**string**] | . | defaults to undefined|
| **locationId** | [**string**] | . | defaults to undefined|


### Return type

**TextProduct**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **locationProducts**
> TextProductTypeCollection locationProducts()

Returns a list of valid text product types for a given issuance location

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let locationId: string; //. (default to undefined)

const { status, data } = await apiInstance.locationProducts(
    locationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **locationId** | [**string**] | . | defaults to undefined|


### Return type

**TextProductTypeCollection**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **obsStation**
> ObservationStationGeoJson obsStation()

Returns metadata about a given observation station

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let stationId: string; //Observation station ID (default to undefined)
let featureFlags: Array<'obs_station_provider'>; //Enable future and experimental features (see documentation for more info): * obs_station_provider: Include the data provider in the metadata about observation stations  (optional) (default to undefined)

const { status, data } = await apiInstance.obsStation(
    stationId,
    featureFlags
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **stationId** | [**string**] | Observation station ID | defaults to undefined|
| **featureFlags** | **Array<&#39;obs_station_provider&#39;>** | Enable future and experimental features (see documentation for more info): * obs_station_provider: Include the data provider in the metadata about observation stations  | (optional) defaults to undefined|


### Return type

**ObservationStationGeoJson**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/geo+json, application/ld+json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **obsStations**
> ObservationStationCollectionGeoJson obsStations()

Returns a list of observation stations.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: Array<string>; //Filter by observation station ID (optional) (default to undefined)
let state: Array<AreaCode>; //Filter by state/marine area code (optional) (default to undefined)
let limit: number; //Limit (optional) (default to 500)
let cursor: string; //Pagination cursor (optional) (default to undefined)
let featureFlags: Array<'obs_station_provider'>; //Enable future and experimental features (see documentation for more info): * obs_station_provider: Include the data provider in the metadata about observation stations  (optional) (default to undefined)

const { status, data } = await apiInstance.obsStations(
    id,
    state,
    limit,
    cursor,
    featureFlags
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | **Array&lt;string&gt;** | Filter by observation station ID | (optional) defaults to undefined|
| **state** | **Array&lt;AreaCode&gt;** | Filter by state/marine area code | (optional) defaults to undefined|
| **limit** | [**number**] | Limit | (optional) defaults to 500|
| **cursor** | [**string**] | Pagination cursor | (optional) defaults to undefined|
| **featureFlags** | **Array<&#39;obs_station_provider&#39;>** | Enable future and experimental features (see documentation for more info): * obs_station_provider: Include the data provider in the metadata about observation stations  | (optional) defaults to undefined|


### Return type

**ObservationStationCollectionGeoJson**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/geo+json, application/ld+json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A collection of observation stations. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **office**
> Office office()

Returns metadata about a NWS forecast office

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    NWSOfficeId
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let officeId: NWSOfficeId; //NWS office ID (default to undefined)

const { status, data } = await apiInstance.office(
    officeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **officeId** | **NWSOfficeId** | NWS office ID | defaults to undefined|


### Return type

**Office**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **officeHeadline**
> OfficeHeadline officeHeadline()

Returns a specific news headline for a given NWS office

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    NWSOfficeId
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let officeId: NWSOfficeId; //NWS office ID (default to undefined)
let headlineId: string; //Headline record ID (default to undefined)

const { status, data } = await apiInstance.officeHeadline(
    officeId,
    headlineId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **officeId** | **NWSOfficeId** | NWS office ID | defaults to undefined|
| **headlineId** | [**string**] | Headline record ID | defaults to undefined|


### Return type

**OfficeHeadline**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **officeHeadlines**
> OfficeHeadlineCollection officeHeadlines()

Returns a list of news headlines for a given NWS office

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    NWSOfficeId
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let officeId: NWSOfficeId; //NWS office ID (default to undefined)

const { status, data } = await apiInstance.officeHeadlines(
    officeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **officeId** | **NWSOfficeId** | NWS office ID | defaults to undefined|


### Return type

**OfficeHeadlineCollection**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **point**
> PointGeoJson point()

Returns metadata about a given latitude/longitude point

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let latitude: number; //Latitude (default to undefined)
let longitude: number; //Longitude (default to undefined)

const { status, data } = await apiInstance.point(
    latitude,
    longitude
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **latitude** | [**number**] | Latitude | defaults to undefined|
| **longitude** | [**number**] | Longitude | defaults to undefined|


### Return type

**PointGeoJson**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/geo+json, application/ld+json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pointRadio**
> any pointRadio()

Returns NOAA Weather Radio script for a latitude/longitude point

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let latitude: number; //Latitude (default to undefined)
let longitude: number; //Longitude (default to undefined)

const { status, data } = await apiInstance.pointRadio(
    latitude,
    longitude
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **latitude** | [**number**] | Latitude | defaults to undefined|
| **longitude** | [**number**] | Longitude | defaults to undefined|


### Return type

**any**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ssml+xml, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pointStations**
> ProblemDetail pointStations()

Returns a list of observation stations for a given point

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let latitude: number; //Latitude (default to undefined)
let longitude: number; //Longitude (default to undefined)

const { status, data } = await apiInstance.pointStations(
    latitude,
    longitude
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **latitude** | [**number**] | Latitude | defaults to undefined|
| **longitude** | [**number**] | Longitude | defaults to undefined|


### Return type

**ProblemDetail**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**301** | redirect to gridpoint stations |  -  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product**
> TextProduct product()

Returns a specific text product

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let productId: string; //. (default to undefined)

const { status, data } = await apiInstance.product(
    productId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **productId** | [**string**] | . | defaults to undefined|


### Return type

**TextProduct**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productLocations**
> TextProductLocationCollection productLocations()

Returns a list of valid text product issuance locations

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.productLocations();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**TextProductLocationCollection**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productTypes**
> TextProductTypeCollection productTypes()

Returns a list of valid text product types and codes

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

const { status, data } = await apiInstance.productTypes();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**TextProductTypeCollection**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productsQuery**
> TextProductCollection productsQuery()

Returns a list of text products

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let location: Array<string>; //Location id (optional) (default to undefined)
let start: string; //Start time (optional) (default to undefined)
let end: string; //End time (optional) (default to undefined)
let office: Array<string>; //Issuing office (optional) (default to undefined)
let wmoid: Array<string>; //WMO id code (optional) (default to undefined)
let type: Array<string>; //Product code (optional) (default to undefined)
let limit: number; //Limit (optional) (default to undefined)

const { status, data } = await apiInstance.productsQuery(
    location,
    start,
    end,
    office,
    wmoid,
    type,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **location** | **Array&lt;string&gt;** | Location id | (optional) defaults to undefined|
| **start** | [**string**] | Start time | (optional) defaults to undefined|
| **end** | [**string**] | End time | (optional) defaults to undefined|
| **office** | **Array&lt;string&gt;** | Issuing office | (optional) defaults to undefined|
| **wmoid** | **Array&lt;string&gt;** | WMO id code | (optional) defaults to undefined|
| **type** | **Array&lt;string&gt;** | Product code | (optional) defaults to undefined|
| **limit** | [**number**] | Limit | (optional) defaults to undefined|


### Return type

**TextProductCollection**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productsType**
> TextProductCollection productsType()

Returns a list of text products of a given type

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let typeId: string; //. (default to undefined)

const { status, data } = await apiInstance.productsType(
    typeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **typeId** | [**string**] | . | defaults to undefined|


### Return type

**TextProductCollection**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productsTypeLocation**
> TextProductCollection productsTypeLocation()

Returns a list of text products of a given type for a given issuance location

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let typeId: string; //. (default to undefined)
let locationId: string; //. (default to undefined)

const { status, data } = await apiInstance.productsTypeLocation(
    typeId,
    locationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **typeId** | [**string**] | . | defaults to undefined|
| **locationId** | [**string**] | . | defaults to undefined|


### Return type

**TextProductCollection**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **productsTypeLocations**
> TextProductLocationCollection productsTypeLocations()

Returns a list of valid text product issuance locations for a given product type

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let typeId: string; //. (default to undefined)

const { status, data } = await apiInstance.productsTypeLocations(
    typeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **typeId** | [**string**] | . | defaults to undefined|


### Return type

**TextProductLocationCollection**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **radarProfiler**
> any radarProfiler()

Returns metadata about a given radar wind profiler

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ISO8601Interval
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let stationId: string; //Profiler station ID (default to undefined)
let time: ISO8601Interval; //Time interval (optional) (default to undefined)
let interval: string; //Averaging interval (optional) (default to undefined)

const { status, data } = await apiInstance.radarProfiler(
    stationId,
    time,
    interval
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **stationId** | [**string**] | Profiler station ID | defaults to undefined|
| **time** | **ISO8601Interval** | Time interval | (optional) defaults to undefined|
| **interval** | [**string**] | Averaging interval | (optional) defaults to undefined|


### Return type

**any**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **radarQueue**
> any radarQueue()

Returns metadata about a given radar queue

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ISO8601Interval,
    ISO8601Interval,
    ISO8601Interval
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let host: string; //LDM host (default to undefined)
let limit: number; //Record limit (optional) (default to undefined)
let arrived: ISO8601Interval; //Range for arrival time (optional) (default to undefined)
let created: ISO8601Interval; //Range for creation time (optional) (default to undefined)
let published: ISO8601Interval; //Range for publish time (optional) (default to undefined)
let station: string; //Station identifier (optional) (default to undefined)
let type: string; //Record type (optional) (default to undefined)
let feed: string; //Originating product feed (optional) (default to undefined)
let resolution: number; //Resolution version (optional) (default to undefined)

const { status, data } = await apiInstance.radarQueue(
    host,
    limit,
    arrived,
    created,
    published,
    station,
    type,
    feed,
    resolution
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **host** | [**string**] | LDM host | defaults to undefined|
| **limit** | [**number**] | Record limit | (optional) defaults to undefined|
| **arrived** | **ISO8601Interval** | Range for arrival time | (optional) defaults to undefined|
| **created** | **ISO8601Interval** | Range for creation time | (optional) defaults to undefined|
| **published** | **ISO8601Interval** | Range for publish time | (optional) defaults to undefined|
| **station** | [**string**] | Station identifier | (optional) defaults to undefined|
| **type** | [**string**] | Record type | (optional) defaults to undefined|
| **feed** | [**string**] | Originating product feed | (optional) defaults to undefined|
| **resolution** | [**number**] | Resolution version | (optional) defaults to undefined|


### Return type

**any**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **radarServer**
> any radarServer()

Returns metadata about a given radar server

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; //Server ID (default to undefined)
let reportingHost: string; //Show records from specific reporting host (optional) (default to undefined)

const { status, data } = await apiInstance.radarServer(
    id,
    reportingHost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | Server ID | defaults to undefined|
| **reportingHost** | [**string**] | Show records from specific reporting host | (optional) defaults to undefined|


### Return type

**any**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **radarServers**
> any radarServers()

Returns a list of radar servers

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let reportingHost: string; //Show records from specific reporting host (optional) (default to undefined)

const { status, data } = await apiInstance.radarServers(
    reportingHost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reportingHost** | [**string**] | Show records from specific reporting host | (optional) defaults to undefined|


### Return type

**any**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  * X-Api-Key -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **radarStation**
> any radarStation()

Returns metadata about a given radar station

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let stationId: string; //Radar station ID (default to undefined)
let reportingHost: string; //Show RDA and latency info from specific reporting host (optional) (default to undefined)
let host: string; //Show latency info from specific LDM host (optional) (default to undefined)

const { status, data } = await apiInstance.radarStation(
    stationId,
    reportingHost,
    host
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **stationId** | [**string**] | Radar station ID | defaults to undefined|
| **reportingHost** | [**string**] | Show RDA and latency info from specific reporting host | (optional) defaults to undefined|
| **host** | [**string**] | Show latency info from specific LDM host | (optional) defaults to undefined|


### Return type

**any**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/geo+json, application/ld+json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **radarStationAlarms**
> any radarStationAlarms()

Returns metadata about a given radar station alarms

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let stationId: string; //Radar station ID (default to undefined)

const { status, data } = await apiInstance.radarStationAlarms(
    stationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **stationId** | [**string**] | Radar station ID | defaults to undefined|


### Return type

**any**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **radarStations**
> any radarStations()

Returns a list of radar stations

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let stationType: Array<string>; //Limit results to a specific station type or types (optional) (default to undefined)
let reportingHost: string; //Show RDA and latency info from specific reporting host (optional) (default to undefined)
let host: string; //Show latency info from specific LDM host (optional) (default to undefined)

const { status, data } = await apiInstance.radarStations(
    stationType,
    reportingHost,
    host
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **stationType** | **Array&lt;string&gt;** | Limit results to a specific station type or types | (optional) defaults to undefined|
| **reportingHost** | [**string**] | Show RDA and latency info from specific reporting host | (optional) defaults to undefined|
| **host** | [**string**] | Show latency info from specific LDM host | (optional) defaults to undefined|


### Return type

**any**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/geo+json, application/ld+json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **satelliteThumbnails**
> File satelliteThumbnails()

Returns a thumbnail image for a satellite region. Image services in API are deprecated.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let area: 'a' | 'e' | 'g' | 'h' | 'p' | 's' | 'w'; //. (default to undefined)

const { status, data } = await apiInstance.satelliteThumbnails(
    area
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **area** | [**&#39;a&#39; | &#39;e&#39; | &#39;g&#39; | &#39;h&#39; | &#39;p&#39; | &#39;s&#39; | &#39;w&#39;**]**Array<&#39;a&#39; &#124; &#39;e&#39; &#124; &#39;g&#39; &#124; &#39;h&#39; &#124; &#39;p&#39; &#124; &#39;s&#39; &#124; &#39;w&#39;>** | . | defaults to undefined|


### Return type

**File**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/jpeg, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | An image file |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sigmet**
> SigmetGeoJson sigmet()

Returns a specific SIGMET/AIRMET

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let atsu: string; //ATSU identifier (default to undefined)
let date: string; //Date (YYYY-MM-DD format) (default to undefined)
let time: string; //Time (HHMM format). This time is always specified in UTC (Zulu) time. (default to undefined)

const { status, data } = await apiInstance.sigmet(
    atsu,
    date,
    time
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **atsu** | [**string**] | ATSU identifier | defaults to undefined|
| **date** | [**string**] | Date (YYYY-MM-DD format) | defaults to undefined|
| **time** | [**string**] | Time (HHMM format). This time is always specified in UTC (Zulu) time. | defaults to undefined|


### Return type

**SigmetGeoJson**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/geo+json, application/vnd.noaa.uswx+xml, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  -  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sigmetQuery**
> SigmetCollectionGeoJson sigmetQuery()

Returns a list of SIGMET/AIRMETs

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let start: string; //Start time (optional) (default to undefined)
let end: string; //End time (optional) (default to undefined)
let date: string; //Date (YYYY-MM-DD format) (optional) (default to undefined)
let atsu: string; //ATSU identifier (optional) (default to undefined)
let sequence: string; //SIGMET sequence number (optional) (default to undefined)

const { status, data } = await apiInstance.sigmetQuery(
    start,
    end,
    date,
    atsu,
    sequence
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **start** | [**string**] | Start time | (optional) defaults to undefined|
| **end** | [**string**] | End time | (optional) defaults to undefined|
| **date** | [**string**] | Date (YYYY-MM-DD format) | (optional) defaults to undefined|
| **atsu** | [**string**] | ATSU identifier | (optional) defaults to undefined|
| **sequence** | [**string**] | SIGMET sequence number | (optional) defaults to undefined|


### Return type

**SigmetCollectionGeoJson**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/geo+json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  -  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sigmetsByATSU**
> SigmetCollectionGeoJson sigmetsByATSU()

Returns a list of SIGMET/AIRMETs for the specified ATSU

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let atsu: string; //ATSU identifier (default to undefined)

const { status, data } = await apiInstance.sigmetsByATSU(
    atsu
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **atsu** | [**string**] | ATSU identifier | defaults to undefined|


### Return type

**SigmetCollectionGeoJson**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/geo+json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  -  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sigmetsByATSUByDate**
> SigmetCollectionGeoJson sigmetsByATSUByDate()

Returns a list of SIGMET/AIRMETs for the specified ATSU for the specified date

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let atsu: string; //ATSU identifier (default to undefined)
let date: string; //Date (YYYY-MM-DD format) (default to undefined)

const { status, data } = await apiInstance.sigmetsByATSUByDate(
    atsu,
    date
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **atsu** | [**string**] | ATSU identifier | defaults to undefined|
| **date** | [**string**] | Date (YYYY-MM-DD format) | defaults to undefined|


### Return type

**SigmetCollectionGeoJson**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/geo+json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  -  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stationObservationLatest**
> ObservationGeoJson stationObservationLatest()

Returns the latest observation for a station

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let stationId: string; //Observation station ID (default to undefined)
let requireQc: boolean; //Require QC (optional) (default to undefined)

const { status, data } = await apiInstance.stationObservationLatest(
    stationId,
    requireQc
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **stationId** | [**string**] | Observation station ID | defaults to undefined|
| **requireQc** | [**boolean**] | Require QC | (optional) defaults to undefined|


### Return type

**ObservationGeoJson**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/geo+json, application/ld+json, application/vnd.noaa.uswx+xml, application/vnd.noaa.obs+xml, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | An observation record. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stationObservationList**
> ObservationCollectionGeoJson stationObservationList()

Returns a list of observations for a given station

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let stationId: string; //Observation station ID (default to undefined)
let start: string; //Start time (optional) (default to undefined)
let end: string; //End time (optional) (default to undefined)
let cursor: string; //Pagination cursor (optional) (default to undefined)
let limit: number; //Limit (optional) (default to undefined)

const { status, data } = await apiInstance.stationObservationList(
    stationId,
    start,
    end,
    cursor,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **stationId** | [**string**] | Observation station ID | defaults to undefined|
| **start** | [**string**] | Start time | (optional) defaults to undefined|
| **end** | [**string**] | End time | (optional) defaults to undefined|
| **cursor** | [**string**] | Pagination cursor | (optional) defaults to undefined|
| **limit** | [**number**] | Limit | (optional) defaults to undefined|


### Return type

**ObservationCollectionGeoJson**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/geo+json, application/ld+json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A collection of observation records. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **stationObservationTime**
> ObservationGeoJson stationObservationTime()

Returns a single observation.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let stationId: string; //Observation station ID (default to undefined)
let time: string; //Timestamp of requested observation (default to undefined)

const { status, data } = await apiInstance.stationObservationTime(
    stationId,
    time
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **stationId** | [**string**] | Observation station ID | defaults to undefined|
| **time** | [**string**] | Timestamp of requested observation | defaults to undefined|


### Return type

**ObservationGeoJson**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/geo+json, application/ld+json, application/vnd.noaa.uswx+xml, application/vnd.noaa.obs+xml, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | An observation record. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **taf**
> any taf()

Returns a single Terminal Aerodrome Forecast.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let stationId: string; //Observation station ID (default to undefined)
let date: string; //Date (YYYY-MM-DD format) (default to undefined)
let time: string; //Time (HHMM format). This time is always specified in UTC (Zulu) time. (default to undefined)

const { status, data } = await apiInstance.taf(
    stationId,
    date,
    time
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **stationId** | [**string**] | Observation station ID | defaults to undefined|
| **date** | [**string**] | Date (YYYY-MM-DD format) | defaults to undefined|
| **time** | [**string**] | Time (HHMM format). This time is always specified in UTC (Zulu) time. | defaults to undefined|


### Return type

**any**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.wmo.iwxxm+xml, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  -  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tafs**
> any tafs()

Returns Terminal Aerodrome Forecasts for the specified airport station.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let stationId: string; //Observation station ID (default to undefined)

const { status, data } = await apiInstance.tafs(
    stationId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **stationId** | [**string**] | Observation station ID | defaults to undefined|


### Return type

**any**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/ld+json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  -  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **zone**
> ZoneGeoJson zone()

Returns metadata about a given zone

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let type: NWSZoneType; //Zone type (default to undefined)
let zoneId: string; //NWS public zone/county identifier (default to undefined)
let effective: string; //Effective date/time (optional) (default to undefined)

const { status, data } = await apiInstance.zone(
    type,
    zoneId,
    effective
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **type** | **NWSZoneType** | Zone type | defaults to undefined|
| **zoneId** | [**string**] | NWS public zone/county identifier | defaults to undefined|
| **effective** | [**string**] | Effective date/time | (optional) defaults to undefined|


### Return type

**ZoneGeoJson**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/geo+json, application/ld+json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **zoneForecast**
> ZoneForecastGeoJson zoneForecast()

Returns the current zone forecast for a given zone

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let type: string; //Zone type (default to undefined)
let zoneId: string; //NWS public zone/county identifier (default to undefined)

const { status, data } = await apiInstance.zoneForecast(
    type,
    zoneId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **type** | [**string**] | Zone type | defaults to undefined|
| **zoneId** | [**string**] | NWS public zone/county identifier | defaults to undefined|


### Return type

**ZoneForecastGeoJson**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/geo+json, application/ld+json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **zoneList**
> ZoneCollectionGeoJson zoneList()

Returns a list of zones

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: Array<string>; //Zone ID (forecast or county) (optional) (default to undefined)
let area: Array<AreaCode>; //State/marine area code (optional) (default to undefined)
let region: Array<RegionCode>; //Region code (optional) (default to undefined)
let type: Array<NWSZoneType>; //Zone type (optional) (default to undefined)
let point: string; //Point (latitude,longitude) (optional) (default to undefined)
let includeGeometry: boolean; //Include geometry in results (true/false) (optional) (default to undefined)
let limit: number; //Limit (optional) (default to undefined)
let effective: string; //Effective date/time (optional) (default to undefined)

const { status, data } = await apiInstance.zoneList(
    id,
    area,
    region,
    type,
    point,
    includeGeometry,
    limit,
    effective
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | **Array&lt;string&gt;** | Zone ID (forecast or county) | (optional) defaults to undefined|
| **area** | **Array&lt;AreaCode&gt;** | State/marine area code | (optional) defaults to undefined|
| **region** | **Array&lt;RegionCode&gt;** | Region code | (optional) defaults to undefined|
| **type** | **Array&lt;NWSZoneType&gt;** | Zone type | (optional) defaults to undefined|
| **point** | [**string**] | Point (latitude,longitude) | (optional) defaults to undefined|
| **includeGeometry** | [**boolean**] | Include geometry in results (true/false) | (optional) defaults to undefined|
| **limit** | [**number**] | Limit | (optional) defaults to undefined|
| **effective** | [**string**] | Effective date/time | (optional) defaults to undefined|


### Return type

**ZoneCollectionGeoJson**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/geo+json, application/ld+json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **zoneListType**
> ZoneCollectionGeoJson zoneListType()

Returns a list of zones of a given type

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let type: NWSZoneType; //Zone type (default to undefined)
let id: Array<string>; //Zone ID (forecast or county) (optional) (default to undefined)
let area: Array<AreaCode>; //State/marine area code (optional) (default to undefined)
let region: Array<RegionCode>; //Region code (optional) (default to undefined)
let type2: Array<NWSZoneType>; //Zone type (optional) (default to undefined)
let point: string; //Point (latitude,longitude) (optional) (default to undefined)
let includeGeometry: boolean; //Include geometry in results (true/false) (optional) (default to undefined)
let limit: number; //Limit (optional) (default to undefined)
let effective: string; //Effective date/time (optional) (default to undefined)

const { status, data } = await apiInstance.zoneListType(
    type,
    id,
    area,
    region,
    type2,
    point,
    includeGeometry,
    limit,
    effective
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **type** | **NWSZoneType** | Zone type | defaults to undefined|
| **id** | **Array&lt;string&gt;** | Zone ID (forecast or county) | (optional) defaults to undefined|
| **area** | **Array&lt;AreaCode&gt;** | State/marine area code | (optional) defaults to undefined|
| **region** | **Array&lt;RegionCode&gt;** | Region code | (optional) defaults to undefined|
| **type2** | **Array&lt;NWSZoneType&gt;** | Zone type | (optional) defaults to undefined|
| **point** | [**string**] | Point (latitude,longitude) | (optional) defaults to undefined|
| **includeGeometry** | [**boolean**] | Include geometry in results (true/false) | (optional) defaults to undefined|
| **limit** | [**number**] | Limit | (optional) defaults to undefined|
| **effective** | [**string**] | Effective date/time | (optional) defaults to undefined|


### Return type

**ZoneCollectionGeoJson**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/geo+json, application/ld+json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **zoneObs**
> ObservationCollectionGeoJson zoneObs()

Returns a list of observations for a given zone

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let zoneId: string; //NWS public zone/county identifier (default to undefined)
let start: string; //Start date/time (optional) (default to undefined)
let end: string; //End date/time (optional) (default to undefined)
let limit: number; //Limit (optional) (default to undefined)

const { status, data } = await apiInstance.zoneObs(
    zoneId,
    start,
    end,
    limit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **zoneId** | [**string**] | NWS public zone/county identifier | defaults to undefined|
| **start** | [**string**] | Start date/time | (optional) defaults to undefined|
| **end** | [**string**] | End date/time | (optional) defaults to undefined|
| **limit** | [**number**] | Limit | (optional) defaults to undefined|


### Return type

**ObservationCollectionGeoJson**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/geo+json, application/ld+json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | success |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **zoneStations**
> ObservationStationCollectionGeoJson zoneStations()

Returns a list of observation stations for a given zone

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let zoneId: string; //NWS public zone/county identifier (default to undefined)
let limit: number; //Limit (optional) (default to 500)
let cursor: string; //Pagination cursor (optional) (default to undefined)
let featureFlags: Array<'obs_station_provider'>; //Enable future and experimental features (see documentation for more info): * obs_station_provider: Include the data provider in the metadata about observation stations  (optional) (default to undefined)

const { status, data } = await apiInstance.zoneStations(
    zoneId,
    limit,
    cursor,
    featureFlags
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **zoneId** | [**string**] | NWS public zone/county identifier | defaults to undefined|
| **limit** | [**number**] | Limit | (optional) defaults to 500|
| **cursor** | [**string**] | Pagination cursor | (optional) defaults to undefined|
| **featureFlags** | **Array<&#39;obs_station_provider&#39;>** | Enable future and experimental features (see documentation for more info): * obs_station_provider: Include the data provider in the metadata about observation stations  | (optional) defaults to undefined|


### Return type

**ObservationStationCollectionGeoJson**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth), [userAgent](../README.md#userAgent)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/geo+json, application/ld+json, application/problem+json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | A collection of observation stations. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |
|**0** | An error response. |  * X-Correlation-Id -  <br>  * X-Request-Id -  <br>  * X-Server-Id -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

