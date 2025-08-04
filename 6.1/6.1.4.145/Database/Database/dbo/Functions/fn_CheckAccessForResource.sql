

create function fn_CheckAccessForResource( 
	@userid uniqueidentifier, 
	@userbusinessunitid uniqueidentifier, 
	@objecttypecode int, 
	@objectid uniqueidentifier ) 
	 
returns int 
as 
begin 
	if @objecttypecode not in ( 8, 9, 4000, 4002 ) 
	begin
		return 1
	end
	if ( @userbusinessunitid is null ) 
	begin 
		select @userbusinessunitid = BusinessUnitId from SystemUserBase where SystemUserId = @userid 
	end 
	if @objecttypecode = 4002 
	begin 
		declare @resourceotc int 
 
		select  
			@resourceotc = 	ObjectTypeCode 
		from Resource 
		where ResourceId = @objectid 
 
		return dbo.fn_CheckAccessForResource(  
			@userid, 
			@userbusinessunitid, 
			@resourceotc, 
			@objectid ) 
	end 
	if @objecttypecode in ( 8, 9, 4000 ) 
	begin 
		declare @privguid uniqueidentifier 
		declare @PrivilegeDepthMask int 
		declare @sql nvarchar(4000) 
 
		select @privguid =  
			case @objecttypecode  
				when 8 then '76FAAD15-BC44-4F4D-84DC-DD1E1DDA74D9'  
				when 9 then '663d1920-56e1-4166-89f0-47f3330923a8'
				when 4000 then 'B41900AB-96E1-45D5-86F5-7B10DFC9E366' 
			end 
 
		select @PrivilegeDepthMask = dbo.fn_GetMaxUserPrivilege( @userid, @privguid ) 
 
		-- user has no privilege whatsoever		 
		if ( (@PrivilegeDepthMask = 0) or @PrivilegeDepthMask is null) return 0 
 
		-- user has only user privilege, should NEVER be user privilege 
		-- for user, team, equipment 
		if ( (@PrivilegeDepthMask & 0x1) != 0 ) 
		begin 
			return 0 
		end 
		
		-- user has global privilege 
 		if ( (@PrivilegeDepthMask & 0x8) != 0 ) 
		begin 
			return 1 
		end	 
 
		declare @objectbusinessunitid uniqueidentifier 
 
		select @objectbusinessunitid = dbo.fn_GetBusinessUnitFromInnerEntityOfResource( 
				@objecttypecode, 
				@objectid ) 
 
		-- user has business unit privilege 
		if ( (@PrivilegeDepthMask & 0x2) != 0 ) 
		begin 
			if ( @objectbusinessunitid = @userbusinessunitid ) 
				return 1 
			else 
				return 0 
		end 
		-- user has deep business unit privilege 
		if ( (@PrivilegeDepthMask & 0x4) != 0 ) 
		begin 
 
			if ( @objectbusinessunitid  
				in  
				( 
					select  
						SubBusinessId  
					from  
						BusinessUnitMap  
					where BusinessId=@userbusinessunitid )) 
				return 1 
			else 
				return 0 
		end 
	end 
	 
	return 1 
end 

