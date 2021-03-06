USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[TraceAssociationBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TraceAssociationBase](
	[RegardingObjectId] [uniqueidentifier] NOT NULL,
	[TraceLogId] [uniqueidentifier] NOT NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[TraceAssociationId] [uniqueidentifier] NOT NULL,
	[RegardingObjectTypeCode] [int] NULL,
 CONSTRAINT [cndx_PrimaryKey_TraceAssociationBase] PRIMARY KEY CLUSTERED 
(
	[TraceAssociationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [ndx_Regarding]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Regarding] ON [dbo].[TraceAssociationBase]
(
	[RegardingObjectId] ASC,
	[RegardingObjectTypeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_UniqueAssociationPerTrace]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [ndx_UniqueAssociationPerTrace] ON [dbo].[TraceAssociationBase]
(
	[TraceLogId] ASC,
	[RegardingObjectId] ASC,
	[RegardingObjectTypeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TraceAssociationBase]  WITH CHECK ADD  CONSTRAINT [traceassociation_TraceLog] FOREIGN KEY([TraceLogId])
REFERENCES [dbo].[TraceLogBase] ([TraceLogId])
GO
ALTER TABLE [dbo].[TraceAssociationBase] CHECK CONSTRAINT [traceassociation_TraceLog]
GO
