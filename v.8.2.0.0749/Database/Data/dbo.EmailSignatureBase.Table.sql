USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[EmailSignatureBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EmailSignatureBase](
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[OverwriteTime] [datetime] NOT NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[PresentationXml] [nvarchar](max) NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[Body] [nvarchar](max) NULL,
	[IsCustomizable] [bit] NOT NULL,
	[ImportSequenceNumber] [int] NULL,
	[IsDefault] [bit] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[Title] [nvarchar](200) NULL,
	[ModifiedOn] [datetime] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[LanguageCode] [int] NULL,
	[EmailSignatureId] [uniqueidentifier] NOT NULL,
	[IsPersonal] [bit] NULL,
	[CreatedOn] [datetime] NULL,
	[MimeType] [nvarchar](256) NULL,
	[Description] [nvarchar](max) NULL,
	[GenerationTypeCode] [int] NULL,
	[ComponentState] [int] NOT NULL,
	[OwnerIdType] [int] NOT NULL,
 CONSTRAINT [cndx_PrimaryKey_EmailSignature] PRIMARY KEY CLUSTERED 
(
	[EmailSignatureId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [fndx_for_cascaderelationship_business_unit_emailsignatures]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_emailsignatures] ON [dbo].[EmailSignatureBase]
(
	[OwningBusinessUnit] ASC
)
WHERE ([OwningBusinessUnit] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[EmailSignatureBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_Title]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Title] ON [dbo].[EmailSignatureBase]
(
	[Title] ASC,
	[LanguageCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EmailSignatureBase] ADD  CONSTRAINT [DF_EmailSignatureBase_OverwriteTime]  DEFAULT ((0)) FOR [OverwriteTime]
GO
ALTER TABLE [dbo].[EmailSignatureBase] ADD  CONSTRAINT [DF_EmailSignatureBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OwnerId]
GO
ALTER TABLE [dbo].[EmailSignatureBase] ADD  CONSTRAINT [DF_EmailSignatureBase_IsCustomizable]  DEFAULT ((1)) FOR [IsCustomizable]
GO
ALTER TABLE [dbo].[EmailSignatureBase] ADD  CONSTRAINT [DF_EmailSignatureBase_IsDefault]  DEFAULT ((0)) FOR [IsDefault]
GO
ALTER TABLE [dbo].[EmailSignatureBase] ADD  CONSTRAINT [DF_EmailSignatureBase_IsPersonal]  DEFAULT ((0)) FOR [IsPersonal]
GO
ALTER TABLE [dbo].[EmailSignatureBase] ADD  CONSTRAINT [DF_EmailSignatureBase_GenerationTypeCode]  DEFAULT ((0)) FOR [GenerationTypeCode]
GO
ALTER TABLE [dbo].[EmailSignatureBase] ADD  CONSTRAINT [DF_EmailSignatureBase_ComponentState]  DEFAULT ((0)) FOR [ComponentState]
GO
ALTER TABLE [dbo].[EmailSignatureBase] ADD  CONSTRAINT [DF_EmailSignatureBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
