

create function dbo.fn_GetLocalizedLabel(
    @ObjectId uniqueidentifier,
    @ColumnName nvarchar(255),
    @LabelTypeCode int,
    @LanguageCode int)
returns nvarchar(255)
as
begin;
    declare @LocalizedLabel nvarchar(255);
    
    select @LocalizedLabel = llv.Label
    from LocalizedLabelView llv
    where @ObjectId = llv.ObjectId
          and @LanguageCode = llv.LanguageId
          and @ColumnName = llv.ObjectColumnName
          and @LabelTypeCode = llv.LabelTypeCode;

    return @LocalizedLabel;
end;
GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_GetLocalizedLabel] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_GetLocalizedLabel] TO [CRMReaderRole]
    AS [dbo];

