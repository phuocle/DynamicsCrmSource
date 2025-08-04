CREATE TABLE [dbo].[AzureServiceConnectionBase] (
    [StateCode]                INT              NOT NULL,
    [LastConnectionStatusCode] INT              NULL,
    [Description]              NVARCHAR (MAX)   NULL,
    [AccountKey]               NVARCHAR (100)   NULL,
    [ModifiedOn]               DATETIME         NULL,
    [CreatedOn]                DATETIME         NULL,
    [StatusCode]               INT              NULL,
    [ModifiedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [LastConnectionTime]       DATETIME         NULL,
    [ServiceUri]               NVARCHAR (500)   NULL,
    [ConnectionType]           INT              NULL,
    [OrganizationId]           UNIQUEIDENTIFIER NOT NULL,
    [AzureServiceConnectionId] UNIQUEIDENTIFIER NOT NULL,
    [ModifiedBy]               UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [CreatedBy]                UNIQUEIDENTIFIER NULL,
    [Name]                     NVARCHAR (160)   NULL,
    CONSTRAINT [cndx_PrimaryKey_AzureServiceConnection] PRIMARY KEY CLUSTERED ([AzureServiceConnectionId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[AzureServiceConnectionBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[AzureServiceConnectionBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_UniqueConstraint_ConnectionTypeAzureServiceConnection]
    ON [dbo].[AzureServiceConnectionBase]([ConnectionType] ASC) WITH (FILLFACTOR = 80);

