


--
-- base view for msdyn_CollabGraphResource
--
create view dbo.[msdyn_CollabGraphResource]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],

    -- physical attributes
    [msdyn_CollabGraphResourceId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [statecode],
    [statuscode],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [msdyn_GraphResourceName],
    [msdyn_GraphResourceId]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_collabgraphresource_createdby].[FullName],
    [lk_msdyn_collabgraphresource_createdby].[YomiFullName],
    [lk_msdyn_collabgraphresource_modifiedby].[FullName],
    [lk_msdyn_collabgraphresource_modifiedby].[YomiFullName],
    [lk_msdyn_collabgraphresource_createdonbehalfby].[FullName],
    [lk_msdyn_collabgraphresource_createdonbehalfby].[YomiFullName],
    [lk_msdyn_collabgraphresource_modifiedonbehalfby].[FullName],
    [lk_msdyn_collabgraphresource_modifiedonbehalfby].[YomiFullName],

    -- physical attribute
    [msdyn_CollabGraphResourceBase].[msdyn_CollabGraphResourceId],
    [msdyn_CollabGraphResourceBase].[CreatedOn],
    [msdyn_CollabGraphResourceBase].[CreatedBy],
    [msdyn_CollabGraphResourceBase].[ModifiedOn],
    [msdyn_CollabGraphResourceBase].[ModifiedBy],
    [msdyn_CollabGraphResourceBase].[CreatedOnBehalfBy],
    [msdyn_CollabGraphResourceBase].[ModifiedOnBehalfBy],
    [msdyn_CollabGraphResourceBase].[statecode],
    [msdyn_CollabGraphResourceBase].[statuscode],
    [msdyn_CollabGraphResourceBase].[VersionNumber],
    [msdyn_CollabGraphResourceBase].[ImportSequenceNumber],
    [msdyn_CollabGraphResourceBase].[OverriddenCreatedOn],
    [msdyn_CollabGraphResourceBase].[TimeZoneRuleVersionNumber],
    [msdyn_CollabGraphResourceBase].[UTCConversionTimeZoneCode],
    [msdyn_CollabGraphResourceBase].[msdyn_GraphResourceName],
    [msdyn_CollabGraphResourceBase].[msdyn_GraphResourceId]
from [msdyn_CollabGraphResourceBase] 
    left join [SystemUserBase] [lk_msdyn_collabgraphresource_createdby] on ([msdyn_CollabGraphResourceBase].[CreatedBy] = [lk_msdyn_collabgraphresource_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_collabgraphresource_createdonbehalfby] on ([msdyn_CollabGraphResourceBase].[CreatedOnBehalfBy] = [lk_msdyn_collabgraphresource_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_collabgraphresource_modifiedby] on ([msdyn_CollabGraphResourceBase].[ModifiedBy] = [lk_msdyn_collabgraphresource_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_collabgraphresource_modifiedonbehalfby] on ([msdyn_CollabGraphResourceBase].[ModifiedOnBehalfBy] = [lk_msdyn_collabgraphresource_modifiedonbehalfby].[SystemUserId])
