CREATE TABLE [dbo].[ConnectionRoleBaseIds] (
    [ConnectionRoleId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_ConnectionRoleBaseIds] PRIMARY KEY CLUSTERED ([ConnectionRoleId] ASC)
);


GO
ALTER TABLE [dbo].[ConnectionRoleBaseIds] SET (LOCK_ESCALATION = DISABLE);

