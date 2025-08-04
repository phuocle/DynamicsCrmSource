SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


create procedure [dbo].[p_GetPicklist](
    @ObjectTypeCode int,
    @AttributeName nvarchar(100),
    @LangId int,
    @OrganizationId uniqueidentifier)
as;
begin;
    set nocount on;

    select AttributeValue as Code,
           Value
    from StringMap as Entry
    where ObjectTypeCode = @ObjectTypeCode
          and AttributeName = @AttributeName
          and LangId = @LangId
          and OrganizationId = @OrganizationId
    for xml auto, elements;
end;
GO
