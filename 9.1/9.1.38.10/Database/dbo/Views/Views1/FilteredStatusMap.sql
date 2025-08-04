

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
    ON OBJECT::[dbo].[FilteredStatusMap] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredStatusMap] TO [CRMReaderRole]
    AS [dbo];

