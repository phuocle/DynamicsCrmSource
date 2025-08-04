


--
-- base 'as if published' view for datalakefolderpermissionAsIfPublished
--
create view dbo.[datalakefolderpermissionAsIfPublished]
 with view_metadata as
select
* from [datalakefolderpermission]