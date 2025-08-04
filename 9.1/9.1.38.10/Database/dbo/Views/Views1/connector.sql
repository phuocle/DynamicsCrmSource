


--
-- base view for connector
--
create view dbo.[connector]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [IconBlob_URL],
    [IconBlob],
    [IconBlob_Timestamp],
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
    [connectorId],
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
    [ConnectorIdUnique],
    [ConnectorType],
    [Description],
    [DisplayName],
    [IconBrandColor],
    [IconBlobId],
    [Name],
    [OpenApiDefinition],
    [ConnectionParameters],
    [PolicyTemplateInstances],
    [ConnectorInternalId],
    [IsCustomizable],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [IntroducedVersion]
) with view_metadata as
select
    -- logical attributes
    [lk_connector_createdonbehalfby].[FullName],
    [lk_connector_createdonbehalfby].[YomiFullName],
    [lk_connector_createdby].[FullName],
    [lk_connector_createdby].[YomiFullName],
    [lk_connector_modifiedonbehalfby].[FullName],
    [lk_connector_modifiedonbehalfby].[YomiFullName],
    [ImageDescriptor_connector_IconBlob].[ImageURL],
    [ImageDescriptor_connector_IconBlob].[ImageData],
    [ImageDescriptor_connector_IconBlob].[ImageTimestamp],
    [lk_connector_modifiedby].[FullName],
    [lk_connector_modifiedby].[YomiFullName],

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
    [T1].[connectorId],
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
    [T1].[ConnectorIdUnique],
    [T1].[ConnectorType],
    [T1].[Description],
    [T1].[DisplayName],
    [T1].[IconBrandColor],
    [T1].[IconBlobId],
    [T1].[Name],
    [T1].[OpenApiDefinition],
    [T1].[ConnectionParameters],
    [T1].[PolicyTemplateInstances],
    [T1].[ConnectorInternalId],
    [T1].[IsCustomizable],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[IntroducedVersion]
from [ConnectorBase] [T1]
    left join [ImageDescriptor] [ImageDescriptor_connector_IconBlob] on ([T1].[IconBlobId] = [ImageDescriptor_connector_IconBlob].[ImageDescriptorId])
    left join [SystemUserBase] [lk_connector_createdby] on ([T1].[CreatedBy] = [lk_connector_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_connector_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_connector_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_connector_modifiedby] on ([T1].[ModifiedBy] = [lk_connector_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_connector_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_connector_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([T1].OwnerId = XXowner.OwnerId)
where T1.OverwriteTime = 0 AND T1.ComponentState = 0