USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredStatusMap]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
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
