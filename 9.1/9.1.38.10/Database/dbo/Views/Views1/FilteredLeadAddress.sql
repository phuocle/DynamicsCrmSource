

--
-- report view for leadaddress
--
create view dbo.[FilteredLeadAddress] 
(
    [addressnumber],
    [addresstypecode],
    [addresstypecodename],
    [city],
    [composite],
    [country],
    [county],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [exchangerate],
    [fax],
    [importsequencenumber],
    [latitude],
    [leadaddressid],
    [line1],
    [line2],
    [line3],
    [longitude],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [parentid],
    [parentidname],
    [parentidyominame],
    [postalcode],
    [postofficebox],
    [shippingmethodcode],
    [shippingmethodcodename],
    [stateorprovince],
    [telephone1],
    [telephone2],
    [telephone3],
    [timezoneruleversionnumber],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [upszone],
    [utcconversiontimezonecode],
    [utcoffset],
    [versionnumber]
) with view_metadata as
select
    [LeadAddress].[AddressNumber],
    [LeadAddress].[AddressTypeCode],
    AddressTypeCodePLTable.Value,
    [LeadAddress].[City],
    [LeadAddress].[Composite],
    [LeadAddress].[Country],
    [LeadAddress].[County],
    [LeadAddress].[CreatedBy],
    [LeadAddress].[CreatedByName],
    [LeadAddress].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([LeadAddress].[CreatedOn],
			us.TimeZoneCode),
        [LeadAddress].[CreatedOn],
    [LeadAddress].[CreatedOnBehalfBy],
    [LeadAddress].[CreatedOnBehalfByName],
    [LeadAddress].[CreatedOnBehalfByYomiName],
    [LeadAddress].[ExchangeRate],
    [LeadAddress].[Fax],
    [LeadAddress].[ImportSequenceNumber],
    [LeadAddress].[Latitude],
    [LeadAddress].[LeadAddressId],
    [LeadAddress].[Line1],
    [LeadAddress].[Line2],
    [LeadAddress].[Line3],
    [LeadAddress].[Longitude],
    [LeadAddress].[ModifiedBy],
    [LeadAddress].[ModifiedByName],
    [LeadAddress].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([LeadAddress].[ModifiedOn],
			us.TimeZoneCode),
        [LeadAddress].[ModifiedOn],
    [LeadAddress].[ModifiedOnBehalfBy],
    [LeadAddress].[ModifiedOnBehalfByName],
    [LeadAddress].[ModifiedOnBehalfByYomiName],
    [LeadAddress].[Name],
    dbo.fn_UTCToTzCodeSpecificLocalTime([LeadAddress].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [LeadAddress].[OverriddenCreatedOn],
    [LeadAddress].[ParentId],
    [LeadAddress].[ParentIdName],
    [LeadAddress].[ParentIdYomiName],
    [LeadAddress].[PostalCode],
    [LeadAddress].[PostOfficeBox],
    [LeadAddress].[ShippingMethodCode],
    ShippingMethodCodePLTable.Value,
    [LeadAddress].[StateOrProvince],
    [LeadAddress].[Telephone1],
    [LeadAddress].[Telephone2],
    [LeadAddress].[Telephone3],
    [LeadAddress].[TimeZoneRuleVersionNumber],
    [LeadAddress].[TransactionCurrencyId],
    [LeadAddress].[TransactionCurrencyIdName],
    [LeadAddress].[UPSZone],
    [LeadAddress].[UTCConversionTimeZoneCode],
    [LeadAddress].[UTCOffset],
    [LeadAddress].[VersionNumber]
from LeadAddress
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [AddressTypeCodePLTable] on 
		([AddressTypeCodePLTable].AttributeName = 'addresstypecode'
		and [AddressTypeCodePLTable].ObjectTypeCode = 1017
		and [AddressTypeCodePLTable].AttributeValue = [LeadAddress].[AddressTypeCode]
		and [AddressTypeCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ShippingMethodCodePLTable] on 
		([ShippingMethodCodePLTable].AttributeName = 'shippingmethodcode'
		and [ShippingMethodCodePLTable].ObjectTypeCode = 1017
		and [ShippingMethodCodePLTable].AttributeValue = [LeadAddress].[ShippingMethodCode]
		and [ShippingMethodCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(4) pdm1
where
(
	-- privilege check
	((pdm1.PrivilegeDepthMask is not null) and
	(
	-- Owner check returns only principals with Basic Read privilege for entity respecting hierarchical security modelling at both Org level and entity level
	-- 1. Check If HSM is enabled for Org and all the security Objects. If true then join with SystemUserManagerMap
		
		exists  (
				select 1 from OrganizationBase where IsHierarchicalSecurityModelEnabled = 1
				) 
		and 
		not exists (
				select 1 from HierarchySecurityConfiguration where ObjectTypeCode in (4)
				   )
		and 
		[LeadAddress].OwnerId in 

		(select pem.PrincipalId from PrincipalEntityMap pem  
			join SystemUserPrincipals sup  
			on pem.PrincipalId = sup.PrincipalId 
			
			join SystemUserManagerMap smp 
			on sup.SystemUserId = smp.SystemUserId
			where smp.ParentSystemUserId = u.SystemUserId
			 -- Join with SystemUserManagerMap to get child user records for HSM
				and pem.ObjectTypeCode in (4)) 
	)
		or 
		(
		-- Check (If HSM is enabled for Org and disabled for all the security objects) OR (HSM is diabled for the Org).If true, then check only SystemUserPrincipals.
		 
	   ((exists (
					select 1 from OrganizationBase where IsHierarchicalSecurityModelEnabled = 1
				)
		 and	(	-- check if HSM is disabled for all security objects, by checking if count of security objects is equal to count of
					-- HierarchySecurityConfiguration records containing objectTypeCodes in _securityObjectTypeCodes
					(select count(*) from HierarchySecurityConfiguration where ObjectTypeCode in (4)) = 1
				))
		 or 
		 exists (
					select 1 from OrganizationBase where IsHierarchicalSecurityModelEnabled = 0	
				))
		 and 
		 [LeadAddress].OwnerId in 
		
		  (select pem.PrincipalId from PrincipalEntityMap pem  
			  join SystemUserPrincipals sup  
			  on pem.PrincipalId = sup.PrincipalId 
				where sup.SystemUserId = u.SystemUserId
					and pem.ObjectTypeCode in (4))
		)
			or
			(
			  -- Check If HSM is enabled for Org and is enabled for some if not all security objects, do separate check for HSM for each security object.
			
		   exists (
					select 1 from OrganizationBase where IsHierarchicalSecurityModelEnabled = 1
				  )
			and  
			[LeadAddress].OwnerId in 
			
			(select pem.PrincipalId from PrincipalEntityMap pem  
				join SystemUserPrincipals sup  
				on pem.PrincipalId = sup.PrincipalId 
				
			join SystemUserManagerMap smp 
			on sup.SystemUserId = smp.SystemUserId
			where smp.ParentSystemUserId = u.SystemUserId
			 -- Join with SystemUserManagerMap to get child user records for HSM
					--Check if HSM is excluded for each security ObjectTypeCode separately
					and pem.ObjectTypeCode in (4) and not exists (select 1 from HierarchySecurityConfiguration where ObjectTypeCode =4)) 
			) 
	)
		
	-- role based access
	or 
	
exists
(
	select 1 where
	(
		-- deep/local security
		(((pdm1.PrivilegeDepthMask & 0x4) != 0) or ((pdm1.PrivilegeDepthMask & 0x2) != 0))  and
		[LeadAddress].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap where SystemUserId = u.SystemUserId and ObjectTypeCode = 4)
	) 
	or
	(
		-- global security
		((pdm1.PrivilegeDepthMask & 0x8) != 0 ) and 
		[LeadAddress].[OwningBusinessUnit] is not null 
	) 
)
	
	-- object shared to the user 
	or 
	( 	-- Check if HSM is enabled for the org and for all the security objects, If true then join with SystemUserManagerMap
	exists  (
			select 1 from OrganizationBase where IsHierarchicalSecurityModelEnabled = 1
			) 
	and 
	not exists (
			select 1 from HierarchySecurityConfiguration where ObjectTypeCode in (4)
			   )
	and 
	[LeadAddress].[ParentId] in 
		
		(select POA.ObjectId from PrincipalObjectAccess POA 
			join SystemUserPrincipals sup 
			on POA.PrincipalId = sup.PrincipalId
			
			join SystemUserManagerMap smp 
			on sup.SystemUserId = smp.SystemUserId
			where smp.ParentSystemUserId = u.SystemUserId
			 -- Join with SystemUserManagerMap to get child user records for HSM
					 and POA.ObjectTypeCode = ( case
    when pdm1.PrivilegeDepthMask is not null then 4
 end) and
					((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1)
	)
	or
	 ( -- Check (If HSM is enabled for Org and HSM is disabled for all the security objects) OR (HSM is diabled for the Org).If true, then check only SystemUserPrincipals.
		
		((exists (
					select 1 from OrganizationBase where IsHierarchicalSecurityModelEnabled = 1
				 )
		 and	(	-- check if HSM is disabled for all security objects, by checking if count of security objects is equal to count of
					-- HierarchySecurityConfiguration records containing objectTypeCodes in _securityObjectTypeCodes
					(select count(*) from HierarchySecurityConfiguration where ObjectTypeCode in (4)) = 1
				))
		 or 
		 exists (
					select 1 from OrganizationBase where IsHierarchicalSecurityModelEnabled = 0	
				))
			and 
			[LeadAddress].[ParentId] in 
				
			(select POA.ObjectId from PrincipalObjectAccess POA 
				join SystemUserPrincipals sup 
				on POA.PrincipalId = sup.PrincipalId
				where sup.SystemUserId = u.SystemUserId
						 and POA.ObjectTypeCode = ( case
    when pdm1.PrivilegeDepthMask is not null then 4
 end) and
						((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1)
	 )
		or
		 ( 	-- Check If HSM is enabled for Org and is enabled for some if not all security objects, do separate check for HSM for each security object.
			
		   exists (
					select 1 from OrganizationBase where IsHierarchicalSecurityModelEnabled = 1
				  )
			and 
			[LeadAddress].[ParentId] in 

			(select POA.ObjectId from PrincipalObjectAccess POA  
				join SystemUserPrincipals sup  
				on POA.PrincipalId = sup.PrincipalId
				
			join SystemUserManagerMap smp 
			on sup.SystemUserId = smp.SystemUserId
			where smp.ParentSystemUserId = u.SystemUserId
			 -- Join with SystemUserManagerMap to get child user records for HSM
					--Check if HSM is excluded for each security ObjectTypeCode separately
					and POA.ObjectTypeCode = ( case
    when pdm1.PrivilegeDepthMask is not null and not exists (select 1 from HierarchySecurityConfiguration where ObjectTypeCode = 4) then 4
 end) and
					((POA.AccessRightsMask | POA.InheritedAccessRightsMask) & 1)=1)
		 ) 
	)

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredLeadAddress] TO [D365\ReportingGroup {17e68c54-332d-46c1-9c02-8ffa9543cd64}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredLeadAddress] TO [CRMReaderRole]
    AS [dbo];

