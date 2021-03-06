USE [D365_MSCRM]
GO
/****** Object:  StoredProcedure [dbo].[p_GetEntityPicklists]    Script Date: 4/10/2017 9:59:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
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
