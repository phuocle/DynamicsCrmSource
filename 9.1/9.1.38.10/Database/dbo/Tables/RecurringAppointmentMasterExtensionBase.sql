CREATE TABLE [dbo].[RecurringAppointmentMasterExtensionBase] (
    [ActivityId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_RecurringAppointmentMasterExtensionBase] PRIMARY KEY CLUSTERED ([ActivityId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [FK_RecurringAppointmentMasterExtensionBase_ActivityPointerBase] FOREIGN KEY ([ActivityId]) REFERENCES [dbo].[ActivityPointerBase] ([ActivityId])
);


GO
ALTER TABLE [dbo].[RecurringAppointmentMasterExtensionBase] SET (LOCK_ESCALATION = DISABLE);

