


--
-- base view for ExpanderEvent
--
create view dbo.[ExpanderEvent]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedByName],

    -- physical attributes
    [ExpanderEventId],
    [Registrations],
    [ContextUri],
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [Name],
    [OrganizationId],
    [CorrelationId],
    [VersionNumber]
) with view_metadata as
select
    -- logical attributes
    [createdby_expanderevent].[FullName],
    [createdonbehalfbyexpanderevent].[YomiFullName],
    [createdonbehalfbyexpanderevent].[FullName],
    [modifiedonbehalfby_expanderevent].[YomiFullName],
    [modifiedonbehalfby_expanderevent].[FullName],
    [modifiedby_expanderevent].[FullName],

    -- physical attribute
    [ExpanderEventBase].[ExpanderEventId],
    [ExpanderEventBase].[Registrations],
    [ExpanderEventBase].[ContextUri],
    [ExpanderEventBase].[CreatedBy],
    [ExpanderEventBase].[CreatedOn],
    [ExpanderEventBase].[CreatedOnBehalfBy],
    [ExpanderEventBase].[ModifiedBy],
    [ExpanderEventBase].[ModifiedOn],
    [ExpanderEventBase].[ModifiedOnBehalfBy],
    [ExpanderEventBase].[Name],
    [ExpanderEventBase].[OrganizationId],
    [ExpanderEventBase].[CorrelationId],
    [ExpanderEventBase].[VersionNumber]
from [ExpanderEventBase] 
    left join [SystemUserBase] [createdby_expanderevent]  on ([ExpanderEventBase].[CreatedBy] = [createdby_expanderevent].[SystemUserId])
    left join [SystemUserBase] [createdonbehalfbyexpanderevent]  on ([ExpanderEventBase].[CreatedOnBehalfBy] = [createdonbehalfbyexpanderevent].[SystemUserId])
    left join [SystemUserBase] [modifiedby_expanderevent]  on ([ExpanderEventBase].[ModifiedBy] = [modifiedby_expanderevent].[SystemUserId])
    left join [SystemUserBase] [modifiedonbehalfby_expanderevent]  on ([ExpanderEventBase].[ModifiedOnBehalfBy] = [modifiedonbehalfby_expanderevent].[SystemUserId])
