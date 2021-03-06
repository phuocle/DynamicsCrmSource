USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[SdkMessageProcessingStepSecureConfigBase]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SdkMessageProcessingStepSecureConfigBase](
	[CustomizationLevel] [int] NOT NULL,
	[CreatedOn] [datetime] NULL,
	[SecureConfig] [nvarchar](max) NULL,
	[SdkMessageProcessingStepSecureConfigId] [uniqueidentifier] NOT NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[SdkMessageProcessingStepSecureConfigIdUnique] [uniqueidentifier] ROWGUIDCOL  NOT NULL,
	[ModifiedOn] [datetime] NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
 CONSTRAINT [cndx_PrimaryKey_SdkMessageProcessingStepSecureConfig] PRIMARY KEY CLUSTERED 
(
	[SdkMessageProcessingStepSecureConfigId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [UQ_SdkMessageProcessingStepSecureConfigBase_SdkMessageProcessingStepSecureConfigIdUnique]    Script Date: 4/10/2017 9:59:57 PM ******/
ALTER TABLE [dbo].[SdkMessageProcessingStepSecureConfigBase] ADD  CONSTRAINT [UQ_SdkMessageProcessingStepSecureConfigBase_SdkMessageProcessingStepSecureConfigIdUnique] UNIQUE NONCLUSTERED 
(
	[SdkMessageProcessingStepSecureConfigIdUnique] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SdkMessageProcessingStepSecureConfigBase] ADD  CONSTRAINT [DF_SdkMessageProcessingStepSecureConfigBase_CustomizationLevel]  DEFAULT ((0)) FOR [CustomizationLevel]
GO
ALTER TABLE [dbo].[SdkMessageProcessingStepSecureConfigBase] ADD  CONSTRAINT [DF_SdkMessageProcessingStepSecureConfigBase_SdkMessageProcessingStepSecureConfigIdUnique]  DEFAULT (newid()) FOR [SdkMessageProcessingStepSecureConfigIdUnique]
GO
