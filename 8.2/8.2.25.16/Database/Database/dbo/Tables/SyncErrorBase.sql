CREATE TABLE [dbo].[SyncErrorBase] (
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [OwnerId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_SyncErrorBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [SyncErrorId]               UNIQUEIDENTIFIER NOT NULL,
    [ActionData]                NVARCHAR (MAX)   NULL,
    [CreatedOn]                 DATETIME         NOT NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ErrorDetail]               NVARCHAR (MAX)   NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [Action]                    NVARCHAR (100)   NULL,
    [RegardingObjectId]         UNIQUEIDENTIFIER NULL,
    [ErrorMessage]              NVARCHAR (1000)  NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NOT NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_SyncErrorBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [RegardingObjectTypeCode]   INT              NULL,
    [RegardingObjectIdName]     NVARCHAR (4000)  NULL,
    [RegardingObjectIdYomiName] NVARCHAR (4000)  NULL,
    [RequestData]               NVARCHAR (MAX)   NULL,
    [ErrorCode]                 NVARCHAR (MAX)   NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [ErrorType]                 INT              NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [StateCode]                 INT              NOT NULL,
    [ErrorTime]                 DATETIME         NULL,
    [StatusCode]                INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_SyncError] PRIMARY KEY CLUSTERED ([SyncErrorId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [BusinessUnit_SyncError] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_SyncError] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_statecode]
    ON [dbo].[SyncErrorBase]([StateCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_ownerid]
    ON [dbo].[SyncErrorBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[SyncErrorBase]([Name] ASC) WITH (FILLFACTOR = 80);

