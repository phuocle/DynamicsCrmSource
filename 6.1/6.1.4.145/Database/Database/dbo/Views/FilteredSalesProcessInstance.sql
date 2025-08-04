

--
-- report view for salesprocessinstance
--
create view dbo.[FilteredSalesProcessInstance] (
    [businessunitid],
    [businessunitiddsc],
    [businessunitidname],
    [opportunityid],
    [opportunityiddsc],
    [opportunityidname],
    [salesprocessinstanceid],
    [salesprocessname],
    [salesstagename]
) with view_metadata as
select
    [SalesProcessInstance].[BusinessUnitId],
    --[SalesProcessInstance].[BusinessUnitIdDsc]
    0,
    [SalesProcessInstance].[BusinessUnitIdName],
    [SalesProcessInstance].[OpportunityId],
    --[SalesProcessInstance].[OpportunityIdDsc]
    0,
    [SalesProcessInstance].[OpportunityIdName],
    [SalesProcessInstance].[SalesProcessInstanceId],
    [SalesProcessInstance].[SalesProcessName],
    [SalesProcessInstance].[SalesStageName]
from SalesProcessInstance
    join Opportunity on (SalesProcessInstance.OpportunityId = Opportunity.OpportunityId) 
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(3) pdm
    cross join dbo.fn_GetMaxPrivilegeDepthMask(32) pdm1
where
 (
			-- privilege check
			(pdm1.PrivilegeDepthMask is not null and	pdm.PrivilegeDepthMask is not null)  and

			(
	
			-- Owner check
			--
			[Opportunity].OwnerId in 
			( 	-- returns only principals with Basic Read privilege for entity
				select pem.PrincipalId from PrincipalEntityMap pem (NOLOCK)
					join SystemUserPrincipals sup (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
					where sup.SystemUserId = u.SystemUserId 
						and pem.ObjectTypeCode = 3
			)	

		
			-- role based access
			or 
			
exists
(
	select 
	1
	where
	(
		-- deep/local security
		(((pdm.PrivilegeDepthMask & 0x4) != 0) or ((pdm.PrivilegeDepthMask & 0x2) != 0)) and 
		[Opportunity].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 3)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[Opportunity].[OwningBusinessUnit] is not null 
	) 
)

	
			-- object shared to the user 
			or 
			[Opportunity].[OpportunityId] in 
				(
				select  POA.ObjectId from PrincipalObjectAccess POA 
				join SystemUserPrincipals sup (NOLOCK) on POA.PrincipalId = sup.PrincipalId
					where sup.SystemUserId = u.SystemUserId and
						POA.ObjectTypeCode = 3 and
						((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
				)
			)
		)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSalesProcessInstance] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredSalesProcessInstance] TO [CRMReaderRole]
    AS [dbo];

