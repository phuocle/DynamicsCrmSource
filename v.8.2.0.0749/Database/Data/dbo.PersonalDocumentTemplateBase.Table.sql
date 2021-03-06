USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[PersonalDocumentTemplateBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[PersonalDocumentTemplateBase](
	[Status] [bit] NULL,
	[AssociatedEntityTypeCode] [int] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime] NULL,
	[Content] [varchar](max) NOT NULL,
	[Description] [nvarchar](max) NULL,
	[ClientData] [varchar](max) NULL,
	[Name] [nvarchar](256) NOT NULL,
	[ModifiedOn] [datetime] NULL,
	[DocumentType] [int] NOT NULL,
	[LanguageCode] [int] NOT NULL,
	[PersonalDocumentTemplateId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[OwnerIdType] [int] NOT NULL,
 CONSTRAINT [cndx_PrimaryKey_PersonalDocumentTemplate] PRIMARY KEY CLUSTERED 
(
	[PersonalDocumentTemplateId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[PersonalDocumentTemplateBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[PersonalDocumentTemplateBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PersonalDocumentTemplateBase] ADD  CONSTRAINT [DF_PersonalDocumentTemplateBase_Status]  DEFAULT ((0)) FOR [Status]
GO
ALTER TABLE [dbo].[PersonalDocumentTemplateBase] ADD  CONSTRAINT [DF_PersonalDocumentTemplateBase_LanguageCode]  DEFAULT ((1033)) FOR [LanguageCode]
GO
ALTER TABLE [dbo].[PersonalDocumentTemplateBase] ADD  CONSTRAINT [DF_PersonalDocumentTemplateBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OwnerId]
GO
ALTER TABLE [dbo].[PersonalDocumentTemplateBase] ADD  CONSTRAINT [DF_PersonalDocumentTemplateBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
