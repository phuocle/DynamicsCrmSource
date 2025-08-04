CREATE TABLE [dbo].[LocalConfigStoreBase] (
    [AssemblyName] NVARCHAR (256)   NOT NULL,
    [PublicToken]  NVARCHAR (256)   NOT NULL,
    [KeyName]      NVARCHAR (256)   NOT NULL,
    [Id]           UNIQUEIDENTIFIER NOT NULL,
    [Value]        VARBINARY (MAX)  NULL,
    CONSTRAINT [PK_LocalConfigStore] PRIMARY KEY CLUSTERED ([Id] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_AssemblyNameKeyName]
    ON [dbo].[LocalConfigStoreBase]([AssemblyName] ASC, [KeyName] ASC) WITH (FILLFACTOR = 80);

