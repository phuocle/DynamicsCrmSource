CREATE TABLE [dbo].[AttributeIds] (
    [AttributeId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [XPKAttributeIds] PRIMARY KEY CLUSTERED ([AttributeId] ASC)
);


GO
ALTER TABLE [dbo].[AttributeIds] SET (LOCK_ESCALATION = DISABLE);

