

-- create the stored procedure
create procedure dbo.p_PopulateDefaultSyncFilters(@userid uniqueidentifier, @bizid uniqueidentifier) as
begin
set nocount on

declare @name nvarchar(200)
declare @description nvarchar(max)
declare @fetchxml nvarchar(max)
declare @rtc int
declare @qt int
declare @savedqueryid uniqueidentifier

-- SavedQuery type 8192 == OFFLINE_TEMPLATE
-- SavedQuery type 131072 == OUTLOOK_TEMPLATE
-- UserQuery type 16 == OFFLINE_FILTER
-- UserQuery type 256 == OUTLOOK_FILTER
-- When populating userquery from saved query, change the query from template type to filter type by diving by 512
declare c cursor local FORWARD_ONLY READ_ONLY for
	select SavedQueryId, Name, Description, FetchXml, ReturnedTypeCode, QueryType from SavedQuery where (QueryType = 8192 or QueryType = 131072) and IsDefault = 1

open c
fetch next from c into @savedqueryid, @name, @description, @fetchxml, @rtc, @qt

while (@@fetch_status = 0)
begin

	insert into UserQueryBase (UserQueryId, Name, Description, OwnerId, OwningBusinessUnit, FetchXml, CreatedBy, CreatedOn, ModifiedBy, ModifiedOn, ReturnedTypeCode, QueryType, ParentQueryId)
	values(newid(), @name, @description, @userid, @bizid, @fetchxml, @userid, getutcdate(), @userid, getutcdate(), @rtc, (@qt/512), @savedqueryid)
	
	fetch next from c into @savedqueryid, @name, @description, @fetchxml, @rtc, @qt

end

close c
deallocate c

end