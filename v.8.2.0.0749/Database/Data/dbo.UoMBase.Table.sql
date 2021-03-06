USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[UoMBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UoMBase](
	[UoMId] [uniqueidentifier] NOT NULL,
	[BaseUoM] [uniqueidentifier] NULL,
	[Name] [nvarchar](100) NOT NULL,
	[UoMScheduleId] [uniqueidentifier] NOT NULL,
	[Quantity] [decimal](23, 10) NULL,
	[CreatedOn] [datetime] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[IsScheduleBaseUoM] [bit] NULL CONSTRAINT [Set_To_Zero151]  DEFAULT ((0)),
	[VersionNumber] [timestamp] NULL,
	[ImportSequenceNumber] [int] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedByExternalParty] [uniqueidentifier] NULL,
	[CreatedByExternalParty] [uniqueidentifier] NULL,
 CONSTRAINT [cndx_PrimaryKey_UoM] PRIMARY KEY CLUSTERED 
(
	[UoMId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [dbo].[UoMBase] ([UoMId], [BaseUoM], [Name], [UoMScheduleId], [Quantity], [CreatedOn], [CreatedBy], [ModifiedBy], [ModifiedOn], [IsScheduleBaseUoM], [ImportSequenceNumber], [OverriddenCreatedOn], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [ModifiedByExternalParty], [CreatedByExternalParty]) VALUES (N'87d671a0-2b8f-4873-b118-4b6472912750', NULL, N'Primary Unit', N'7b3de461-a4c6-40f3-ac69-6e5dca249d89', CAST(1.0000000000 AS Decimal(23, 10)), CAST(N'2017-04-10 13:56:04.000' AS DateTime), N'd9f5ecca-f31d-e711-80d3-00155d00662d', N'd9f5ecca-f31d-e711-80d3-00155d00662d', CAST(N'2017-04-10 13:56:04.000' AS DateTime), 1, NULL, NULL, NULL, NULL, NULL, NULL)
SET ANSI_PADDING ON

GO
/****** Object:  Index [AK1_UoMBase]    Script Date: 4/10/2017 9:59:57 PM ******/
ALTER TABLE [dbo].[UoMBase] ADD  CONSTRAINT [AK1_UoMBase] UNIQUE NONCLUSTERED 
(
	[UoMScheduleId] ASC,
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[UoMBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_unit_of_measure_schedule_conversions]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_unit_of_measure_schedule_conversions] ON [dbo].[UoMBase]
(
	[UoMScheduleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[UoMBase]  WITH CHECK ADD  CONSTRAINT [unit_of_measure_schedule_conversions] FOREIGN KEY([UoMScheduleId])
REFERENCES [dbo].[UoMScheduleBase] ([UoMScheduleId])
GO
ALTER TABLE [dbo].[UoMBase] CHECK CONSTRAINT [unit_of_measure_schedule_conversions]
GO
ALTER TABLE [dbo].[UoMBase]  WITH CHECK ADD  CONSTRAINT [unit_of_measurement_base_unit] FOREIGN KEY([BaseUoM])
REFERENCES [dbo].[UoMBase] ([UoMId])
GO
ALTER TABLE [dbo].[UoMBase] CHECK CONSTRAINT [unit_of_measurement_base_unit]
GO
