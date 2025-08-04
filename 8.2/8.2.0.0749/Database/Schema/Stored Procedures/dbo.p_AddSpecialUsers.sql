SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


create procedure [dbo].[p_AddSpecialUsers](
    @organizationid uniqueidentifier)
as;
begin;
    set nocount on;

    declare @rootBizId uniqueidentifier;

    select @rootBizId = BusinessUnitId
    from BusinessUnitBase
    where ParentBusinessUnitId is null
          and OrganizationId = @organizationid;

    -- System User
    declare @sysUserId uniqueidentifier;
    declare @integUserId uniqueidentifier;
    declare @curDateTime datetime;

    select @sysUserId = newid(),
           @integUserId = newid(),
           @curDateTime = getutcdate();

    -- TODO: localize the names
    insert into SystemUserBase(SystemUserId, OrganizationId, BusinessUnitId, FirstName, LastName, FullName, DomainName, CreatedOn, CreatedBy, ModifiedOn, ModifiedBy, IsDisabled, ActiveDirectoryGuid)
                        values(@sysUserId, @organizationid, @rootBizId, '', 'SYSTEM', 'SYSTEM', '', @curDateTime, NULL, @curDateTime, NULL, 1, newid());

    -- Integration User
    insert into SystemUserBase(SystemUserId, OrganizationId, BusinessUnitId, FirstName, LastName, FullName, DomainName, CreatedOn, CreatedBy, ModifiedOn, ModifiedBy, IsDisabled, ActiveDirectoryGuid)
                        values(@integUserId, @organizationid, @rootBizId, '', 'INTEGRATION', 'INTEGRATION', '', @curDateTime, NULL, @curDateTime, NULL, 1, newid());

    -- Set ids of special users in Organization table.
    update OrganizationBase
    set SystemUserId = @sysUserId,
        IntegrationUserId = @integUserId
    where OrganizationId = @organizationid;
                        
    -- Create special users in Owner table.
    insert into OwnerBase (OwnerId, OwnerIdType, Name, YomiName)
    select SystemUserId,
           8,
           FullName,
           YomiFullName
    from SystemUserBase
    where SystemUserId = @sysUserId
          or SystemUserId = @integUserId;

    select @sysUserId as 'systemuserid',
           @integUserId as 'integrationuserid';
end;
GO
