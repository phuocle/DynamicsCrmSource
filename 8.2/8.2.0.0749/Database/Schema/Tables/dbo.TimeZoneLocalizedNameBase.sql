CREATE TABLE [dbo].[TimeZoneLocalizedNameBase]
(
[CultureId] [int] NOT NULL,
[ModifiedOn] [datetime] NULL,
[CreatedOn] [datetime] NULL,
[TimeZoneDefinitionId] [uniqueidentifier] NOT NULL,
[StandardName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[VersionNumber] [timestamp] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[TimeZoneLocalizedNameId] [uniqueidentifier] NOT NULL,
[UserInterfaceName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[DaylightName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[CreatedBy] [uniqueidentifier] NULL,
[OrganizationId] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TimeZoneLocalizedNameBase] ADD CONSTRAINT [cndx_primarykey_timezonelocalizedname] PRIMARY KEY CLUSTERED  ([TimeZoneLocalizedNameId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_cultureid_timezonelocalizedname] ON [dbo].[TimeZoneLocalizedNameBase] ([TimeZoneDefinitionId], [CultureId], [StandardName]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_UserInterfaceName] ON [dbo].[TimeZoneLocalizedNameBase] ([UserInterfaceName]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[TimeZoneLocalizedNameBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TimeZoneLocalizedNameBase] ADD CONSTRAINT [lk_timezonelocalizedname_timezonedefinitionid] FOREIGN KEY ([TimeZoneDefinitionId]) REFERENCES [dbo].[TimeZoneDefinitionBase] ([TimeZoneDefinitionId])
GO
