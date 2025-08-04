CREATE TABLE [dbo].[ChannelAccessProfileRuleBase] (
    [OwnerId]                          UNIQUEIDENTIFIER NOT NULL,
    [SolutionId]                       UNIQUEIDENTIFIER CONSTRAINT [DF_ChannelAccessProfileRuleBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [TransactionCurrencyId]            UNIQUEIDENTIFIER NULL,
    [OwningBusinessUnit]               UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                       DATETIME         NULL,
    [ChannelAccessProfileRuleId]       UNIQUEIDENTIFIER NOT NULL,
    [IsManaged]                        BIT              CONSTRAINT [DF_ChannelAccessProfileRuleBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [ExchangeRate]                     DECIMAL (23, 10) NULL,
    [Name]                             NVARCHAR (150)   NULL,
    [CreatedOn]                        DATETIME         NULL,
    [ModifiedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    [StatusCode]                       INT              NULL,
    [TimeZoneRuleVersionNumber]        INT              NULL,
    [WorkflowId]                       UNIQUEIDENTIFIER NULL,
    [ComponentState]                   INT              CONSTRAINT [DF_ChannelAccessProfileRuleBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [CreatedBy]                        UNIQUEIDENTIFIER NULL,
    [VersionNumber]                    ROWVERSION       NULL,
    [IntroducedVersion]                NVARCHAR (48)    NULL,
    [SupportingSolutionId]             UNIQUEIDENTIFIER NULL,
    [StateCode]                        INT              NOT NULL,
    [ModifiedBy]                       UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                UNIQUEIDENTIFIER NULL,
    [OverwriteTime]                    DATETIME         CONSTRAINT [DF_ChannelAccessProfileRuleBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [UTCConversionTimeZoneCode]        INT              NULL,
    [Description]                      NVARCHAR (MAX)   NULL,
    [ChannelAccessProfileRuleIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_ChannelAccessProfileRuleBase_ChannelAccessProfileRuleIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [OwnerIdType]                      INT              CONSTRAINT [DF_ChannelAccessProfileRuleBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [ cndx_PrimaryKey_ProfileRule] PRIMARY KEY CLUSTERED ([ChannelAccessProfileRuleId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ChannelAccessProfileRuleBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[ChannelAccessProfileRuleBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[ChannelAccessProfileRuleBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ChannelAccessProfileRuleBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[ChannelAccessProfileRuleBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Name]
    ON [dbo].[ChannelAccessProfileRuleBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[ChannelAccessProfileRuleBase]([ChannelAccessProfileRuleId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_0451E7563EE345B5ABC60F3BFF029451]
    ON [dbo].[ChannelAccessProfileRuleBase]([ChannelAccessProfileRuleId] ASC)
    INCLUDE([Name], [OwnerId], [OwnerIdType], [CreatedOn], [CreatedBy], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_0451E7563EE345B5ABC60F3BFF029451]
    ON [dbo].[ChannelAccessProfileRuleBase]([ChannelAccessProfileRuleId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_0451E7563EE345B5ABC60F3BFF029451]
    ON [dbo].[ChannelAccessProfileRuleBase]([Name] ASC, [ChannelAccessProfileRuleId] ASC)
    INCLUDE([OwnerId], [OwnerIdType], [CreatedOn], [CreatedBy], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

