

create function dbo.fn_GetBusinessDataLocalizedLabel (
	@ObjectId uniqueidentifier,
	@ColumnName nvarchar(255),
	@ObjectTypeCode int,
	@LanguageCode int
)
returns nvarchar(255)
as
begin
	declare @BusinessDataLocalizedLabel nvarchar(255)
	
	begin
		select @BusinessDataLocalizedLabel = l.Label
			from BusinessDataLocalizedLabel l
			where @ObjectId = l.ObjectId
			and @LanguageCode = l.LanguageId
			and @ColumnName = l.ObjectColumnName
			and @ObjectTypeCode = l.ObjectIdTypeCode
	end
	return @BusinessDataLocalizedLabel
end