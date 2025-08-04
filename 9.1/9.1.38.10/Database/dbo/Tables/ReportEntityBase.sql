CREATE TABLE [dbo].[ReportEntityBase] (
    [ReportEntityId]       UNIQUEIDENTIFIER NOT NULL,
    [SupportingSolutionId] UNIQUEIDENTIFIER NULL,
    [ObjectTypeCode]       INT              NOT NULL,
    [IsFilterable]         BIT              CONSTRAINT [DF_ReportEntityBase_IsFilterable] DEFAULT ((0)) NOT NULL,
    [ModifiedBy]           UNIQUEIDENTIFIER NULL,
    [VersionNumber]        ROWVERSION       NULL,
    [CreatedBy]            UNIQUEIDENTIFIER NULL,
    [ModifiedOn]           DATETIME         NULL,
    [OverwriteTime]        DATETIME         CONSTRAINT [DF_ReportEntityBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [IsCustomizable]       BIT              CONSTRAINT [DF_ReportEntityBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [ReportEntityIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_ReportEntityBase_ReportEntityIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [SolutionId]           UNIQUEIDENTIFIER CONSTRAINT [DF_ReportEntityBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [ImportSequenceNumber] INT              NULL,
    [IsManaged]            BIT              CONSTRAINT [DF_ReportEntityBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [ModifiedOnBehalfBy]   UNIQUEIDENTIFIER NULL,
    [ReportId]             UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]            DATETIME         NULL,
    [ComponentState]       INT              CONSTRAINT [DF_ReportEntityBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [CreatedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_ReportEntity] PRIMARY KEY CLUSTERED ([ReportEntityId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_ReportEntityBase_ReportEntityIdUnique] UNIQUE NONCLUSTERED ([ReportEntityIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[ReportEntityBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ReportEntityBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_report_reportentities]
    ON [dbo].[ReportEntityBase]([ReportId] ASC)
    INCLUDE([ComponentState]) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[ReportEntityBase]([ReportEntityId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

