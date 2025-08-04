CREATE TABLE [dbo].[UserFormBase] (
    [ObjectTypeCode]     INT              NULL,
    [UserFormId]         UNIQUEIDENTIFIER NOT NULL,
    [OwnerId]            UNIQUEIDENTIFIER CONSTRAINT [DF_UserFormBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [OwningBusinessUnit] UNIQUEIDENTIFIER NULL,
    [ModifiedOn]         DATETIME         NULL,
    [Description]        NVARCHAR (MAX)   NULL,
    [Name]               NVARCHAR (100)   NULL,
    [VersionNumber]      ROWVERSION       NULL,
    [FormXml]            NVARCHAR (MAX)   NULL,
    [FormJson]           NVARCHAR (MAX)   NULL,
    [CreatedOn]          DATETIME         NULL,
    [CreatedOnBehalfBy]  UNIQUEIDENTIFIER NULL,
    [IsTabletEnabled]    BIT              CONSTRAINT [DF_UserFormBase_IsTabletEnabled] DEFAULT ((0)) NOT NULL,
    [ModifiedOnBehalfBy] UNIQUEIDENTIFIER NULL,
    [CreatedBy]          UNIQUEIDENTIFIER NULL,
    [Type]               INT              CONSTRAINT [DF_UserFormBase_Type] DEFAULT ((0)) NULL,
    [ModifiedBy]         UNIQUEIDENTIFIER NULL,
    [OwnerIdType]        INT              CONSTRAINT [DF_UserFormBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_UserForm] PRIMARY KEY CLUSTERED ([UserFormId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_userform] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_userform] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[UserFormBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[UserFormBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[UserFormBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_owner_userform]
    ON [dbo].[UserFormBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Type_ObjectType]
    ON [dbo].[UserFormBase]([Type] ASC, [ObjectTypeCode] ASC) WITH (FILLFACTOR = 80);

