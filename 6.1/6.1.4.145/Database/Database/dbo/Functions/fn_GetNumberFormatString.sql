

create function [dbo].[fn_GetNumberFormatString](
	@Precision int,
	@NumberGroupFormat nvarchar(50),
	@NegativeFormatCode int,
	@IsCurrency bit,
	@CurrencySymbol nvarchar(10) = '',
	@CurrencyFormatCode int = 0
)
returns nvarchar(255)
as
begin
	declare @PositiveNumberFormat nvarchar(50)
	declare @NegativeNumberFormat nvarchar(50)
	declare @ZeroNumberFormat nvarchar(50)
	declare @PrecisionString nvarchar(6)

	declare @DecimalSymbol nvarchar(10)

	set @PrecisionString =
		case @Precision
			when 0 then N''
			when 1 then N'.0'
			when 2 then N'.00'
			when 3 then N'.000'
			when 4 then N'.0000'
			when 5 then N'.00000'
			else N''		-- default to zero precision
		end

	set @PositiveNumberFormat = 
		case @NumberGroupFormat
			when N'3,0' then N'##########,##0'  + @PrecisionString
			when N'3,2' then N'##,##,##,##,##,##0'  + @PrecisionString
			else N'###,###,###,##0' + @PrecisionString 
		end

	set @ZeroNumberFormat = N'0' + @PrecisionString

	if (@IsCurrency = 0)
		begin
			set @NegativeNumberFormat = 
				case @NegativeFormatCode
					when 0 then N'(' + @PositiveNumberFormat + N')'
					when 1 then N'-' + @PositiveNumberFormat
					when 2 then N'-' + char(160) + @PositiveNumberFormat
					when 3 then @PositiveNumberFormat + N'-'
					when 4 then @PositiveNumberFormat + char(160) + N'-'
					else N'(' + @PositiveNumberFormat + N')'
				end
		end
	else
		begin
			set @NegativeNumberFormat = 
				case @NegativeFormatCode
					when 0 then N'("' + @CurrencySymbol + N'"' + nchar(8203) + @PositiveNumberFormat + N')'
					when 1 then N'-"' + @CurrencySymbol + N'"' + nchar(8203) + @PositiveNumberFormat
					when 2 then N'"' + @CurrencySymbol + N'"-' + @PositiveNumberFormat
					when 3 then N'"' + @CurrencySymbol + N'"' + nchar(8203) + @PositiveNumberFormat + N'-'
					when 4 then N'(' + @PositiveNumberFormat + nchar(8203) + N'"' + @CurrencySymbol + N'")'
					when 5 then N'-' + @PositiveNumberFormat + nchar(8203) + N'"' + @CurrencySymbol + N'"'
					when 6 then @PositiveNumberFormat + N'-"' + @CurrencySymbol + N'"'
					when 7 then @PositiveNumberFormat + nchar(8203) + N'"' + @CurrencySymbol + N'"-'
					when 8 then N'-' + @PositiveNumberFormat + char(160) + N'"' + @CurrencySymbol + N'"'
					when 9 then N'-"' + @CurrencySymbol + N'"' + char(160) + @PositiveNumberFormat
					when 10 then @PositiveNumberFormat + char(160) + N'"' + @CurrencySymbol + N'"-'
					when 11 then N'"' + @CurrencySymbol + N'"' + char(160) + @PositiveNumberFormat + N'-'
					when 12 then N'"' + @CurrencySymbol + N'" -' + @PositiveNumberFormat
					when 13 then @PositiveNumberFormat + N'- "' + @CurrencySymbol + N'"'
					when 14 then N'("' + @CurrencySymbol + N'"' + char(160) + @PositiveNumberFormat + N')'
					when 15 then N'(' + @PositiveNumberFormat + char(160) + N'"' + @CurrencySymbol + N'")'
					else N'("' + @CurrencySymbol + N'"' + nchar(8203) + @PositiveNumberFormat + N')'
				end

			set @PositiveNumberFormat = 
				case @CurrencyFormatCode
					when 0 then N'"' + @CurrencySymbol + N'"' + nchar(8203) + @PositiveNumberFormat
					when 1 then @PositiveNumberFormat + nchar(8203) + N'"' + @CurrencySymbol + N'"'
					when 2 then N'"' + @CurrencySymbol + N'"' + char(160) + @PositiveNumberFormat
					when 3 then @PositiveNumberFormat + char(160) + N'"' + @CurrencySymbol + N'"'
					else N'"' + @CurrencySymbol + N'"' + @PositiveNumberFormat
				end

			set @ZeroNumberFormat = 
				case @CurrencyFormatCode
					when 0 then N'"' + @CurrencySymbol + N'"' + nchar(8203) + @ZeroNumberFormat
					when 1 then @ZeroNumberFormat + nchar(8203) + N'"' + @CurrencySymbol + N'"'
					when 2 then N'"' + @CurrencySymbol + N'"' + char(160) + @ZeroNumberFormat
					when 3 then @ZeroNumberFormat + char(160) + N'"' + @CurrencySymbol + N'"'
					else N'"' + @CurrencySymbol + N'"' + @ZeroNumberFormat
				end
		end

	return @PositiveNumberFormat + N';' + @NegativeNumberFormat + N';' + @ZeroNumberFormat
end