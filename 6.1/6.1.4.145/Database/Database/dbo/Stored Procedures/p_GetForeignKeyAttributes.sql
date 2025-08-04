

create procedure [dbo].[p_GetForeignKeyAttributes](@keyid uniqueidentifier, @tableid uniqueidentifier) as
set nocount on

select a.*,
	'character-count' = case 
		when cast(at.Description as nvarchar) in ('nvarchar', 'nchar') then cast(a.Length / 2 as nvarchar) 
		when cast(at.Description as nvarchar) in ('varchar', 'char') then cast(a.Length as nvarchar) 
		else '' 
		end,
	'type' = at.Description,
        'isquoted' = at.Quoted
from KeyAttributes k join AttributeView a on (k.ReferencedAttribute = a.AttributeId)
                     join AttributeTypes at on (a.AttributeTypeId = at.AttributeTypeId)
where k.KeyId = @keyid  
order by ColumnNumber
