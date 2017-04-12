CREATE TABLE [dbo].[EmailSignatureBaseIds]
(
[EmailSignatureId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EmailSignatureBaseIds] ADD CONSTRAINT [PK_EmailSignatureBaseIds] PRIMARY KEY CLUSTERED  ([EmailSignatureId]) ON [PRIMARY]
GO
