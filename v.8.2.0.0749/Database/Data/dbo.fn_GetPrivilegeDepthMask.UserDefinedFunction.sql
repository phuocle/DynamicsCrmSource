USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_GetPrivilegeDepthMask]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create function [dbo].[fn_GetPrivilegeDepthMask](
    @isbasic bit,
    @islocal bit,
    @isdeep bit,
    @isglobal bit)
returns int
as
begin;
    declare @mask int;

    if (@isglobal <> 0)
	begin;
        set @mask = 8;
	end;
    else if (@isdeep <> 0)
	begin;
        set @mask = 4;
	end;
    else if (@islocal <> 0)
	begin;
        set @mask = 2;
	end;
    else if (@isbasic <> 0)
	begin;
        set @mask = 1;
	end;
    else
	begin;
        set @mask = 0;
	end;

    return @mask;
end;
GO
