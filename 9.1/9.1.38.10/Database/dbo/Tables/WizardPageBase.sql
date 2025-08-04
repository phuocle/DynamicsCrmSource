CREATE TABLE [dbo].[WizardPageBase] (
    [WizardPageId]       UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]          DATETIME         NULL,
    [ModifiedOnBehalfBy] UNIQUEIDENTIFIER NULL,
    [WebWizardId]        UNIQUEIDENTIFIER NOT NULL,
    [CreatedBy]          UNIQUEIDENTIFIER NULL,
    [ModifiedOn]         DATETIME         NULL,
    [PageSequenceNumber] INT              NOT NULL,
    [ModifiedBy]         UNIQUEIDENTIFIER NULL,
    [VersionNumber]      ROWVERSION       NULL,
    [PageDataToPost]     NVARCHAR (1024)  NULL,
    [OrganizationId]     UNIQUEIDENTIFIER NOT NULL,
    [PageUrl]            NVARCHAR (512)   NOT NULL,
    [CreatedOnBehalfBy]  UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_WizardPage] PRIMARY KEY CLUSTERED ([WizardPageId] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[WizardPageBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_PageSequenceNumber_WizardPage]
    ON [dbo].[WizardPageBase]([WebWizardId] ASC, [PageSequenceNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[WizardPageBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_wizardpage_webwizardid]
    ON [dbo].[WizardPageBase]([WebWizardId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_0EBA9199845449EDB6256402A4ED4183]
    ON [dbo].[WizardPageBase]([WizardPageId] ASC)
    INCLUDE([PageSequenceNumber], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_PageSequenceNumber]
    ON [dbo].[WizardPageBase]([PageSequenceNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

