USE [D365_MSCRM]
GO
/****** Object:  StoredProcedure [dbo].[p_SystemUserBuEntityMapInitForBuCreate]    Script Date: 4/10/2017 9:59:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


-- This stored procedure inits SystemUserBusinessUnitEntityMap for a BU create.
create procedure [dbo].[p_SystemUserBuEntityMapInitForBuCreate](
    @BusinessUnitId uniqueidentifier)
as;
begin;
    set nocount on;

    declare @DEEP_MASK int;
    declare @parentBusinessId uniqueidentifier;

    select @DEEP_MASK = 4; -- PRIVILEGE_DEPTH_MASK.DEEP_MASK

    select @parentBusinessId = ParentBusinessUnitId
    from BusinessUnit
    where BusinessUnitId = @BusinessUnitId;

    insert into SystemUserBusinessUnitEntityMap (SystemUserId, BusinessUnitId, ObjectTypeCode, ReadPrivilegeDepth )
    select SystemUserId,
           @BusinessUnitId,
           ObjectTypeCode,
           ReadPrivilegeDepth
    from SystemUserBusinessUnitEntityMap
    where BusinessUnitId = @parentBusinessId
          and ReadPrivilegeDepth = @DEEP_MASK;
end;
GO
