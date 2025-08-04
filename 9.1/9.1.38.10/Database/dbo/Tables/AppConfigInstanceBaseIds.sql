CREATE TABLE [dbo].[AppConfigInstanceBaseIds] (
    [AppConfigInstanceId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_AppConfigInstanceBaseIds] PRIMARY KEY CLUSTERED ([AppConfigInstanceId] ASC)
);


GO
ALTER TABLE [dbo].[AppConfigInstanceBaseIds] SET (LOCK_ESCALATION = DISABLE);

