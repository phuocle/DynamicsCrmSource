CREATE TABLE [dbo].[EmailSignatureBaseIds] (
    [EmailSignatureId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_EmailSignatureBaseIds] PRIMARY KEY CLUSTERED ([EmailSignatureId] ASC)
);


GO
ALTER TABLE [dbo].[EmailSignatureBaseIds] SET (LOCK_ESCALATION = DISABLE);

