CREATE TABLE [dbo].[AppModuleComponentBase]
(
[IsDefault] [bit] NULL CONSTRAINT [DF_AppModuleComponentBase_IsDefault] DEFAULT ((0)),
[ExchangeRate] [decimal] (23, 10) NULL,
[AppModuleComponentIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_AppModuleComponentBase_AppModuleComponentIdUnique] DEFAULT (newid()),
[TimeZoneRuleVersionNumber] [int] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[IntroducedVersion] [nvarchar] (48) COLLATE Latin1_General_CI_AI NULL,
[RootAppModuleComponentId] [uniqueidentifier] NULL,
[RootComponentBehavior] [int] NULL,
[ComponentType] [int] NULL CONSTRAINT [DF_AppModuleComponentBase_ComponentType] DEFAULT ((0)),
[ModifiedOn] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[AppModuleIdUnique] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[ObjectId] [uniqueidentifier] NULL,
[IsMetadata] [bit] NULL,
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_AppModuleComponentBase_OverwriteTime] DEFAULT ((0)),
[AppModuleComponentId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_AppModuleComponentBase_AppModuleComponentId] DEFAULT (newid())
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[AppModuleComponentBase] ADD CONSTRAINT [cndx_PrimaryKey_AppModuleComponent] PRIMARY KEY CLUSTERED  ([AppModuleComponentId], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
