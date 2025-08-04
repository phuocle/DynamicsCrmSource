


--
-- logical view for connectionreferenceLogical
--
create view dbo.[connectionreferenceLogical]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CustomConnectorIdName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [connectionreferenceId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OwningBusinessUnit],
    [statecode],
    [statuscode],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [connectionreferencedisplayname],
    [OverwriteTime],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [ComponentIdUnique],
    [IsManaged],
    [IsCustomizable],
    [ConnectionId],
    [ConnectionReferenceLogicalName],
    [ConnectorId],
    [CustomConnectorId],
    [Description]
) with view_metadata as
select
    -- logical attributes
    [lk_connectionreference_createdonbehalfby].[FullName],
    [lk_connectionreference_createdonbehalfby].[YomiFullName],
    [lk_connectionreference_modifiedonbehalfby].[FullName],
    [lk_connectionreference_modifiedonbehalfby].[YomiFullName],
    [connector_connectionreference].[Name],
    [lk_connectionreference_createdby].[FullName],
    [lk_connectionreference_createdby].[YomiFullName],
    [lk_connectionreference_modifiedby].[FullName],
    [lk_connectionreference_modifiedby].[YomiFullName],

    -- ownership entries
    OwnerId = [T1].OwnerId,
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
    [T1].[connectionreferenceId],
    [T1].[CreatedOn],
    [T1].[CreatedBy],
    [T1].[ModifiedOn],
    [T1].[ModifiedBy],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[OwningBusinessUnit],
    [T1].[statecode],
    [T1].[statuscode],
    [T1].[VersionNumber],
    [T1].[ImportSequenceNumber],
    [T1].[OverriddenCreatedOn],
    [T1].[TimeZoneRuleVersionNumber],
    [T1].[UTCConversionTimeZoneCode],
    [T1].[connectionreferencedisplayname],
    [T1].[OverwriteTime],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[ComponentIdUnique],
    [T1].[IsManaged],
    [T1].[IsCustomizable],
    [T1].[ConnectionId],
    [T1].[ConnectionReferenceLogicalName],
    [T1].[ConnectorId],
    [T1].[CustomConnectorId],
    [T1].[Description]
from [connectionreferenceBase] [T1]
    left join [ConnectorBase] [connector_connectionreference] on ([T1].[CustomConnectorId] = [connector_connectionreference].[connectorId] and [connector_connectionreference].OverwriteTime = 0 and [connector_connectionreference].ComponentState = 0)
    left join [SystemUserBase] [lk_connectionreference_createdby] on ([T1].[CreatedBy] = [lk_connectionreference_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_connectionreference_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_connectionreference_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_connectionreference_modifiedby] on ([T1].[ModifiedBy] = [lk_connectionreference_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_connectionreference_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_connectionreference_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([T1].OwnerId = XXowner.OwnerId)
where T1.OverwriteTime = 0