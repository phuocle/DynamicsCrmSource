USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[TraceAssociation]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for TraceAssociation
--
create view [dbo].[TraceAssociation]
 (
    -- logical attributes
    [OrganizationIdName],
    [TraceLogIdName],

    -- physical attributes
    [OrganizationId],
    [TraceAssociationId],
    [TraceLogId],
    [RegardingObjectId],
    [RegardingObjectTypeCode]
) with view_metadata as
select
    -- logical attributes
    [organization_traceassociation].[Name],
    [traceassociation_TraceLog].[Text],

    -- physical attribute
    [TraceAssociationBase].[OrganizationId],
    [TraceAssociationBase].[TraceAssociationId],
    [TraceAssociationBase].[TraceLogId],
    [TraceAssociationBase].[RegardingObjectId],
    [TraceAssociationBase].[RegardingObjectTypeCode]
from [TraceAssociationBase] 
    left join [OrganizationBase] [organization_traceassociation] with(nolock) on ([TraceAssociationBase].[OrganizationId] = [organization_traceassociation].[OrganizationId])
    left join [TraceLogBase] [traceassociation_TraceLog] on ([TraceAssociationBase].[TraceLogId] = [traceassociation_TraceLog].[TraceLogId])

GO
