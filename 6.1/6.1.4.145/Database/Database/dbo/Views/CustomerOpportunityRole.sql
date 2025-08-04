


--
-- base view for CustomerOpportunityRole
--
create view dbo.[CustomerOpportunityRole]
 (
    -- logical attributes
    [ModifiedByYomiName],
    [OpportunityIdName],
    [CreatedOnBehalfByYomiName],
    [CreatedByYomiName],
    [OpportunityStateCode],
    [OpportunityRoleIdName],
    [CreatedByName],
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [OpportunityStatusCode],
    [ModifiedByName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [CreatedBy],
    [ModifiedBy],
    [OwningBusinessUnit],
    [CreatedOn],
    [Description],
    [ModifiedOn],
    [CustomerId],
    [VersionNumber],
    [CustomerOpportunityRoleId],
    [OpportunityRoleId],
    [OpportunityId],
    [CustomerIdType],
    [CustomerIdName],
    [UniqueDscId],
    [OverriddenCreatedOn],
    [ImportSequenceNumber],
    [CustomerIdYomiName],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [lk_customeropportunityrole_modifiedby].[YomiFullName],
    [opportunity_customer_opportunity_roles].[Name],
    [lk_customeropportunityrole_createdonbehalfby].[YomiFullName],
    [lk_customeropportunityrole_createdby].[YomiFullName],
    [opportunity_customer_opportunity_roles].[StateCode],
    [relationship_role_customer_opportunity_roles].[Name],
    [lk_customeropportunityrole_createdby].[FullName],
    [lk_customeropportunityrole_modifiedonbehalfby].[FullName],
    [lk_customeropportunityrole_createdonbehalfby].[FullName],
    [lk_customeropportunityrole_modifiedonbehalfby].[YomiFullName],
    [opportunity_customer_opportunity_roles].[StatusCode],
    [lk_customeropportunityrole_modifiedby].[FullName],

    -- ownership entries
    OwnerId = [CustomerOpportunityRoleBase].OwnerId,
    OwnerName = XXowner.Name,
    OwnerYomiName =  XXowner.YomiName,
    OwnerDsc = 0, -- DSC is removed, stub it to 0
    OwnerIdType = XXowner.OwnerIdType,
    OwningUser = case 
 		when XXowner.OwnerIdType= 8 then XXowner.OwnerId
		else null
		end,
    OwningTeam = case 
 		when XXowner.OwnerIdType= 9 then XXowner.OwnerId
		else null
		end,

    -- physical attribute
    [CustomerOpportunityRoleBase].[CreatedBy],
    [CustomerOpportunityRoleBase].[ModifiedBy],
    [CustomerOpportunityRoleBase].[OwningBusinessUnit],
    [CustomerOpportunityRoleBase].[CreatedOn],
    [CustomerOpportunityRoleBase].[Description],
    [CustomerOpportunityRoleBase].[ModifiedOn],
    [CustomerOpportunityRoleBase].[CustomerId],
    [CustomerOpportunityRoleBase].[VersionNumber],
    [CustomerOpportunityRoleBase].[CustomerOpportunityRoleId],
    [CustomerOpportunityRoleBase].[OpportunityRoleId],
    [CustomerOpportunityRoleBase].[OpportunityId],
    [CustomerOpportunityRoleBase].[CustomerIdType],
    [CustomerOpportunityRoleBase].[CustomerIdName],
    [CustomerOpportunityRoleBase].[UniqueDscId],
    [CustomerOpportunityRoleBase].[OverriddenCreatedOn],
    [CustomerOpportunityRoleBase].[ImportSequenceNumber],
    [CustomerOpportunityRoleBase].[CustomerIdYomiName],
    [CustomerOpportunityRoleBase].[CreatedOnBehalfBy],
    [CustomerOpportunityRoleBase].[ModifiedOnBehalfBy]
from [CustomerOpportunityRoleBase] 
    left join [SystemUserBase] [lk_customeropportunityrole_createdby] with(nolock) on ([CustomerOpportunityRoleBase].[CreatedBy] = [lk_customeropportunityrole_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_customeropportunityrole_createdonbehalfby] with(nolock) on ([CustomerOpportunityRoleBase].[CreatedOnBehalfBy] = [lk_customeropportunityrole_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_customeropportunityrole_modifiedby] with(nolock) on ([CustomerOpportunityRoleBase].[ModifiedBy] = [lk_customeropportunityrole_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_customeropportunityrole_modifiedonbehalfby] with(nolock) on ([CustomerOpportunityRoleBase].[ModifiedOnBehalfBy] = [lk_customeropportunityrole_modifiedonbehalfby].[SystemUserId])
    left join [OpportunityBase] [opportunity_customer_opportunity_roles] on ([CustomerOpportunityRoleBase].[OpportunityId] = [opportunity_customer_opportunity_roles].[OpportunityId])
    left join [RelationshipRoleBase] [relationship_role_customer_opportunity_roles] on ([CustomerOpportunityRoleBase].[OpportunityRoleId] = [relationship_role_customer_opportunity_roles].[RelationshipRoleId])
    left join OwnerBase XXowner with(nolock) on ([CustomerOpportunityRoleBase].OwnerId = XXowner.OwnerId)
