CREATE TABLE [dbo].[LocalConfigStoreBase] (
    [Id]           UNIQUEIDENTIFIER NOT NULL,
    [AssemblyName] NVARCHAR (256)   NOT NULL,
    [PublicToken]  NVARCHAR (256)   NOT NULL,
    [Value]        VARBINARY (MAX)  NULL,
    [KeyName]      NVARCHAR (256)   NOT NULL,
    CONSTRAINT [PK_LocalConfigStore] PRIMARY KEY CLUSTERED ([Id] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[LocalConfigStoreBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[LocalConfigStoreBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_AssemblyNameKeyName]
    ON [dbo].[LocalConfigStoreBase]([AssemblyName] ASC, [KeyName] ASC) WITH (FILLFACTOR = 80);

