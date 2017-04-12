SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for AppModuleComponent
--
create view [dbo].[AppModuleComponent]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [AppModuleIdName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],

    -- physical attributes
    [AppModuleComponentId],
    [CreatedOn],
    [AppModuleIdUnique],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [VersionNumber],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [ExchangeRate],
    [IsDefault],
    [CreatedBy],
    [ComponentType],
    [RootAppModuleComponentId],
    [ObjectId],
    [RootComponentBehavior],
    [IsMetadata],
    [OverwriteTime],
    [IntroducedVersion],
    [AppModuleComponentIdUnique]
) with view_metadata as
select
    -- logical attributes
    [lk_appmodulecomponent_modifiedonbehalfby].[FullName],
    [lk_appmodulecomponent_modifiedonbehalfby].[YomiFullName],
    [lk_appmodulecomponent_createdby].[FullName],
    [lk_appmodulecomponent_createdby].[YomiFullName],
    [appmodule_appmodulecomponent].[Name],
    [lk_appmodulecomponent_modifiedby].[FullName],
    [lk_appmodulecomponent_modifiedby].[YomiFullName],
    [lk_appmodulecomponent_createdonbehalfby].[YomiFullName],
    [lk_appmodulecomponent_createdonbehalfby].[FullName],

    -- physical attribute
    [AppModuleComponentBase].[AppModuleComponentId],
    [AppModuleComponentBase].[CreatedOn],
    [AppModuleComponentBase].[AppModuleIdUnique],
    [AppModuleComponentBase].[ModifiedOn],
    [AppModuleComponentBase].[ModifiedBy],
    [AppModuleComponentBase].[CreatedOnBehalfBy],
    [AppModuleComponentBase].[ModifiedOnBehalfBy],
    [AppModuleComponentBase].[VersionNumber],
    [AppModuleComponentBase].[TimeZoneRuleVersionNumber],
    [AppModuleComponentBase].[UTCConversionTimeZoneCode],
    [AppModuleComponentBase].[ExchangeRate],
    [AppModuleComponentBase].[IsDefault],
    [AppModuleComponentBase].[CreatedBy],
    [AppModuleComponentBase].[ComponentType],
    [AppModuleComponentBase].[RootAppModuleComponentId],
    [AppModuleComponentBase].[ObjectId],
    [AppModuleComponentBase].[RootComponentBehavior],
    [AppModuleComponentBase].[IsMetadata],
    [AppModuleComponentBase].[OverwriteTime],
    [AppModuleComponentBase].[IntroducedVersion],
    [AppModuleComponentBase].[AppModuleComponentIdUnique]
from [AppModuleComponentBase] 
    left join [AppModuleBase] [appmodule_appmodulecomponent] on ([AppModuleComponentBase].[AppModuleIdUnique] = [appmodule_appmodulecomponent].[AppModuleIdUnique] and [appmodule_appmodulecomponent].OverwriteTime = 0 and [appmodule_appmodulecomponent].ComponentState = 0)
    left join [SystemUserBase] [lk_appmodulecomponent_createdby] with(nolock) on ([AppModuleComponentBase].[CreatedBy] = [lk_appmodulecomponent_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_appmodulecomponent_createdonbehalfby] with(nolock) on ([AppModuleComponentBase].[CreatedOnBehalfBy] = [lk_appmodulecomponent_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_appmodulecomponent_modifiedby] with(nolock) on ([AppModuleComponentBase].[ModifiedBy] = [lk_appmodulecomponent_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_appmodulecomponent_modifiedonbehalfby] with(nolock) on ([AppModuleComponentBase].[ModifiedOnBehalfBy] = [lk_appmodulecomponent_modifiedonbehalfby].[SystemUserId])
GO
