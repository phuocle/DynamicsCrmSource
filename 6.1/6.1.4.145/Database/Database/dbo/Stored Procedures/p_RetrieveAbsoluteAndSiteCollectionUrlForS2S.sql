



/*
This proc is used to construct and retrieve absolute URL, siteRelativeUrl and SharePoint Site Collection URL 
of given SharePoint record in S2S feature
A valid SharePoint record can be from one of the following entities:
SharePointSite
SharePointDocumentLocation
*/
CREATE procedure [dbo].[p_RetrieveAbsoluteAndSiteCollectionUrlForS2S](
 @objectId uniqueidentifier , @objectTypeCode int) 
as
begin

--- Constants defining objecttype codes of entities.
declare @sharePointSite int
declare @sharePointDocumentLocation int
select @sharePointSite = 9502
select @sharePointDocumentLocation = 9508

-- Variables
declare @absoluteUrl nvarchar(max)
declare @relativeUrl nvarchar(max) -- relativeUrl of current record.
declare @absoluteLocationUrl nvarchar(max)
declare @parentId uniqueidentifier -- Guid of parent record.
declare @siteCollectionUrl nvarchar(max)
declare @isGridPresent bit
declare @siteCollectionId uniqueidentifier
declare @absoluteSiteUrl nvarchar(max)
declare @siteRelativeUrl nvarchar(max)

set @isGridPresent = 0
-- Initialize parent with passed in recordid
set @parentId = @objectId
set @absoluteLocationUrl = ''
set @absoluteUrl = ''
set @siteRelativeUrl = ''

while(@objectTypeCode = @sharePointDocumentLocation)
begin
	select @parentId = ParentSiteOrLocation, @objectTypeCode = ParentSiteOrLocationTypeCode , @relativeUrl = RelativeUrl , @absoluteLocationUrl = AbsoluteURL,
		@siteCollectionId = SiteCollectionId
		from SharePointDocumentLocationBase	where SharePointDocumentLocationId = @parentId

	-- Case when absolute URL of location records is stored and CRM also has site collection.
	if(@absoluteLocationUrl is not null and @siteCollectionId is not null)
	begin
		select @siteCollectionUrl = AbsoluteURL, @isGridPresent = IsGridPresent from SharePointSiteBase	where SharePointSiteId = @siteCollectionId
		set @absoluteUrl = @absoluteLocationUrl + '/' + @absoluteUrl
		set @siteRelativeUrl = @absoluteUrl
		if(@isGridPresent = 1)
			begin
				select @absoluteUrl as 'AbsoluteURL', @siteCollectionUrl as 'SiteCollectionUrl' , @siteRelativeUrl as 'SiteRelativeUrl'
				return
			end
		else
			begin
				select @absoluteUrl as 'AbsoluteURL', '' as 'SiteCollectionUrl' ,  @siteRelativeUrl as 'SiteRelativeUrl'
				return
			end
	end
	else if(@parentId is null and @siteCollectionId is null) -- When CRM doesn't have site collection.
	begin
		if(@absoluteLocationUrl is not null)
		begin
			set @absoluteUrl = @absoluteLocationUrl + '/' + @absoluteUrl
			set @siteRelativeUrl = @absoluteUrl
			select @absoluteUrl as 'AbsoluteURL', '' as 'SiteCollectionUrl',@siteRelativeUrl as 'SiteRelativeUrl'
		return
		end
		else -- If parent is null an absolute URL is also not specified then return empty string.(Bug 106777)
		begin
			select '' as 'AbsoluteURL', '' as 'SiteCollectionUrl' , '' as 'SiteRelativeUrl'
		return
		end		
	end
	else -- When relative URL is present.
	begin
		if(@relativeUrl != '/')
		begin
			set @absoluteUrl = @relativeUrl + '/' + @absoluteUrl
			set @siteRelativeUrl = @absoluteUrl
		end
	end		
end


while(@objectTypeCode = @sharePointSite)
begin
	select @parentId = ParentSite, @objectTypeCode = ParentSiteObjectTypeCode , @relativeUrl = RelativeUrl , @absoluteSiteUrl = AbsoluteURL, @isGridPresent = IsGridPresent, @siteCollectionId = SiteCollectionId
		from SharePointSiteBase	where SharePointSiteId = @parentId

	if(@parentId is null)
	begin
		if(@absoluteSiteUrl is not null)
		begin
			set @absoluteUrl = @absoluteSiteUrl + '/' + @absoluteUrl
			if(@isGridPresent = 1)
			begin
				select @absoluteUrl as 'AbsoluteURL', @absoluteSiteUrl as 'SiteCollectionUrl',@siteRelativeUrl as 'SiteRelativeUrl'
				return
			end
			else if(@siteCollectionId is not null)
			begin
				select @siteCollectionUrl = AbsoluteURL, @isGridPresent = IsGridPresent from SharePointSiteBase	where SharePointSiteId = @siteCollectionId
					if(@isGridPresent = 1)
					begin
						select @absoluteUrl as 'AbsoluteUrl', @siteCollectionUrl as 'SiteCollectionUrl',@siteRelativeUrl as 'SiteRelativeUrl'
						return
					end
					else
					begin
						select @absoluteUrl as 'AbsoluteUrl', '' as 'SiteCollectionUrl',@siteRelativeUrl as 'SiteRelativeUrl'
						return
					end
			end
			else
			begin
				select @absoluteUrl as 'AbsoluteUrl', '' as 'SiteCollectionUrl',@siteRelativeUrl as 'SiteRelativeUrl'
				return
			end
		end
		else -- If parent is null an absolute URL is also not specified then return empty string.(Bug 106777)
		begin
			select '' as 'AbsoluteUrl', '' as 'SiteCollectionUrl',@siteRelativeUrl as 'SiteRelativeUrl'
			return
		end
	end
	else
	begin
		set @absoluteUrl = @relativeUrl +  '/' + @absoluteUrl		
	end
end

end