CREATE TABLE [dbo].[SLAItemBase]
(
[ApplicableWhenXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[RelatedField] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[WorkflowId] [uniqueidentifier] NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_SLAItemBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[SLAItemId] [uniqueidentifier] NOT NULL,
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_SLAItemBase_OverwriteTime] DEFAULT ((0)),
[ModifiedOn] [datetime] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[Name] [nvarchar] (160) COLLATE Latin1_General_CI_AI NOT NULL,
[FailureAfter] [int] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[SuccessConditionsXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[SLAItemIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_SLAItemBase_SLAItemIdUnique] DEFAULT (newid()),
[SequenceNumber] [int] NULL,
[WarnAfter] [int] NULL,
[SLAId] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_SLAItemBase_IsManaged] DEFAULT ((0)),
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[SupportingSolutionId] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_SLAItemBase_ComponentState] DEFAULT ((0))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[SLAItemBase] ADD CONSTRAINT [cndx_PrimaryKey_SLAItemid] PRIMARY KEY CLUSTERED  ([SLAItemId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [cndx_SLAId] ON [dbo].[SLAItemBase] ([SLAId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SLAItemBase] ADD CONSTRAINT [UQ_SLAItemBase_SLAItemIdUnique] UNIQUE NONCLUSTERED  ([SLAItemIdUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
