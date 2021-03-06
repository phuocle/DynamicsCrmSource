USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[AzureServiceConnectionBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AzureServiceConnectionBase](
	[StateCode] [int] NOT NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[AzureServiceConnectionId] [uniqueidentifier] NOT NULL,
	[ModifiedOn] [datetime] NULL,
	[Name] [nvarchar](160) NULL,
	[AccountKey] [nvarchar](100) NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[Description] [nvarchar](max) NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[StatusCode] [int] NULL,
	[ConnectionType] [int] NULL,
	[ServiceUri] [nvarchar](500) NULL,
	[LastConnectionStatusCode] [int] NULL,
	[LastConnectionTime] [datetime] NULL,
 CONSTRAINT [cndx_PrimaryKey_AzureServiceConnection] PRIMARY KEY CLUSTERED 
(
	[AzureServiceConnectionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [fndx_UniqueConstraint_ConnectionTypeAzureServiceConnection]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_UniqueConstraint_ConnectionTypeAzureServiceConnection] ON [dbo].[AzureServiceConnectionBase]
(
	[ConnectionType] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
