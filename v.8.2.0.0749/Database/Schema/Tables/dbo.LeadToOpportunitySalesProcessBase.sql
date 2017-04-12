CREATE TABLE [dbo].[LeadToOpportunitySalesProcessBase]
(
[LeadId] [uniqueidentifier] NULL,
[Name] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[VersionNumber] [timestamp] NULL,
[TraversedPath] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL,
[OverriddenCreatedOn] [datetime] NULL,
[ModifiedOn] [datetime] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[ProcessId] [uniqueidentifier] NULL,
[ActiveStageId] [uniqueidentifier] NULL,
[ImportSequenceNumber] [int] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ActiveStageStartedOn] [datetime] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[BusinessProcessFlowInstanceId] [uniqueidentifier] NOT NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[StateCode] [int] NOT NULL,
[CreatedOn] [datetime] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[StatusCode] [int] NULL,
[OpportunityId] [uniqueidentifier] NULL,
[CompletedOn] [datetime] NULL,
[Duration] AS ([dbo].[fn_UDF_e7d20e6b46c541d7b8b5ad5f9af1635d]([CreatedOn],[CompletedOn]))
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[LeadToOpportunitySalesProcessBase] ADD CONSTRAINT [PK_leadtoopportunitysalesprocessBase] PRIMARY KEY CLUSTERED  ([BusinessProcessFlowInstanceId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_leadtoopportunitysalesprocess_Name] ON [dbo].[LeadToOpportunitySalesProcessBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[LeadToOpportunitySalesProcessBase] ([OrganizationId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[LeadToOpportunitySalesProcessBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
