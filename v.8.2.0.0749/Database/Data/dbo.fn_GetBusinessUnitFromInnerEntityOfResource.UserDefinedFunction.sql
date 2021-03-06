USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_GetBusinessUnitFromInnerEntityOfResource]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create function [dbo].[fn_GetBusinessUnitFromInnerEntityOfResource]( 
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


GO
