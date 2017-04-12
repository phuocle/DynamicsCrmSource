CREATE TABLE [dbo].[SqlEncryptionAudit]
(
[CreatedOn] [datetime] NOT NULL CONSTRAINT [DF_SqlEncryptionAudit_CreatedOn] DEFAULT (getutcdate()),
[CreatedBy] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SqlEncryptionAudit] ADD CONSTRAINT [cndx_PrimaryKey_SqlEncryptionAudits] PRIMARY KEY CLUSTERED  ([CreatedOn]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
