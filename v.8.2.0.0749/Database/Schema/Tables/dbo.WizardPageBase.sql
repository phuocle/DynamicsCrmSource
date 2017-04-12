CREATE TABLE [dbo].[WizardPageBase]
(
[PageSequenceNumber] [int] NOT NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[VersionNumber] [timestamp] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[PageUrl] [nvarchar] (512) COLLATE Latin1_General_CI_AI NOT NULL,
[WebWizardId] [uniqueidentifier] NOT NULL,
[WizardPageId] [uniqueidentifier] NOT NULL,
[PageDataToPost] [nvarchar] (1024) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[WizardPageBase] ADD CONSTRAINT [cndx_PrimaryKey_WizardPage] PRIMARY KEY CLUSTERED  ([WizardPageId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_PageSequenceNumber] ON [dbo].[WizardPageBase] ([PageSequenceNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[WizardPageBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_wizardpage_webwizardid] ON [dbo].[WizardPageBase] ([WebWizardId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_PageSequenceNumber_WizardPage] ON [dbo].[WizardPageBase] ([WebWizardId], [PageSequenceNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[WizardPageBase] ADD CONSTRAINT [lk_wizardpage_webwizardid] FOREIGN KEY ([WebWizardId]) REFERENCES [dbo].[WebWizardBase] ([WebWizardId])
GO
