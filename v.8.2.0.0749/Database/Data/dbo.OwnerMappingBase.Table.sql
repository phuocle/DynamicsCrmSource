USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[OwnerMappingBase]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OwnerMappingBase](
	[CreatedOn] [datetime] NOT NULL,
	[TargetUserValueForSourceCRMUserLink] [nvarchar](160) NULL,
	[StatusCode] [int] NOT NULL,
	[ImportMapId] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[OwnerMappingId] [uniqueidentifier] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ProcessCode] [int] NOT NULL,
	[SourceSystemUserName] [nvarchar](160) NULL,
	[TargetSystemUserId] [uniqueidentifier] NULL,
	[StateCode] [int] NOT NULL,
	[SourceUserValueForSourceCRMUserLink] [nvarchar](160) NULL,
	[TargetSystemUserDomainName] [nvarchar](260) NULL,
	[ModifiedOn] [datetime] NOT NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
 CONSTRAINT [cndx_PrimaryKey_OwnerMapping] PRIMARY KEY CLUSTERED 
(
	[OwnerMappingId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[OwnerMappingBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[OwnerMappingBase] ADD  CONSTRAINT [DF_OwnerMappingBase_StatusCode]  DEFAULT ((0)) FOR [StatusCode]
GO
ALTER TABLE [dbo].[OwnerMappingBase] ADD  CONSTRAINT [DF_OwnerMappingBase_ProcessCode]  DEFAULT ((1)) FOR [ProcessCode]
GO
ALTER TABLE [dbo].[OwnerMappingBase] ADD  CONSTRAINT [DF_OwnerMappingBase_StateCode]  DEFAULT ((0)) FOR [StateCode]
GO
ALTER TABLE [dbo].[OwnerMappingBase]  WITH CHECK ADD  CONSTRAINT [OwnerMapping_ImportMap] FOREIGN KEY([ImportMapId])
REFERENCES [dbo].[ImportMapBase] ([ImportMapId])
GO
ALTER TABLE [dbo].[OwnerMappingBase] CHECK CONSTRAINT [OwnerMapping_ImportMap]
GO
ALTER TABLE [dbo].[OwnerMappingBase]  WITH CHECK ADD  CONSTRAINT [OwnerMapping_SystemUser] FOREIGN KEY([TargetSystemUserId])
REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[OwnerMappingBase] CHECK CONSTRAINT [OwnerMapping_SystemUser]
GO
