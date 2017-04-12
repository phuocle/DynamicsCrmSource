CREATE TABLE [dbo].[RecurringAppointmentMasterExtensionBase]
(
[ActivityId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RecurringAppointmentMasterExtensionBase] ADD CONSTRAINT [PK_RecurringAppointmentMasterExtensionBase] PRIMARY KEY CLUSTERED  ([ActivityId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RecurringAppointmentMasterExtensionBase] WITH NOCHECK ADD CONSTRAINT [FK_RecurringAppointmentMasterExtensionBase_ActivityPointerBase] FOREIGN KEY ([ActivityId]) REFERENCES [dbo].[ActivityPointerBase] ([ActivityId]) NOT FOR REPLICATION
GO
