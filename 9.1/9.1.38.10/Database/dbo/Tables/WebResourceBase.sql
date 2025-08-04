CREATE TABLE [dbo].[WebResourceBase] (
    [ComponentState]              INT              CONSTRAINT [DF_WebResourceBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [LanguageCode]                INT              NULL,
    [IsHidden]                    BIT              CONSTRAINT [DF_WebResourceBase_IsHidden] DEFAULT ((0)) NOT NULL,
    [WebResourceType]             INT              NOT NULL,
    [IntroducedVersion]           NVARCHAR (48)    NULL,
    [VersionNumber]               ROWVERSION       NULL,
    [SilverlightVersion]          NVARCHAR (20)    NULL,
    [CreatedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]          UNIQUEIDENTIFIER NULL,
    [IsManaged]                   BIT              CONSTRAINT [DF_WebResourceBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [ContentJson]                 NVARCHAR (MAX)   NULL,
    [OrganizationId]              UNIQUEIDENTIFIER NOT NULL,
    [DisplayName]                 NVARCHAR (200)   NULL,
    [ModifiedBy]                  UNIQUEIDENTIFIER NULL,
    [SupportingSolutionId]        UNIQUEIDENTIFIER NULL,
    [IsEnabledForMobileClient]    BIT              CONSTRAINT [DF_WebResourceBase_IsEnabledForMobileClient] DEFAULT ((0)) NOT NULL,
    [Name]                        NVARCHAR (256)   NOT NULL,
    [CreatedBy]                   UNIQUEIDENTIFIER NULL,
    [Description]                 NVARCHAR (MAX)   NULL,
    [IsAvailableForMobileOffline] BIT              CONSTRAINT [DF_WebResourceBase_IsAvailableForMobileOffline] DEFAULT ((0)) NOT NULL,
    [WebResourceId]               UNIQUEIDENTIFIER NOT NULL,
    [SolutionId]                  UNIQUEIDENTIFIER CONSTRAINT [DF_WebResourceBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [ModifiedOn]                  DATETIME         NULL,
    [CanBeDeleted]                BIT              CONSTRAINT [DF_WebResourceBase_CanBeDeleted] DEFAULT ((1)) NOT NULL,
    [CreatedOn]                   DATETIME         NULL,
    [OverwriteTime]               DATETIME         CONSTRAINT [DF_WebResourceBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [IsCustomizable]              BIT              CONSTRAINT [DF_WebResourceBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [Content]                     VARCHAR (MAX)    NULL,
    [WebResourceIdUnique]         UNIQUEIDENTIFIER CONSTRAINT [DF_WebResourceBase_WebResourceIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [DependencyXml]               NVARCHAR (MAX)   NULL,
    CONSTRAINT [cndx_PrimaryKey_WebResource] PRIMARY KEY CLUSTERED ([WebResourceId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_WebResourceBase_WebResourceIdUnique] UNIQUE NONCLUSTERED ([WebResourceIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[WebResourceBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[WebResourceBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[WebResourceBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_WebResourceNames]
    ON [dbo].[WebResourceBase]([Name] ASC)
    INCLUDE([IsHidden], [WebResourceIdUnique], [WebResourceId], [WebResourceType]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Webresource_ModifiedOn]
    ON [dbo].[WebResourceBase]([ModifiedOn] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[WebResourceBase]([WebResourceId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Webresource_ComponentState]
    ON [dbo].[WebResourceBase]([ComponentState] ASC, [OverwriteTime] ASC)
    INCLUDE([LanguageCode], [WebResourceType], [Name], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_439546B2D26646A59BA7ABB3FECF933A]
    ON [dbo].[WebResourceBase]([WebResourceId] ASC)
    INCLUDE([DisplayName], [Name], [Description], [WebResourceType], [IsCustomizable], [IsHidden], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_439546B2D26646A59BA7ABB3FECF933A]
    ON [dbo].[WebResourceBase]([WebResourceId] ASC)
    INCLUDE([Name], [DisplayName], [Description]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

