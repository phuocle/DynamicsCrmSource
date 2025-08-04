SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


create function [dbo].[fn_GetLocalizedLabel](
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
