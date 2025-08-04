CREATE TABLE [dbo].[ReportVisibilityBase] (
    [ReportId]                 UNIQUEIDENTIFIER NOT NULL,
    [ReportVisibilityId]       UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]            ROWVERSION       NULL,
    [ImportSequenceNumber]     INT              NULL,
    [ModifiedOn]               DATETIME         NULL,
    [CreatedOn]                DATETIME         NULL,
    [CreatedBy]                UNIQUEIDENTIFIER NULL,
    [VisibilityCode]           INT              CONSTRAINT [DF_ReportVisibilityBase_VisibilityCode] DEFAULT ((1)) NOT NULL,
    [ModifiedBy]               UNIQUEIDENTIFIER NULL,
    [SolutionId]               UNIQUEIDENTIFIER CONSTRAINT [DF_ReportVisibilityBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [IsCustomizable]           BIT              CONSTRAINT [DF_ReportVisibilityBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [IsManaged]                BIT              CONSTRAINT [DF_ReportVisibilityBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [ModifiedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OverwriteTime]            DATETIME         CONSTRAINT [DF_ReportVisibilityBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [ReportVisibilityIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_ReportVisibilityBase_ReportVisibilityIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [SupportingSolutionId]     UNIQUEIDENTIFIER NULL,
    [ComponentState]           INT              CONSTRAINT [DF_ReportVisibilityBase_ComponentState] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_ReportVisibility] PRIMARY KEY CLUSTERED ([ReportVisibilityId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_ReportVisibilityBase_ReportVisibilityIdUnique] UNIQUE NONCLUSTERED ([ReportVisibilityIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ReportVisibilityBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_report_reportvisibility]
    ON [dbo].[ReportVisibilityBase]([ReportId] ASC)
    INCLUDE([ComponentState]) WITH (FILLFACTOR = 80);

