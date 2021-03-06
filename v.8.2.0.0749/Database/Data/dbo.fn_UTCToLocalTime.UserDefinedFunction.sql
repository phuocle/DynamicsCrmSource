USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_UTCToLocalTime]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
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
