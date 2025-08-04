CREATE TABLE [dbo].[ImportBase] (
    [SendNotification]   BIT              CONSTRAINT [DF_ImportBase_SendNotification] DEFAULT ((0)) NOT NULL,
    [IsImport]           BIT              CONSTRAINT [DF_ImportBase_IsImport] DEFAULT ((1)) NOT NULL,
    [ModeCode]           INT              CONSTRAINT [DF_ImportBase_ModeCode] DEFAULT ((0)) NOT NULL,
    [StateCode]          INT              CONSTRAINT [DF_ImportBase_StateCode] DEFAULT ((0)) NOT NULL,
    [OwningBusinessUnit] UNIQUEIDENTIFIER NULL,
    [ImportId]           UNIQUEIDENTIFIER NOT NULL,
    [EMailAddress]       NVARCHAR (100)   NULL,
    [CreatedBy]          UNIQUEIDENTIFIER NULL,
    [Name]               NVARCHAR (256)   NULL,
    [CreatedOn]          DATETIME         NOT NULL,
    [ModifiedBy]         UNIQUEIDENTIFIER NULL,
    [Sequence]           INT              CONSTRAINT [DF_ImportBase_Sequence] DEFAULT ((0)) NOT NULL,
    [ModifiedOn]         DATETIME         NOT NULL,
    [StatusCode]         INT              CONSTRAINT [DF_ImportBase_StatusCode] DEFAULT ((1)) NOT NULL,
    [ModifiedOnBehalfBy] UNIQUEIDENTIFIER NULL,
    [OwnerId]            UNIQUEIDENTIFIER CONSTRAINT [DF_ImportBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [CreatedOnBehalfBy]  UNIQUEIDENTIFIER NULL,
    [OwnerIdType]        INT              CONSTRAINT [DF_ImportBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_Import] PRIMARY KEY CLUSTERED ([ImportId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [BusinessUnit_Imports] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION,
    CONSTRAINT [owner_imports] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]) NOT FOR REPLICATION
);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_BusinessUnit_Imports]
    ON [dbo].[ImportBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[ImportBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[ImportBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);

