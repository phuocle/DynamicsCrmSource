


--
-- base view for SolutionComponent
--
create view dbo.[SolutionComponent]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByYomiName],
    [SolutionIdName],

    -- physical attributes
    [SolutionComponentId],
    [ComponentType],
    [SolutionId],
    [IsMetadata],
    [ObjectId],
    [ModifiedBy],
    [VersionNumber],
    [ModifiedOn],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOnBehalfBy],
    [CreatedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [lk_solutioncomponentbase_createdonbehalfby].[FullName],
    [lk_solutioncomponentbase_modifiedonbehalfby].[FullName],
    [lk_solutioncomponentbase_modifiedonbehalfby].[YomiFullName],
    [lk_solutioncomponentbase_createdonbehalfby].[YomiFullName],
    [solution_solutioncomponent].[UniqueName],

    -- physical attribute
    [SolutionComponentBase].[SolutionComponentId],
    [SolutionComponentBase].[ComponentType],
    [SolutionComponentBase].[SolutionId],
    [SolutionComponentBase].[IsMetadata],
    [SolutionComponentBase].[ObjectId],
    [SolutionComponentBase].[ModifiedBy],
    [SolutionComponentBase].[VersionNumber],
    [SolutionComponentBase].[ModifiedOn],
    [SolutionComponentBase].[CreatedOn],
    [SolutionComponentBase].[CreatedBy],
    [SolutionComponentBase].[ModifiedOnBehalfBy],
    [SolutionComponentBase].[CreatedOnBehalfBy]
from [SolutionComponentBase] 
    left join [SystemUserBase] [lk_solutioncomponentbase_createdonbehalfby] with(nolock) on ([SolutionComponentBase].[CreatedOnBehalfBy] = [lk_solutioncomponentbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_solutioncomponentbase_modifiedonbehalfby] with(nolock) on ([SolutionComponentBase].[ModifiedOnBehalfBy] = [lk_solutioncomponentbase_modifiedonbehalfby].[SystemUserId])
    left join [SolutionBase] [solution_solutioncomponent] on ([SolutionComponentBase].[SolutionId] = [solution_solutioncomponent].[SolutionId])
