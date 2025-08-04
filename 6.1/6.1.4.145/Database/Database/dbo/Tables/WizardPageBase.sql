CREATE TABLE [dbo].[WizardPageBase] (
    [PageSequenceNumber] INT              NOT NULL,
    [ModifiedBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOn]         DATETIME         NULL,
    [VersionNumber]      ROWVERSION       NULL,
    [CreatedBy]          UNIQUEIDENTIFIER NULL,
    [OrganizationId]     UNIQUEIDENTIFIER NOT NULL,
    [PageUrl]            NVARCHAR (512)   NOT NULL,
    [WebWizardId]        UNIQUEIDENTIFIER NOT NULL,
    [WizardPageId]       UNIQUEIDENTIFIER NOT NULL,
    [PageDataToPost]     NVARCHAR (1024)  NULL,
    [CreatedOn]          DATETIME         NULL,
    [ModifiedOnBehalfBy] UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]  UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_WizardPage] PRIMARY KEY CLUSTERED ([WizardPageId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [lk_wizardpage_webwizardid] FOREIGN KEY ([WebWizardId]) REFERENCES [dbo].[WebWizardBase] ([WebWizardId]) NOT FOR REPLICATION
);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_wizardpage_webwizardid]
    ON [dbo].[WizardPageBase]([WebWizardId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[WizardPageBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_PageSequenceNumber]
    ON [dbo].[WizardPageBase]([PageSequenceNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_PageSequenceNumber_WizardPage]
    ON [dbo].[WizardPageBase]([WebWizardId] ASC, [PageSequenceNumber] ASC) WITH (FILLFACTOR = 80);

