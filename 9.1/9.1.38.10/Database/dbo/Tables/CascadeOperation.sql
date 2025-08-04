CREATE TABLE [dbo].[CascadeOperation] (
    [CascadeLinkType]                  INT            NOT NULL,
    [IsDeleteEntitySchema]             BIT            DEFAULT ((0)) NULL,
    [HasExtraConditions]               BIT            DEFAULT ((0)) NULL,
    [ReferencedEntityObjectTypeCode]   INT            NOT NULL,
    [ReferencingEntityObjectTypeCode]  INT            NOT NULL,
    [ReferencingAttributeColumnNumber] INT            NOT NULL,
    [CascadeStatement]                 NVARCHAR (MAX) NULL,
    PRIMARY KEY CLUSTERED ([ReferencedEntityObjectTypeCode] ASC, [CascadeLinkType] ASC, [ReferencingEntityObjectTypeCode] ASC, [ReferencingAttributeColumnNumber] ASC)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[CascadeOperation]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[CascadeOperation] SET (LOCK_ESCALATION = DISABLE);

