CREATE TABLE [dbo].[AuditBase]
(
[AttributeMask] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[TransactionId] [uniqueidentifier] NOT NULL,
[Action] [int] NULL,
[ObjectId] [uniqueidentifier] NOT NULL,
[ObjectIdName] [nvarchar] (1) COLLATE Latin1_General_CI_AI NULL,
[UserId] [uniqueidentifier] NOT NULL,
[ChangeData] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NOT NULL,
[Operation] [int] NOT NULL,
[AuditId] [uniqueidentifier] NOT NULL CONSTRAINT [DF__AuditBase__Audit__7AB53F88] DEFAULT (newsequentialid()),
[CallingUserId] [uniqueidentifier] NULL,
[ObjectTypeCode] [int] NULL,
[UserAdditionalInfo] [nvarchar] (400) COLLATE Latin1_General_CI_AI NULL,
[RegardingObjectId] [uniqueidentifier] NULL,
[RegardingObjectIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL
) ON [AuditPScheme] ([CreatedOn])
GO
CREATE NONCLUSTERED INDEX [ndx_PrimaryKey_Audit] ON [dbo].[AuditBase] ([AuditId]) ON [AuditPScheme] ([CreatedOn])
GO
CREATE UNIQUE CLUSTERED INDEX [cndx_PrimaryKey_Audit] ON [dbo].[AuditBase] ([CreatedOn] DESC, [AuditId] DESC) ON [AuditPScheme] ([CreatedOn])
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_PrimaryKey_Audit_Primary] ON [dbo].[AuditBase] ([CreatedOn] DESC, [AuditId] DESC) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_ObjectId] ON [dbo].[AuditBase] ([ObjectId]) ON [AuditPScheme] ([CreatedOn])
GO
CREATE NONCLUSTERED INDEX [fndx_ObjectTypeCode] ON [dbo].[AuditBase] ([ObjectTypeCode], [Action]) WHERE ([ObjectTypeCode] IS NOT NULL) ON [AuditPScheme] ([CreatedOn])
GO
CREATE NONCLUSTERED INDEX [ndx_UserId] ON [dbo].[AuditBase] ([UserId]) ON [AuditPScheme] ([CreatedOn])
GO
