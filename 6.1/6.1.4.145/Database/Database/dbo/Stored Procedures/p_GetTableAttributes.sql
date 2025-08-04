

create procedure [dbo].[p_GetTableAttributes](@tablename nvarchar(255) = null, @tableid uniqueidentifier = null) as  
set nocount on  

if @tableid is null and @tablename is null
begin
   RAISERROR ( 1074008071, 16, 127 ) WITH NOWAIT, SETERROR
   return
end 

if @tablename is not null
begin
   select @tableid = EntityId
   from EntityView
   where Name = @tablename
end

select a.*,
	'character-count' = case 
		when cast(at.Description as nvarchar) in ('nvarchar', 'nchar') then cast(a.Length / 2 as nvarchar) 
		when cast(at.Description as nvarchar) in ('varchar', 'char') then cast(a.Length as nvarchar) 
		else '' 
		end,
    'type' = at.Description,
    'isquoted' = at.Quoted
from AttributeView a join AttributeTypes at on (a.AttributeTypeId = at.AttributeTypeId)
where EntityId = @tableid
  and a.AttributeOf is NULL
  and a.AggregateOf is NULL
  and (a.ValidForCreateAPI != 0 or a.ValidForReadAPI != 0 or a.ValidForUpdateAPI != 0)
order by ColumnNumber
