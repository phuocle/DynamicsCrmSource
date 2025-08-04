

create procedure [dbo].p_ReserveEmailActivitiesReadyToBeSent
(
	@recordsToSelect int,
	@mailboxId uniqueidentifier,
	@minutesToReserve int
)
as
begin
DECLARE @dateTimeNow DATETIME = GETUTCDATE();
DECLARE @dateTimeNowNoMS DATETIME = DATEADD(ms, -DATEPART(ms, @dateTimeNow), @dateTimeNow);
DECLARE @sendingDelayAllowed DATETIME = DATEADD(mi, @minutesToReserve, @dateTimeNowNoMS);
	UPDATE ActivityPointerBase
		SET
			DeliveryAttempts = COALESCE(DeliveryAttempts, 0) + 1, 
			DeliveryLastAttemptedOn = @dateTimeNowNoMS,
			PostponeActivityProcessingUntil = @sendingDelayAllowed
		OUTPUT
			INSERTED.ActivityId,
			INSERTED.ActivityTypeCode,
			INSERTED.Subject,
			INSERTED.Description,
			INSERTED.PriorityCode,
			INSERTED.EmailAttachmentCount,
			INSERTED.SenderMailboxId,
			INSERTED.DeliveryAttempts,
			INSERTED.ConversationIndex,
			INSERTED.MessageId,
			INSERTED.InReplyTo,
			INSERTED.CreatedOn,
			INSERTED.ModifiedOn,
			INSERTED.PostponeActivityProcessingUntil,
			INSERTED.ActualEnd
		WHERE
			ActivityId
			IN
			(SELECT
				TOP(@recordsToSelect) ActivityPointerBase.ActivityId
			FROM
				ActivityPointerBase WITH (READPAST, READCOMMITTEDLOCK, UPDLOCK)
			INNER JOIN
				MailboxBase WITH (NOLOCK) ON (ActivityPointerBase.SenderMailboxId = MailboxBase.MailboxId)
			WHERE
				(
					(
						MailboxBase.EnabledForOutgoingEmail = 1 AND
						MailboxBase.OutgoingEmailStatus = 1 AND
						MailboxBase.EmailServerProfile IS NOT NULL AND
						MailboxBase.PostponeSendingUntil <= @dateTimeNowNoMS AND
						(@mailboxId IS NULL OR MailboxBase.MailboxId = @mailboxId)
					)
				) AND
				ActivityPointerBase.ActivityTypeCode = 4202 AND
				ActivityPointerBase.StateCode = 1 AND
				ActivityPointerBase.PostponeActivityProcessingUntil IS NOT NULL AND
				ActivityPointerBase.PostponeActivityProcessingUntil <= @dateTimeNowNoMS AND
				(@mailboxId IS NULL OR ActivityPointerBase.SenderMailboxId = @mailboxId)
			ORDER BY
				ActivityPointerBase.DeliveryPriorityCode DESC,
				ActivityPointerBase.ActualEnd ASC
			)
end
