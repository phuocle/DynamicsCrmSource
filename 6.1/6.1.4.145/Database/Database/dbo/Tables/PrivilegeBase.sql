CREATE TABLE [dbo].[PrivilegeBase] (
    [PrivilegeId]              UNIQUEIDENTIFIER NOT NULL,
    [Name]                     NVARCHAR (100)   NULL,
    [CanBeLocal]               BIT              CONSTRAINT [Set_To_Zero133] DEFAULT ((0)) NULL,
    [CanBeDeep]                BIT              CONSTRAINT [Set_To_Zero134] DEFAULT ((0)) NULL,
    [VersionNumber]            ROWVERSION       NULL,
    [CanBeGlobal]              BIT              CONSTRAINT [Set_To_Zero135] DEFAULT ((0)) NULL,
    [CanBeBasic]               BIT              NULL,
    [AccessRight]              INT              NULL,
    [IsDisabledWhenIntegrated] BIT              CONSTRAINT [DF_PrivilegeBase_IsDisabledWhenIntegrated] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_Privilege] PRIMARY KEY CLUSTERED ([PrivilegeId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[PrivilegeBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[PrivilegeBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

