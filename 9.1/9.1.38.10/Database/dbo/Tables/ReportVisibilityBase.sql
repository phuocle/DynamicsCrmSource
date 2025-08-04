CREATE TABLE [dbo].[ReportVisibilityBase] (
    [ReportVisibilityId]       UNIQUEIDENTIFIER NOT NULL,
    [ReportId]                 UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]            ROWVERSION       NULL,
    [ComponentState]           INT              CONSTRAINT [DF_ReportVisibilityBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ModifiedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [ImportSequenceNumber]     INT              NULL,
    [IsManaged]                BIT              CONSTRAINT [DF_ReportVisibilityBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [IsCustomizable]           BIT              CONSTRAINT [DF_ReportVisibilityBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [CreatedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [SolutionId]               UNIQUEIDENTIFIER CONSTRAINT [DF_ReportVisibilityBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [ModifiedOn]               DATETIME         NULL,
    [SupportingSolutionId]     UNIQUEIDENTIFIER NULL,
    [ModifiedBy]               UNIQUEIDENTIFIER NULL,
    [CreatedOn]                DATETIME         NULL,
    [VisibilityCode]           INT              CONSTRAINT [DF_ReportVisibilityBase_VisibilityCode] DEFAULT ((1)) NOT NULL,
    [CreatedBy]                UNIQUEIDENTIFIER NULL,
    [OverwriteTime]            DATETIME         CONSTRAINT [DF_ReportVisibilityBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [ReportVisibilityIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_ReportVisibilityBase_ReportVisibilityIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_ReportVisibility] PRIMARY KEY CLUSTERED ([ReportVisibilityId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_ReportVisibilityBase_ReportVisibilityIdUnique] UNIQUE NONCLUSTERED ([ReportVisibilityIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[ReportVisibilityBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ReportVisibilityBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_report_reportvisibility]
    ON [dbo].[ReportVisibilityBase]([ReportId] ASC)
    INCLUDE([ComponentState]) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[ReportVisibilityBase]([ReportVisibilityId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

