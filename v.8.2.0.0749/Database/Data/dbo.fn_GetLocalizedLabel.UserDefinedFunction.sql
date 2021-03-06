USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_GetLocalizedLabel]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
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
