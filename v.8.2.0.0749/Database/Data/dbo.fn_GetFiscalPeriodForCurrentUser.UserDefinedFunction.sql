USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_GetFiscalPeriodForCurrentUser]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create function [dbo].[fn_GetFiscalPeriodForCurrentUser] ( 
	@fiscalCalendarStart datetime,		-- TimeZone agnostic.
	@fiscalPeriodsPerYear int,
	@dateUTC datetime
)
returns int
as
begin;
	declare @timezonecode int;

	select top 1 @timezonecode = us.TimeZoneCode
	from UserSettingsBase as us 
	where us.SystemUserId = dbo.fn_FindUserGuid();

	return dbo.fn_GetFiscalPeriod(@fiscalCalendarStart, @fiscalPeriodsPerYear, @dateUTC, @timezonecode);
end;
GO
