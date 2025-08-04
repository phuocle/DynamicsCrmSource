CREATE TABLE [dbo].[WebWizardBase] (
    [ModifiedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [Name]                    NVARCHAR (100)   NOT NULL,
    [WebWizardId]             UNIQUEIDENTIFIER NOT NULL,
    [StartPageSequenceNumber] INT              NULL,
    [TitleResourceString]     NVARCHAR (100)   NOT NULL,
    [ComponentState]          INT              CONSTRAINT [DF_WebWizardBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ModifiedBy]              UNIQUEIDENTIFIER NULL,
    [OverwriteTime]           DATETIME         CONSTRAINT [DF_WebWizardBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [WizardPageHeight]        INT              NULL,
    [VersionNumber]           ROWVERSION       NULL,
    [CreatedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [IntroducedVersion]       NVARCHAR (42)    NULL,
    [SolutionId]              UNIQUEIDENTIFIER CONSTRAINT [DF_WebWizardBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [IsManaged]               BIT              CONSTRAINT [DF_WebWizardBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [SupportingSolutionId]    UNIQUEIDENTIFIER NULL,
    [CreatedBy]               UNIQUEIDENTIFIER NULL,
    [ModifiedOn]              DATETIME         NULL,
    [AccessPrivileges]        NVARCHAR (1024)  NULL,
    [OrganizationId]          UNIQUEIDENTIFIER NOT NULL,
    [WizardPageWidth]         INT              NULL,
    [IsStaticPageSequence]    BIT              NOT NULL,
    [WebWizardIdUnique]       UNIQUEIDENTIFIER CONSTRAINT [DF_WebWizardBase_WebWizardIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [CreatedOn]               DATETIME         NULL,
    CONSTRAINT [cndx_primarykey_webwizard] PRIMARY KEY CLUSTERED ([WebWizardId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[WebWizardBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[WebWizardBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[WebWizardBase]([WebWizardId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[WebWizardBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_1FDD724CB4814FB290A6BED710C5884F]
    ON [dbo].[WebWizardBase]([Name] ASC, [WebWizardId] ASC)
    INCLUDE([VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_1FDD724CB4814FB290A6BED710C5884F]
    ON [dbo].[WebWizardBase]([WebWizardId] ASC)
    INCLUDE([Name], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_1FDD724CB4814FB290A6BED710C5884F]
    ON [dbo].[WebWizardBase]([WebWizardId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

