


--
-- base view for CustomerRelationship
--
create view dbo.[CustomerRelationship]
 (
    -- logical attributes
    [ModifiedOnBehalfByYomiName],
    [CustomerRoleIdName],
    [CreatedOnBehalfByName],
    [CreatedByName],
    [PartnerRoleIdName],
    [ModifiedByYomiName],
    [ModifiedByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByYomiName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [VersionNumber],
    [CreatedOn],
    [ModifiedOn],
    [CustomerRoleId],
    [CustomerRelationshipId],
    [CreatedBy],
    [PartnerId],
    [OwningBusinessUnit],
    [ConverseRelationshipId],
    [PartnerRoleId],
    [CustomerRoleDescription],
    [CustomerId],
    [ModifiedBy],
    [PartnerRoleDescription],
    [PartnerIdType],
    [PartnerIdName],
    [CustomerIdName],
    [CustomerIdType],
    [OverriddenCreatedOn],
    [ImportSequenceNumber],
    [UniqueDscId],
    [CustomerIdYomiName],
    [PartnerIdYomiName],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [modifiedonbehalfby_customer_relationship].[YomiFullName],
    [relationship_role_customer_role].[Name],
    [createdonbehalfby_customer_relationship].[FullName],
    [createdby_customer_relationship].[FullName],
    [relationship_role_partner_role].[Name],
    [modifiedby_customer_relationship].[YomiFullName],
    [modifiedby_customer_relationship].[FullName],
    [createdby_customer_relationship].[YomiFullName],
    [modifiedonbehalfby_customer_relationship].[FullName],
    [createdonbehalfby_customer_relationship].[YomiFullName],

    -- ownership entries
    OwnerId = [CustomerRelationshipBase].OwnerId,
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
    [CustomerRelationshipBase].[VersionNumber],
    [CustomerRelationshipBase].[CreatedOn],
    [CustomerRelationshipBase].[ModifiedOn],
    [CustomerRelationshipBase].[CustomerRoleId],
    [CustomerRelationshipBase].[CustomerRelationshipId],
    [CustomerRelationshipBase].[CreatedBy],
    [CustomerRelationshipBase].[PartnerId],
    [CustomerRelationshipBase].[OwningBusinessUnit],
    [CustomerRelationshipBase].[ConverseRelationshipId],
    [CustomerRelationshipBase].[PartnerRoleId],
    [CustomerRelationshipBase].[CustomerRoleDescription],
    [CustomerRelationshipBase].[CustomerId],
    [CustomerRelationshipBase].[ModifiedBy],
    [CustomerRelationshipBase].[PartnerRoleDescription],
    [CustomerRelationshipBase].[PartnerIdType],
    [CustomerRelationshipBase].[PartnerIdName],
    [CustomerRelationshipBase].[CustomerIdName],
    [CustomerRelationshipBase].[CustomerIdType],
    [CustomerRelationshipBase].[OverriddenCreatedOn],
    [CustomerRelationshipBase].[ImportSequenceNumber],
    [CustomerRelationshipBase].[UniqueDscId],
    [CustomerRelationshipBase].[CustomerIdYomiName],
    [CustomerRelationshipBase].[PartnerIdYomiName],
    [CustomerRelationshipBase].[CreatedOnBehalfBy],
    [CustomerRelationshipBase].[ModifiedOnBehalfBy]
from [CustomerRelationshipBase] 
    left join [SystemUserBase] [createdby_customer_relationship] with(nolock) on ([CustomerRelationshipBase].[CreatedBy] = [createdby_customer_relationship].[SystemUserId])
    left join [SystemUserBase] [createdonbehalfby_customer_relationship] with(nolock) on ([CustomerRelationshipBase].[CreatedOnBehalfBy] = [createdonbehalfby_customer_relationship].[SystemUserId])
    left join [SystemUserBase] [modifiedby_customer_relationship] with(nolock) on ([CustomerRelationshipBase].[ModifiedBy] = [modifiedby_customer_relationship].[SystemUserId])
    left join [SystemUserBase] [modifiedonbehalfby_customer_relationship] with(nolock) on ([CustomerRelationshipBase].[ModifiedOnBehalfBy] = [modifiedonbehalfby_customer_relationship].[SystemUserId])
    left join [RelationshipRoleBase] [relationship_role_customer_role] on ([CustomerRelationshipBase].[CustomerRoleId] = [relationship_role_customer_role].[RelationshipRoleId])
    left join [RelationshipRoleBase] [relationship_role_partner_role] on ([CustomerRelationshipBase].[PartnerRoleId] = [relationship_role_partner_role].[RelationshipRoleId])
    left join OwnerBase XXowner with(nolock) on ([CustomerRelationshipBase].OwnerId = XXowner.OwnerId)
