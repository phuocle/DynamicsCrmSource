SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


create procedure [dbo].[p_GetPrimaryKeyAttributes](
    @keyid uniqueidentifier)
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
    from KeyAttributes k
         inner join AttributeView a
             on k.AttributeId = a.AttributeId
         inner join AttributeTypes at
             on a.AttributeTypeId = at.AttributeTypeId
    where k.KeyId = @keyid  
    order by ColumnNumber;
end;
GO
