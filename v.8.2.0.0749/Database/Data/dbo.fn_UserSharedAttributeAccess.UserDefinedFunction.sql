USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_UserSharedAttributeAccess]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create function [dbo].[fn_UserSharedAttributeAccess](
    @systemUserId uniqueidentifier,
    @attributeId uniqueidentifier,
    @objectTypeCode int)
returns @t table (
    ObjectId uniqueidentifier,
    ReadAccess int)
as
begin;
    -- Need distict to return only one sharing row for Read.
    insert into @t (ObjectId, ReadAccess)
    select distinct poaa.ObjectId,
           poaa.ReadAccess
    from PrincipalObjectAttributeAccess as poaa
    where poaa.AttributeId = @attributeId
          and poaa.PrincipalId in (
                  select PrincipalId
                  from SystemUserPrincipals
                  where SystemUserId = @systemUserId)
          and poaa.ReadAccess = 1 -- do not collect not shared readAccess rows
          and poaa.ObjectTypeCode = @objectTypeCode;
    return;
end;
GO
