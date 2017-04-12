USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[PickListMapping]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for PickListMapping
--
create view [dbo].[PickListMapping]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByYomiName],
    [ModifiedByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedByName],
    [CreatedByYomiName],
    [ColumnMappingIdName],

    -- physical attributes
    [StatusCode],
    [PickListMappingId],
    [ModifiedOn],
    [ModifiedBy],
    [TargetValue],
    [ProcessCode],
    [ColumnMappingId],
    [SourceValue],
    [CreatedOn],
    [StateCode],
    [CreatedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [lk_picklistmapping_createdonbehalfby].[FullName],
    [lk_picklistmapping_createdonbehalfby].[YomiFullName],
    [lk_picklistmapping_modifiedby].[YomiFullName],
    [lk_picklistmapping_modifiedby].[FullName],
    [lk_picklistmapping_modifiedonbehalfby].[YomiFullName],
    [lk_picklistmapping_modifiedonbehalfby].[FullName],
    [lk_picklistmapping_createdby].[FullName],
    [lk_picklistmapping_createdby].[YomiFullName],
    [PickListMapping_ColumnMapping].[SourceAttributeName],

    -- physical attribute
    [PickListMappingBase].[StatusCode],
    [PickListMappingBase].[PickListMappingId],
    [PickListMappingBase].[ModifiedOn],
    [PickListMappingBase].[ModifiedBy],
    [PickListMappingBase].[TargetValue],
    [PickListMappingBase].[ProcessCode],
    [PickListMappingBase].[ColumnMappingId],
    [PickListMappingBase].[SourceValue],
    [PickListMappingBase].[CreatedOn],
    [PickListMappingBase].[StateCode],
    [PickListMappingBase].[CreatedBy],
    [PickListMappingBase].[CreatedOnBehalfBy],
    [PickListMappingBase].[ModifiedOnBehalfBy]
from [PickListMappingBase] 
    left join [SystemUserBase] [lk_picklistmapping_createdby] with(nolock) on ([PickListMappingBase].[CreatedBy] = [lk_picklistmapping_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_picklistmapping_createdonbehalfby] with(nolock) on ([PickListMappingBase].[CreatedOnBehalfBy] = [lk_picklistmapping_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_picklistmapping_modifiedby] with(nolock) on ([PickListMappingBase].[ModifiedBy] = [lk_picklistmapping_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_picklistmapping_modifiedonbehalfby] with(nolock) on ([PickListMappingBase].[ModifiedOnBehalfBy] = [lk_picklistmapping_modifiedonbehalfby].[SystemUserId])
    left join [ColumnMappingBase] [PickListMapping_ColumnMapping] on ([PickListMappingBase].[ColumnMappingId] = [PickListMapping_ColumnMapping].[ColumnMappingId])

GO
