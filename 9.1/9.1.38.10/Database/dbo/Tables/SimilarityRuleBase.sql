CREATE TABLE [dbo].[SimilarityRuleBase] (
    [ComponentState]            INT              CONSTRAINT [DF_SimilarityRuleBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ExcludeInactiveRecords]    BIT              CONSTRAINT [DF_SimilarityRuleBase_ExcludeInactiveRecords] DEFAULT ((0)) NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [ImportSequenceNumber]      INT              NULL,
    [RuleConditionXml]          NVARCHAR (MAX)   NULL,
    [BaseEntityTypeCode]        INT              NOT NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [SupportingSolutionId]      UNIQUEIDENTIFIER NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [SimilarityRuleId]          UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOn]                DATETIME         NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [MatchingEntityName]        NVARCHAR (160)   NULL,
    [OverwriteTime]             DATETIME         CONSTRAINT [DF_SimilarityRuleBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [NgramSize]                 INT              NULL,
    [IsManaged]                 BIT              CONSTRAINT [DF_SimilarityRuleBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [MatchingEntityTypeCode]    INT              NOT NULL,
    [name]                      NVARCHAR (100)   NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [FetchXmlList]              NVARCHAR (MAX)   NULL,
    [SolutionId]                UNIQUEIDENTIFIER CONSTRAINT [DF_SimilarityRuleBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [BaseEntityName]            NVARCHAR (160)   NULL,
    [SimilarityRuleIdUnique]    UNIQUEIDENTIFIER CONSTRAINT [DF_SimilarityRuleBase_SimilarityRuleIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [statuscode]                INT              CONSTRAINT [DF_SimilarityRuleBase_statuscode] DEFAULT ((0)) NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [statecode]                 INT              CONSTRAINT [DF_SimilarityRuleBase_statecode] DEFAULT ((0)) NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [ActiveRuleFetchXML]        NVARCHAR (MAX)   NULL,
    [MaxKeyWords]               INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [IntroducedVersion]         NVARCHAR (48)    NULL,
    [VersionNumber]             ROWVERSION       NULL,
    CONSTRAINT [PK_SimilarityRuleBase] PRIMARY KEY CLUSTERED ([SimilarityRuleId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_SimilarityRuleBase_SimilarityRuleIdUnique] UNIQUE NONCLUSTERED ([SimilarityRuleIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[SimilarityRuleBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[SimilarityRuleBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SimilarityRuleBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[SimilarityRuleBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[SimilarityRuleBase]([name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[SimilarityRuleBase]([SimilarityRuleId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

