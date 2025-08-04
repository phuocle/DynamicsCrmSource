CREATE TABLE [dbo].[SqlEncryptionAudit] (
    [CreatedBy] UNIQUEIDENTIFIER NULL,
    [CreatedOn] DATETIME         CONSTRAINT [DF_SqlEncryptionAudit_CreatedOn] DEFAULT (getutcdate()) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_SqlEncryptionAudits] PRIMARY KEY CLUSTERED ([CreatedOn] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[SqlEncryptionAudit] SET (LOCK_ESCALATION = DISABLE);

