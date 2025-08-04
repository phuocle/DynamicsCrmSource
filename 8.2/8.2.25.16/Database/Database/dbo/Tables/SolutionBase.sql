CREATE TABLE [dbo].[SolutionBase] (
    [ModifiedOn]                    DATETIME         NULL,
    [ModifiedBy]                    UNIQUEIDENTIFIER NULL,
    [PinpointAssetId]               NVARCHAR (255)   NULL,
    [UniqueName]                    NVARCHAR (65)    NOT NULL,
    [Description]                   NVARCHAR (2000)  NULL,
    [CreatedOnBehalfBy]             UNIQUEIDENTIFIER NULL,
    [OrganizationId]                UNIQUEIDENTIFIER NOT NULL,
    [PinpointSolutionId]            BIGINT           NULL,
    [PinpointSolutionDefaultLocale] NVARCHAR (16)    NULL,
    [SolutionId]                    UNIQUEIDENTIFIER NOT NULL,
    [FriendlyName]                  NVARCHAR (256)   NOT NULL,
    [CreatedBy]                     UNIQUEIDENTIFIER NULL,
    [IsVisible]                     BIT              CONSTRAINT [DF_SolutionBase_IsVisible] DEFAULT ((1)) NULL,
    [Version]                       NVARCHAR (256)   CONSTRAINT [DF_SolutionBase_Version] DEFAULT ('') NOT NULL,
    [ConfigurationPageId]           UNIQUEIDENTIFIER NULL,
    [IsManaged]                     BIT              NULL,
    [CreatedOn]                     DATETIME         NULL,
    [VersionNumber]                 ROWVERSION       NULL,
    [ModifiedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [PublisherId]                   UNIQUEIDENTIFIER NOT NULL,
    [InstalledOn]                   DATETIME         NULL,
    [SolutionPackageVersion]        NVARCHAR (256)   NULL,
    [ParentSolutionId]              UNIQUEIDENTIFIER NULL,
    [IsInternal]                    BIT              CONSTRAINT [DF_SolutionBase_IsInternal] DEFAULT ((0)) NULL,
    [SolutionType]                  INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_Solution] PRIMARY KEY CLUSTERED ([SolutionId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [publisher_solution] FOREIGN KEY ([PublisherId]) REFERENCES [dbo].[PublisherBase] ([PublisherId]),
    CONSTRAINT [solution_configuration_webresource] FOREIGN KEY ([ConfigurationPageId]) REFERENCES [dbo].[WebResourceBaseIds] ([WebResourceId]),
    CONSTRAINT [solution_parent_solution] FOREIGN KEY ([ParentSolutionId]) REFERENCES [dbo].[SolutionBase] ([SolutionId])
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_UniqueName]
    ON [dbo].[SolutionBase]([UniqueName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SolutionBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

