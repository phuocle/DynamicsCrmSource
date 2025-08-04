CREATE TABLE [dbo].[AppModuleBaseIds]
(
[AppModuleId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[AppModuleBaseIds] ADD CONSTRAINT [PK_AppModuleBaseIds] PRIMARY KEY CLUSTERED  ([AppModuleId]) ON [PRIMARY]
GO
