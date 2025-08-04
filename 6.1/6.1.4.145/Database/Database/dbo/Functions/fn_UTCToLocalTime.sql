

create function dbo.fn_UTCToLocalTime(	@UTCTime  datetime )
returns datetime
as 
begin
	declare @timezonecode 	int
	declare @ResultDateTime datetime

	select top 1 @timezonecode = us.TimeZoneCode
	from UserSettingsBase as us WHERE us.SystemUserId = dbo.fn_FindUserGuid()

	select @ResultDateTime = dbo.fn_UTCToTzCodeSpecificLocalTime(@UTCTime,
						@timezonecode)

	return @ResultDateTime

end
GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_UTCToLocalTime] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_UTCToLocalTime] TO [CRMReaderRole]
    AS [dbo];

