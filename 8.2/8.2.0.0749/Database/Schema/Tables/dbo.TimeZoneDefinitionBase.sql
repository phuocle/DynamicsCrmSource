CREATE TABLE [dbo].[TimeZoneDefinitionBase]
(
[ModifiedOn] [datetime] NULL,
[TimeZoneCode] [int] NOT NULL,
[OrganizationId] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[TimeZoneDefinitionId] [uniqueidentifier] NOT NULL,
[CreatedOn] [datetime] NULL,
[Bias] [int] NULL,
[DaylightName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[CreatedBy] [uniqueidentifier] NULL,
[UserInterfaceName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[StandardName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[RetiredOrder] [int] NOT NULL CONSTRAINT [DF_TimeZoneDefinitionBase_RetiredOrder] DEFAULT ((0)),
[ModifiedBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TimeZoneDefinitionBase] ADD CONSTRAINT [cndx_primarykey_timezonedefinition] PRIMARY KEY CLUSTERED  ([TimeZoneDefinitionId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_timezonecode_timezonedefinition] ON [dbo].[TimeZoneDefinitionBase] ([TimeZoneCode], [RetiredOrder]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_UserInterfaceName] ON [dbo].[TimeZoneDefinitionBase] ([UserInterfaceName]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[TimeZoneDefinitionBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
