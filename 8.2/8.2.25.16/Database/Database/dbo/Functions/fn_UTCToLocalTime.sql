

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
    ON OBJECT::[dbo].[fn_UTCToLocalTime] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_UTCToLocalTime] TO [CRMReaderRole]
    AS [dbo];

