CREATE TABLE [dbo].[UoMScheduleBase]
(
[UoMScheduleId] [uniqueidentifier] NOT NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[Name] [nvarchar] (200) COLLATE Latin1_General_CI_AI NOT NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[ImportSequenceNumber] [int] NULL,
[BaseUoMName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[OverriddenCreatedOn] [datetime] NULL,
[StatusCode] [int] NULL,
[StateCode] [int] NOT NULL CONSTRAINT [DF_UoMScheduleBase_StateCode] DEFAULT ((0)),
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedByExternalParty] [uniqueidentifier] NULL,
[ModifiedByExternalParty] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[UoMScheduleBase] ADD CONSTRAINT [cndx_PrimaryKey_UoMSchedule] PRIMARY KEY CLUSTERED  ([UoMScheduleId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[UoMScheduleBase] ADD CONSTRAINT [AK1_UoMScheduleBase] UNIQUE NONCLUSTERED  ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[UoMScheduleBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
