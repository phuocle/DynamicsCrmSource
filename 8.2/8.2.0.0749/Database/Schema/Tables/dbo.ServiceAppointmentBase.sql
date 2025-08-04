CREATE TABLE [dbo].[ServiceAppointmentBase]
(
[ActivityId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ServiceAppointmentBase] ADD CONSTRAINT [PK_ServiceAppointmentBase] PRIMARY KEY CLUSTERED  ([ActivityId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ServiceAppointmentBase] WITH NOCHECK ADD CONSTRAINT [FK_ServiceAppointmentBase_ActivityPointerBase] FOREIGN KEY ([ActivityId]) REFERENCES [dbo].[ActivityPointerBase] ([ActivityId]) NOT FOR REPLICATION
GO
