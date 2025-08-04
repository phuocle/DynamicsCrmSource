


--
-- logical view for ServiceEndpointLogical
--
create view dbo.[ServiceEndpointLogical]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [IsAuthValueSet],
    [IsSASKeySet],
    [IsSASTokenSet],

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
    [IntroducedVersion],
    [AuthType],
    [MessageFormat],
    [SASKey],
    [SASKeyName],
    [SASToken],
    [NamespaceFormat],
    [NamespaceAddress],
    [AuthValue],
    [Url]
) with view_metadata as
select
    -- logical attributes
    [lk_serviceendpointbase_modifiedonbehalfby].[FullName],
    [lk_serviceendpointbase_createdonbehalfby].[YomiFullName],
    [lk_serviceendpointbase_modifiedonbehalfby].[YomiFullName],
    [lk_serviceendpointbase_createdonbehalfby].[FullName],
    CAST(case when [T1].[AuthValue] is null then 0 else 1 end as bit),
    CAST(case when [T1].[SASKey] is null then 0 else 1 end as bit),
    CAST(case when [T1].[SASToken] is null then 0 else 1 end as bit),

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
    [T1].[IntroducedVersion],
    [T1].[AuthType],
    [T1].[MessageFormat],
    [T1].[SASKey],
    [T1].[SASKeyName],
    [T1].[SASToken],
    [T1].[NamespaceFormat],
    [T1].[NamespaceAddress],
    [T1].[AuthValue],
    [T1].[Url]
from [ServiceEndpointBase] [T1]
    left join [SystemUserBase] [lk_serviceendpointbase_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_serviceendpointbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_serviceendpointbase_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_serviceendpointbase_modifiedonbehalfby].[SystemUserId])
where T1.OverwriteTime = 0