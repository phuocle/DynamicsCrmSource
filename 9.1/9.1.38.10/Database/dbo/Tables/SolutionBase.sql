CREATE TABLE [dbo].[SolutionBase] (
    [CreatedOnBehalfBy]             UNIQUEIDENTIFIER NULL,
    [CreatedBy]                     UNIQUEIDENTIFIER NULL,
    [IsManaged]                     BIT              NULL,
    [CreatedOn]                     DATETIME         NULL,
    [ConfigurationPageId]           UNIQUEIDENTIFIER NULL,
    [PinpointAssetId]               NVARCHAR (255)   NULL,
    [ParentSolutionId]              UNIQUEIDENTIFIER NULL,
    [SolutionType]                  INT              NULL,
    [SolutionPackageVersion]        NVARCHAR (256)   NULL,
    [ModifiedOn]                    DATETIME         NULL,
    [SolutionId]                    UNIQUEIDENTIFIER NOT NULL,
    [Description]                   NVARCHAR (2000)  NULL,
    [FriendlyName]                  NVARCHAR (256)   NOT NULL,
    [OrganizationId]                UNIQUEIDENTIFIER NOT NULL,
    [PinpointSolutionId]            BIGINT           NULL,
    [UpdatedOn]                     DATETIME         NULL,
    [PinpointSolutionDefaultLocale] NVARCHAR (16)    NULL,
    [ModifiedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [IsInternal]                    BIT              CONSTRAINT [DF_SolutionBase_IsInternal] DEFAULT ((0)) NULL,
    [IsVisible]                     BIT              CONSTRAINT [DF_SolutionBase_IsVisible] DEFAULT ((1)) NULL,
    [UniqueName]                    NVARCHAR (65)    NOT NULL,
    [InstalledOn]                   DATETIME         NULL,
    [Version]                       NVARCHAR (256)   CONSTRAINT [DF_SolutionBase_Version] DEFAULT ('') NOT NULL,
    [VersionNumber]                 ROWVERSION       NULL,
    [ModifiedBy]                    UNIQUEIDENTIFIER NULL,
    [PublisherId]                   UNIQUEIDENTIFIER NOT NULL,
    [IsApiManaged]                  BIT              CONSTRAINT [DF_SolutionBase_IsApiManaged] DEFAULT ((0)) NOT NULL,
    [FileId]                        UNIQUEIDENTIFIER NULL,
    [TemplateSuffix]                NVARCHAR (65)    NULL,
    [UpgradeInfo]                   NVARCHAR (MAX)   NULL,
    [Thumbprint]                    NVARCHAR (256)   NULL,
    CONSTRAINT [cndx_PrimaryKey_Solution] PRIMARY KEY CLUSTERED ([SolutionId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [fileattachment_solution_fileid] FOREIGN KEY ([FileId]) REFERENCES [dbo].[FileAttachmentBase] ([FileAttachmentId]),
    CONSTRAINT [publisher_solution] FOREIGN KEY ([PublisherId]) REFERENCES [dbo].[PublisherBase] ([PublisherId]),
    CONSTRAINT [solution_configuration_webresource] FOREIGN KEY ([ConfigurationPageId]) REFERENCES [dbo].[WebResourceBaseIds] ([WebResourceId]),
    CONSTRAINT [solution_parent_solution] FOREIGN KEY ([ParentSolutionId]) REFERENCES [dbo].[SolutionBase] ([SolutionId])
);


GO
ALTER TABLE [dbo].[SolutionBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SolutionBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_UniqueName]
    ON [dbo].[SolutionBase]([UniqueName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_6F66A4D9593B44F8801AD40EF69EBD67]
    ON [dbo].[SolutionBase]([SolutionId] ASC)
    INCLUDE([FriendlyName], [UniqueName], [Version], [IsManaged], [PublisherId], [Description], [IsVisible], [ParentSolutionId], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_6F66A4D9593B44F8801AD40EF69EBD67]
    ON [dbo].[SolutionBase]([SolutionId] ASC)
    INCLUDE([FriendlyName], [UniqueName]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_solution_parent_solution]
    ON [dbo].[SolutionBase]([ParentSolutionId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_publisher_solution]
    ON [dbo].[SolutionBase]([PublisherId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_solution_configuration_webresource]
    ON [dbo].[SolutionBase]([ConfigurationPageId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

