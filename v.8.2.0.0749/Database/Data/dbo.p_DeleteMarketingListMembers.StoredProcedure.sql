USE [D365_MSCRM]
GO
/****** Object:  StoredProcedure [dbo].[p_DeleteMarketingListMembers]    Script Date: 4/10/2017 9:59:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create	procedure [dbo].[p_DeleteMarketingListMembers](
	@doc ntext, 
	@ListId uniqueidentifier) 

as
begin;
	declare @idoc int;
	declare @incr int;
	declare @OtcListMember int;
	declare @docxml xml;

	declare @tempMemberBase table (
	EntityId uniqueidentifier,
	unique nonclustered (EntityId));
	--cast the input variable of ntext type into xml type.
	set @docxml = cast(@doc as xml);

	select @OtcListMember = 4301;

	insert into @tempMemberBase(EntityId)
	select T.c.value('./@entityid', 'uniqueidentifier') 
	from @docxml.nodes('/VALUES/VALUE') T(c);

	delete ListMemberBase
	output DELETED.ListMemberId, @OtcListMember 
	into SubscriptionTrackingDeletedObject(ObjectId, ObjectTypeCode)
	from @tempMemberBase tmb,ListMemberBase lmb
	Where lmb.EntityId = tmb.EntityId
		and ListId = @ListId;

	set @incr = @@rowcount;

	return @incr;

end;
GO
