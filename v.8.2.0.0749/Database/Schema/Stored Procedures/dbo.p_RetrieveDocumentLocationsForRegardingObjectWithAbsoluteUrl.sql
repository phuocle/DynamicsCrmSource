SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


/*
This proc is used to retrieve location id and absoulte URL of all SharePoint document locations
associated with a regarding object id with respect to a user.
*/
CREATE procedure [dbo].[p_RetrieveDocumentLocationsForRegardingObjectWithAbsoluteUrl](
 @objectId uniqueidentifier , @objectTypeCode int, @userid uniqueidentifier)
as
begin
	--Declaration of variables
	declare @documentLocationId uniqueidentifier;
	declare @siteCollectionId uniqueidentifier;
	declare @serviceType int;
	declare @sharePointDocumentLocationType int;
	select @sharePointDocumentLocationType = 9508;
	
	--Temporary tables for storing results

	declare @finalResults table(
		AbsoluteURL nvarchar(max),
		SiteCollectionURL nvarchar(max),
		SiteRelativeURL nvarchar(max),
		SiteCollectionId uniqueidentifier,
		ServiceType int,
		DocumentLocationId uniqueidentifier
	);

	declare @uniqueDocumentLocationIds table(
		DocumentLocationId uniqueidentifier,
		SiteCollectionId uniqueidentifier,
		ServiceType int
	);

	--Retrieving all active document locations for regarding object and user which are not child locations of some document location in this set.
	insert into @uniqueDocumentLocationIds (DocumentLocationId, SiteCollectionId, ServiceType)
	select SharePointDocumentLocationId, SiteCollectionId, ServiceType
	from SharePointDocumentLocationBase
	where	(
				RegardingObjectId = @objectId 
				and 
				RegardingObjectTypeCode = @objectTypeCode 
				and 
				StateCode = 0 
				and 
				StatusCode = 1 
				and 
				(
					ServiceType = 0 
					or 
					(
						ServiceType = 1 
						and 
						UserId = @userid
					)
				)
				and 
				ParentSiteOrLocation 
				not in
				(
					select SharePointDocumentLocationId
					from SharePointDocumentLocationBase
					where	(
								RegardingObjectId = @objectId 
								and 
								RegardingObjectTypeCode = @objectTypeCode 
								and 
								StateCode = 0 
								and 
								StatusCode = 1 
								and 
								(
									ServiceType = 0 
									or 
									(
										ServiceType = 1 
										and 
										UserId = @userid
									)
								)
							)
					)
				);

	--Fetching absolute URL by calling the stored procedure p_RetrieveAbsoluteAndSiteCollectionUrlForS2S
	----Iterating over unique document locations
	declare UniqueDocumentLocationsCursor cursor for
	select DocumentLocationId, SiteCollectionId, ServiceType from @uniqueDocumentLocationIds;

	open UniqueDocumentLocationsCursor;
	fetch next from UniqueDocumentLocationsCursor into @documentLocationId, @siteCollectionId, @serviceType;

	while @@fetch_status = 0
	begin
		--Fetch the Absolute URL from the stored procedure and store into @resultsTable
		insert into @finalResults(AbsoluteUrl, SiteCollectionURL, SiteRelativeURL, ServiceType) exec [dbo].[p_RetrieveAbsoluteAndSiteCollectionUrlForS2S] @documentLocationId, @sharePointDocumentLocationType;
		
		--Update fetched record with its document id and site id
		update @finalResults set DocumentLocationId = @documentLocationId, SiteCollectionId = @siteCollectionId, ServiceType = @serviceType where DocumentLocationId is null;

		--Go to next document location id
		fetch next from UniqueDocumentLocationsCursor into @documentLocationId, @siteCollectionId, @serviceType;
	end

	close UniqueDocumentLocationsCursor
	deallocate UniqueDocumentLocationsCursor
	
	--Finally return all the location ids along with their Absolute URL
	select AbsoluteUrl, SiteCollectionURL, SiteRelativeURL, DocumentLocationId, SiteCollectionId, ServiceType from @finalResults
end
GO
