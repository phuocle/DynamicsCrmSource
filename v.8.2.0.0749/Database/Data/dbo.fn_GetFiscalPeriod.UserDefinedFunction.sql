USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_GetFiscalPeriod]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create function [dbo].[fn_GetFiscalPeriod](
    @fiscalCalendarStart datetime,  -- TimeZone agnostic.
    @fiscalPeriodsPerYear int,
    @dateUTC datetime,
    @timezonecode int)
returns int
as
begin;
    declare @date datetime;

    if (@dateUTC is null)
    begin;
        return null;
    end;

    -- Convert the time to the user's local time, unless the caller has
    -- passed in TimeZoneCode.None.
    if (@timezonecode = -1)
        set @date = @dateUTC;
    else
        set @date = dbo.fn_UTCToTzCodeSpecificLocalTime(@dateUTC, @timezonecode);

    return dbo.fn_GetFiscalPeriodCore(@fiscalCalendarStart, @fiscalPeriodsPerYear, @date);
end;
GO
