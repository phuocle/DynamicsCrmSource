CREATE TABLE [dbo].[OpportunitySalesProcessBase]
(
[ModifiedBy] [uniqueidentifier] NULL,
[QuoteId] [uniqueidentifier] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[ImportSequenceNumber] [int] NULL,
[CreatedOn] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ProcessId] [uniqueidentifier] NULL,
[TraversedPath] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL,
[StatusCode] [int] NULL,
[OpportunityId] [uniqueidentifier] NULL,
[ActiveStageId] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[StateCode] [int] NOT NULL,
[OverriddenCreatedOn] [datetime] NULL,
[ModifiedOn] [datetime] NULL,
[CompletedOn] [datetime] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[Name] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[SalesOrderId] [uniqueidentifier] NULL,
[ActiveStageStartedOn] [datetime] NULL,
[VersionNumber] [timestamp] NULL,
[BusinessProcessFlowInstanceId] [uniqueidentifier] NOT NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[Duration] AS ([dbo].[fn_UDF_e213853d6a2f4927af426890a1161dcf]([CreatedOn],[CompletedOn]))
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[OpportunitySalesProcessBase] ADD CONSTRAINT [PK_opportunitysalesprocessBase] PRIMARY KEY CLUSTERED  ([BusinessProcessFlowInstanceId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_opportunitysalesprocess_Name] ON [dbo].[OpportunitySalesProcessBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[OpportunitySalesProcessBase] ([OrganizationId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[OpportunitySalesProcessBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
