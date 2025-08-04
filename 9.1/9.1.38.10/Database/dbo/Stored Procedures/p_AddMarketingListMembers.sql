

create  procedure [dbo].[p_AddMarketingListMembers](
  @doc ntext, 
  @EntityType int, 
  @ListId uniqueidentifier,
  @CreatedBy uniqueidentifier) 

as
begin;
  declare @docxml xml;
  --cast the input variable of ntext type into xml type.
  set @docxml = cast(@doc as xml);

  insert into ListMemberBase(EntityId, EntityType, ListId, ListMemberId, CreatedOn, CreatedBy, ModifiedOn, ModifiedBy) 
  select tmb.EntityId, @EntityType, @ListId, newid(), dbo.fn_GetUtcDateTrunc(), @CreatedBy, dbo.fn_GetUtcDateTrunc(), @CreatedBy 
  from (select T.c.value('./@entityid', 'uniqueidentifier') EntityId, @EntityType EntityType, @ListId ListId from @docxml.nodes('/VALUES/VALUE') T(c)) tmb
    left outer join ListMemberBase lmb on 
      tmb.EntityId = lmb.EntityId and 
      tmb.EntityType = lmb.EntityType and 
      tmb.ListId = lmb.ListId
    where lmb.EntityId is null
end;
