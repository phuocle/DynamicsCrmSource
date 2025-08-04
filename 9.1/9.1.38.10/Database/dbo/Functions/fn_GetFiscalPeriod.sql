

create function dbo.fn_GetFiscalPeriod(
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
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_GetFiscalPeriod] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_GetFiscalPeriod] TO [CRMReaderRole]
    AS [dbo];

