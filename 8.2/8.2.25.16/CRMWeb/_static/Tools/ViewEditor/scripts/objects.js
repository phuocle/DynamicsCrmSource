
function FieldObj(sFieldName,sDataType,sOrgRequired,bSpan,oDisplayNames,oLabels,oOptions,oPropertyBag,sEntityName,sRelationshipId)
{
    this.FieldName = sFieldName;
    this.DataType = sDataType;
    this.OrgRequired = sOrgRequired;
    this.DisplayNames = oDisplayNames;
    this.Labels = oLabels;
    this.Options = oOptions;
    this.PropertyBag = oPropertyBag;
    this.EntityName = sEntityName;
    this.RelationshipId = sRelationshipId
}
function LocalizedObj(sDescription,sLanguageCode)
{
    this.Description = sDescription;
    this.LanguageCode = sLanguageCode
}
