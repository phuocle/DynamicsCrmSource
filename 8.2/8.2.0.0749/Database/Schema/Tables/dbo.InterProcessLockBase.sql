CREATE TABLE [dbo].[InterProcessLockBase]
(
[InterProcessLockId] [uniqueidentifier] NOT NULL,
[Token] [uniqueidentifier] NOT NULL,
[ModifiedOn] [datetime] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[InterProcessLockBase] ADD CONSTRAINT [cndx_PrimaryKey_InterProcessLock] PRIMARY KEY CLUSTERED  ([InterProcessLockId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
