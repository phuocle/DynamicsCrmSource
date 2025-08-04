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

