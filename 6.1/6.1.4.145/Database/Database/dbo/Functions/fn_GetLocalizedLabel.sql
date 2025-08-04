

create function dbo.fn_GetLocalizedLabel (
	@ObjectId uniqueidentifier,
	@ColumnName nvarchar(255),
	@LabelTypeCode int,
	@LanguageCode int
)
returns nvarchar(255)
as
begin
	declare @LocalizedLabel		nvarchar(255)
	
	begin
		select @LocalizedLabel = l.Label
			from LocalizedLabelView l
			where @ObjectId = l.ObjectId
			and @LanguageCode = l.LanguageId
			and @ColumnName = l.ObjectColumnName
			and @LabelTypeCode = l.LabelTypeCode
	end
	return @LocalizedLabel
end