SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


create procedure [dbo].[p_GetEntityPicklists](
    @otCode int,
    @langId int)
as;
begin;
    set nocount on;

    select AttributeName,
           AttributeValue,
           Value
    from StringMap
    where ObjectTypeCode = @otCode
          and LangId = @langId
    order by AttributeName,
             AttributeValue;
end;
GO
