CREATE TABLE [dbo].[SavedQueryVisualizationBase] (
    [OverwriteTime]                   DATETIME         CONSTRAINT [DF_SavedQueryVisualizationBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [ComponentState]                  INT              CONSTRAINT [DF_SavedQueryVisualizationBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [Description]                     NVARCHAR (MAX)   NULL,
    [PresentationDescription]         NVARCHAR (MAX)   NULL,
    [VersionNumber]                   ROWVERSION       NULL,
    [IsDefault]                       BIT              CONSTRAINT [DF_SavedQueryVisualizationBase_IsDefault] DEFAULT ((0)) NOT NULL,
    [ModifiedOn]                      DATETIME         NULL,
    [DataDescription]                 NVARCHAR (MAX)   NULL,
    [CreatedBy]                       UNIQUEIDENTIFIER NULL,
    [SolutionId]                      UNIQUEIDENTIFIER CONSTRAINT [DF_SavedQueryVisualizationBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]            UNIQUEIDENTIFIER NULL,
    [SavedQueryVisualizationIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_SavedQueryVisualizationBase_SavedQueryVisualizationIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [ModifiedBy]                      UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    [IsCustomizable]                  BIT              CONSTRAINT [DF_SavedQueryVisualizationBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [Name]                            NVARCHAR (100)   NOT NULL,
    [SavedQueryVisualizationId]       UNIQUEIDENTIFIER NOT NULL,
    [PrimaryEntityTypeCode]           INT              CONSTRAINT [DF_SavedQueryVisualizationBase_PrimaryEntityTypeCode] DEFAULT ((0)) NOT NULL,
    [WebResourceId]                   UNIQUEIDENTIFIER NULL,
    [IsManaged]                       BIT              CONSTRAINT [DF_SavedQueryVisualizationBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [OrganizationId]                  UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                       DATETIME         NULL,
    [ModifiedOnBehalfBy]              UNIQUEIDENTIFIER NULL,
    [IntroducedVersion]               NVARCHAR (48)    NULL,
    CONSTRAINT [cndx_PrimaryKey_SavedQueryVisualization] PRIMARY KEY CLUSTERED ([SavedQueryVisualizationId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_SavedQueryVisualizationBase_SavedQueryVisualizationIdUnique] UNIQUE NONCLUSTERED ([SavedQueryVisualizationIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_SavedQueryVisualizationName]
    ON [dbo].[SavedQueryVisualizationBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_webresource_savedqueryvisualizations]
    ON [dbo].[SavedQueryVisualizationBase]([WebResourceId] ASC) WHERE ([WebResourceId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SavedQueryVisualizationBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

