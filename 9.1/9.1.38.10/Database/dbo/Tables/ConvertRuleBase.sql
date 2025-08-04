CREATE TABLE [dbo].[ConvertRuleBase] (
    [AllowUnknownSender]        BIT              CONSTRAINT [DF_ConvertRuleBase_AllowUnknownSender] DEFAULT ((0)) NULL,
    [RecordVersion]             NVARCHAR (25)    CONSTRAINT [DF_ConvertRuleBase_RecordVersion] DEFAULT ('7.0.0.0') NOT NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [SendAutomaticResponse]     BIT              CONSTRAINT [DF_ConvertRuleBase_SendAutomaticResponse] DEFAULT ((0)) NULL,
    [ChannelPropertyGroupId]    UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [CheckBlockedSocialProfile] BIT              CONSTRAINT [DF_ConvertRuleBase_CheckBlockedSocialProfile] DEFAULT ((0)) NULL,
    [OverwriteTime]             DATETIME         CONSTRAINT [DF_ConvertRuleBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [ModifiedOn]                DATETIME         NULL,
    [CheckDirectMessages]       BIT              CONSTRAINT [DF_ConvertRuleBase_CheckDirectMessages] DEFAULT ((0)) NULL,
    [StatusCode]                INT              NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [IsManaged]                 BIT              CONSTRAINT [DF_ConvertRuleBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [ComponentState]            INT              CONSTRAINT [DF_ConvertRuleBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [CheckActiveEntitlement]    BIT              CONSTRAINT [DF_ConvertRuleBase_CheckActiveEntitlement] DEFAULT ((0)) NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [ResponseTemplateId]        UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ConvertRuleId]             UNIQUEIDENTIFIER NOT NULL,
    [SolutionId]                UNIQUEIDENTIFIER CONSTRAINT [DF_ConvertRuleBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [CheckIfResolved]           BIT              CONSTRAINT [DF_ConvertRuleBase_CheckIfResolved] DEFAULT ((0)) NULL,
    [SourceChannelTypeCode]     INT              NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [SupportingSolutionId]      UNIQUEIDENTIFIER NULL,
    [QueueId]                   UNIQUEIDENTIFIER NULL,
    [SourceTypeCode]            INT              NULL,
    [CreatedOn]                 DATETIME         NULL,
    [StateCode]                 INT              NOT NULL,
    [OwnerId]                   UNIQUEIDENTIFIER NOT NULL,
    [ConvertRuleIdUnique]       UNIQUEIDENTIFIER CONSTRAINT [DF_ConvertRuleBase_ConvertRuleIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [WorkflowId]                UNIQUEIDENTIFIER NULL,
    [ResolvedSince]             INT              NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_ConvertRuleBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [ConvertRuleType]           BIT              NULL,
    [SenderResolutionOption]    INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_ConvertRule] PRIMARY KEY CLUSTERED ([ConvertRuleId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_ConvertRuleBase_ConvertRuleIdUnique] UNIQUE NONCLUSTERED ([ConvertRuleIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ConvertRuleBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[ConvertRuleBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[ConvertRuleBase]([QueueId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[ConvertRuleBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[ConvertRuleBase]([ConvertRuleId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_A5F6F8E2A54448AFB1316F722E1B6AB2]
    ON [dbo].[ConvertRuleBase]([ConvertRuleId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_A5F6F8E2A54448AFB1316F722E1B6AB2]
    ON [dbo].[ConvertRuleBase]([ConvertRuleId] ASC)
    INCLUDE([Name], [SourceChannelTypeCode], [QueueId], [CreatedOn], [OwnerId], [OwnerIdType], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_A5F6F8E2A54448AFB1316F722E1B6AB2]
    ON [dbo].[ConvertRuleBase]([Name] ASC, [ConvertRuleId] ASC)
    INCLUDE([SourceChannelTypeCode], [QueueId], [CreatedOn], [OwnerId], [OwnerIdType], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

