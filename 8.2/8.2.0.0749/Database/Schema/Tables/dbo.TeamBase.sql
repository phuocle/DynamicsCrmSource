CREATE TABLE [dbo].[TeamBase]
(
[TeamId] [uniqueidentifier] NOT NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[BusinessUnitId] [uniqueidentifier] NOT NULL,
[Name] [nvarchar] (160) COLLATE Latin1_General_CI_AI NOT NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[EMailAddress] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NULL,
[ModifiedOn] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[ImportSequenceNumber] [int] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[IsDefault] [bit] NOT NULL CONSTRAINT [DF_TeamBase_IsDefault] DEFAULT ((0)),
[AdministratorId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_TeamBase_AdministratorId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[QueueId] [uniqueidentifier] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[YomiName] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[RegardingObjectId] [uniqueidentifier] NULL,
[TeamType] [int] NOT NULL CONSTRAINT [DF_TeamBase_TeamType] DEFAULT ((0)),
[ProcessId] [uniqueidentifier] NULL,
[SystemManaged] [bit] NOT NULL CONSTRAINT [DF_TeamBase_SystemManaged] DEFAULT ((0)),
[StageId] [uniqueidentifier] NULL,
[TeamTemplateId] [uniqueidentifier] NULL,
[RegardingObjectTypeCode] [int] NULL,
[TraversedPath] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[TeamBase] ADD CONSTRAINT [cndx_PrimaryKey_Team] PRIMARY KEY CLUSTERED  ([TeamId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[TeamBase] ([BusinessUnitId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_TeamName_BusinessUnitId] ON [dbo].[TeamBase] ([Name], [BusinessUnitId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_RegardingObjectId] ON [dbo].[TeamBase] ([RegardingObjectId]) WHERE ([RegardingObjectId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_TeamAdministrator] ON [dbo].[TeamBase] ([TeamId], [AdministratorId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[TeamBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TeamBase] ADD CONSTRAINT [business_unit_teams] FOREIGN KEY ([BusinessUnitId]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[TeamBase] ADD CONSTRAINT [queue_team] FOREIGN KEY ([QueueId]) REFERENCES [dbo].[QueueBase] ([QueueId])
GO
ALTER TABLE [dbo].[TeamBase] ADD CONSTRAINT [teamtemplate_Teams] FOREIGN KEY ([TeamTemplateId]) REFERENCES [dbo].[TeamTemplateBase] ([TeamTemplateId])
GO
ALTER TABLE [dbo].[TeamBase] ADD CONSTRAINT [TransactionCurrency_Team] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
