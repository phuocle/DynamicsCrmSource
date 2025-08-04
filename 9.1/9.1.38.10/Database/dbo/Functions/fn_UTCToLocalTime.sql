

create function dbo.fn_UTCToLocalTime( @UTCTime datetime )
returns datetime
as 
begin;
	declare @timezonecode 	int;
	declare @ResultDateTime datetime;

	select top 1 @timezonecode = us.TimeZoneCode
	from UserSettingsBase as us 
	where us.SystemUserId = dbo.fn_FindUserGuid();

	select @ResultDateTime = dbo.fn_UTCToTzCodeSpecificLocalTime(@UTCTime, @timezonecode);

	return @ResultDateTime;
end;
GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_UTCToLocalTime] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_UTCToLocalTime] TO [CRMReaderRole]
    AS [dbo];

