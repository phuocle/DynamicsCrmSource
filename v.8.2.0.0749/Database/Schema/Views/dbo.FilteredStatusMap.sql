SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


create view [dbo].[FilteredStatusMap](
	FilteredViewName,
	StateCode,
	StateCodeName,
	StatusCode,
	StatusCodeName,
	IsDefault,
	LangId
)
as
select
	e.ReportViewName,
	sm.State,
	state.Value,
	sm.Status,
	status.Value,
	sm.IsDefault,
	state.LangId
from
	StatusMap sm
	join EntityView e on (e.ObjectTypeCode = sm.ObjectTypeCode)
	join StringMap state on (state.ObjectTypeCode = sm.ObjectTypeCode and state.AttributeName = 'statecode' and state.AttributeValue = sm.State)
	join StringMap status on (status.ObjectTypeCode = sm.ObjectTypeCode and status.AttributeName = 'statuscode' and status.AttributeValue = sm.Status)
where status.LangId = state.LangId
GO
GRANT SELECT ON  [dbo].[FilteredStatusMap] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredStatusMap] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
