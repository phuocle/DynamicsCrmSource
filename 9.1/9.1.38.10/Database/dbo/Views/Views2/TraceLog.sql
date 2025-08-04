


--
-- base view for TraceLog
--
create view dbo.[TraceLog]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [RegardingObjectIdName],
    [RegardingObjectOwnerIdType],
    [RegardingObjectTypeCode],
    [RegardingObjectId],
    [RegardingObjectOwningBusinessUnit],
    [RegardingObjectOwnerId],
    [RegardingObjectIdYomiName],
    [ModifiedByYomiName],
    [ModifiedByName],
    [OrganizationIdName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedByYomiName],
    [CreatedByName],

    -- physical attributes
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [Level],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [OrganizationId],
    [Text],
    [TimeZoneRuleVersionNumber],
    [TraceCode],
    [TraceLogId],
    [TraceRegardingId],
    [UTCConversionTimeZoneCode],
    [TraceParameterXml],
    [IsUnique],
    [ParentTraceLogId],
    [TraceParameterHash],
    [CollationLevel],
    [TraceDetailXml],
    [CanBeDeleted],
    [TraceActionXml],
    [MachineName],
    [ErrorTypeDisplay],
    [TraceStatus],
    [ErrorDetails]
) with view_metadata as
select
    -- logical attributes
    [lk_tracelog_createdonbehalfby].[FullName],
    [lk_tracelog_createdonbehalfby].[YomiFullName],
    [tracelog_TraceRegardings].[RegardingObjectIdName],
    [tracelog_TraceRegardings].[RegardingObjectOwnerIdType],
    [tracelog_TraceRegardings].[RegardingObjectTypeCode],
    [tracelog_TraceRegardings].[RegardingObjectId],
    [tracelog_TraceRegardings].[RegardingObjectOwningBusinessUnit],
    [tracelog_TraceRegardings].[RegardingObjectOwnerId],
    [tracelog_TraceRegardings].[RegardingObjectIdYomiName],
    [lk_tracelog_modifiedby].[YomiFullName],
    [lk_tracelog_modifiedby].[FullName],
    [organization_tracelog].[Name],
    [lk_tracelog_modifiedonbehalfby].[YomiFullName],
    [lk_tracelog_modifiedonbehalfby].[FullName],
    [lk_tracelog_createdby].[YomiFullName],
    [lk_tracelog_createdby].[FullName],

    -- physical attribute
    [TraceLogBase].[CreatedBy],
    [TraceLogBase].[CreatedOn],
    [TraceLogBase].[CreatedOnBehalfBy],
    [TraceLogBase].[Level],
    [TraceLogBase].[ModifiedBy],
    [TraceLogBase].[ModifiedOn],
    [TraceLogBase].[ModifiedOnBehalfBy],
    [TraceLogBase].[OrganizationId],
    [TraceLogBase].[Text],
    [TraceLogBase].[TimeZoneRuleVersionNumber],
    [TraceLogBase].[TraceCode],
    [TraceLogBase].[TraceLogId],
    [TraceLogBase].[TraceRegardingId],
    [TraceLogBase].[UTCConversionTimeZoneCode],
    [TraceLogBase].[TraceParameterXml],
    [TraceLogBase].[IsUnique],
    [TraceLogBase].[ParentTraceLogId],
    [TraceLogBase].[TraceParameterHash],
    [TraceLogBase].[CollationLevel],
    [TraceLogBase].[TraceDetailXml],
    [TraceLogBase].[CanBeDeleted],
    [TraceLogBase].[TraceActionXml],
    [TraceLogBase].[MachineName],
    [TraceLogBase].[ErrorTypeDisplay],
    [TraceLogBase].[TraceStatus],
    [TraceLogBase].[ErrorDetails]
from [TraceLogBase] 
    left join [SystemUserBase] [lk_tracelog_createdby]  on ([TraceLogBase].[CreatedBy] = [lk_tracelog_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_tracelog_createdonbehalfby]  on ([TraceLogBase].[CreatedOnBehalfBy] = [lk_tracelog_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_tracelog_modifiedby]  on ([TraceLogBase].[ModifiedBy] = [lk_tracelog_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_tracelog_modifiedonbehalfby]  on ([TraceLogBase].[ModifiedOnBehalfBy] = [lk_tracelog_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_tracelog]  on ([TraceLogBase].[OrganizationId] = [organization_tracelog].[OrganizationId])
    left join [TraceRegardingBase] [tracelog_TraceRegardings] on ([TraceLogBase].[TraceRegardingId] = [tracelog_TraceRegardings].[TraceRegardingId])
