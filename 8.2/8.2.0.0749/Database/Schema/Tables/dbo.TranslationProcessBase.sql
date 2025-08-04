CREATE TABLE [dbo].[TranslationProcessBase]
(
[VersionNumber] [timestamp] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[CreatedOn] [datetime] NULL,
[ActiveStageId] [uniqueidentifier] NULL,
[StatusCode] [int] NULL,
[ImportSequenceNumber] [int] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[BusinessProcessFlowInstanceId] [uniqueidentifier] NOT NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CompletedOn] [datetime] NULL,
[KnowledgeArticleId] [uniqueidentifier] NULL,
[ProcessId] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[StateCode] [int] NOT NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[Name] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[TraversedPath] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL,
[ActiveStageStartedOn] [datetime] NULL,
[Duration] AS ([dbo].[fn_UDF_702d7f7e040e41bcbf34bc65ab49b22a]([CreatedOn],[CompletedOn]))
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TranslationProcessBase] ADD CONSTRAINT [PK_translationprocessBase] PRIMARY KEY CLUSTERED  ([BusinessProcessFlowInstanceId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_translationprocess_Name] ON [dbo].[TranslationProcessBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[TranslationProcessBase] ([OrganizationId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[TranslationProcessBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
