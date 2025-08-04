

create	procedure	[dbo].[p_AddMarketingListMembers](
	@doc ntext, 
	@EntityType int, 
	@ListId uniqueidentifier,
	@CreatedBy uniqueidentifier) 

as
begin;
	declare @idoc int;
	declare @docxml xml;

	declare @tempMemberBase table(
		EntityId uniqueidentifier,
		EntityType int,
		ListId uniqueidentifier,
		ListMemberId uniqueidentifier,
		CreatedBy uniqueidentifier,
		ModifiedBy uniqueidentifier,
		dup int,
		unique nonclustered (EntityId));

	--cast the input variable of ntext type into xml type.
	set @docxml = cast(@doc as xml);

	insert into @tempMemberBase(EntityId, EntityType, ListId, ListMemberId, CreatedBy, ModifiedBy, dup)
	select T.c.value('./@entityid', 'uniqueidentifier'), @EntityType, @ListId, newid(), @CreatedBy, @CreatedBy, 0 
	from @docxml.nodes('/VALUES/VALUE') T(c);

	update @tempMemberBase
	set dup = 1
	from @tempMemberBase tmb, ListMemberBase lmb
	where lmb.ListId = @ListId
		and lmb.EntityId = tmb.EntityId;

	insert into ListMemberBase(EntityId, EntityType, ListId, ListMemberId, CreatedOn, CreatedBy, ModifiedOn, ModifiedBy) 
	select EntityId, @EntityType, @ListId, newid(), dbo.fn_GetUtcDateTrunc(), @CreatedBy, dbo.fn_GetUtcDateTrunc(), @CreatedBy 
	from @tempMemberBase
	where dup = 0;

end;