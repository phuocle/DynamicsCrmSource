CREATE TABLE [dbo].[Notification] (
    [NotificationNumber] INT              IDENTITY (1, 1) NOT NULL,
    [EventData]          NVARCHAR (MAX)   NULL,
    [CreatedOn]          DATETIME         NOT NULL,
    [EventId]            INT              NOT NULL,
    [NotificationId]     UNIQUEIDENTIFIER NOT NULL,
    [CreatedOnString]    NVARCHAR (40)    NOT NULL,
    [OrganizationId]     UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [ndx_PrimaryKey_Notification] PRIMARY KEY NONCLUSTERED ([NotificationId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[Notification]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE UNIQUE CLUSTERED INDEX [cndx_Notification]
    ON [dbo].[Notification]([NotificationNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_NotificationCover]
    ON [dbo].[Notification]([CreatedOn] ASC, [EventId] ASC) WITH (FILLFACTOR = 80);

