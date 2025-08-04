SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for salesprocessinstance
--
create view [dbo].[FilteredSalesProcessInstance] (
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
				select pem.PrincipalId from PrincipalEntityMap pem WITH (NOLOCK)
					join SystemUserPrincipals sup WITH (NOLOCK) on pem.PrincipalId = sup.PrincipalId 
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
		[Opportunity].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 3)
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
				join SystemUserPrincipals sup WITH (NOLOCK) on POA.PrincipalId = sup.PrincipalId
					where sup.SystemUserId = u.SystemUserId and
						POA.ObjectTypeCode = 3 and
						((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1
				)
			)
		)
GO
GRANT SELECT ON  [dbo].[FilteredSalesProcessInstance] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredSalesProcessInstance] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
