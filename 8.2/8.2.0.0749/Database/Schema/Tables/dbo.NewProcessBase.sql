CREATE TABLE [dbo].[NewProcessBase]
(
[CreatedOn] [datetime] NULL,
[KnowledgeArticleId] [uniqueidentifier] NULL,
[TraversedPath] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL,
[StateCode] [int] NOT NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ImportSequenceNumber] [int] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[ActiveStageStartedOn] [datetime] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[CreatedBy] [uniqueidentifier] NULL,
[StatusCode] [int] NULL,
[ActiveStageId] [uniqueidentifier] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[BusinessProcessFlowInstanceId] [uniqueidentifier] NOT NULL,
[ProcessId] [uniqueidentifier] NULL,
[Name] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOn] [datetime] NULL,
[CompletedOn] [datetime] NULL,
[Duration] AS ([dbo].[fn_UDF_c0cfcb8c11b5485a8d1f3ac17b1ad0cc]([CreatedOn],[CompletedOn]))
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[NewProcessBase] ADD CONSTRAINT [PK_newprocessBase] PRIMARY KEY CLUSTERED  ([BusinessProcessFlowInstanceId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_newprocess_Name] ON [dbo].[NewProcessBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[NewProcessBase] ([OrganizationId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[NewProcessBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
