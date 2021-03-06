USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[SalesLiteratureBase]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SalesLiteratureBase](
	[SalesLiteratureId] [uniqueidentifier] NOT NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[EmployeeContactId] [uniqueidentifier] NULL,
	[SubjectId] [uniqueidentifier] NULL,
	[Description] [nvarchar](max) NULL,
	[LiteratureTypeCode] [int] NULL,
	[Name] [nvarchar](100) NULL,
	[ExpirationDate] [datetime] NULL,
	[IsCustomerViewable] [bit] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[KeyWords] [nvarchar](max) NULL,
	[HasAttachments] [bit] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedOn] [datetime] NULL,
	[VersionNumber] [timestamp] NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[ImportSequenceNumber] [int] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ProcessId] [uniqueidentifier] NULL,
	[StageId] [uniqueidentifier] NULL,
	[EntityImageId] [uniqueidentifier] NULL,
	[TraversedPath] [nvarchar](1250) NULL,
 CONSTRAINT [cndx_PrimaryKey_SalesLiterature] PRIMARY KEY CLUSTERED 
(
	[SalesLiteratureId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [fndx_for_cascaderelationship_subject_sales_literature]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_subject_sales_literature] ON [dbo].[SalesLiteratureBase]
(
	[SubjectId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_system_user_sales_literature]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_system_user_sales_literature] ON [dbo].[SalesLiteratureBase]
(
	[EmployeeContactId] ASC
)
WHERE ([EmployeeContactId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SalesLiteratureBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_name]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[SalesLiteratureBase]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SalesLiteratureBase] ADD  CONSTRAINT [Set_To_Zero145]  DEFAULT ((0)) FOR [HasAttachments]
GO
ALTER TABLE [dbo].[SalesLiteratureBase]  WITH CHECK ADD  CONSTRAINT [subject_sales_literature] FOREIGN KEY([SubjectId])
REFERENCES [dbo].[SubjectBase] ([SubjectId])
GO
ALTER TABLE [dbo].[SalesLiteratureBase] CHECK CONSTRAINT [subject_sales_literature]
GO
ALTER TABLE [dbo].[SalesLiteratureBase]  WITH CHECK ADD  CONSTRAINT [system_user_sales_literature] FOREIGN KEY([EmployeeContactId])
REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[SalesLiteratureBase] CHECK CONSTRAINT [system_user_sales_literature]
GO
ALTER TABLE [dbo].[SalesLiteratureBase]  WITH CHECK ADD  CONSTRAINT [TransactionCurrency_SalesLiterature] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[SalesLiteratureBase] CHECK CONSTRAINT [TransactionCurrency_SalesLiterature]
GO
