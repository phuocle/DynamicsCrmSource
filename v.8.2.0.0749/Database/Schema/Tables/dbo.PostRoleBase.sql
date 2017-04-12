CREATE TABLE [dbo].[PostRoleBase]
(
[OrganizationId] [uniqueidentifier] NOT NULL,
[RegardingObjectId] [uniqueidentifier] NOT NULL,
[PostRoleId] [uniqueidentifier] NOT NULL,
[Type] [int] NULL,
[PostId] [uniqueidentifier] NOT NULL,
[RegardingObjectTypeCode] [int] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PostRoleBase] ADD CONSTRAINT [PK_PostRoleBase] PRIMARY KEY CLUSTERED  ([PostRoleId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_UniqueRolePerPost] ON [dbo].[PostRoleBase] ([PostId], [RegardingObjectId], [RegardingObjectTypeCode]) INCLUDE ([Type]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Regarding] ON [dbo].[PostRoleBase] ([RegardingObjectId], [RegardingObjectTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PostRoleBase] ADD CONSTRAINT [postrole_Post] FOREIGN KEY ([PostId]) REFERENCES [dbo].[PostBase] ([PostId])
GO
