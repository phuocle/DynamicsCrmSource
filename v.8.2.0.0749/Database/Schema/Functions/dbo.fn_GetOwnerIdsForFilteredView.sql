SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


create function [dbo].[fn_GetOwnerIdsForFilteredView] (@userid uniqueidentifier, @objecttypecode int)
returns @t table (OwnerId uniqueidentifier) 
as
begin

	-- If HSM is enabled for the org and not disabled for the entity, join with SystemUserManagerMap
	if exists (select 1 from OrganizationBase where IsHierarchicalSecurityModelEnabled = 1) 
	and not exists (select 1 from HierarchySecurityConfiguration where ObjectTypeCode = @objecttypecode)
		begin

			insert into @t (OwnerId)

				select pem.PrincipalId from PrincipalEntityMap pem WITH (NOLOCK) 
		
				join SystemUserPrincipals sup WITH (NOLOCK) 
				on pem.PrincipalId = sup.PrincipalId 
			
				join SystemUserManagerMap summ WITH (NOLOCK)
				on sup.SystemUserId = summ.SystemUserId
			
				where summ.ParentSystemUserId = @userid
				and pem.ObjectTypeCode = @objecttypecode
		end
	-- HSM is disabled for the entity, check only SystemUserPrincipals
	else
		begin

			insert into @t (OwnerId) 
	
				select pem.PrincipalId from PrincipalEntityMap pem WITH (NOLOCK) 
			
				join SystemUserPrincipals sup WITH (NOLOCK) 
				on pem.PrincipalId = sup.PrincipalId 
			
				where sup.SystemUserId = @userid
				and pem.ObjectTypeCode = @objecttypecode

		end

	return

end
GO
