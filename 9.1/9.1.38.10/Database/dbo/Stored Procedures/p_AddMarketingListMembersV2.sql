

create procedure [dbo].[p_AddMarketingListMembersV2](
	@doc ntext,
	@EntityType int,
	@ListId uniqueidentifier,
	@CreatedBy uniqueidentifier)

AS
begin;
	declare @EntityIds EntityIdCollection;
	declare @CreateOn DateTime;
	declare @OtcListMember int = 4301;
	declare @addedRecordCount int;

	insert into @EntityIds(id) select id from fn_GetGuidsFromString(@doc);
	set @CreateOn = dbo.fn_GetUtcDateTrunc();

	insert into ListMemberBase(EntityId, EntityType, ListId, ListMemberId, CreatedOn, CreatedBy, ModifiedOn, ModifiedBy)
	select IdsTmp.id, @EntityType, @ListId, newid(), @CreateOn, @CreatedBy, @CreateOn, @CreatedBy
	from (select id from @EntityIds) IdsTmp;

	set @addedRecordCount = @@ROWCOUNT;

	with DuplicatesTmp as
	(
		select ListMemberId, ROW_NUMBER() over (partition by EntityId order by EntityId, ListMemberId) as RowNumber
		from ListMemberBase
		where ListId = @ListId
	)

	delete ListMemberBase
	output DELETED.ListMemberId, @OtcListMember, DELETED.CreatedOn
	into SubscriptionTrackingDeletedObject(ObjectId, ObjectTypeCode, CrmCreatedOn)
	from DuplicatesTmp dtmp,ListMemberBase lmb
	Where dtmp.RowNumber <> 1 and lmb.ListMemberId = dtmp.ListMemberId;

	select @addedRecordCount;
end;
