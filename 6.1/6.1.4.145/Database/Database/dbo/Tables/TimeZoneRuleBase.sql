CREATE TABLE [dbo].[TimeZoneRuleBase] (
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [StandardDay]               INT              NOT NULL,
    [ModifiedOn]                DATETIME         NULL,
    [StandardMinute]            INT              NOT NULL,
    [StandardBias]              INT              NOT NULL,
    [StandardYear]              INT              NOT NULL,
    [DaylightMonth]             INT              NOT NULL,
    [StandardDayOfWeek]         INT              NOT NULL,
    [DaylightSecond]            INT              NOT NULL,
    [Bias]                      INT              NOT NULL,
    [TimeZoneRuleVersionNumber] INT              NOT NULL,
    [DaylightBias]              INT              NOT NULL,
    [StandardMonth]             INT              NOT NULL,
    [EffectiveDateTime]         DATETIME         NOT NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [DaylightHour]              INT              NOT NULL,
    [StandardHour]              INT              NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [DaylightYear]              INT              NOT NULL,
    [StandardSecond]            INT              NOT NULL,
    [DaylightMinute]            INT              NOT NULL,
    [TimeZoneDefinitionId]      UNIQUEIDENTIFIER NOT NULL,
    [DaylightDayOfWeek]         INT              NOT NULL,
    [TimeZoneRuleId]            UNIQUEIDENTIFIER NOT NULL,
    [DaylightDay]               INT              NOT NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_primarykey_timezonerule] PRIMARY KEY CLUSTERED ([TimeZoneRuleId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [lk_timezonerule_timezonedefinitionid] FOREIGN KEY ([TimeZoneDefinitionId]) REFERENCES [dbo].[TimeZoneDefinitionBase] ([TimeZoneDefinitionId]) NOT FOR REPLICATION
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[TimeZoneRuleBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_timezonerule_timezonedefinitionid]
    ON [dbo].[TimeZoneRuleBase]([TimeZoneDefinitionId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_timezoneruleversionnumber_timezonerule]
    ON [dbo].[TimeZoneRuleBase]([TimeZoneDefinitionId] ASC, [TimeZoneRuleVersionNumber] ASC, [EffectiveDateTime] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_TimeZoneRuleVersionNumber]
    ON [dbo].[TimeZoneRuleBase]([TimeZoneRuleVersionNumber] ASC) WITH (FILLFACTOR = 80);

