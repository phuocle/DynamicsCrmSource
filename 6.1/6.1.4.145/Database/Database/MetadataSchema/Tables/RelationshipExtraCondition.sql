CREATE TABLE [MetadataSchema].[RelationshipExtraCondition] (
    [ConditionId]                     UNIQUEIDENTIFIER ROWGUIDCOL NOT NULL,
    [RelationshipId]                  UNIQUEIDENTIFIER NOT NULL,
    [AttributeId]                     UNIQUEIDENTIFIER NOT NULL,
    [ConditionOp]                     TINYINT          DEFAULT ((0)) NOT NULL,
    [Value]                           INT              DEFAULT ((0)) NOT NULL,
    [RelationshipExtraConditionRowId] UNIQUEIDENTIFIER DEFAULT (newid()) NOT NULL,
    [VersionNumber]                   ROWVERSION       NOT NULL,
    [SolutionId]                      UNIQUEIDENTIFIER DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]            UNIQUEIDENTIFIER DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [ComponentState]                  TINYINT          DEFAULT ((0)) NOT NULL,
    [OverwriteTime]                   DATETIME         DEFAULT ((0)) NOT NULL,
    [IsManaged]                       BIT              DEFAULT ((0)) NOT NULL,
    CONSTRAINT [XPKRelationshipExtraCondition] PRIMARY KEY CLUSTERED ([ConditionId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC),
    CONSTRAINT [extra_condition_condition_op_values] CHECK ([ConditionOp]>=(0) AND [ConditionOp]<(6)),
    CONSTRAINT [extra_condition_attribute] FOREIGN KEY ([AttributeId]) REFERENCES [dbo].[AttributeIds] ([AttributeId]),
    CONSTRAINT [extra_condition_relationship] FOREIGN KEY ([RelationshipId]) REFERENCES [dbo].[RelationshipIds] ([RelationshipId])
);

