

create procedure dbo.p_GetTableAttributes(
    @tablename nvarchar(255) = null,
    @tableid uniqueidentifier = null)
as;
begin;
    set nocount on;

    if (@tableid is null and @tablename is null)
    begin;
        raiserror(1074008071, 16, 127) with nowait, seterror;
        return;
    end;

    if (@tablename is not null)
    begin;
        select @tableid = EntityId
        from EntityView
        where Name = @tablename;
    end;

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
    where EntityId = @tableid
          and a.AttributeOf is null
          and a.AggregateOf is null
          and (a.ValidForCreateAPI != 0
               or a.ValidForReadAPI != 0
               or a.ValidForUpdateAPI != 0)
    order by ColumnNumber;
end;