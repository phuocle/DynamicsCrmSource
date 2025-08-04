

create procedure [dbo].[p_BusinessUnitMapSetParent](@BusinessId uniqueidentifier)
as
begin
	-- Assumption : BusinessUnitBase with @BusinessId has a new value in ParentBusinessUnitId
	set nocount on

	-- collect all sub-business ids of reparented node to be reused many times
    declare @t table(businessUnitId uniqueidentifier)
    insert into @t(businessUnitId) select businessunitid from dbo.GetSubsidiaryBusinesses(@BusinessId)

	-- Code can be optimized later if needed
	-- the deletion only for OLD ancestors to nearest common ancestor with new parent
	-- the insert   only for NEW ancestors to nearest common ancestor with new parent
	
    -- for all old ancestors delete rows for all sub-business except moved subtree itself
    delete BusinessUnitMap 
	OUTPUT DELETED.[BusinessUnitMapId], 6
		into SubscriptionTrackingDeletedObject (ObjectId, ObjectTypeCode)
	where SubBusinessId in (select businessUnitId from @t)
	 and BusinessId not in (select businessUnitId from @t)

	-- for all new ancestors insert all sub-business in BusinessUnitMap
	declare @parentBuId uniqueidentifier
	select @parentBuId = bu.ParentBusinessUnitId from BusinessUnitBase bu where bu.BusinessUnitId = @BusinessId
	while (@parentBuId is not null)
	begin
		insert BusinessUnitMap (BusinessId, SubBusinessId) select @parentBuId, businessUnitId from @t
		select @parentBuId = bu.ParentBusinessUnitId from BusinessUnitBase bu where bu.BusinessUnitId = @parentBuId
	end
end