CREATE TABLE [dbo].[SimilarityRuleBase] (
    [Description]               NVARCHAR (MAX)   NULL,
    [MatchingEntityTypeCode]    INT              NOT NULL,
    [name]                      NVARCHAR (100)   NULL,
    [SimilarityRuleIdUnique]    UNIQUEIDENTIFIER CONSTRAINT [DF_SimilarityRuleBase_SimilarityRuleIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [statecode]                 INT              CONSTRAINT [DF_SimilarityRuleBase_statecode] DEFAULT ((0)) NOT NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [ModifiedOn]                DATETIME         NULL,
    [IsManaged]                 BIT              CONSTRAINT [DF_SimilarityRuleBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [FetchXmlList]              NVARCHAR (MAX)   NULL,
    [MaxKeyWords]               INT              NULL,
    [ExcludeInactiveRecords]    BIT              CONSTRAINT [DF_SimilarityRuleBase_ExcludeInactiveRecords] DEFAULT ((0)) NULL,
    [BaseEntityName]            NVARCHAR (160)   NULL,
    [ComponentState]            INT              CONSTRAINT [DF_SimilarityRuleBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [IntroducedVersion]         NVARCHAR (48)    NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [RuleConditionXml]          NVARCHAR (MAX)   NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [SimilarityRuleId]          UNIQUEIDENTIFIER NOT NULL,
    [statuscode]                INT              CONSTRAINT [DF_SimilarityRuleBase_statuscode] DEFAULT ((0)) NULL,
    [OverwriteTime]             DATETIME         CONSTRAINT [DF_SimilarityRuleBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [MatchingEntityName]        NVARCHAR (160)   NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [SupportingSolutionId]      UNIQUEIDENTIFIER NULL,
    [SolutionId]                UNIQUEIDENTIFIER CONSTRAINT [DF_SimilarityRuleBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [ActiveRuleFetchXML]        NVARCHAR (MAX)   NULL,
    [BaseEntityTypeCode]        INT              NOT NULL,
    [NgramSize]                 INT              NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    CONSTRAINT [PK_SimilarityRuleBase] PRIMARY KEY CLUSTERED ([SimilarityRuleId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_SimilarityRuleBase_SimilarityRuleIdUnique] UNIQUE NONCLUSTERED ([SimilarityRuleIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SimilarityRuleBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[SimilarityRuleBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[SimilarityRuleBase]([name] ASC) WITH (FILLFACTOR = 80);

