

/*
	This proc is to be used to get all child business ids for the given BusinessId.
*/
CREATE procedure [dbo].[p_GetAllChildBusinessIds](
 @BusinessId uniqueidentifier) 
as
begin
set nocount on

create table #ChildBizIds (BusinessUnitId uniqueidentifier, nLevel int)

Declare @nLevel int
select @nLevel = 1
insert into #ChildBizIds 
select BusinessUnitId, @nLevel from BusinessUnitBase where ParentBusinessUnitId = @BusinessId

while (@@ROWCOUNT > 0) 
begin
	select @nLevel = @nLevel + 1

	insert into #ChildBizIds (BusinessUnitId, nLevel)
	select biz.BusinessUnitId, @nLevel 
	from BusinessUnitBase biz
		join #ChildBizIds res on biz.ParentBusinessUnitId = res.BusinessUnitId
	where res.nLevel = @nLevel - 1
end

select distinct BusinessUnitId as 'businessunitid' from #ChildBizIds
end