USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ImportBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ImportBase](
	[SendNotification] [bit] NOT NULL,
	[IsImport] [bit] NOT NULL,
	[ModeCode] [int] NOT NULL,
	[StateCode] [int] NOT NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[ImportId] [uniqueidentifier] NOT NULL,
	[EMailAddress] [nvarchar](100) NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[Name] [nvarchar](256) NULL,
	[CreatedOn] [datetime] NOT NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[Sequence] [int] NOT NULL,
	[ModifiedOn] [datetime] NOT NULL,
	[StatusCode] [int] NOT NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[OwnerIdType] [int] NOT NULL,
 CONSTRAINT [cndx_PrimaryKey_Import] PRIMARY KEY CLUSTERED 
(
	[ImportId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [fndx_for_cascaderelationship_BusinessUnit_Imports]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_BusinessUnit_Imports] ON [dbo].[ImportBase]
(
	[OwningBusinessUnit] ASC
)
WHERE ([OwningBusinessUnit] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[ImportBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[ImportBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ImportBase] ADD  CONSTRAINT [DF_ImportBase_SendNotification]  DEFAULT ((0)) FOR [SendNotification]
GO
ALTER TABLE [dbo].[ImportBase] ADD  CONSTRAINT [DF_ImportBase_IsImport]  DEFAULT ((1)) FOR [IsImport]
GO
ALTER TABLE [dbo].[ImportBase] ADD  CONSTRAINT [DF_ImportBase_ModeCode]  DEFAULT ((0)) FOR [ModeCode]
GO
ALTER TABLE [dbo].[ImportBase] ADD  CONSTRAINT [DF_ImportBase_StateCode]  DEFAULT ((0)) FOR [StateCode]
GO
ALTER TABLE [dbo].[ImportBase] ADD  CONSTRAINT [DF_ImportBase_Sequence]  DEFAULT ((0)) FOR [Sequence]
GO
ALTER TABLE [dbo].[ImportBase] ADD  CONSTRAINT [DF_ImportBase_StatusCode]  DEFAULT ((1)) FOR [StatusCode]
GO
ALTER TABLE [dbo].[ImportBase] ADD  CONSTRAINT [DF_ImportBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OwnerId]
GO
ALTER TABLE [dbo].[ImportBase] ADD  CONSTRAINT [DF_ImportBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[ImportBase]  WITH CHECK ADD  CONSTRAINT [BusinessUnit_Imports] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[ImportBase] CHECK CONSTRAINT [BusinessUnit_Imports]
GO
ALTER TABLE [dbo].[ImportBase]  WITH CHECK ADD  CONSTRAINT [owner_imports] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[ImportBase] CHECK CONSTRAINT [owner_imports]
GO
