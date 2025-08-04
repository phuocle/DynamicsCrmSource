


--
-- base view for ServiceEndpoint
--
create view dbo.[ServiceEndpoint]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],

    -- physical attributes
    [ServiceEndpointId],
    [OrganizationId],
    [SolutionNamespace],
    [Path],
    [Description],
    [Contract],
    [ConnectionMode],
    [UserClaim],
    [CreatedBy],
    [CreatedOn],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [CreatedOnBehalfBy],
    [ComponentState],
    [SolutionId],
    [SupportingSolutionId],
    [OverwriteTime],
    [ServiceEndpointIdUnique],
    [IsManaged],
    [Name],
    [IsCustomizable],
    [IntroducedVersion]
) with view_metadata as
select
    -- logical attributes
    [lk_serviceendpointbase_modifiedonbehalfby].[FullName],
    [lk_serviceendpointbase_createdonbehalfby].[YomiFullName],
    [lk_serviceendpointbase_modifiedonbehalfby].[YomiFullName],
    [lk_serviceendpointbase_createdonbehalfby].[FullName],

    -- physical attribute
    [T1].[ServiceEndpointId],
    [T1].[OrganizationId],
    [T1].[SolutionNamespace],
    [T1].[Path],
    [T1].[Description],
    [T1].[Contract],
    [T1].[ConnectionMode],
    [T1].[UserClaim],
    [T1].[CreatedBy],
    [T1].[CreatedOn],
    [T1].[ModifiedBy],
    [T1].[ModifiedOn],
    [T1].[ModifiedOnBehalfBy],
    [T1].[CreatedOnBehalfBy],
    [T1].[ComponentState],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[OverwriteTime],
    [T1].[ServiceEndpointIdUnique],
    [T1].[IsManaged],
    [T1].[Name],
    [T1].[IsCustomizable],
    [T1].[IntroducedVersion]
from [ServiceEndpointBase] [T1]
    left join [SystemUserBase] [lk_serviceendpointbase_createdonbehalfby] with(nolock) on ([T1].[CreatedOnBehalfBy] = [lk_serviceendpointbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_serviceendpointbase_modifiedonbehalfby] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [lk_serviceendpointbase_modifiedonbehalfby].[SystemUserId])
where T1.OverwriteTime = 0 AND T1.ComponentState = 0