

create procedure [dbo].[p_GetEntityPicklists](@otCode int, @langId int) as

set nocount on 

select
	AttributeName,
	AttributeValue,
	Value 
from 
	StringMap
where
	ObjectTypeCode = @otCode and
	LangId = @langId
order by
	AttributeName,
	AttributeValue
