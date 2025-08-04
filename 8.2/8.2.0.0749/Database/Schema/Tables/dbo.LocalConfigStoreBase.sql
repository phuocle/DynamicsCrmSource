CREATE TABLE [dbo].[LocalConfigStoreBase]
(
[AssemblyName] [nvarchar] (256) COLLATE Latin1_General_CI_AI NOT NULL,
[PublicToken] [nvarchar] (256) COLLATE Latin1_General_CI_AI NOT NULL,
[KeyName] [nvarchar] (256) COLLATE Latin1_General_CI_AI NOT NULL,
[Id] [uniqueidentifier] NOT NULL,
[Value] [varbinary] (max) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[LocalConfigStoreBase] ADD CONSTRAINT [PK_LocalConfigStore] PRIMARY KEY CLUSTERED  ([Id]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_AssemblyNameKeyName] ON [dbo].[LocalConfigStoreBase] ([AssemblyName], [KeyName]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
