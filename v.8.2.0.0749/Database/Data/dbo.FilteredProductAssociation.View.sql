USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[FilteredProductAssociation]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


--
-- report view for productassociation
--
create view [dbo].[FilteredProductAssociation] (
    [associatedproduct],
    [associatedproductidname],
    [createdby],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [exchangerate],
    [importsequencenumber],
    [modifiedby],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [organizationid],
    [organizationidname],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [productassociationid],
    [productid],
    [productidname],
    [productisrequired],
    [productisrequiredname],
    [propertycustomizationstatus],
    [propertycustomizationstatusname],
    [quantity],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [transactioncurrencyid],
    [transactioncurrencyidname],
    [uomid],
    [uomidname],
    [versionnumber]
) with view_metadata as
select
    [ProductAssociation].[AssociatedProduct],
    [ProductAssociation].[AssociatedProductIdName],
    [ProductAssociation].[CreatedBy],
    [ProductAssociation].[CreatedByName],
    [ProductAssociation].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ProductAssociation].[CreatedOn],
			us.TimeZoneCode),
        [ProductAssociation].[CreatedOn],
    [ProductAssociation].[CreatedOnBehalfBy],
    [ProductAssociation].[CreatedOnBehalfByName],
    [ProductAssociation].[CreatedOnBehalfByYomiName],
    [ProductAssociation].[ExchangeRate],
    [ProductAssociation].[ImportSequenceNumber],
    [ProductAssociation].[ModifiedBy],
    [ProductAssociation].[ModifiedByName],
    [ProductAssociation].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ProductAssociation].[ModifiedOn],
			us.TimeZoneCode),
        [ProductAssociation].[ModifiedOn],
    [ProductAssociation].[ModifiedOnBehalfBy],
    [ProductAssociation].[ModifiedOnBehalfByName],
    [ProductAssociation].[ModifiedOnBehalfByYomiName],
    [ProductAssociation].[OrganizationId],
    [ProductAssociation].[OrganizationIdName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([ProductAssociation].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [ProductAssociation].[OverriddenCreatedOn],
    [ProductAssociation].[ProductAssociationId],
    [ProductAssociation].[ProductId],
    [ProductAssociation].[ProductIdName],
    [ProductAssociation].[ProductIsRequired],
    ProductIsRequiredPLTable.Value,
    [ProductAssociation].[PropertyCustomizationStatus],
    PropertyCustomizationStatusPLTable.Value,
    [ProductAssociation].[Quantity],
    [ProductAssociation].[statecode],
    statecodePLTable.Value,
    [ProductAssociation].[statuscode],
    statuscodePLTable.Value,
    [ProductAssociation].[TransactionCurrencyId],
    [ProductAssociation].[TransactionCurrencyIdName],
    [ProductAssociation].[UoMId],
    [ProductAssociation].[UoMIdName],
    [ProductAssociation].[VersionNumber]
from ProductAssociation
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left outer join StringMap [ProductIsRequiredPLTable] on 
		([ProductIsRequiredPLTable].AttributeName = 'productisrequired'
		and [ProductIsRequiredPLTable].ObjectTypeCode = 1025
		and [ProductIsRequiredPLTable].AttributeValue = [ProductAssociation].[ProductIsRequired]
		and [ProductIsRequiredPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PropertyCustomizationStatusPLTable] on 
		([PropertyCustomizationStatusPLTable].AttributeName = 'propertycustomizationstatus'
		and [PropertyCustomizationStatusPLTable].ObjectTypeCode = 1025
		and [PropertyCustomizationStatusPLTable].AttributeValue = [ProductAssociation].[PropertyCustomizationStatus]
		and [PropertyCustomizationStatusPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statecodePLTable] on 
		([statecodePLTable].AttributeName = 'statecode'
		and [statecodePLTable].ObjectTypeCode = 1025
		and [statecodePLTable].AttributeValue = [ProductAssociation].[statecode]
		and [statecodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [statuscodePLTable] on 
		([statuscodePLTable].AttributeName = 'statuscode'
		and [statuscodePLTable].ObjectTypeCode = 1025
		and [statuscodePLTable].AttributeValue = [ProductAssociation].[statuscode]
		and [statuscodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(1024) pdm
where
(
    -- privilege check
    pdm.PrivilegeDepthMask is not null and
    [ProductAssociation].OrganizationId = u.OrganizationId
)

GO
