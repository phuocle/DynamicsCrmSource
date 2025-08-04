


--
-- logical view for AttributeMapLogical
--
create view dbo.[AttributeMapLogical]
 (
    -- logical attributes
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],

    -- physical attributes
    [ModifiedOn],
    [VersionNumber],
    [CreatedBy],
    [IsSystem],
    [EntityMapId],
    [OrganizationId],
    [CreatedOn],
    [TargetAttributeName],
    [SourceAttributeName],
    [ModifiedBy],
    [ParentAttributeMapId],
    [AttributeMapId],
    [OverwriteTime],
    [ComponentState],
    [AttributeMapIdUnique],
    [SupportingSolutionId],
    [SolutionId],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [IsManaged]
) with view_metadata as
select
    -- logical attributes
    [modifiedonbehalfby_attributemap].[YomiFullName],
    [createdonbehalfby_attributemap].[FullName],
    [createdonbehalfby_attributemap].[YomiFullName],
    [modifiedonbehalfby_attributemap].[FullName],

    -- physical attribute
    [T1].[ModifiedOn],
    [T1].[VersionNumber],
    [T1].[CreatedBy],
    [T1].[IsSystem],
    [T1].[EntityMapId],
    [T1].[OrganizationId],
    [T1].[CreatedOn],
    [T1].[TargetAttributeName],
    [T1].[SourceAttributeName],
    [T1].[ModifiedBy],
    [T1].[ParentAttributeMapId],
    [T1].[AttributeMapId],
    [T1].[OverwriteTime],
    [T1].[ComponentState],
    [T1].[AttributeMapIdUnique],
    [T1].[SupportingSolutionId],
    [T1].[SolutionId],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[IsManaged]
from [AttributeMapBase] [T1]
    left join [SystemUserBase] [createdonbehalfby_attributemap] with(nolock) on ([T1].[CreatedOnBehalfBy] = [createdonbehalfby_attributemap].[SystemUserId])
    left join [SystemUserBase] [modifiedonbehalfby_attributemap] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [modifiedonbehalfby_attributemap].[SystemUserId])
where T1.OverwriteTime = 0