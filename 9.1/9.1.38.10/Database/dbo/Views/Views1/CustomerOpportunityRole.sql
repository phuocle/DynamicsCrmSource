


--
-- base view for CustomerOpportunityRole
--
create view dbo.[CustomerOpportunityRole]
 (
    -- logical attributes
    [OpportunityStateCode],
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [OpportunityIdName],
    [OpportunityStatusCode],
    [OpportunityRoleIdName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [CustomerOpportunityRoleId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OwningBusinessUnit],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [CustomerId],
    [Description],
    [OpportunityId],
    [OpportunityRoleId],
    [UniqueDscId],
    [CustomerIdName],
    [CustomerIdType],
    [CustomerIdYomiName]
) with view_metadata as
select
    -- logical attributes
    [opportunity_customer_opportunity_roles].[StateCode],
    [lk_customeropportunityrole_createdby].[FullName],
    [lk_customeropportunityrole_createdby].[YomiFullName],
    [lk_customeropportunityrole_createdonbehalfby].[FullName],
    [lk_customeropportunityrole_createdonbehalfby].[YomiFullName],
    [lk_customeropportunityrole_modifiedby].[FullName],
    [lk_customeropportunityrole_modifiedby].[YomiFullName],
    [lk_customeropportunityrole_modifiedonbehalfby].[FullName],
    [lk_customeropportunityrole_modifiedonbehalfby].[YomiFullName],
    [opportunity_customer_opportunity_roles].[Name],
    [opportunity_customer_opportunity_roles].[StatusCode],
    [relationship_role_customer_opportunity_roles].[Name],

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
    [CustomerOpportunityRoleBase].[CustomerOpportunityRoleId],
    [CustomerOpportunityRoleBase].[CreatedOn],
    [CustomerOpportunityRoleBase].[CreatedBy],
    [CustomerOpportunityRoleBase].[ModifiedOn],
    [CustomerOpportunityRoleBase].[ModifiedBy],
    [CustomerOpportunityRoleBase].[CreatedOnBehalfBy],
    [CustomerOpportunityRoleBase].[ModifiedOnBehalfBy],
    [CustomerOpportunityRoleBase].[OwningBusinessUnit],
    [CustomerOpportunityRoleBase].[VersionNumber],
    [CustomerOpportunityRoleBase].[ImportSequenceNumber],
    [CustomerOpportunityRoleBase].[OverriddenCreatedOn],
    [CustomerOpportunityRoleBase].[TimeZoneRuleVersionNumber],
    [CustomerOpportunityRoleBase].[UTCConversionTimeZoneCode],
    [CustomerOpportunityRoleBase].[CustomerId],
    [CustomerOpportunityRoleBase].[Description],
    [CustomerOpportunityRoleBase].[OpportunityId],
    [CustomerOpportunityRoleBase].[OpportunityRoleId],
    [CustomerOpportunityRoleBase].[UniqueDscId],
    [CustomerOpportunityRoleBase].[CustomerIdName],
    [CustomerOpportunityRoleBase].[CustomerIdType],
    [CustomerOpportunityRoleBase].[CustomerIdYomiName]
from [CustomerOpportunityRoleBase] 
    left join [SystemUserBase] [lk_customeropportunityrole_createdby] on ([CustomerOpportunityRoleBase].[CreatedBy] = [lk_customeropportunityrole_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_customeropportunityrole_createdonbehalfby] on ([CustomerOpportunityRoleBase].[CreatedOnBehalfBy] = [lk_customeropportunityrole_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_customeropportunityrole_modifiedby] on ([CustomerOpportunityRoleBase].[ModifiedBy] = [lk_customeropportunityrole_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_customeropportunityrole_modifiedonbehalfby] on ([CustomerOpportunityRoleBase].[ModifiedOnBehalfBy] = [lk_customeropportunityrole_modifiedonbehalfby].[SystemUserId])
    left join [OpportunityBase] [opportunity_customer_opportunity_roles] on ([CustomerOpportunityRoleBase].[OpportunityId] = [opportunity_customer_opportunity_roles].[OpportunityId])
    left join [RelationshipRoleBase] [relationship_role_customer_opportunity_roles] on ([CustomerOpportunityRoleBase].[OpportunityRoleId] = [relationship_role_customer_opportunity_roles].[RelationshipRoleId])
    left join OwnerBase XXowner on ([CustomerOpportunityRoleBase].OwnerId = XXowner.OwnerId)
