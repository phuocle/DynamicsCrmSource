

create procedure [dbo].[p_UpdateMailboxOperationState]
(
	@mailboxId uniqueidentifier,
	@operationsString nvarchar(12), -- Microsoft.Crm.Asynchronous.EmailConnector.MailboxOperationType.IncomingEmail = 0; Microsoft.Crm.Asynchronous.EmailConnector.MailboxOperationType.ACT = 2;
	@postponeProcessingUntil DATETIME,
	@operationSucceeded bit = 1,
	@enableProcessing bit = 1,
	@transientFailureCount int = 0,
	@postponeEmailReceivingUntil DATETIME = null,
	@postponeACTReceivingUntil DATETIME = null,
	@noEmailCount int = 0,
	@noACTCount int = 0,
	@errorText NVARCHAR(2048) = null,
	@roleInstance NVARCHAR(320) = null,
	@errorCode int = 0,
	@errorCount int = 0,
	@processEmailReceivedAfter DATETIME = null,
	@emailMessageId NVARCHAR(640) = null,
	@emailFolderHierarchy NVARCHAR(max) = null,
	@clearSyncState bit = 0
)
as
begin
	declare @maxDateTime DATETIME = '9999-12-31 23:59:59.997'
	declare @utcnow datetime = GETUTCDATE()

	declare @processedACT bit = 0
	declare @processedIncoming bit = 0

	set @utcnow = DATEADD(ms, -DATEPART(ms, @utcnow), @utcnow)
	set @postponeProcessingUntil = DATEADD(ms, -DATEPART(ms, @postponeProcessingUntil), @postponeProcessingUntil)

	if @postponeEmailReceivingUntil is not null set @postponeEmailReceivingUntil = DATEADD(ms, -DATEPART(ms, @postponeEmailReceivingUntil), @postponeEmailReceivingUntil)
	if @postponeACTReceivingUntil is not null set @postponeACTReceivingUntil = DATEADD(ms, -DATEPART(ms, @postponeACTReceivingUntil), @postponeACTReceivingUntil)
	if @processEmailReceivedAfter is not null set @processEmailReceivedAfter = DATEADD(ms, -DATEPART(ms, @processEmailReceivedAfter), @processEmailReceivedAfter)

	-- Microsoft.Crm.Asynchronous.EmailConnector.MailboxOperationType.IncomingEmail
	if(CHARINDEX('0', @operationsString) > 0)
		set @processedIncoming = 1;

	-- Microsoft.Crm.Asynchronous.EmailConnector.MailboxOperationType.ACT
	if(CHARINDEX('2', @operationsString) > 0)
		set @processedACT = 1;

	if (@processedACT = 0 and @processedIncoming = 0)
		return;

	update MailboxBase set 
		HostId = NULL
		,ProcessingStateCode = 0
		,TransientFailureCount = @transientFailureCount
		,PostponeMailboxProcessingUntil = (case when @enableProcessing = 1 then @postponeProcessingUntil else @maxDateTime end)

		,LastSuccessfulSyncCompletedOn = (case when @operationSucceeded = 1 then @utcnow else LastSuccessfulSyncCompletedOn end)
		,LastSyncError = (case when @operationSucceeded = 1 then null else @errorText end)
		,LastSyncErrorCount = (case when @operationSucceeded = 1 then 0 else @errorCount end)
		,LastSyncErrorCode = (case when @operationSucceeded = 1 then 0 else @errorCode end)
		,LastSyncErrorMachineName = (case when @operationSucceeded = 1 then null else @roleInstance end)
		,LastSyncErrorOccurredOn = (case when @operationSucceeded = 1 then null else @utcnow end)
		,MailboxStatus = (case when @operationSucceeded = 1 then 1 else 2 end)

		,EnabledForIncomingEmail = (case when @processedIncoming = 1 and @enableProcessing = 0 then 0 else EnabledForIncomingEmail end)
		,IncomingEmailStatus = (case when @processedIncoming = 1 and @enableProcessing = 0 then 2 else IncomingEmailStatus end)
		,ReceivingPostponedUntil = (case when @processedIncoming = 1 and @postponeEmailReceivingUntil is not null then @postponeEmailReceivingUntil else ReceivingPostponedUntil end)
		,ProcessEmailReceivedAfter = (case when @processedIncoming = 1 and @processEmailReceivedAfter is not null then @processEmailReceivedAfter else ProcessEmailReceivedAfter end)
		,NoEmailCount = (case when @processedIncoming = 1 then @noEmailCount else NoEmailCount end)
		,LastMessageId = (case when @processedIncoming = 1 and @emailMessageId is not null then @emailMessageId else LastMessageId end)
		,FolderHierarchy = (case when @processedIncoming = 1 and @emailFolderHierarchy is not null then @emailFolderHierarchy else FolderHierarchy end)

		,EnabledForACT = (case when @processedACT = 1 and @enableProcessing = 0 then 0 else EnabledForACT end)
		,ACTStatus = (case when @processedACT = 1 and @enableProcessing = 0 then 2 else ACTStatus end)
		,ReceivingPostponedUntilForACT = (case when @processedACT = 1 and @postponeACTReceivingUntil is not null then @postponeACTReceivingUntil else ReceivingPostponedUntilForACT end)
		,NoACTCount = (case when @processedACT = 1 then @noACTCount else NoACTCount end)
		,ExchangeSyncStateXml = (case when @processedACT = 1 and @clearSyncState = 1 then null else ExchangeSyncStateXml end)

	where MailboxId = @mailboxId
end