

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
GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_GetBusinessDataLocalizedLabel] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_GetBusinessDataLocalizedLabel] TO [CRMReaderRole]
    AS [dbo];

