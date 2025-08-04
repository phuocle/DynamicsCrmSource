CREATE TABLE [dbo].[UserFormBase] (
    [ModifiedOn]         DATETIME         NULL,
    [OwningBusinessUnit] UNIQUEIDENTIFIER NULL,
    [OwnerId]            UNIQUEIDENTIFIER CONSTRAINT [DF_UserFormBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [Name]               NVARCHAR (100)   NULL,
    [Type]               INT              CONSTRAINT [DF_UserFormBase_Type] DEFAULT ((0)) NULL,
    [FormXml]            NVARCHAR (MAX)   NULL,
    [UserFormId]         UNIQUEIDENTIFIER NOT NULL,
    [CreatedBy]          UNIQUEIDENTIFIER NULL,
    [ModifiedBy]         UNIQUEIDENTIFIER NULL,
    [CreatedOn]          DATETIME         NULL,
    [VersionNumber]      ROWVERSION       NULL,
    [CreatedOnBehalfBy]  UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy] UNIQUEIDENTIFIER NULL,
    [Description]        NVARCHAR (MAX)   NULL,
    [ObjectTypeCode]     INT              NULL,
    [OwnerIdType]        INT              CONSTRAINT [DF_UserFormBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_UserForm] PRIMARY KEY CLUSTERED ([UserFormId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_userform] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION,
    CONSTRAINT [owner_userform] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]) NOT FOR REPLICATION
);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_owner_userform]
    ON [dbo].[UserFormBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Type_ObjectType]
    ON [dbo].[UserFormBase]([Type] ASC, [ObjectTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[UserFormBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

