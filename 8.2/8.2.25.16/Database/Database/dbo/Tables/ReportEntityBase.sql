CREATE TABLE [dbo].[ReportEntityBase] (
    [CreatedOn]            DATETIME         NULL,
    [IsFilterable]         BIT              CONSTRAINT [DF_ReportEntityBase_IsFilterable] DEFAULT ((0)) NOT NULL,
    [ImportSequenceNumber] INT              NULL,
    [VersionNumber]        ROWVERSION       NULL,
    [CreatedBy]            UNIQUEIDENTIFIER NULL,
    [ReportId]             UNIQUEIDENTIFIER NOT NULL,
    [ReportEntityId]       UNIQUEIDENTIFIER NOT NULL,
    [ObjectTypeCode]       INT              NOT NULL,
    [ModifiedOn]           DATETIME         NULL,
    [ModifiedBy]           UNIQUEIDENTIFIER NULL,
    [SupportingSolutionId] UNIQUEIDENTIFIER NULL,
    [OverwriteTime]        DATETIME         CONSTRAINT [DF_ReportEntityBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [ReportEntityIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_ReportEntityBase_ReportEntityIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [IsCustomizable]       BIT              CONSTRAINT [DF_ReportEntityBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [ModifiedOnBehalfBy]   UNIQUEIDENTIFIER NULL,
    [IsManaged]            BIT              CONSTRAINT [DF_ReportEntityBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [SolutionId]           UNIQUEIDENTIFIER CONSTRAINT [DF_ReportEntityBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [CreatedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [ComponentState]       INT              CONSTRAINT [DF_ReportEntityBase_ComponentState] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_ReportEntity] PRIMARY KEY CLUSTERED ([ReportEntityId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_ReportEntityBase_ReportEntityIdUnique] UNIQUE NONCLUSTERED ([ReportEntityIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_report_reportentities]
    ON [dbo].[ReportEntityBase]([ReportId] ASC)
    INCLUDE([ComponentState]) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ReportEntityBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

