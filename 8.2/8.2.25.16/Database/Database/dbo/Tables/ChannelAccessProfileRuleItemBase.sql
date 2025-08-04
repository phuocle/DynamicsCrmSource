CREATE TABLE [dbo].[ChannelAccessProfileRuleItemBase] (
    [AssociatedChannelAccessProfile]       UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                           DATETIME         NULL,
    [ExchangeRate]                         DECIMAL (23, 10) NULL,
    [VersionNumber]                        ROWVERSION       NULL,
    [SolutionId]                           UNIQUEIDENTIFIER CONSTRAINT [DF_ChannelAccessProfileRuleItemBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [CreatedBy]                            UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                           UNIQUEIDENTIFIER NULL,
    [TransactionCurrencyId]                UNIQUEIDENTIFIER NULL,
    [SequenceNumber]                       INT              NULL,
    [Description]                          NVARCHAR (MAX)   NULL,
    [ChannelAccessProfileRuleItemIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_ChannelAccessProfileRuleItemBase_ChannelAccessProfileRuleItemIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [CreatedOn]                            DATETIME         NULL,
    [IsManaged]                            BIT              CONSTRAINT [DF_ChannelAccessProfileRuleItemBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [ChannelAccessProfileRuleId]           UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOnBehalfBy]                   UNIQUEIDENTIFIER NULL,
    [UTCConversionTimeZoneCode]            INT              NULL,
    [Name]                                 NVARCHAR (150)   NULL,
    [OverwriteTime]                        DATETIME         CONSTRAINT [DF_ChannelAccessProfileRuleItemBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [ComponentState]                       INT              CONSTRAINT [DF_ChannelAccessProfileRuleItemBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ConditionXml]                         NVARCHAR (MAX)   NULL,
    [CreatedOnBehalfBy]                    UNIQUEIDENTIFIER NULL,
    [ChannelAccessProfileRuleItemId]       UNIQUEIDENTIFIER NOT NULL,
    [IntroducedVersion]                    NVARCHAR (48)    NULL,
    [SupportingSolutionId]                 UNIQUEIDENTIFIER NULL,
    [TimeZoneRuleVersionNumber]            INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_ProfileRuleItem] PRIMARY KEY CLUSTERED ([ChannelAccessProfileRuleItemId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ChannelAccessProfileRuleItemBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Name]
    ON [dbo].[ChannelAccessProfileRuleItemBase]([Name] ASC) WITH (FILLFACTOR = 80);

