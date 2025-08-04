CREATE TABLE [dbo].[CascadeDeleteEntitiesSelfReferencing] (
    [ObjectTypeCode] INT NOT NULL,
    [ColumnNumber]   INT NOT NULL,
    CONSTRAINT [PK_CascadeDeleteEntitiesSelfReferencing] PRIMARY KEY CLUSTERED ([ObjectTypeCode] ASC, [ColumnNumber] ASC)
);


GO
ALTER TABLE [dbo].[CascadeDeleteEntitiesSelfReferencing] SET (LOCK_ESCALATION = DISABLE);

