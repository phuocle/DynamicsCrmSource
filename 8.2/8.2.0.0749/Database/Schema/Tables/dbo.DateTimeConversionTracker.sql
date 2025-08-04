CREATE TABLE [dbo].[DateTimeConversionTracker]
(
[EntityId] [uniqueidentifier] NOT NULL,
[AttributeId] [uniqueidentifier] NOT NULL,
[Status] [int] NULL,
[CreatedOn] [datetime] NULL,
[ModifiedOn] [datetime] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[DateTimeConversionTracker] ADD CONSTRAINT [DateTimeConversionTracker_PK] PRIMARY KEY CLUSTERED  ([EntityId], [AttributeId]) ON [PRIMARY]
GO
