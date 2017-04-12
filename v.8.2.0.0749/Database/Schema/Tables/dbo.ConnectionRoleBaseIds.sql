CREATE TABLE [dbo].[ConnectionRoleBaseIds]
(
[ConnectionRoleId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ConnectionRoleBaseIds] ADD CONSTRAINT [PK_ConnectionRoleBaseIds] PRIMARY KEY CLUSTERED  ([ConnectionRoleId]) ON [PRIMARY]
GO
