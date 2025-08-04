

CREATE function [dbo].[fn_UserSharedAttributeAccess] 
( 
	@systemUserId uniqueidentifier, 
	@attributeId uniqueidentifier,
	@objectTypeCode int
) 

returns @t table 
( 
	ObjectId uniqueidentifier,
	ReadAccess int
)
as 

begin 

	INSERT INTO @t (ObjectId, ReadAccess)

	-- need distict to return only one sharing row for Read 
	SELECT distinct poaa.ObjectId, poaa.ReadAccess
	FROM PrincipalObjectAttributeAccess poaa (nolock) 
	WHERE 	poaa.AttributeId = @attributeId 
		and poaa.PrincipalId in 
			(SELECT PrincipalId FROM SystemUserPrincipals (nolock) where SystemUserId = @systemUserId) 
		and poaa.ReadAccess = 1 -- do not collect not shared readAccess rows
		and poaa.ObjectTypeCode = @objectTypeCode 

	return 

end 