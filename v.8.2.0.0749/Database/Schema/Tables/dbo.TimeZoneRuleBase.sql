CREATE TABLE [dbo].[TimeZoneRuleBase]
(
[ModifiedBy] [uniqueidentifier] NULL,
[StandardDay] [int] NOT NULL,
[ModifiedOn] [datetime] NULL,
[StandardMinute] [int] NOT NULL,
[StandardBias] [int] NOT NULL,
[StandardYear] [int] NOT NULL,
[DaylightMonth] [int] NOT NULL,
[StandardDayOfWeek] [int] NOT NULL,
[DaylightSecond] [int] NOT NULL,
[Bias] [int] NOT NULL,
[TimeZoneRuleVersionNumber] [int] NOT NULL,
[DaylightBias] [int] NOT NULL,
[StandardMonth] [int] NOT NULL,
[EffectiveDateTime] [datetime] NOT NULL,
[CreatedBy] [uniqueidentifier] NULL,
[DaylightHour] [int] NOT NULL,
[StandardHour] [int] NOT NULL,
[CreatedOn] [datetime] NULL,
[DaylightYear] [int] NOT NULL,
[StandardSecond] [int] NOT NULL,
[DaylightMinute] [int] NOT NULL,
[TimeZoneDefinitionId] [uniqueidentifier] NOT NULL,
[DaylightDayOfWeek] [int] NOT NULL,
[TimeZoneRuleId] [uniqueidentifier] NOT NULL,
[DaylightDay] [int] NOT NULL,
[OrganizationId] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TimeZoneRuleBase] ADD CONSTRAINT [cndx_primarykey_timezonerule] PRIMARY KEY CLUSTERED  ([TimeZoneRuleId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_timezonerule_timezonedefinitionid] ON [dbo].[TimeZoneRuleBase] ([TimeZoneDefinitionId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_timezoneruleversionnumber_timezonerule] ON [dbo].[TimeZoneRuleBase] ([TimeZoneDefinitionId], [TimeZoneRuleVersionNumber], [EffectiveDateTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_TimeZoneRuleVersionNumber] ON [dbo].[TimeZoneRuleBase] ([TimeZoneRuleVersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[TimeZoneRuleBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TimeZoneRuleBase] ADD CONSTRAINT [lk_timezonerule_timezonedefinitionid] FOREIGN KEY ([TimeZoneDefinitionId]) REFERENCES [dbo].[TimeZoneDefinitionBase] ([TimeZoneDefinitionId])
GO
