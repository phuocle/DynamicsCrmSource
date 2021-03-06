USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ContractTemplateBaseIds]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ContractTemplateBaseIds](
	[ContractTemplateId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_ContractTemplateBaseIds] PRIMARY KEY CLUSTERED 
(
	[ContractTemplateId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [dbo].[ContractTemplateBaseIds] ([ContractTemplateId]) VALUES (N'77ecdfda-3e70-429d-b174-1352b981c5f2')
