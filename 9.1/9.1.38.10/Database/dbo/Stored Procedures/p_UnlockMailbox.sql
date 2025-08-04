

create procedure [dbo].[p_UnlockMailbox]
(
    @mailboxId uniqueidentifier,
    @postponeUntil DATETIME
)
as
begin
    update MailboxBase
        set HostId = NULL,
            ProcessingStateCode = 0,
            PostponeMailboxProcessingUntil = case when PostponeMailboxProcessingUntil > @postponeUntil then @postponeUntil else PostponeMailboxProcessingUntil end
        where
            MailboxId = @mailboxId
end
