CREATE TABLE [dbo].[PhoneToCaseProcessBase]
(
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[ImportSequenceNumber] [int] NULL,
[StateCode] [int] NOT NULL,
[ProcessId] [uniqueidentifier] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[StatusCode] [int] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[BusinessProcessFlowInstanceId] [uniqueidentifier] NOT NULL,
[Name] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[TraversedPath] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[ActiveStageId] [uniqueidentifier] NULL,
[IncidentId] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[CompletedOn] [datetime] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[ActiveStageStartedOn] [datetime] NULL,
[Duration] AS ([dbo].[fn_UDF_7ba8a5cdd4c648ac8ed1655a56af9307]())
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PhoneToCaseProcessBase] ADD CONSTRAINT [PK_phonetocaseprocessBase] PRIMARY KEY CLUSTERED  ([BusinessProcessFlowInstanceId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_phonetocaseprocess_Name] ON [dbo].[PhoneToCaseProcessBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[PhoneToCaseProcessBase] ([OrganizationId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[PhoneToCaseProcessBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
