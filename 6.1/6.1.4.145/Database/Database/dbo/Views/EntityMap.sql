


--
-- base view for EntityMap
--
create view dbo.[EntityMap]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByYomiName],

    -- physical attributes
    [TargetEntityName],
    [EntityMapId],
    [CreatedOn],
    [SourceEntityName],
    [CreatedBy],
    [OrganizationId],
    [ModifiedBy],
    [VersionNumber],
    [ModifiedOn],
    [SupportingSolutionId],
    [OverwriteTime],
    [EntityMapIdUnique],
    [SolutionId],
    [ComponentState],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [IsManaged]
) with view_metadata as
select
    -- logical attributes
    [modifiedonbehalfby_entitymap].[FullName],
    [createdonbehalfby_entitymap].[FullName],
    [modifiedonbehalfby_entitymap].[YomiFullName],
    [createdonbehalfby_entitymap].[YomiFullName],

    -- physical attribute
    [T1].[TargetEntityName],
    [T1].[EntityMapId],
    [T1].[CreatedOn],
    [T1].[SourceEntityName],
    [T1].[CreatedBy],
    [T1].[OrganizationId],
    [T1].[ModifiedBy],
    [T1].[VersionNumber],
    [T1].[ModifiedOn],
    [T1].[SupportingSolutionId],
    [T1].[OverwriteTime],
    [T1].[EntityMapIdUnique],
    [T1].[SolutionId],
    [T1].[ComponentState],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[IsManaged]
from [EntityMapBase] [T1]
    left join [SystemUserBase] [createdonbehalfby_entitymap] with(nolock) on ([T1].[CreatedOnBehalfBy] = [createdonbehalfby_entitymap].[SystemUserId])
    left join [SystemUserBase] [modifiedonbehalfby_entitymap] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [modifiedonbehalfby_entitymap].[SystemUserId])
where T1.OverwriteTime = 0 AND T1.ComponentState = 0