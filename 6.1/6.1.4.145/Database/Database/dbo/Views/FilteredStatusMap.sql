

create view dbo.FilteredStatusMap(
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
GRANT SELECT
    ON OBJECT::[dbo].[FilteredStatusMap] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredStatusMap] TO [CRMReaderRole]
    AS [dbo];

