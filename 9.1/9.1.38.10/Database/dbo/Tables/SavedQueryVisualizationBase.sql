CREATE TABLE [dbo].[SavedQueryVisualizationBase] (
    [PrimaryEntityTypeCode]           INT              CONSTRAINT [DF_SavedQueryVisualizationBase_PrimaryEntityTypeCode] DEFAULT ((0)) NOT NULL,
    [PresentationDescription]         NVARCHAR (MAX)   NULL,
    [DataDescription]                 NVARCHAR (MAX)   NULL,
    [ModifiedOnBehalfBy]              UNIQUEIDENTIFIER NULL,
    [IsDefault]                       BIT              CONSTRAINT [DF_SavedQueryVisualizationBase_IsDefault] DEFAULT ((0)) NOT NULL,
    [Description]                     NVARCHAR (MAX)   NULL,
    [SolutionId]                      UNIQUEIDENTIFIER CONSTRAINT [DF_SavedQueryVisualizationBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]            UNIQUEIDENTIFIER NULL,
    [OverwriteTime]                   DATETIME         CONSTRAINT [DF_SavedQueryVisualizationBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [Name]                            NVARCHAR (100)   NOT NULL,
    [SavedQueryVisualizationIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_SavedQueryVisualizationBase_SavedQueryVisualizationIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [ModifiedBy]                      UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                      DATETIME         NULL,
    [Type]                            INT              CONSTRAINT [DF_SavedQueryVisualizationBase_Type] DEFAULT ((0)) NULL,
    [OrganizationId]                  UNIQUEIDENTIFIER NOT NULL,
    [SavedQueryVisualizationId]       UNIQUEIDENTIFIER NOT NULL,
    [WebResourceId]                   UNIQUEIDENTIFIER NULL,
    [VersionNumber]                   ROWVERSION       NULL,
    [CanBeDeleted]                    BIT              CONSTRAINT [DF_SavedQueryVisualizationBase_CanBeDeleted] DEFAULT ((1)) NOT NULL,
    [ChartType]                       INT              CONSTRAINT [DF_SavedQueryVisualizationBase_ChartType] DEFAULT ((0)) NOT NULL,
    [CreatedBy]                       UNIQUEIDENTIFIER NULL,
    [IsCustomizable]                  BIT              CONSTRAINT [DF_SavedQueryVisualizationBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [IsManaged]                       BIT              CONSTRAINT [DF_SavedQueryVisualizationBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [ComponentState]                  INT              CONSTRAINT [DF_SavedQueryVisualizationBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [CreatedOn]                       DATETIME         NULL,
    [IntroducedVersion]               NVARCHAR (48)    NULL,
    CONSTRAINT [cndx_PrimaryKey_SavedQueryVisualization] PRIMARY KEY CLUSTERED ([SavedQueryVisualizationId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_SavedQueryVisualizationBase_SavedQueryVisualizationIdUnique] UNIQUE NONCLUSTERED ([SavedQueryVisualizationIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[SavedQueryVisualizationBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[SavedQueryVisualizationBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SavedQueryVisualizationBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_webresource_savedqueryvisualizations]
    ON [dbo].[SavedQueryVisualizationBase]([WebResourceId] ASC) WHERE ([WebResourceId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_SavedQueryVisualizationName]
    ON [dbo].[SavedQueryVisualizationBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[SavedQueryVisualizationBase]([SavedQueryVisualizationId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_EAE145E10D5D4CC6AF1E398FFC892EB8]
    ON [dbo].[SavedQueryVisualizationBase]([SavedQueryVisualizationId] ASC)
    INCLUDE([Name], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_EAE145E10D5D4CC6AF1E398FFC892EB8]
    ON [dbo].[SavedQueryVisualizationBase]([SavedQueryVisualizationId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

