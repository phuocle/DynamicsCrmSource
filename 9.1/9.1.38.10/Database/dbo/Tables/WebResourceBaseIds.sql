CREATE TABLE [dbo].[WebResourceBaseIds] (
    [WebResourceId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_WebResourceBaseIds] PRIMARY KEY CLUSTERED ([WebResourceId] ASC)
);


GO
ALTER TABLE [dbo].[WebResourceBaseIds] SET (LOCK_ESCALATION = DISABLE);

