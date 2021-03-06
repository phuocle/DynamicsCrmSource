USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_RetrieveVersionAsFloat]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create function [dbo].[fn_RetrieveVersionAsFloat] ( 
	@version nvarchar(96)
)
returns float
as
begin;
	if @version is null return null
	declare @first int;
	declare @second int;
	declare @major nvarchar(6);
	declare @minor nvarchar(10); -- does not support minor version greater than 9

	set @first = charindex('.', @version, 0);

	if @first = 0 
	begin;
		return convert(float, @version);
	end;
	set @major = substring(@version, 0, @first);

	set @second = charindex('.', @version, @first + 1);
	if @second = 0
	begin;
		set @minor = substring(@version, @first + 1, len(@version) - @first);
	end;
	else
	begin;
		set @minor = substring(@version, @first + 1, @second -  @first - 1);
	end;

	set @minor = cast(cast(@minor as int) as varchar);

	return convert(float, @major + '.' + @minor);
end;
GO
