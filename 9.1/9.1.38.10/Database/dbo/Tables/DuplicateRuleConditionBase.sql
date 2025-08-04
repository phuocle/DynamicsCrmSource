CREATE TABLE [dbo].[DuplicateRuleConditionBase] (
    [CreatedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [RegardingObjectId]        UNIQUEIDENTIFIER NULL,
    [CreatedOn]                DATETIME         NOT NULL,
    [CreatedBy]                UNIQUEIDENTIFIER NULL,
    [MatchingAttributeName]    NVARCHAR (128)   NULL,
    [IgnoreBlankValues]        BIT              CONSTRAINT [DF_DuplicateRuleConditionBase_IgnoreBlankValues] DEFAULT ((0)) NULL,
    [OperatorCode]             INT              NULL,
    [DuplicateRuleConditionId] UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [BaseAttributeName]        NVARCHAR (128)   NOT NULL,
    [OperatorParam]            INT              NULL,
    [ModifiedBy]               UNIQUEIDENTIFIER NULL,
    [ModifiedOn]               DATETIME         NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_DuplicateRuleCondition] PRIMARY KEY CLUSTERED ([DuplicateRuleConditionId] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[DuplicateRuleConditionBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_DuplicateRule]
    ON [dbo].[DuplicateRuleConditionBase]([RegardingObjectId] ASC) WHERE ([RegardingObjectId] IS NOT NULL) WITH (FILLFACTOR = 80);

