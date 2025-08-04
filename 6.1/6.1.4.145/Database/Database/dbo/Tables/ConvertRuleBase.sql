CREATE TABLE [dbo].[ConvertRuleBase] (
    [AllowUnknownSender]        BIT              CONSTRAINT [DF_ConvertRuleBase_AllowUnknownSender] DEFAULT ((0)) NULL,
    [SendAutomaticResponse]     BIT              CONSTRAINT [DF_ConvertRuleBase_SendAutomaticResponse] DEFAULT ((0)) NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [CheckBlockedSocialProfile] BIT              CONSTRAINT [DF_ConvertRuleBase_CheckBlockedSocialProfile] DEFAULT ((0)) NULL,
    [CheckIfResolved]           BIT              CONSTRAINT [DF_ConvertRuleBase_CheckIfResolved] DEFAULT ((0)) NULL,
    [OverwriteTime]             DATETIME         CONSTRAINT [DF_ConvertRuleBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [CheckDirectMessages]       BIT              CONSTRAINT [DF_ConvertRuleBase_CheckDirectMessages] DEFAULT ((0)) NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [CreatedOn]                 DATETIME         NULL,
    [ComponentState]            INT              CONSTRAINT [DF_ConvertRuleBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [CheckActiveEntitlement]    BIT              CONSTRAINT [DF_ConvertRuleBase_CheckActiveEntitlement] DEFAULT ((0)) NULL,
    [ModifiedOn]                DATETIME         NULL,
    [SourceTypeCode]            INT              NULL,
    [ResponseTemplateId]        UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [StateCode]                 INT              NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ConvertRuleIdUnique]       UNIQUEIDENTIFIER CONSTRAINT [DF_ConvertRuleBase_ConvertRuleIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [StatusCode]                INT              NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [SolutionId]                UNIQUEIDENTIFIER CONSTRAINT [DF_ConvertRuleBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]      UNIQUEIDENTIFIER NULL,
    [QueueId]                   UNIQUEIDENTIFIER NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [IsManaged]                 BIT              CONSTRAINT [DF_ConvertRuleBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [ConvertRuleId]             UNIQUEIDENTIFIER NOT NULL,
    [OwnerId]                   UNIQUEIDENTIFIER NOT NULL,
    [WorkflowId]                UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [ResolvedSince]             INT              NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_ConvertRuleBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_ConvertRule] PRIMARY KEY CLUSTERED ([ConvertRuleId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[ConvertRuleBase]([QueueId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[ConvertRuleBase]([Name] ASC) WITH (FILLFACTOR = 80);

