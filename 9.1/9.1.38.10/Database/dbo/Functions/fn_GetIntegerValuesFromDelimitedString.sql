

--Create Function fn_GetIntegerValuesFromDelimitedString
create function [dbo].[fn_GetIntegerValuesFromDelimitedString]
(
	-- Parameters
	@delimiter char(1),
	@delimitedString nvarchar(max)
)
returns @tblIntegerValues table 
(
	integerValue int
)
as
begin;
	declare @start int, @end int
	select @start = 1, @end = charindex(@delimiter, @delimitedString) 
	while @start < len(@delimitedString) + 1 
	begin; 
		if @end = 0 
		begin; 
			set @end = len(@delimitedString) + 1;
		end;

 		insert into @tblIntegerValues (integerValue) values(convert(int, substring(@delimitedString, @start, @end - @start))); 
		set @start = @end + 1; 
		set @end = charindex(@delimiter, @delimitedString, @start);
	end;
	return;
end;