

create function dbo.fn_GetPrivilegeDepthMask(
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