USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[InterProcessLockBase]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[InterProcessLockBase](
	[InterProcessLockId] [uniqueidentifier] NOT NULL,
	[Token] [uniqueidentifier] NOT NULL,
	[ModifiedOn] [datetime] NULL,
 CONSTRAINT [cndx_PrimaryKey_InterProcessLock] PRIMARY KEY CLUSTERED 
(
	[InterProcessLockId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
