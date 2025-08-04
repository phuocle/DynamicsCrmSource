CREATE TABLE [dbo].[InterProcessLockBase] (
    [InterProcessLockId] UNIQUEIDENTIFIER NOT NULL,
    [Token]              UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOn]         DATETIME         NULL,
    CONSTRAINT [cndx_PrimaryKey_InterProcessLock] PRIMARY KEY CLUSTERED ([InterProcessLockId] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[InterProcessLockBase] SET (LOCK_ESCALATION = DISABLE);

