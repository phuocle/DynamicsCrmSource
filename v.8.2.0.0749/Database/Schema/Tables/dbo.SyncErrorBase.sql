CREATE TABLE [dbo].[SyncErrorBase]
(
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_SyncErrorBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[SyncErrorId] [uniqueidentifier] NOT NULL,
[ActionData] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NOT NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ErrorDetail] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[Action] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[RegardingObjectId] [uniqueidentifier] NULL,
[ErrorMessage] [nvarchar] (1000) COLLATE Latin1_General_CI_AI NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NOT NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_SyncErrorBase_OwnerIdType] DEFAULT ((8)),
[RegardingObjectTypeCode] [int] NULL,
[RegardingObjectIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[RegardingObjectIdYomiName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[RequestData] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ErrorCode] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ErrorType] [int] NULL,
[VersionNumber] [timestamp] NULL,
[StateCode] [int] NOT NULL,
[ErrorTime] [datetime] NULL,
[StatusCode] [int] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[SyncErrorBase] ADD CONSTRAINT [cndx_PrimaryKey_SyncError] PRIMARY KEY CLUSTERED  ([SyncErrorId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[SyncErrorBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_ownerid] ON [dbo].[SyncErrorBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_statecode] ON [dbo].[SyncErrorBase] ([StateCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SyncErrorBase] ADD CONSTRAINT [BusinessUnit_SyncError] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[SyncErrorBase] ADD CONSTRAINT [owner_SyncError] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
