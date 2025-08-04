


--
-- base 'as if published' view for datalakefolderAsIfPublished
--
create view dbo.[datalakefolderAsIfPublished]
 with view_metadata as
select
* from [datalakefolder]