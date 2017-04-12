CREATE TABLE [dbo].[PrivilegeBase]
(
[PrivilegeId] [uniqueidentifier] NOT NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[CanBeLocal] [bit] NULL CONSTRAINT [Set_To_Zero133] DEFAULT ((0)),
[CanBeDeep] [bit] NULL CONSTRAINT [Set_To_Zero134] DEFAULT ((0)),
[VersionNumber] [timestamp] NULL,
[CanBeGlobal] [bit] NULL CONSTRAINT [Set_To_Zero135] DEFAULT ((0)),
[CanBeBasic] [bit] NULL,
[AccessRight] [int] NULL,
[IsDisabledWhenIntegrated] [bit] NOT NULL CONSTRAINT [DF_PrivilegeBase_IsDisabledWhenIntegrated] DEFAULT ((0)),
[CanBeEntityReference] [bit] NOT NULL CONSTRAINT [DF__Privilege__CanBe__0A36AEE3] DEFAULT ((0)),
[CanBeParentEntityReference] [bit] NOT NULL CONSTRAINT [DF__Privilege__CanBe__0B2AD31C] DEFAULT ((0))
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PrivilegeBase] ADD CONSTRAINT [cndx_PrimaryKey_Privilege] PRIMARY KEY CLUSTERED  ([PrivilegeId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[PrivilegeBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[PrivilegeBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
