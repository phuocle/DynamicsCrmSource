CREATE TABLE [dbo].[SLAKPIInstanceBase]
(
[ModifiedOn] [datetime] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[CreatedBy] [uniqueidentifier] NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[WarningTime] [datetime] NULL,
[FailureTime] [datetime] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[ComputedWarningTime] [datetime] NULL,
[SucceededOn] [datetime] NULL,
[CreatedOn] [datetime] NULL,
[WarningTimeReached] [int] NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[Regarding] [uniqueidentifier] NULL,
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_SLAKPIInstanceBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[ModifiedBy] [uniqueidentifier] NULL,
[SLAKPIInstanceId] [uniqueidentifier] NOT NULL,
[Name] [nvarchar] (160) COLLATE Latin1_General_CI_AI NOT NULL,
[ComputedFailureTime] [datetime] NULL,
[Status] [int] NULL,
[RegardingObjectTypeCode] [int] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_SLAKPIInstanceBase_OwnerIdType] DEFAULT ((8)),
[RegardingIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[RegardingYomiName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[SLAKPIInstanceBase] ADD CONSTRAINT [cndx_PrimaryKey_SLAKPIInstanceId] PRIMARY KEY CLUSTERED  ([SLAKPIInstanceId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name] ON [dbo].[SLAKPIInstanceBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [cndx_Regarding] ON [dbo].[SLAKPIInstanceBase] ([Regarding]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SLAKPIInstanceBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SLAKPIInstanceBase] ADD CONSTRAINT [slakpiinstance_owner] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
