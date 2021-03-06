USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[SqlEncryptionAudit]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SqlEncryptionAudit](
	[CreatedOn] [datetime] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
 CONSTRAINT [cndx_PrimaryKey_SqlEncryptionAudits] PRIMARY KEY CLUSTERED 
(
	[CreatedOn] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[SqlEncryptionAudit] ADD  CONSTRAINT [DF_SqlEncryptionAudit_CreatedOn]  DEFAULT (getutcdate()) FOR [CreatedOn]
GO
