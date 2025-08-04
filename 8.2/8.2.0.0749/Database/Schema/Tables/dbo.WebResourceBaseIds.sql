CREATE TABLE [dbo].[WebResourceBaseIds]
(
[WebResourceId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[WebResourceBaseIds] ADD CONSTRAINT [PK_WebResourceBaseIds] PRIMARY KEY CLUSTERED  ([WebResourceId]) ON [PRIMARY]
GO
