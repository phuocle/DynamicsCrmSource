

create procedure dbo.p_GetKeyAttributes(
    @entityid uniqueidentifier)
as;
begin;
    set nocount on;

    select a.*,
           case
               when cast(at.Description as nvarchar) in ('nvarchar', 'nchar')
                   then cast(a.Length / 2 as nvarchar)
               when cast(at.Description as nvarchar) in ('varchar', 'char')
                   then cast(a.Length as nvarchar)
               else ''
           end as [character-count],
           at.Description as type,
           at.Quoted as isquoted
    from AttributeView a
         inner join AttributeTypes at
             on a.AttributeTypeId = at.AttributeTypeId
    where EntityId = @entityid
          and a.IsPKAttribute = 1
    order by ColumnNumber;
end;