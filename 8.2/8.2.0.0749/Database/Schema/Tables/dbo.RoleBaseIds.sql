CREATE TABLE [dbo].[RoleBaseIds]
(
[RoleId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RoleBaseIds] ADD CONSTRAINT [PK_RoleBaseIds] PRIMARY KEY CLUSTERED  ([RoleId]) ON [PRIMARY]
GO
