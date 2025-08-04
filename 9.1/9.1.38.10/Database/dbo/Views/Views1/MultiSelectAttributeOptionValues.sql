


--
-- base view for MultiSelectAttributeOptionValues
--
create view dbo.[MultiSelectAttributeOptionValues]
 (

    -- physical attributes
    [ObjectId],
    [ObjectIdTypeCode],
    [ObjectColumnNumber],
    [SelectedOptionValues],
    [MultiSelectFullTextIdKey]
) with view_metadata as
select

    -- physical attribute
    [MultiSelectAttributeOptionValuesBase].[ObjectId],
    [MultiSelectAttributeOptionValuesBase].[ObjectIdTypeCode],
    [MultiSelectAttributeOptionValuesBase].[ObjectColumnNumber],
    [MultiSelectAttributeOptionValuesBase].[SelectedOptionValues],
    [MultiSelectAttributeOptionValuesBase].[MultiSelectFullTextIdKey]
from [MultiSelectAttributeOptionValuesBase] 
