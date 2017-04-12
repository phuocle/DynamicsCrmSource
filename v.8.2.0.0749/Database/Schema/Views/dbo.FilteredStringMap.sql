SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


create view [dbo].[FilteredStringMap](
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
GRANT SELECT ON  [dbo].[FilteredStringMap] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredStringMap] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
