CREATE TABLE [dbo].[CanvasAppBase] (
    [CanvasAppType]             INT              NULL,
    [AuthorizationReferences]   NVARCHAR (MAX)   NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [DatabaseReferences]        NVARCHAR (MAX)   NULL,
    [CreatedTime]               DATETIME         NULL,
    [AppComponentDependencies]  NVARCHAR (MAX)   NULL,
    [CommitMessage]             NVARCHAR (MAX)   NULL,
    [SupportingSolutionId]      UNIQUEIDENTIFIER NULL,
    [SolutionId]                UNIQUEIDENTIFIER NULL,
    [GalleryItemId]             NVARCHAR (MAX)   NULL,
    [IsCdsUpgraded]             BIT              NULL,
    [ConnectionReferences]      NVARCHAR (MAX)   NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [CreatedByClientVersion]    NVARCHAR (64)    NULL,
    [BypassConsent]             BIT              NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [AdminControlBypassConsent] BIT              NULL,
    [IntroducedVersion]         NVARCHAR (48)    NULL,
    [AADCreatedById]            NVARCHAR (64)    NULL,
    [IsHeroApp]                 BIT              NULL,
    [CdsDependencies]           NVARCHAR (MAX)   NULL,
    [IsHidden]                  BIT              NULL,
    [CanConsumeAppPass]         BIT              NULL,
    [AppVersion]                NVARCHAR (MAX)   CONSTRAINT [DF_CanvasAppBase_AppVersion] DEFAULT ((0)) NOT NULL,
    [Name]                      NVARCHAR (100)   NOT NULL,
    [AppOpenUri]                NVARCHAR (MAX)   NULL,
    [LastModifiedTime]          DATETIME         NULL,
    [IsManaged]                 BIT              CONSTRAINT [DF_CanvasAppBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [AppComponents]             NVARCHAR (MAX)   NULL,
    [CanvasAppRowId]            UNIQUEIDENTIFIER CONSTRAINT [DF_CanvasAppBase_CanvasAppRowId] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [Publisher]                 NVARCHAR (MAX)   NULL,
    [BackgroundColor]           NVARCHAR (MAX)   NULL,
    [EmbeddedApp]               NVARCHAR (MAX)   NULL,
    [MinClientVersion]          NVARCHAR (64)    NULL,
    [OwnerId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_CanvasAppBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [AADLastModifiedById]       NVARCHAR (64)    NULL,
    [Tags]                      NVARCHAR (MAX)   NULL,
    [ComponentState]            INT              CONSTRAINT [DF_CanvasAppBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [LastPublishTime]           DATETIME         NULL,
    [Status]                    NVARCHAR (MAX)   NULL,
    [AADLastPublishedById]      NVARCHAR (64)    NULL,
    [DisplayName]               NVARCHAR (MAX)   NULL,
    [CanvasAppId]               UNIQUEIDENTIFIER CONSTRAINT [DF_CanvasAppBase_CanvasAppId] DEFAULT (newid()) NOT NULL,
    [OverwriteTime]             DATETIME         CONSTRAINT [DF_CanvasAppBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [IsFeaturedApp]             BIT              NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_CanvasAppBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [BackgroundImage]           UNIQUEIDENTIFIER NULL,
    [SmallIcon]                 UNIQUEIDENTIFIER NULL,
    [MediumIcon]                UNIQUEIDENTIFIER NULL,
    [LargeIcon]                 UNIQUEIDENTIFIER NULL,
    [WideIcon]                  UNIQUEIDENTIFIER NULL,
    [TeamsIcon]                 UNIQUEIDENTIFIER NULL,
    [Document]                  UNIQUEIDENTIFIER NULL,
    [Assets]                    UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_CanvasAppId] PRIMARY KEY CLUSTERED ([CanvasAppId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [FileAttachment_CanvasApp_Assets] FOREIGN KEY ([Assets]) REFERENCES [dbo].[FileAttachmentBase] ([FileAttachmentId]),
    CONSTRAINT [FileAttachment_CanvasApp_BackgroundImage] FOREIGN KEY ([BackgroundImage]) REFERENCES [dbo].[FileAttachmentBase] ([FileAttachmentId]),
    CONSTRAINT [FileAttachment_CanvasApp_Document] FOREIGN KEY ([Document]) REFERENCES [dbo].[FileAttachmentBase] ([FileAttachmentId]),
    CONSTRAINT [FileAttachment_CanvasApp_LargeIcon] FOREIGN KEY ([LargeIcon]) REFERENCES [dbo].[FileAttachmentBase] ([FileAttachmentId]),
    CONSTRAINT [FileAttachment_CanvasApp_MediumIcon] FOREIGN KEY ([MediumIcon]) REFERENCES [dbo].[FileAttachmentBase] ([FileAttachmentId]),
    CONSTRAINT [FileAttachment_CanvasApp_SmallIcon] FOREIGN KEY ([SmallIcon]) REFERENCES [dbo].[FileAttachmentBase] ([FileAttachmentId]),
    CONSTRAINT [FileAttachment_CanvasApp_TeamsIcon] FOREIGN KEY ([TeamsIcon]) REFERENCES [dbo].[FileAttachmentBase] ([FileAttachmentId]),
    CONSTRAINT [FileAttachment_CanvasApp_WideIcon] FOREIGN KEY ([WideIcon]) REFERENCES [dbo].[FileAttachmentBase] ([FileAttachmentId]),
    CONSTRAINT [FK_CanvasApp_Solution] FOREIGN KEY ([SolutionId]) REFERENCES [dbo].[SolutionBase] ([SolutionId]),
    CONSTRAINT [ndx_CanvasAppName] UNIQUE NONCLUSTERED ([Name] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[CanvasAppBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[CanvasAppBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Sync_VersionNumber]
    ON [dbo].[CanvasAppBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[CanvasAppBase]([CanvasAppId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_CanvasAppOwner]
    ON [dbo].[CanvasAppBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_for_entitykey_schemaName]
    ON [dbo].[CanvasAppBase]([ComponentState] ASC, [Name] ASC, [OverwriteTime] ASC)
    INCLUDE([CanvasAppId]) WHERE ([ComponentState] IS NOT NULL AND [Name] IS NOT NULL AND [OverwriteTime] IS NOT NULL) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

