

create	procedure dbo.p_DeleteMarketingListMembersV2(
  @doc ntext,
  @ListId uniqueidentifier)

as
begin;

  declare @incr int;
  declare @OtcListMember int = 4301;

  declare @tempMemberBase table (
    id uniqueidentifier,
    unique nonclustered (id));

  insert into @tempMemberBase (id) select id from fn_GetGuidsFromString(@doc);
  delete ListMemberBase
     output DELETED.ListMemberId, @OtcListMember, DELETED.CreatedOn
     into SubscriptionTrackingDeletedObject(ObjectId, ObjectTypeCode, CrmCreatedOn)
    from ListMemberBase lmb , @tempMemberBase tmb
      where lmb.EntityId = tmb.id and ListId = @ListId

  set @incr = @@rowcount;
  select @incr;

end;


