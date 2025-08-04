

/*
This proc is to be used to get all business ids within the business hierarchy for the given BusinessId.
*/
CREATE procedure [dbo].[p_GetBusinessHierarchy](
 @BusinessId uniqueidentifier) 
as
begin
set nocount on

-- make sure that the @BusinessId is a valid business id.
IF not exists(select BusinessUnitId from BusinessUnitBase where BusinessUnitId = @BusinessId)
    BEGIN 
    select '4' as ErrorCode,  'The BusinessId passed in is not valid.' as ErrorMessage
    return 
    END

declare @ParentId uniqueidentifier
select @ParentId = @BusinessId

declare @CurBizId uniqueidentifier
while (@ParentId is not null) 
begin
	select @CurBizId = @ParentId

	select @ParentId = ParentBusinessUnitId
	from BusinessUnitBase
	where BusinessUnitId = @CurBizId
end

create table #BizIds (BusinessUnitId uniqueidentifier, nLevel int)
insert into #BizIds (BusinessUnitId, nLevel) values (@CurBizId, 0)

declare @nLevel int
select @nLevel = 0

while (@@ROWCOUNT > 0) 
begin
	select @nLevel = @nLevel + 1

	insert into #BizIds (BusinessUnitId, nLevel)
	select biz.BusinessUnitId, @nLevel 
	from BusinessUnitBase biz
		join #BizIds res on biz.ParentBusinessUnitId = res.BusinessUnitId
	where res.nLevel = @nLevel - 1
end

select distinct BusinessUnitId as 'businessunitid' from #BizIds
end
