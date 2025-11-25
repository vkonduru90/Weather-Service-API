# QuantitativeValue

A structured value representing a measurement and its unit of measure. This object is a slightly modified version of the schema.org definition at https://schema.org/QuantitativeValue 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **number** | A measured value | [optional] [default to undefined]
**maxValue** | **number** | The maximum value of a range of measured values | [optional] [default to undefined]
**minValue** | **number** | The minimum value of a range of measured values | [optional] [default to undefined]
**unitCode** | **string** | A string denoting a unit of measure, expressed in the format \&quot;{unit}\&quot; or \&quot;{namespace}:{unit}\&quot;. Units with the namespace \&quot;wmo\&quot; or \&quot;wmoUnit\&quot; are defined in the World Meteorological Organization Codes Registry at http://codes.wmo.int/common/unit and should be canonically resolvable to http://codes.wmo.int/common/unit/{unit}. Units with the namespace \&quot;nwsUnit\&quot; are currently custom and do not align to any standard. Units with no namespace or the namespace \&quot;uc\&quot; are compliant with the Unified Code for Units of Measure syntax defined at https://unitsofmeasure.org/. This also aligns with recent versions of the Geographic Markup Language (GML) standard, the IWXXM standard, and OGC Observations and Measurements v2.0 (ISO/DIS 19156). Namespaced units are considered deprecated. We will be aligning API to use the same standards as GML/IWXXM in the future.  | [optional] [default to undefined]
**qualityControl** | **string** | For values in observation records, the quality control flag from the MADIS system. The definitions of these flags can be found at https://madis.ncep.noaa.gov/madis_sfc_qc_notes.shtml  | [optional] [default to undefined]

## Example

```typescript
import { QuantitativeValue } from './api';

const instance: QuantitativeValue = {
    value,
    maxValue,
    minValue,
    unitCode,
    qualityControl,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
