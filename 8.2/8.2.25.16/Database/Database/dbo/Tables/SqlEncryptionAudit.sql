CREATE TABLE [dbo].[SqlEncryptionAudit] (
    [CreatedOn] DATETIME         CONSTRAINT [DF_SqlEncryptionAudit_CreatedOn] DEFAULT (getutcdate()) NOT NULL,
    [CreatedBy] UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_SqlEncryptionAudits] PRIMARY KEY CLUSTERED ([CreatedOn] ASC) WITH (FILLFACTOR = 80)
);

