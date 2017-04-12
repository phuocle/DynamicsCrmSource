USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[Post]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for Post
--
create view [dbo].[Post]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [RegardingObjectTypeCode],
    [RegardingObjectIdName],
    [RegardingObjectId],
    [RegardingObjectIdYomiName],
    [RegardingObjectOwnerIdType],
    [RegardingObjectOwnerId],
    [RegardingObjectOwningBusinessUnit],
    [OrganizationIdName],

    -- physical attributes
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [OrganizationId],
    [PostId],
    [PostRegardingId],
    [Source],
    [Text],
    [TimeZoneRuleVersionNumber],
    [Type],
    [UTCConversionTimeZoneCode],
    [ModifiedBy],
    [ModifiedOnBehalfBy],
    [ModifiedOn],
    [PostToYammer],
    [YammerPostState],
    [YammerRetryCount]
) with view_metadata as
select
    -- logical attributes
    [lk_post_createdonbehalfby].[FullName],
    [lk_post_createdonbehalfby].[YomiFullName],
    [lk_post_modifiedby].[FullName],
    [lk_post_modifiedonbehalfby].[FullName],
    [lk_post_modifiedonbehalfby].[YomiFullName],
    [lk_post_createdby].[FullName],
    [lk_post_createdby].[YomiFullName],
    [post_PostRegardings].[RegardingObjectTypeCode],
    [post_PostRegardings].[RegardingObjectIdName],
    [post_PostRegardings].[RegardingObjectId],
    [post_PostRegardings].[RegardingObjectIdYomiName],
    [post_PostRegardings].[RegardingObjectOwnerIdType],
    [post_PostRegardings].[RegardingObjectOwnerId],
    [post_PostRegardings].[RegardingObjectOwningBusinessUnit],
    [organization_post].[Name],

    -- physical attribute
    [PostBase].[CreatedBy],
    [PostBase].[CreatedOn],
    [PostBase].[CreatedOnBehalfBy],
    [PostBase].[OrganizationId],
    [PostBase].[PostId],
    [PostBase].[PostRegardingId],
    [PostBase].[Source],
    [PostBase].[Text],
    [PostBase].[TimeZoneRuleVersionNumber],
    [PostBase].[Type],
    [PostBase].[UTCConversionTimeZoneCode],
    [PostBase].[ModifiedBy],
    [PostBase].[ModifiedOnBehalfBy],
    [PostBase].[ModifiedOn],
    [PostBase].[PostToYammer],
    [PostBase].[YammerPostState],
    [PostBase].[YammerRetryCount]
from [PostBase] 
    left join [SystemUserBase] [lk_post_createdby] with(nolock) on ([PostBase].[CreatedBy] = [lk_post_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_post_createdonbehalfby] with(nolock) on ([PostBase].[CreatedOnBehalfBy] = [lk_post_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_post_modifiedby] with(nolock) on ([PostBase].[ModifiedBy] = [lk_post_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_post_modifiedonbehalfby] with(nolock) on ([PostBase].[ModifiedOnBehalfBy] = [lk_post_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_post] with(nolock) on ([PostBase].[OrganizationId] = [organization_post].[OrganizationId])
    left join [PostRegardingBase] [post_PostRegardings] on ([PostBase].[PostRegardingId] = [post_PostRegardings].[PostRegardingId])

GO
