CREATE TABLE [dbo].[AppConfigMasterBaseIds] (
    [AppConfigMasterId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_AppConfigMasterBaseIds] PRIMARY KEY CLUSTERED ([AppConfigMasterId] ASC)
);


GO
ALTER TABLE [dbo].[AppConfigMasterBaseIds] SET (LOCK_ESCALATION = DISABLE);

