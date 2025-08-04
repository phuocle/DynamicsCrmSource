CREATE TABLE [dbo].[Notification]
(
[NotificationNumber] [int] NOT NULL IDENTITY(1, 1),
[EventData] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NOT NULL,
[EventId] [int] NOT NULL,
[NotificationId] [uniqueidentifier] NOT NULL,
[CreatedOnString] [nvarchar] (40) COLLATE Latin1_General_CI_AI NOT NULL,
[OrganizationId] [uniqueidentifier] NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[Notification] ADD CONSTRAINT [ndx_PrimaryKey_Notification] PRIMARY KEY NONCLUSTERED  ([NotificationId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_NotificationCover] ON [dbo].[Notification] ([CreatedOn], [EventId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE CLUSTERED INDEX [cndx_Notification] ON [dbo].[Notification] ([NotificationNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
