CREATE TABLE [dbo].[AppModuleBase] (
    [VersionNumber]        ROWVERSION       NULL,
    [SupportingSolutionId] UNIQUEIDENTIFIER NULL,
    [ComponentState]       INT              CONSTRAINT [DF_AppModuleBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ModifiedBy]           UNIQUEIDENTIFIER NULL,
    [Description]          NVARCHAR (MAX)   NULL,
    [ConfigXML]            NVARCHAR (MAX)   NULL,
    [ImportSequenceNumber] INT              NULL,
    [OverwriteTime]        DATETIME         CONSTRAINT [DF_AppModuleBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [WebResourceId]        UNIQUEIDENTIFIER NOT NULL,
    [SolutionId]           UNIQUEIDENTIFIER CONSTRAINT [DF_AppModuleBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [AppModuleIdUnique]    UNIQUEIDENTIFIER CONSTRAINT [DF_AppModuleBase_AppModuleIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [IsDefault]            BIT              CONSTRAINT [DF_AppModuleBase_IsDefault] DEFAULT ((0)) NULL,
    [ModifiedOnBehalfBy]   UNIQUEIDENTIFIER NULL,
    [IsFeatured]           BIT              CONSTRAINT [DF_AppModuleBase_IsFeatured] DEFAULT ((0)) NOT NULL,
    [URL]                  NVARCHAR (200)   NULL,
    [Name]                 NVARCHAR (100)   NOT NULL,
    [AppModuleId]          UNIQUEIDENTIFIER CONSTRAINT [DF_AppModuleBase_AppModuleId] DEFAULT (newid()) NOT NULL,
    [IsManaged]            BIT              CONSTRAINT [DF_AppModuleBase_IsManaged] DEFAULT ((0)) NULL,
    [OrganizationId]       UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOn]           DATETIME         NULL,
    [UniqueName]           NVARCHAR (100)   NOT NULL,
    [CreatedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [PublisherId]          UNIQUEIDENTIFIER NULL,
    [ClientType]           INT              NULL,
    [AppModuleVersion]     NVARCHAR (48)    NULL,
    [CreatedBy]            UNIQUEIDENTIFIER NULL,
    [PublishedOn]          DATETIME         NULL,
    [FormFactor]           INT              NULL,
    [OverriddenCreatedOn]  DATETIME         NULL,
    [IntroducedVersion]    NVARCHAR (100)   NULL,
    [AppModuleXmlManaged]  NVARCHAR (MAX)   NULL,
    [CreatedOn]            DATETIME         NULL,
    CONSTRAINT [cndx_PrimaryKey_AppModule] PRIMARY KEY CLUSTERED ([AppModuleId] ASC, [UniqueName] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [cndx_uniquename_AppModule]
    ON [dbo].[AppModuleBase]([UniqueName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [cndx_url_AppModule]
    ON [dbo].[AppModuleBase]([URL] ASC) WITH (FILLFACTOR = 80);

