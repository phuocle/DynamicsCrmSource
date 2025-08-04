CREATE TABLE [dbo].[ChannelAccessProfileRuleBase] (
    [IsManaged]                        BIT              CONSTRAINT [DF_ChannelAccessProfileRuleBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [ChannelAccessProfileRuleIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_ChannelAccessProfileRuleBase_ChannelAccessProfileRuleIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [OverwriteTime]                    DATETIME         CONSTRAINT [DF_ChannelAccessProfileRuleBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [OwnerId]                          UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    [OwningBusinessUnit]               UNIQUEIDENTIFIER NULL,
    [SolutionId]                       UNIQUEIDENTIFIER CONSTRAINT [DF_ChannelAccessProfileRuleBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]             UNIQUEIDENTIFIER NULL,
    [WorkflowId]                       UNIQUEIDENTIFIER NULL,
    [CreatedBy]                        UNIQUEIDENTIFIER NULL,
    [UTCConversionTimeZoneCode]        INT              NULL,
    [VersionNumber]                    ROWVERSION       NULL,
    [IntroducedVersion]                NVARCHAR (48)    NULL,
    [TimeZoneRuleVersionNumber]        INT              NULL,
    [CreatedOnBehalfBy]                UNIQUEIDENTIFIER NULL,
    [ExchangeRate]                     DECIMAL (23, 10) NULL,
    [CreatedOn]                        DATETIME         NULL,
    [ModifiedOn]                       DATETIME         NULL,
    [TransactionCurrencyId]            UNIQUEIDENTIFIER NULL,
    [StateCode]                        INT              NOT NULL,
    [StatusCode]                       INT              NULL,
    [Name]                             NVARCHAR (150)   NULL,
    [Description]                      NVARCHAR (MAX)   NULL,
    [ComponentState]                   INT              CONSTRAINT [DF_ChannelAccessProfileRuleBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ChannelAccessProfileRuleId]       UNIQUEIDENTIFIER NOT NULL,
    [ModifiedBy]                       UNIQUEIDENTIFIER NULL,
    [OwnerIdType]                      INT              CONSTRAINT [DF_ChannelAccessProfileRuleBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [ cndx_PrimaryKey_ProfileRule] PRIMARY KEY CLUSTERED ([ChannelAccessProfileRuleId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


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

