CREATE TABLE [dbo].[TimeZoneRuleBase] (
    [VersionNumber]             ROWVERSION       NULL,
    [DaylightDayOfWeek]         INT              NOT NULL,
    [StandardSecond]            INT              NOT NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [EffectiveDateTime]         DATETIME         NOT NULL,
    [DaylightHour]              INT              NOT NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [StandardDayOfWeek]         INT              NOT NULL,
    [StandardHour]              INT              NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [TimeZoneRuleId]            UNIQUEIDENTIFIER NOT NULL,
    [Bias]                      INT              NOT NULL,
    [StandardMinute]            INT              NOT NULL,
    [StandardMonth]             INT              NOT NULL,
    [DaylightMinute]            INT              NOT NULL,
    [DaylightDay]               INT              NOT NULL,
    [DaylightYear]              INT              NOT NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [StandardDay]               INT              NOT NULL,
    [DaylightBias]              INT              NOT NULL,
    [StandardBias]              INT              NOT NULL,
    [DaylightSecond]            INT              NOT NULL,
    [TimeZoneRuleVersionNumber] INT              NOT NULL,
    [ModifiedOn]                DATETIME         NULL,
    [StandardYear]              INT              NOT NULL,
    [DaylightMonth]             INT              NOT NULL,
    [TimeZoneDefinitionId]      UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [cndx_primarykey_timezonerule] PRIMARY KEY CLUSTERED ([TimeZoneRuleId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [lk_timezonerule_timezonedefinitionid] FOREIGN KEY ([TimeZoneDefinitionId]) REFERENCES [dbo].[TimeZoneDefinitionBase] ([TimeZoneDefinitionId])
);


GO
ALTER TABLE [dbo].[TimeZoneRuleBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_timezoneruleversionnumber_timezonerule]
    ON [dbo].[TimeZoneRuleBase]([TimeZoneDefinitionId] ASC, [TimeZoneRuleVersionNumber] ASC, [EffectiveDateTime] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[TimeZoneRuleBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_timezonerule_timezonedefinitionid]
    ON [dbo].[TimeZoneRuleBase]([TimeZoneDefinitionId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_TimeZoneRuleVersionNumber]
    ON [dbo].[TimeZoneRuleBase]([TimeZoneRuleVersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_03CE6F2F466B49479FE5EB0EA8E4567A]
    ON [dbo].[TimeZoneRuleBase]([TimeZoneRuleId] ASC)
    INCLUDE([TimeZoneRuleVersionNumber], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

