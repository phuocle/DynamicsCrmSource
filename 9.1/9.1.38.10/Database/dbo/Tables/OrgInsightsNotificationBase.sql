CREATE TABLE [dbo].[OrgInsightsNotificationBase] (
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [InternalName]              NVARCHAR (160)   NULL,
    [OrgInsightsNotificationId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [Name]                      NVARCHAR (160)   NULL,
    [JsonData]                  NVARCHAR (MAX)   NULL
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[OrgInsightsNotificationBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[OrgInsightsNotificationBase] SET (LOCK_ESCALATION = DISABLE);

