


--
-- logical view for CanvasAppLogical
--
create view dbo.[CanvasAppLogical]
 (
    -- logical attributes
    [WideIcon_Name],
    [BackgroundImage_Name],
    [LargeIcon_Name],
    [TeamsIcon_Name],
    [SmallIcon_Name],
    [Assets_Name],
    [Document_Name],
    [MediumIcon_Name],
    [OwningBusinessUnitName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [CanvasAppRowId],
    [AppVersion],
    [Status],
    [CreatedByClientVersion],
    [MinClientVersion],
    [Tags],
    [CreatedTime],
    [AppOpenUri],
    [IsCdsUpgraded],
    [GalleryItemId],
    [Name],
    [AADLastModifiedById],
    [AADLastPublishedById],
    [DisplayName],
    [Description],
    [CommitMessage],
    [Publisher],
    [LastModifiedTime],
    [LastPublishTime],
    [ConnectionReferences],
    [IsFeaturedApp],
    [BypassConsent],
    [AdminControlBypassConsent],
    [IsHeroApp],
    [IsHidden],
    [CanvasAppId],
    [BackgroundColor],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [IntroducedVersion],
    [OwningBusinessUnit],
    [VersionNumber],
    [AADCreatedById],
    [AuthorizationReferences],
    [EmbeddedApp],
    [CdsDependencies],
    [DatabaseReferences],
    [AppComponents],
    [AppComponentDependencies],
    [CanvasAppType],
    [CanConsumeAppPass],
    [BackgroundImage],
    [SmallIcon],
    [MediumIcon],
    [LargeIcon],
    [WideIcon],
    [TeamsIcon],
    [Document],
    [Assets]
) with view_metadata as
select
    -- logical attributes
    [FileAttachment_CanvasApp_WideIcon].[FileName],
    [FileAttachment_CanvasApp_BackgroundImage].[FileName],
    [FileAttachment_CanvasApp_LargeIcon].[FileName],
    [FileAttachment_CanvasApp_TeamsIcon].[FileName],
    [FileAttachment_CanvasApp_SmallIcon].[FileName],
    [FileAttachment_CanvasApp_Assets].[FileName],
    [FileAttachment_CanvasApp_Document].[FileName],
    [FileAttachment_CanvasApp_MediumIcon].[FileName],
    [businessunit_canvasapp].[Name],

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
    [T1].[CanvasAppRowId],
    [T1].[AppVersion],
    [T1].[Status],
    [T1].[CreatedByClientVersion],
    [T1].[MinClientVersion],
    [T1].[Tags],
    [T1].[CreatedTime],
    [T1].[AppOpenUri],
    [T1].[IsCdsUpgraded],
    [T1].[GalleryItemId],
    [T1].[Name],
    [T1].[AADLastModifiedById],
    [T1].[AADLastPublishedById],
    [T1].[DisplayName],
    [T1].[Description],
    [T1].[CommitMessage],
    [T1].[Publisher],
    [T1].[LastModifiedTime],
    [T1].[LastPublishTime],
    [T1].[ConnectionReferences],
    [T1].[IsFeaturedApp],
    [T1].[BypassConsent],
    [T1].[AdminControlBypassConsent],
    [T1].[IsHeroApp],
    [T1].[IsHidden],
    [T1].[CanvasAppId],
    [T1].[BackgroundColor],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[IntroducedVersion],
    [T1].[OwningBusinessUnit],
    [T1].[VersionNumber],
    [T1].[AADCreatedById],
    [T1].[AuthorizationReferences],
    [T1].[EmbeddedApp],
    [T1].[CdsDependencies],
    [T1].[DatabaseReferences],
    [T1].[AppComponents],
    [T1].[AppComponentDependencies],
    [T1].[CanvasAppType],
    [T1].[CanConsumeAppPass],
    [T1].[BackgroundImage],
    [T1].[SmallIcon],
    [T1].[MediumIcon],
    [T1].[LargeIcon],
    [T1].[WideIcon],
    [T1].[TeamsIcon],
    [T1].[Document],
    [T1].[Assets]
from [CanvasAppBase] [T1]
    left join [BusinessUnitBase] [businessunit_canvasapp] on ([T1].[OwningBusinessUnit] = [businessunit_canvasapp].[BusinessUnitId])
    left join [FileAttachmentBase] [FileAttachment_CanvasApp_Assets] on ([T1].[Assets] = [FileAttachment_CanvasApp_Assets].[FileAttachmentId])
    left join [FileAttachmentBase] [FileAttachment_CanvasApp_BackgroundImage] on ([T1].[BackgroundImage] = [FileAttachment_CanvasApp_BackgroundImage].[FileAttachmentId])
    left join [FileAttachmentBase] [FileAttachment_CanvasApp_Document] on ([T1].[Document] = [FileAttachment_CanvasApp_Document].[FileAttachmentId])
    left join [FileAttachmentBase] [FileAttachment_CanvasApp_LargeIcon] on ([T1].[LargeIcon] = [FileAttachment_CanvasApp_LargeIcon].[FileAttachmentId])
    left join [FileAttachmentBase] [FileAttachment_CanvasApp_MediumIcon] on ([T1].[MediumIcon] = [FileAttachment_CanvasApp_MediumIcon].[FileAttachmentId])
    left join [FileAttachmentBase] [FileAttachment_CanvasApp_SmallIcon] on ([T1].[SmallIcon] = [FileAttachment_CanvasApp_SmallIcon].[FileAttachmentId])
    left join [FileAttachmentBase] [FileAttachment_CanvasApp_TeamsIcon] on ([T1].[TeamsIcon] = [FileAttachment_CanvasApp_TeamsIcon].[FileAttachmentId])
    left join [FileAttachmentBase] [FileAttachment_CanvasApp_WideIcon] on ([T1].[WideIcon] = [FileAttachment_CanvasApp_WideIcon].[FileAttachmentId])
    left join OwnerBase XXowner on ([T1].OwnerId = XXowner.OwnerId)
where T1.OverwriteTime = 0