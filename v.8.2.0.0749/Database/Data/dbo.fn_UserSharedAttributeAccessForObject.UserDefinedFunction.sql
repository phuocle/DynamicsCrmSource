USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_UserSharedAttributeAccessForObject]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create function [dbo].[fn_UserSharedAttributeAccessForObject]( 
    @systemUserId uniqueidentifier, 
    @attributeId uniqueidentifier,
    @objectId uniqueidentifier,
    @objectTypeCode int) 
returns bit
as
begin;
    declare @returnValue bit = 0;

    -- Need distinct to return only one sharing row for Read.
    --
    if exists (
        select distinct poaa.ReadAccess
        from PrincipalObjectAttributeAccess as poaa
        where poaa.AttributeId = @attributeId 
              and poaa.PrincipalId in (
                    select PrincipalId
                    from SystemUserPrincipals
                    where SystemUserId = @systemUserId)
              and poaa.ReadAccess = 1 -- do not collect not shared readAccess rows
              and poaa.ObjectId = @objectId
              and poaa.ObjectTypeCode = @objectTypeCode)
    begin;
        set @returnValue = 1;
    end;

    return @returnValue;
end;
GO
