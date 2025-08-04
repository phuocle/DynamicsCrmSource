CREATE TABLE [dbo].[ExpiredProcessBase]
(
[ProcessId] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[BusinessProcessFlowInstanceId] [uniqueidentifier] NOT NULL,
[ModifiedOn] [datetime] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[KnowledgeArticleId] [uniqueidentifier] NULL,
[StatusCode] [int] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[CreatedBy] [uniqueidentifier] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[Name] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[StateCode] [int] NOT NULL,
[ActiveStageId] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[TraversedPath] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NULL,
[ActiveStageStartedOn] [datetime] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[ImportSequenceNumber] [int] NULL,
[CompletedOn] [datetime] NULL,
[Duration] AS ([dbo].[fn_UDF_0d6a588cc1354e6dac26a40ea606a2fc]([CreatedOn],[CompletedOn]))
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ExpiredProcessBase] ADD CONSTRAINT [PK_expiredprocessBase] PRIMARY KEY CLUSTERED  ([BusinessProcessFlowInstanceId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_expiredprocess_Name] ON [dbo].[ExpiredProcessBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[ExpiredProcessBase] ([OrganizationId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ExpiredProcessBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
