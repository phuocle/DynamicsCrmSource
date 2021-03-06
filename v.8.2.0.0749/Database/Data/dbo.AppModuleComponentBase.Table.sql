USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[AppModuleComponentBase]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AppModuleComponentBase](
	[IsDefault] [bit] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[AppModuleComponentIdUnique] [uniqueidentifier] ROWGUIDCOL  NOT NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime] NULL,
	[IntroducedVersion] [nvarchar](48) NULL,
	[RootAppModuleComponentId] [uniqueidentifier] NULL,
	[RootComponentBehavior] [int] NULL,
	[ComponentType] [int] NULL,
	[ModifiedOn] [datetime] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[AppModuleIdUnique] [uniqueidentifier] NULL,
	[VersionNumber] [timestamp] NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[ObjectId] [uniqueidentifier] NULL,
	[IsMetadata] [bit] NULL,
	[OverwriteTime] [datetime] NOT NULL,
	[AppModuleComponentId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [cndx_PrimaryKey_AppModuleComponent] PRIMARY KEY CLUSTERED 
(
	[AppModuleComponentId] ASC,
	[OverwriteTime] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[AppModuleComponentBase] ADD  CONSTRAINT [DF_AppModuleComponentBase_IsDefault]  DEFAULT ((0)) FOR [IsDefault]
GO
ALTER TABLE [dbo].[AppModuleComponentBase] ADD  CONSTRAINT [DF_AppModuleComponentBase_AppModuleComponentIdUnique]  DEFAULT (newid()) FOR [AppModuleComponentIdUnique]
GO
ALTER TABLE [dbo].[AppModuleComponentBase] ADD  CONSTRAINT [DF_AppModuleComponentBase_ComponentType]  DEFAULT ((0)) FOR [ComponentType]
GO
ALTER TABLE [dbo].[AppModuleComponentBase] ADD  CONSTRAINT [DF_AppModuleComponentBase_OverwriteTime]  DEFAULT ((0)) FOR [OverwriteTime]
GO
ALTER TABLE [dbo].[AppModuleComponentBase] ADD  CONSTRAINT [DF_AppModuleComponentBase_AppModuleComponentId]  DEFAULT (newid()) FOR [AppModuleComponentId]
GO
