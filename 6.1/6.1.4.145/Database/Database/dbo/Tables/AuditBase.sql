CREATE TABLE [dbo].[AuditBase] (
    [AttributeMask]  NVARCHAR (MAX)   NULL,
    [TransactionId]  UNIQUEIDENTIFIER NOT NULL,
    [Action]         INT              NULL,
    [ObjectId]       UNIQUEIDENTIFIER NOT NULL,
    [ObjectIdName]   NVARCHAR (1)     NULL,
    [UserId]         UNIQUEIDENTIFIER NOT NULL,
    [ChangeData]     NVARCHAR (MAX)   NULL,
    [CreatedOn]      DATETIME         NOT NULL,
    [Operation]      INT              NOT NULL,
    [AuditId]        UNIQUEIDENTIFIER DEFAULT (newsequentialid()) NOT NULL,
    [CallingUserId]  UNIQUEIDENTIFIER NULL,
    [ObjectTypeCode] INT              NULL
) ON [AuditPScheme] ([CreatedOn]);


GO
CREATE UNIQUE CLUSTERED INDEX [cndx_PrimaryKey_Audit]
    ON [dbo].[AuditBase]([CreatedOn] DESC, [AuditId] DESC)
    ON [AuditPScheme] ([CreatedOn]);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_PrimaryKey_Audit_Primary]
    ON [dbo].[AuditBase]([CreatedOn] DESC, [AuditId] DESC)
    ON [PRIMARY];


GO
CREATE NONCLUSTERED INDEX [ndx_PrimaryKey_Audit]
    ON [dbo].[AuditBase]([AuditId] ASC)
    ON [AuditPScheme] ([CreatedOn]);


GO
CREATE NONCLUSTERED INDEX [ndx_ObjectId]
    ON [dbo].[AuditBase]([ObjectId] ASC)
    ON [AuditPScheme] ([CreatedOn]);


GO
CREATE NONCLUSTERED INDEX [ndx_UserId]
    ON [dbo].[AuditBase]([UserId] ASC)
    ON [AuditPScheme] ([CreatedOn]);


GO
CREATE NONCLUSTERED INDEX [fndx_ObjectTypeCode]
    ON [dbo].[AuditBase]([ObjectTypeCode] ASC, [Action] ASC) WHERE ([ObjectTypeCode] IS NOT NULL)
    ON [AuditPScheme] ([CreatedOn]);

