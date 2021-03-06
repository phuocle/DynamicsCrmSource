USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[TraceLogBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TraceLogBase](
	[TraceActionXml] [nvarchar](max) NULL,
	[TraceParameterHash] [int] NULL,
	[CreatedOn] [datetime] NULL,
	[CollationLevel] [int] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[TraceDetailXml] [nvarchar](max) NULL,
	[Level] [int] NULL,
	[CanBeDeleted] [bit] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[TraceRegardingId] [uniqueidentifier] NOT NULL,
	[TraceParameterXml] [nvarchar](max) NULL,
	[ModifiedOn] [datetime] NULL,
	[CreatedBy] [uniqueidentifier] NOT NULL,
	[TraceCode] [int] NOT NULL,
	[ParentTraceLogId] [uniqueidentifier] NULL,
	[TraceLogId] [uniqueidentifier] NOT NULL,
	[Text] [nvarchar](2000) NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[IsUnique] [bit] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[MachineName] [nvarchar](160) NULL,
	[TraceStatus] [bit] NULL,
	[ErrorTypeDisplay] [nvarchar](160) NULL,
	[ErrorDetails] [nvarchar](1024) NULL,
 CONSTRAINT [cndx_PrimaryKey_TraceBase] PRIMARY KEY CLUSTERED 
(
	[TraceLogId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [ndx_TraceParameterHash]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [ndx_TraceParameterHash] ON [dbo].[TraceLogBase]
(
	[TraceCode] ASC,
	[Level] ASC,
	[TraceParameterHash] ASC,
	[CollationLevel] ASC
)
WHERE ([IsUnique]=(1))
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_TraceRegarding]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_TraceRegarding] ON [dbo].[TraceLogBase]
(
	[TraceRegardingId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TraceLogBase] ADD  CONSTRAINT [DF_TraceLogBase_CanBeDeleted]  DEFAULT ((1)) FOR [CanBeDeleted]
GO
ALTER TABLE [dbo].[TraceLogBase] ADD  CONSTRAINT [DF_TraceLogBase_IsUnique]  DEFAULT ((0)) FOR [IsUnique]
GO
ALTER TABLE [dbo].[TraceLogBase] ADD  CONSTRAINT [DF_TraceLogBase_TraceStatus]  DEFAULT ((0)) FOR [TraceStatus]
GO
ALTER TABLE [dbo].[TraceLogBase]  WITH CHECK ADD  CONSTRAINT [tracelog_parent_tracelog] FOREIGN KEY([ParentTraceLogId])
REFERENCES [dbo].[TraceLogBase] ([TraceLogId])
GO
ALTER TABLE [dbo].[TraceLogBase] CHECK CONSTRAINT [tracelog_parent_tracelog]
GO
ALTER TABLE [dbo].[TraceLogBase]  WITH CHECK ADD  CONSTRAINT [tracelog_TraceRegardings] FOREIGN KEY([TraceRegardingId])
REFERENCES [dbo].[TraceRegardingBase] ([TraceRegardingId])
GO
ALTER TABLE [dbo].[TraceLogBase] CHECK CONSTRAINT [tracelog_TraceRegardings]
GO
