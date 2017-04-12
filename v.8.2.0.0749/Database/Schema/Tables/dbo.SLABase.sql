CREATE TABLE [dbo].[SLABase]
(
[StateCode] [int] NOT NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[SLAId] [uniqueidentifier] NOT NULL,
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_SLABase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[ChangedAttributeList] [nvarchar] (500) COLLATE Latin1_General_CI_AI NULL,
[ApplicableFrom] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[WorkflowId] [uniqueidentifier] NULL,
[StatusCode] [int] NULL,
[Name] [nvarchar] (160) COLLATE Latin1_General_CI_AI NOT NULL,
[ModifiedOn] [datetime] NULL,
[AllowPauseResume] [bit] NOT NULL CONSTRAINT [DF_SLABase_AllowPauseResume] DEFAULT ((0)),
[SupportingSolutionId] [uniqueidentifier] NULL,
[IsDefault] [bit] NULL CONSTRAINT [DF_SLABase_IsDefault] DEFAULT ((0)),
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_SLABase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[BusinessHoursId] [uniqueidentifier] NULL,
[SLAType] [int] NOT NULL CONSTRAINT [DF_SLABase_SLAType] DEFAULT ((0)),
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_SLABase_OverwriteTime] DEFAULT ((0)),
[CreatedBy] [uniqueidentifier] NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[ApplicableFromPickList] [int] NULL,
[ObjectTypeCode] [int] NULL,
[VersionNumber] [timestamp] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_SLABase_ComponentState] DEFAULT ((0)),
[TransactionCurrencyId] [uniqueidentifier] NULL,
[SLAIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_SLABase_SLAIdUnique] DEFAULT (newid()),
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_SLABase_IsManaged] DEFAULT ((0)),
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_SLABase_OwnerIdType] DEFAULT ((8)),
[PrimaryEntityOTC] [int] NOT NULL CONSTRAINT [DF_SLABase_PrimaryEntityOTC] DEFAULT ((112))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[SLABase] ADD CONSTRAINT [cndx_PrimaryKey_SLAid] PRIMARY KEY CLUSTERED  ([SLAId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[SLABase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[SLABase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SLABase] ADD CONSTRAINT [UQ_SLABase_SLAIdUnique] UNIQUE NONCLUSTERED  ([SLAIdUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
