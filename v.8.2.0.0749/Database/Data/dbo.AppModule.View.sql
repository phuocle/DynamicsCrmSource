USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[AppModule]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for AppModule
--
create view [dbo].[AppModule]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedByName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [OrganizationIdName],
    [PublisherIdName],

    -- physical attributes
    [AppModuleId],
    [Name],
    [Description],
    [VersionNumber],
    [FormFactor],
    [ComponentState],
    [IntroducedVersion],
    [SolutionId],
    [SupportingSolutionId],
    [CreatedOn],
    [CreatedBy],
    [CreatedOnBehalfBy],
    [ModifiedOn],
    [ModifiedBy],
    [ModifiedOnBehalfBy],
    [OverwriteTime],
    [IsManaged],
    [AppModuleVersion],
    [IsFeatured],
    [PublisherId],
    [IsDefault],
    [AppModuleXmlManaged],
    [OrganizationId],
    [PublishedOn],
    [URL],
    [AppModuleIdUnique],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [WebResourceId],
    [ConfigXML],
    [ClientType],
    [UniqueName]
) with view_metadata as
select
    -- logical attributes
    [lk_appmodule_createdby].[FullName],
    [lk_appmodule_createdonbehalfby].[YomiFullName],
    [lk_appmodule_createdonbehalfby].[FullName],
    [lk_appmodule_modifiedby].[FullName],
    [lk_appmodule_modifiedonbehalfby].[FullName],
    [lk_appmodule_modifiedonbehalfby].[YomiFullName],
    [organization_appmodule].[Name],
    [publisher_appmodule].[FriendlyName],

    -- physical attribute
    [T1].[AppModuleId],
    [T1].[Name],
    [T1].[Description],
    [T1].[VersionNumber],
    [T1].[FormFactor],
    [T1].[ComponentState],
    [T1].[IntroducedVersion],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[CreatedOn],
    [T1].[CreatedBy],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOn],
    [T1].[ModifiedBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[AppModuleVersion],
    [T1].[IsFeatured],
    [T1].[PublisherId],
    [T1].[IsDefault],
    [T1].[AppModuleXmlManaged],
    [T1].[OrganizationId],
    [T1].[PublishedOn],
    [T1].[URL],
    [T1].[AppModuleIdUnique],
    [T1].[ImportSequenceNumber],
    [T1].[OverriddenCreatedOn],
    [T1].[WebResourceId],
    [T1].[ConfigXML],
    [T1].[ClientType],
    [T1].[UniqueName]
from [AppModuleBase] [T1]
    left join [SystemUserBase] [lk_appmodule_createdby] with(nolock) on ([T1].[CreatedBy] = [lk_appmodule_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_appmodule_createdonbehalfby] with(nolock) on ([T1].[CreatedOnBehalfBy] = [lk_appmodule_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_appmodule_modifiedby] with(nolock) on ([T1].[ModifiedBy] = [lk_appmodule_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_appmodule_modifiedonbehalfby] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [lk_appmodule_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_appmodule] with(nolock) on ([T1].[OrganizationId] = [organization_appmodule].[OrganizationId])
    left join [PublisherBase] [publisher_appmodule] on ([T1].[PublisherId] = [publisher_appmodule].[PublisherId])
where T1.OverwriteTime = 0 AND T1.ComponentState = 0
GO
