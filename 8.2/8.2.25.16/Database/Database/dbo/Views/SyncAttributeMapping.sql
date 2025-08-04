


--
-- base view for SyncAttributeMapping
--
create view dbo.[SyncAttributeMapping]
 (
    -- logical attributes
    [OrganizationId],

    -- physical attributes
    [SyncAttributeMappingId],
    [SyncAttributeMappingIdUnique],
    [MappingName],
    [ComponentState],
    [EntityTypeCode],
    [SyncAttributeMappingProfileId],
    [IsManaged],
    [OverwriteTime],
    [SolutionId],
    [SupportingSolutionId],
    [AttributeCRMName],
    [AttributeExchangeName],
    [SyncDirection],
    [IsComputed],
    [ComputedProperties],
    [ParentSyncAttributeMappingId],
    [DefaultSyncDirection],
    [AllowedSyncDirection]
) with view_metadata as
select
    -- logical attributes
    [lk_syncattributemapping_syncattributemappingprofileid].[OrganizationId],

    -- physical attribute
    [SyncAttributeMappingBase].[SyncAttributeMappingId],
    [SyncAttributeMappingBase].[SyncAttributeMappingIdUnique],
    [SyncAttributeMappingBase].[MappingName],
    [SyncAttributeMappingBase].[ComponentState],
    [SyncAttributeMappingBase].[EntityTypeCode],
    [SyncAttributeMappingBase].[SyncAttributeMappingProfileId],
    [SyncAttributeMappingBase].[IsManaged],
    [SyncAttributeMappingBase].[OverwriteTime],
    [SyncAttributeMappingBase].[SolutionId],
    [SyncAttributeMappingBase].[SupportingSolutionId],
    [SyncAttributeMappingBase].[AttributeCRMName],
    [SyncAttributeMappingBase].[AttributeExchangeName],
    [SyncAttributeMappingBase].[SyncDirection],
    [SyncAttributeMappingBase].[IsComputed],
    [SyncAttributeMappingBase].[ComputedProperties],
    [SyncAttributeMappingBase].[ParentSyncAttributeMappingId],
    [SyncAttributeMappingBase].[DefaultSyncDirection],
    [SyncAttributeMappingBase].[AllowedSyncDirection]
from [SyncAttributeMappingBase] 
    left join [SyncAttributeMappingProfileBase] [lk_syncattributemapping_syncattributemappingprofileid] on ([SyncAttributeMappingBase].[SyncAttributeMappingProfileId] = [lk_syncattributemapping_syncattributemappingprofileid].[SyncAttributeMappingProfileId])
