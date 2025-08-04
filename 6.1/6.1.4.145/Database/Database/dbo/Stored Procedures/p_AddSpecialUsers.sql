

CREATE PROCEDURE p_AddSpecialUsers(@organizationid uniqueidentifier) as
BEGIN
	
	SET NOCOUNT ON
	
	declare @rootBizId uniqueidentifier
	
	select @rootBizId = BusinessUnitId from BusinessUnitBase where ParentBusinessUnitId is null and OrganizationId = @organizationid
	
	-- System User

	declare @sysUserId uniqueidentifier
	select @sysUserId = newid()
	
	-- TODO: localize the names
	
	insert into SystemUserBase(SystemUserId, OrganizationId, BusinessUnitId, FirstName, LastName, FullName, DomainName, CreatedOn, CreatedBy, ModifiedOn, ModifiedBy, IsDisabled, ActiveDirectoryGuid)
	                    values(@sysUserId, @organizationid, @rootBizId, '', 'SYSTEM', 'SYSTEM', '', getutcdate(), NULL, getutcdate(), NULL, 1, newid())

	
	-- Integration User	

	declare @integUserId uniqueidentifier
	select @integUserId = newid()
	
	insert into SystemUserBase(SystemUserId, OrganizationId, BusinessUnitId, FirstName, LastName, FullName, DomainName, CreatedOn, CreatedBy, ModifiedOn, ModifiedBy, IsDisabled, ActiveDirectoryGuid)
	                    values(@integUserId, @organizationid, @rootBizId, '', 'INTEGRATION', 'INTEGRATION', '', getutcdate(), NULL, getutcdate(), NULL, 1, newid())

	-- Set ids of special users in Organization table
	update OrganizationBase set SystemUserId = @sysUserId, IntegrationUserId = @integUserId where OrganizationId = @organizationid
	                    
	-- Create special users in Owner table
	insert into OwnerBase (OwnerId, OwnerIdType, Name, YomiName) 
		select SystemUserId, 8, FullName, YomiFullName 
		from SystemUserBase
		where SystemUserId = @sysUserId or SystemUserId = @integUserId
												
	select @sysUserId as 'systemuserid', @integUserId as 'integrationuserid'
END