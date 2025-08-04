CREATE TABLE [dbo].[Notification] (
    [CreatedOnString]    NVARCHAR (40)    NOT NULL,
    [NotificationId]     UNIQUEIDENTIFIER NOT NULL,
    [NotificationNumber] INT              IDENTITY (1, 1) NOT NULL,
    [CreatedOn]          DATETIME         NOT NULL,
    [EventData]          NVARCHAR (MAX)   NOT NULL,
    [OrganizationId]     UNIQUEIDENTIFIER NOT NULL,
    [EventId]            INT              NOT NULL,
    CONSTRAINT [ndx_PrimaryKey_Notification] PRIMARY KEY NONCLUSTERED ([NotificationId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[Notification]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[Notification] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE CLUSTERED INDEX [cndx_Notification]
    ON [dbo].[Notification]([NotificationNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_NotificationCover]
    ON [dbo].[Notification]([CreatedOn] ASC, [EventId] ASC) WITH (FILLFACTOR = 80);

