


--
-- base 'as if published' view for ServiceEndpointAsIfPublished
--
create view dbo.[ServiceEndpointAsIfPublished]
 with view_metadata as
select
* from [ServiceEndpoint]