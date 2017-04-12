CREATE TABLE [dbo].[AzureServiceConnectionBase]
(
[StateCode] [int] NOT NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[AzureServiceConnectionId] [uniqueidentifier] NOT NULL,
[ModifiedOn] [datetime] NULL,
[Name] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[AccountKey] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CreatedBy] [uniqueidentifier] NULL,
[StatusCode] [int] NULL,
[ConnectionType] [int] NULL,
[ServiceUri] [nvarchar] (500) COLLATE Latin1_General_CI_AI NULL,
[LastConnectionStatusCode] [int] NULL,
[LastConnectionTime] [datetime] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[AzureServiceConnectionBase] ADD CONSTRAINT [cndx_PrimaryKey_AzureServiceConnection] PRIMARY KEY CLUSTERED  ([AzureServiceConnectionId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_UniqueConstraint_ConnectionTypeAzureServiceConnection] ON [dbo].[AzureServiceConnectionBase] ([ConnectionType]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
