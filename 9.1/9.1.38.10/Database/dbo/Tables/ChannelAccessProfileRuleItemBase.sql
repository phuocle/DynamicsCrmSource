CREATE TABLE [dbo].[ChannelAccessProfileRuleItemBase] (
    [VersionNumber]                        ROWVERSION       NULL,
    [Description]                          NVARCHAR (MAX)   NULL,
    [ConditionXml]                         NVARCHAR (MAX)   NULL,
    [ModifiedBy]                           UNIQUEIDENTIFIER NULL,
    [ChannelAccessProfileRuleItemId]       UNIQUEIDENTIFIER NOT NULL,
    [Name]                                 NVARCHAR (150)   NULL,
    [AssociatedChannelAccessProfile]       UNIQUEIDENTIFIER NULL,
    [IntroducedVersion]                    NVARCHAR (48)    NULL,
    [ModifiedOn]                           DATETIME         NULL,
    [SupportingSolutionId]                 UNIQUEIDENTIFIER NULL,
    [ComponentState]                       INT              CONSTRAINT [DF_ChannelAccessProfileRuleItemBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [CreatedBy]                            UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]                   UNIQUEIDENTIFIER NULL,
    [SolutionId]                           UNIQUEIDENTIFIER CONSTRAINT [DF_ChannelAccessProfileRuleItemBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [CreatedOn]                            DATETIME         NULL,
    [OverwriteTime]                        DATETIME         CONSTRAINT [DF_ChannelAccessProfileRuleItemBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [ChannelAccessProfileRuleItemIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_ChannelAccessProfileRuleItemBase_ChannelAccessProfileRuleItemIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [SequenceNumber]                       INT              NULL,
    [ChannelAccessProfileRuleId]           UNIQUEIDENTIFIER NOT NULL,
    [IsManaged]                            BIT              CONSTRAINT [DF_ChannelAccessProfileRuleItemBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [TimeZoneRuleVersionNumber]            INT              NULL,
    [TransactionCurrencyId]                UNIQUEIDENTIFIER NULL,
    [UTCConversionTimeZoneCode]            INT              NULL,
    [ExchangeRate]                         DECIMAL (23, 10) NULL,
    [CreatedOnBehalfBy]                    UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_ProfileRuleItem] PRIMARY KEY CLUSTERED ([ChannelAccessProfileRuleItemId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ChannelAccessProfileRuleItemBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[ChannelAccessProfileRuleItemBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ChannelAccessProfileRuleItemBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Name]
    ON [dbo].[ChannelAccessProfileRuleItemBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[ChannelAccessProfileRuleItemBase]([ChannelAccessProfileRuleItemId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

