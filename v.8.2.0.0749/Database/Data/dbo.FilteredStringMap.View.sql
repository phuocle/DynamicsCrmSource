USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredStringMap]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
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
