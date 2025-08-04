CREATE TABLE [dbo].[NavigationSettingBaseIds] (
    [NavigationSettingId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_NavigationSettingBaseIds] PRIMARY KEY CLUSTERED ([NavigationSettingId] ASC)
);


GO
ALTER TABLE [dbo].[NavigationSettingBaseIds] SET (LOCK_ESCALATION = DISABLE);

