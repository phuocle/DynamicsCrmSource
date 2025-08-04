CREATE TABLE [dbo].[AuditBase] (
    [UserAdditionalInfo]    NVARCHAR (400)   NULL,
    [CallingUserId]         UNIQUEIDENTIFIER NULL,
    [UserId]                UNIQUEIDENTIFIER NOT NULL,
    [AttributeMask]         NVARCHAR (MAX)   NULL,
    [TransactionId]         UNIQUEIDENTIFIER NOT NULL,
    [RegardingObjectId]     UNIQUEIDENTIFIER NULL,
    [ChangeData]            NVARCHAR (MAX)   NULL,
    [Action]                INT              NULL,
    [Operation]             INT              NOT NULL,
    [ObjectId]              UNIQUEIDENTIFIER NOT NULL,
    [AuditId]               UNIQUEIDENTIFIER CONSTRAINT [DF_AuditBase_AuditId] DEFAULT (newsequentialid()) NOT NULL,
    [CreatedOn]             DATETIME         NOT NULL,
    [RegardingObjectIdName] NVARCHAR (4000)  NULL,
    [ObjectIdName]          NVARCHAR (1)     NULL,
    [ObjectTypeCode]        INT              NULL
) ON [AuditPScheme] ([CreatedOn]);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[AuditBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[AuditBase] SET (LOCK_ESCALATION = AUTO);


GO
CREATE UNIQUE CLUSTERED INDEX [cndx_PrimaryKey_Audit]
    ON [dbo].[AuditBase]([CreatedOn] DESC, [AuditId] DESC)
    ON [AuditPScheme] ([CreatedOn]);


GO
CREATE NONCLUSTERED INDEX [ndx_UserId]
    ON [dbo].[AuditBase]([UserId] ASC)
    ON [AuditPScheme] ([CreatedOn]);


GO
CREATE NONCLUSTERED INDEX [fndx_ObjectTypeCode]
    ON [dbo].[AuditBase]([ObjectTypeCode] ASC, [Action] ASC) WHERE ([ObjectTypeCode] IS NOT NULL)
    ON [AuditPScheme] ([CreatedOn]);


GO
CREATE NONCLUSTERED INDEX [ndx_ObjectId]
    ON [dbo].[AuditBase]([ObjectId] ASC, [ObjectTypeCode] ASC, [CreatedOn] ASC, [AuditId] ASC)
    INCLUDE([AttributeMask])
    ON [AuditPScheme] ([CreatedOn]);


GO
CREATE NONCLUSTERED INDEX [ndx_PrimaryKey_Audit]
    ON [dbo].[AuditBase]([AuditId] ASC)
    ON [AuditPScheme] ([CreatedOn]);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_PrimaryKey_Audit_Primary]
    ON [dbo].[AuditBase]([CreatedOn] DESC, [AuditId] DESC)
    ON [PRIMARY];

