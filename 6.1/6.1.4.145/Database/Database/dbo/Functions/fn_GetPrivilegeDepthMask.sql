

create function dbo.fn_GetPrivilegeDepthMask(@isbasic bit, @islocal bit, @isdeep bit, @isglobal bit)returns int
as
begin
	declare @mask int
	select @mask = 0
	
	if (@isbasic <> 0)
	begin
		select @mask = 1
	end

	if (@islocal <> 0)
	begin
		select @mask = 2
	end

	if (@isdeep <> 0)
	begin
		select @mask = 4
	end

	if (@isglobal <> 0)
	begin
		select @mask = 8
	end

	return @mask
end