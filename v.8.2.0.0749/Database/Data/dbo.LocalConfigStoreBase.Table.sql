USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[LocalConfigStoreBase]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[LocalConfigStoreBase](
	[AssemblyName] [nvarchar](256) NOT NULL,
	[PublicToken] [nvarchar](256) NOT NULL,
	[KeyName] [nvarchar](256) NOT NULL,
	[Id] [uniqueidentifier] NOT NULL,
	[Value] [varbinary](max) NULL,
 CONSTRAINT [PK_LocalConfigStore] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING ON
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_AssemblyNameKeyName]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_AssemblyNameKeyName] ON [dbo].[LocalConfigStoreBase]
(
	[AssemblyName] ASC,
	[KeyName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
