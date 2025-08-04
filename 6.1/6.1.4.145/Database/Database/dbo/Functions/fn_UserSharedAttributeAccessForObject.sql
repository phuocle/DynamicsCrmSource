

CREATE function [dbo].[fn_UserSharedAttributeAccessForObject] 
( 
	@systemUserId uniqueidentifier, 
	@attributeId uniqueidentifier,
	@objectId uniqueidentifier,
	@objectTypeCode int
) 

returns bit
as 
begin 

	declare @returnValue bit = 0
	-- need distict to return only one sharing row for Read 
	if exists
		(SELECT distinct poaa.ReadAccess
		FROM PrincipalObjectAttributeAccess poaa (nolock) 
		WHERE 	poaa.AttributeId = @attributeId 
			and poaa.PrincipalId in 
				(SELECT PrincipalId FROM SystemUserPrincipals (nolock) where SystemUserId = @systemUserId) 
			and poaa.ReadAccess = 1 -- do not collect not shared readAccess rows
			and poaa.ObjectId = @objectId
			and poaa.ObjectTypeCode = @objectTypeCode)
	set @returnValue = 1
	
	return @returnValue
end 