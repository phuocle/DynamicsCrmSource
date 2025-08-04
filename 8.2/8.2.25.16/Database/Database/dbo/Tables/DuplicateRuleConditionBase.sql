CREATE TABLE [dbo].[DuplicateRuleConditionBase] (
    [CreatedBy]                UNIQUEIDENTIFIER NULL,
    [OperatorParam]            INT              NULL,
    [OperatorCode]             INT              NULL,
    [ModifiedOn]               DATETIME         NOT NULL,
    [BaseAttributeName]        NVARCHAR (50)    NOT NULL,
    [RegardingObjectId]        UNIQUEIDENTIFIER NULL,
    [DuplicateRuleConditionId] UNIQUEIDENTIFIER NOT NULL,
    [MatchingAttributeName]    NVARCHAR (50)    NULL,
    [CreatedOn]                DATETIME         NOT NULL,
    [ModifiedBy]               UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [IgnoreBlankValues]        BIT              CONSTRAINT [DF_DuplicateRuleConditionBase_IgnoreBlankValues] DEFAULT ((0)) NULL,
    CONSTRAINT [cndx_PrimaryKey_DuplicateRuleCondition] PRIMARY KEY CLUSTERED ([DuplicateRuleConditionId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [fndx_DuplicateRule]
    ON [dbo].[DuplicateRuleConditionBase]([RegardingObjectId] ASC) WHERE ([RegardingObjectId] IS NOT NULL) WITH (FILLFACTOR = 80);

