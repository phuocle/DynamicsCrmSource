SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
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
