


CREATE function [dbo].[fn_RetrieveVersionAsFloat] ( 
  @version         nvarchar(96)
)
returns float
as
begin
 if @version is null return null
 declare @first int;
 declare @second int;
 declare @major nvarchar(6);
 declare @minor nvarchar(10); -- does not support minor version greater than 9

 set @first = charindex('.', @version, 0);
 if @first = 0 
    return CONVERT(float, @version);
 set @major = SUBSTRING(@version, 0, @first);

 set @second = charindex('.', @version, @first + 1);
 if @second =0
	set @minor = SUBSTRING(@version, @first + 1, len(@version) - @first)
 else
	set @minor = SUBSTRING(@version, @first + 1, @second -  @first - 1);

 set @minor = CAST(CAST(@minor AS int) AS varchar);

 return CONVERT(float, @major + '.' + @minor);

end
