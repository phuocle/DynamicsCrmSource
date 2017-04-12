CREATE TABLE [dbo].[WebWizardBase]
(
[CreatedOn] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[WebWizardId] [uniqueidentifier] NOT NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[WizardPageHeight] [int] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[WizardPageWidth] [int] NULL,
[StartPageSequenceNumber] [int] NULL,
[AccessPrivileges] [nvarchar] (1024) COLLATE Latin1_General_CI_AI NULL,
[TitleResourceString] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[IsStaticPageSequence] [bit] NOT NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[WebWizardBase] ADD CONSTRAINT [cndx_primarykey_webwizard] PRIMARY KEY CLUSTERED  ([WebWizardId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name] ON [dbo].[WebWizardBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[WebWizardBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
