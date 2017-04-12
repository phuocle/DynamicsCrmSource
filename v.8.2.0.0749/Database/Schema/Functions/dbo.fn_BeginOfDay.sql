SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


create function [dbo].[fn_BeginOfDay] ( 
	@DayUTC datetime
)
returns datetime
as
begin;
	declare @DayUserLocal datetime;
	declare @BDay datetime;
	declare @BDayUTC datetime;

	set @DayUserLocal = dbo.fn_UTCToLocalTime(@DayUTC);
	set @BDay = convert(datetime, convert(nvarchar, @DayUserLocal, 112));
	set @BDayUTC = dbo.fn_LocalTimeToUTC(@BDay);

	return @BDayUTC;
end;
GO
GRANT EXECUTE ON  [dbo].[fn_BeginOfDay] TO [CRMReaderRole]
GO
GRANT EXECUTE ON  [dbo].[fn_BeginOfDay] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
