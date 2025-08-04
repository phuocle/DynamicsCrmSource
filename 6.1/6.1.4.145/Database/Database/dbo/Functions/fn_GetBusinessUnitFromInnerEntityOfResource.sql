

create function fn_GetBusinessUnitFromInnerEntityOfResource( 
	@objecttypecode int, 
	@objectid uniqueidentifier ) 
returns uniqueidentifier 
begin 
	declare @businessunitid uniqueidentifier 
	set @businessunitid = null 
	-- user 
	if ( @objecttypecode = 8 ) 
	begin 
		select @businessunitid = BusinessUnitId 
		from SystemUserBase 
		where SystemUserId = @objectid 
	end 
	if ( @objecttypecode = 4000 ) 
	begin 
		select @businessunitid = BusinessUnitId 
		from EquipmentBase 
		where EquipmentId = @objectid 
	end 
	return @businessunitid 
end 

