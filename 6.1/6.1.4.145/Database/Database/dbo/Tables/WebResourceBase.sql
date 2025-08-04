CREATE TABLE [dbo].[WebResourceBase] (
    [Name]                 NVARCHAR (256)   NOT NULL,
    [IsManaged]            BIT              CONSTRAINT [DF_WebResourceBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [WebResourceType]      INT              NOT NULL,
    [ComponentState]       INT              CONSTRAINT [DF_WebResourceBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [VersionNumber]        ROWVERSION       NULL,
    [SilverlightVersion]   NVARCHAR (20)    NULL,
    [ModifiedOnBehalfBy]   UNIQUEIDENTIFIER NULL,
    [SupportingSolutionId] UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [ModifiedOn]           DATETIME         NULL,
    [OrganizationId]       UNIQUEIDENTIFIER NOT NULL,
    [WebResourceIdUnique]  UNIQUEIDENTIFIER CONSTRAINT [DF_WebResourceBase_WebResourceIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [DisplayName]          NVARCHAR (200)   NULL,
    [ModifiedBy]           UNIQUEIDENTIFIER NULL,
    [IsHidden]             BIT              CONSTRAINT [DF_WebResourceBase_IsHidden] DEFAULT ((0)) NOT NULL,
    [WebResourceId]        UNIQUEIDENTIFIER NOT NULL,
    [OverwriteTime]        DATETIME         CONSTRAINT [DF_WebResourceBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [CreatedOn]            DATETIME         NULL,
    [CanBeDeleted]         BIT              CONSTRAINT [DF_WebResourceBase_CanBeDeleted] DEFAULT ((1)) NOT NULL,
    [SolutionId]           UNIQUEIDENTIFIER CONSTRAINT [DF_WebResourceBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [IsCustomizable]       BIT              CONSTRAINT [DF_WebResourceBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [Content]              VARCHAR (MAX)    NULL,
    [CreatedBy]            UNIQUEIDENTIFIER NULL,
    [Description]          NVARCHAR (MAX)   NULL,
    [LanguageCode]         INT              NULL,
    [IntroducedVersion]    NVARCHAR (48)    NULL,
    CONSTRAINT [cndx_PrimaryKey_WebResource] PRIMARY KEY CLUSTERED ([WebResourceId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_WebResourceBase_WebResourceIdUnique] UNIQUE NONCLUSTERED ([WebResourceIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[WebResourceBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_WebResourceNames]
    ON [dbo].[WebResourceBase]([Name] ASC)
    INCLUDE([IsHidden], [WebResourceIdUnique]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Webresource_ModifiedOn]
    ON [dbo].[WebResourceBase]([ModifiedOn] ASC) WITH (FILLFACTOR = 80);

