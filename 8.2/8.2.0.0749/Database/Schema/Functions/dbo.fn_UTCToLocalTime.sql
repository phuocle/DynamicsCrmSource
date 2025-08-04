SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


create function [dbo].[fn_UTCToLocalTime]( @UTCTime datetime )
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
GRANT EXECUTE ON  [dbo].[fn_UTCToLocalTime] TO [CRMReaderRole]
GO
GRANT EXECUTE ON  [dbo].[fn_UTCToLocalTime] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
