CREATE TABLE [dbo].[CustomControlDefaultConfigBase]
(
[PrimaryEntityTypeCode] [int] NOT NULL,
[ModifiedOn] [datetime] NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_CustomControlDefaultConfigBase_IsManaged] DEFAULT ((0)),
[OrganizationId] [uniqueidentifier] NOT NULL,
[CustomControlDefaultConfigId] [uniqueidentifier] NOT NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_CustomControlDefaultConfigBase_ComponentState] DEFAULT ((0)),
[CustomControlDefaultConfigIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_CustomControlDefaultConfigBase_CustomControlDefaultConfigIdUnique] DEFAULT (newid()),
[ControlDescriptionXML] [nvarchar] (max) COLLATE Latin1_General_CI_AI NOT NULL,
[VersionNumber] [timestamp] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[SupportingSolutionId] [uniqueidentifier] NULL,
[IntroducedVersion] [nvarchar] (48) COLLATE Latin1_General_CI_AI NULL,
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_CustomControlDefaultConfigBase_OverwriteTime] DEFAULT ((0)),
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_CustomControlDefaultConfigBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[EventsXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[CustomControlDefaultConfigBase] ADD CONSTRAINT [UQ_CustomControlDefaultConfigBase_CustomControlDefaultConfigIdUnique] UNIQUE NONCLUSTERED  ([CustomControlDefaultConfigIdUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[CustomControlDefaultConfigBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
