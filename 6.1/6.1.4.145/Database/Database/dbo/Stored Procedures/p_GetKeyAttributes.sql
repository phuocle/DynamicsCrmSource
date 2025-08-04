

create procedure [dbo].[p_GetKeyAttributes](@entityid uniqueidentifier) as
set nocount on

select a.*,
	'character-count' = case 
		when cast(at.Description as nvarchar) in ('nvarchar', 'nchar') then cast(a.Length / 2 as nvarchar) 
		when cast(at.Description as nvarchar) in ('varchar', 'char') then cast(a.Length as nvarchar) 
		else '' 
		end,
    'type' = at.Description,
    'isquoted' = at.Quoted
from AttributeView a join AttributeTypes at on (a.AttributeTypeId = at.AttributeTypeId)
where EntityId = @entityid
  and a.IsPKAttribute = 1
order by ColumnNumber
