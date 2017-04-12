SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


create function [dbo].[fn_NTDayOfWeek](@Date datetime)
returns int
as
begin;
	return (datepart(dw, @Date) + @@datefirst -1) % 7;	
end;
GO
GRANT EXECUTE ON  [dbo].[fn_NTDayOfWeek] TO [CRMReaderRole]
GO
GRANT EXECUTE ON  [dbo].[fn_NTDayOfWeek] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
