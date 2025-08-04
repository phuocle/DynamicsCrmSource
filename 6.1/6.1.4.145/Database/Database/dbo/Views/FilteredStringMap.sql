

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
    ON OBJECT::[dbo].[FilteredStringMap] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredStringMap] TO [CRMReaderRole]
    AS [dbo];

