CREATE TABLE [dbo].[PhoneCallBase]
(
[ActivityId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PhoneCallBase] ADD CONSTRAINT [PK_PhoneCallBase] PRIMARY KEY CLUSTERED  ([ActivityId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PhoneCallBase] WITH NOCHECK ADD CONSTRAINT [FK_PhoneCallBase_ActivityPointerBase] FOREIGN KEY ([ActivityId]) REFERENCES [dbo].[ActivityPointerBase] ([ActivityId]) NOT FOR REPLICATION
GO
