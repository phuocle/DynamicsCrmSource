USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_GetFiscalPeriodCLR]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create function [dbo].[fn_GetFiscalPeriodCLR] ( 
	@fiscalCalendarStart datetime,		-- TimeZone agnostic.
	@fiscalPeriodsPerYear int,
	@dateUTC datetime,
	@timeZoneId nvarchar(60)
)
returns int
as
begin

	declare @date datetime

	if (@dateUTC is null)
	begin
		return null
	end
	
	-- Convert the time to the user's local time.
	set @date = dbo.fn_ConvertUtcToSpecificTimeCLR(@dateUTC, @timeZoneId)

	return dbo.fn_GetFiscalPeriodCore(@fiscalCalendarStart, @fiscalPeriodsPerYear, @date)
end

GO
