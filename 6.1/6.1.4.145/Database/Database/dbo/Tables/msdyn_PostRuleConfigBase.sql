CREATE TABLE [dbo].[msdyn_PostRuleConfigBase] (
    [msdyn_PostRuleConfigId]    UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NULL,
    [statecode]                 INT              NOT NULL,
    [statuscode]                INT              NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [msdyn_name]                NVARCHAR (256)   NULL,
    [msdyn_FormatId]            NVARCHAR (256)   NULL,
    [msdyn_PostToYammer]        BIT              NULL,
    [msdyn_RuleId]              NVARCHAR (256)   NULL,
    [msdyn_RuleSource]          NVARCHAR (256)   NULL,
    [msdyn_StepId]              NVARCHAR (100)   NULL,
    [msdyn_PostConfigId]        UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_msdyn_PostRuleConfigBase] PRIMARY KEY CLUSTERED ([msdyn_PostRuleConfigId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [msdyn_postconfig_msdyn_postruleconfig] FOREIGN KEY ([msdyn_PostConfigId]) REFERENCES [dbo].[msdyn_PostConfigBase] ([msdyn_PostConfigId]) NOT FOR REPLICATION
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[msdyn_PostRuleConfigBase]([OrganizationId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_PostRuleConfigBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_PostRuleConfigBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_name]
    ON [dbo].[msdyn_PostRuleConfigBase]([msdyn_name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_msdyn_postconfig_msdyn_postruleconfig]
    ON [dbo].[msdyn_PostRuleConfigBase]([msdyn_PostConfigId] ASC) WHERE ([msdyn_PostConfigId] IS NOT NULL) WITH (FILLFACTOR = 80);

