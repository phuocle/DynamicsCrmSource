

create view dbo.FilteredStringMap(
	FilteredViewName,
	AttributeName,
	AttributeValue,
	Value,
	DisplayOrder,
	LangId
)
as
select
	e.ReportViewName,
	sm.AttributeName,
	sm.AttributeValue,
	sm.Value,
	sm.DisplayOrder,
	sm.LangId
from
	StringMap sm
	join EntityView e on (e.ObjectTypeCode = sm.ObjectTypeCode)
GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredStringMap] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredStringMap] TO [CRMReaderRole]
    AS [dbo];

