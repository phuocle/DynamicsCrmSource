CREATE TABLE [dbo].[AzureServiceConnectionBase] (
    [StateCode]                INT              NOT NULL,
    [CreatedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OrganizationId]           UNIQUEIDENTIFIER NOT NULL,
    [AzureServiceConnectionId] UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOn]               DATETIME         NULL,
    [Name]                     NVARCHAR (160)   NULL,
    [AccountKey]               NVARCHAR (100)   NULL,
    [ModifiedBy]               UNIQUEIDENTIFIER NULL,
    [CreatedOn]                DATETIME         NULL,
    [ModifiedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [Description]              NVARCHAR (MAX)   NULL,
    [CreatedBy]                UNIQUEIDENTIFIER NULL,
    [StatusCode]               INT              NULL,
    [ConnectionType]           INT              NULL,
    [ServiceUri]               NVARCHAR (500)   NULL,
    [LastConnectionStatusCode] INT              NULL,
    [LastConnectionTime]       DATETIME         NULL,
    CONSTRAINT [cndx_PrimaryKey_AzureServiceConnection] PRIMARY KEY CLUSTERED ([AzureServiceConnectionId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_UniqueConstraint_ConnectionTypeAzureServiceConnection]
    ON [dbo].[AzureServiceConnectionBase]([ConnectionType] ASC) WITH (FILLFACTOR = 80);

