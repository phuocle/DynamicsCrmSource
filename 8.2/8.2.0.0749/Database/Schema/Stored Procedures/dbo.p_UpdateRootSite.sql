SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


/*
This proc is used to update root site collection of given SharePoint record and its children
A valid SharePoint record can be from one of the following entities:
SharePointSite
SharePointDocumentLocation
*/
CREATE procedure [dbo].[p_UpdateRootSite](
 @objectId uniqueidentifier ,@rootSiteId uniqueidentifier) 
as
begin

--- Constants defining objecttype codes of entities.
declare @sharePointSite int
select @sharePointSite = 9502
declare @objectTypeCode int
declare @rowNum int
declare @count int

set @rowNum = 1
-- Variables
declare @childId uniqueidentifier
declare @Results table (childId uniqueidentifier not null, objectTypeCode int, processed int identity)
declare @Temp table (SharePointDocumentLocationId uniqueidentifier not null)

-- Set SiteCollectionID for object Id
update SharePointSite set SiteCollectionId = @rootSiteId where SharePointSiteId = @objectId and SharePointSiteId <> @rootSiteId
update SharePointDocumentLocation set SiteCollectionId = @rootSiteId where SharePointDocumentLocationId = @objectId 

insert into @Results(childId , objectTypeCode) select SharePointSiteId, @sharePointSite from SharePointSite where ParentSite = @objectId and IsNull(IsGridPresent, 0) <> 1
/* Update SharePointDocumentLocation children via recursive query */
insert into @Temp select SharePointDocumentLocationId from [dbo].[fn_GetSharePointChildLocations] (@objectId)
update SharePointDocumentLocationBase set SiteCollectionId =@rootSiteId where SharePointDocumentLocationId in (select SharePointDocumentLocationId from @Temp)
delete from @Temp

select @count = COUNT(*) from @Results;

while(@rowNum <= @count)
begin	
	select @childId = childId , @objectTypeCode = objectTypeCode from @Results where processed = @rowNum
	if(@objectTypeCode = @sharePointSite)
	begin
--		Set SiteCollectionID for child
		exec p_UpdateRootSite @childId, @rootSiteId
	end

	set @rowNum = @rowNum + 1
end
end
GO
