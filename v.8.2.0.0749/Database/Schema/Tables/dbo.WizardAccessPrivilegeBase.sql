CREATE TABLE [dbo].[WizardAccessPrivilegeBase]
(
[ModifiedBy] [uniqueidentifier] NULL,
[PrivilegeName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[WebWizardId] [uniqueidentifier] NOT NULL,
[ModifiedOn] [datetime] NULL,
[EntityName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[CreatedOn] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[WizardAccessPrivilegeId] [uniqueidentifier] NOT NULL,
[VersionNumber] [timestamp] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[WizardAccessPrivilegeBase] ADD CONSTRAINT [cndx_primarykey_wizardaccessarivilege] PRIMARY KEY CLUSTERED  ([WizardAccessPrivilegeId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_EntityName] ON [dbo].[WizardAccessPrivilegeBase] ([EntityName]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[WizardAccessPrivilegeBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_wizardaccessprivilege_webwizardid] ON [dbo].[WizardAccessPrivilegeBase] ([WebWizardId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_entityname_privilegename_wizardaccessarivilege] ON [dbo].[WizardAccessPrivilegeBase] ([WebWizardId], [EntityName], [PrivilegeName]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[WizardAccessPrivilegeBase] ADD CONSTRAINT [lk_wizardaccessprivilege_webwizardid] FOREIGN KEY ([WebWizardId]) REFERENCES [dbo].[WebWizardBase] ([WebWizardId])
GO
