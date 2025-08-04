CREATE TABLE [dbo].[AppModuleBase] (
    [Descriptor]           NVARCHAR (MAX)   NULL,
    [AppModuleIdUnique]    UNIQUEIDENTIFIER CONSTRAINT [DF_AppModuleBase_AppModuleIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [WebResourceId]        UNIQUEIDENTIFIER NOT NULL,
    [SolutionId]           UNIQUEIDENTIFIER CONSTRAINT [DF_AppModuleBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [PublishedOn]          DATETIME         NULL,
    [ConfigXML]            NVARCHAR (MAX)   NULL,
    [ComponentState]       INT              CONSTRAINT [DF_AppModuleBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [FormFactor]           INT              NULL,
    [CreatedOn]            DATETIME         NULL,
    [UniqueName]           NVARCHAR (100)   NOT NULL,
    [AppModuleVersion]     NVARCHAR (48)    NULL,
    [ModifiedOnBehalfBy]   UNIQUEIDENTIFIER NULL,
    [PublisherId]          UNIQUEIDENTIFIER NULL,
    [URL]                  NVARCHAR (200)   NULL,
    [VersionNumber]        ROWVERSION       NULL,
    [AppModuleId]          UNIQUEIDENTIFIER CONSTRAINT [DF_AppModuleBase_AppModuleId] DEFAULT (newid()) NOT NULL,
    [CreatedBy]            UNIQUEIDENTIFIER NULL,
    [WelcomePageId]        UNIQUEIDENTIFIER NULL,
    [IntroducedVersion]    NVARCHAR (100)   NULL,
    [IsFeatured]           BIT              CONSTRAINT [DF_AppModuleBase_IsFeatured] DEFAULT ((0)) NOT NULL,
    [IsManaged]            BIT              CONSTRAINT [DF_AppModuleBase_IsManaged] DEFAULT ((0)) NULL,
    [IsDefault]            BIT              CONSTRAINT [DF_AppModuleBase_IsDefault] DEFAULT ((0)) NULL,
    [CreatedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [Name]                 NVARCHAR (100)   NOT NULL,
    [ImportSequenceNumber] INT              NULL,
    [ModifiedBy]           UNIQUEIDENTIFIER NULL,
    [SupportingSolutionId] UNIQUEIDENTIFIER NULL,
    [Description]          NVARCHAR (MAX)   NULL,
    [OrganizationId]       UNIQUEIDENTIFIER NOT NULL,
    [AppModuleXmlManaged]  NVARCHAR (MAX)   NULL,
    [ClientType]           INT              CONSTRAINT [DF_AppModuleBase_ClientType] DEFAULT ((2)) NULL,
    [OverwriteTime]        DATETIME         CONSTRAINT [DF_AppModuleBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [OverriddenCreatedOn]  DATETIME         NULL,
    [ModifiedOn]           DATETIME         NULL,
    [EventHandlers]        NVARCHAR (MAX)   NULL,
    [NavigationType]       INT              CONSTRAINT [DF_AppModuleBase_NavigationType] DEFAULT ((0)) NOT NULL,
    [OptimizedFor]         NVARCHAR (200)   NULL,
    [statecode]            INT              CONSTRAINT [DF_AppModuleBase_statecode] DEFAULT ((0)) NOT NULL,
    [statuscode]           INT              CONSTRAINT [DF_AppModuleBase_statuscode] DEFAULT ((1)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_AppModule] PRIMARY KEY CLUSTERED ([AppModuleId] ASC, [UniqueName] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[AppModuleBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[AppModuleBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [cndx_url_AppModule]
    ON [dbo].[AppModuleBase]([URL] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [cndx_uniquename_AppModule]
    ON [dbo].[AppModuleBase]([UniqueName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[AppModuleBase]([AppModuleId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_for_entitykey_uniquename]
    ON [dbo].[AppModuleBase]([ComponentState] ASC, [OverwriteTime] ASC, [UniqueName] ASC)
    INCLUDE([AppModuleId]) WHERE ([ComponentState] IS NOT NULL AND [OverwriteTime] IS NOT NULL AND [UniqueName] IS NOT NULL) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

