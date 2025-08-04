



/*
This proc is used to construct and retrieve absolute URL for locations associated with records in S2S feature
*/
CREATE procedure [dbo].[p_RetrieveLocationsForRecordsWithAbsoluteUrlS2S]
(
	@relatedRecordsXml XML, @userId uniqueidentifier
)
as
begin

	declare @sharePointDocumentLocationTypeCode int = 9508;
	declare @sharePointSiteTypeCode int = 9502;

	-- Setting it as hard-coded value since its a throttling limit
	declare @maxLocationCount int = 200;

	declare @relatedRecords table
	(
		RecordId uniqueidentifier,
		RecordRank int
	);

	insert into @relatedRecords(RecordId, RecordRank)
		select 
			XColumn.value('@id', 'uniqueidentifier') as RecordId,
			XColumn.value('@rank', 'nvarchar(2000)') as RecordRank
			from
				@relatedRecordsXml.nodes('/Root/Record') as XTable(XColumn);


	-- CTE for computing absoluteUrl part from the SharePointDocumentLocationBase table hierarchy
	with AbsoluteUrlLocationCTE (LocationId, AbsoluteUrl, ParentSiteOrLocation, ParentSiteOrLocationType, OriginalLocationId, RegardingObjectId)
	as
	(
		select top (@maxLocationCount)
			base.SharePointDocumentLocationId,
			cast
			(
				base.RelativeUrl as nvarchar(2000)
			),
			base.ParentSiteOrLocation, base.ParentSiteOrLocationTypeCode, base.SharePointDocumentLocationId, base.RegardingObjectId
			from
				SharePointDocumentLocationBase as base, @relatedRecords as relatedRecords
			where
				base.RegardingObjectId = relatedRecords.RecordId
				and
				(
					-- SharePoint Document Locations
					base.ServiceType = 0
					or
					(
						-- OneDrive document locations
						base.ServiceType = 1
						and
						base.UserId = @userId
					)
				)
				and
				-- Check to pick up only default locations (excluding OneNote)
				base.LocationType = 0
				and
				-- Active location check
				base.StateCode = 0 and base.StatusCode = 1
			order by
				relatedRecords.RecordRank ASC
		
		union all

		select base.SharePointDocumentLocationId, 
			cast
			(
				base.RelativeUrl + '/' + cte.AbsoluteUrl as nvarchar(2000)
			),
			base.ParentSiteOrLocation, base.ParentSiteOrLocationTypeCode, cte.OriginalLocationId, cte.RegardingObjectId
			from
				SharePointDocumentLocationBase as base, AbsoluteUrlLocationCTE as cte
			where
				base.SharePointDocumentLocationId = cte.ParentSiteOrLocation and cte.ParentSiteOrLocationType = @sharePointDocumentLocationTypeCode
	)

	-- CTE for computing absoluteUrl part from the SharePointSiteBase table using the parital url constructed
	-- in AbsoluteUrlLocationCTE
	,AbsoluteUrlSiteCTE(SiteId, AbsoluteUrl, ParentSite, OriginalLocationId, RegardingObjectId, Relativeurl)
	as
	(
		select base.SharePointSiteId,
			cast
			(
				(case when base.RelativeUrl is not null then base.RelativeUrl else base.AbsoluteUrl end) + '/' + location.AbsoluteUrl
				as nvarchar(2000)
			)
			, ParentSite, location.OriginalLocationId, location.RegardingObjectId, location.AbsoluteUrl
			from
			SharePointSiteBase as base, AbsoluteUrlLocationCTE as location
			where
				base.SharePointSiteId = location.ParentSiteOrLocation and location.ParentSiteOrLocationType = @sharePointSiteTypeCode
		
		union all

		select base.SharePointSiteId,
			cast
			(
				(case when base.RelativeUrl is not null then base.RelativeUrl else base.AbsoluteUrl end) + '/' + cte.AbsoluteUrl
				as nvarchar(2000)
			), 
			base.ParentSite, cte.OriginalLocationId, cte.RegardingObjectId, cte.Relativeurl
			from
				SharePointSiteBase as base, AbsoluteUrlSiteCTE as cte
			where
				base.SharePointSiteId = cte.ParentSite
	)

	-- Select original locationId of location record, its regarding object and absolute url
	-- from the topmost SharePointSite entity record which has no parent
	select OriginalLocationId as LocationId, RegardingObjectId, AbsoluteUrl, Relativeurl
		from
			AbsoluteUrlSiteCTE
		where
			ParentSite is null
	;
end