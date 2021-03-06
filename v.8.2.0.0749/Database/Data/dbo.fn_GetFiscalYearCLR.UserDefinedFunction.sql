USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_GetFiscalYearCLR]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create function [dbo].[fn_GetFiscalYearCLR] ( 
	@fiscalCalendarStart datetime,		-- TimeZone agnostic.
	@displayCode int,
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

	return dbo.fn_GetFiscalYearCore(@fiscalCalendarStart, @displayCode, @date)
end

GO
