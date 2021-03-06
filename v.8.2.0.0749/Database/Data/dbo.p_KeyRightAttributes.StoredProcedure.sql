USE [D365_MSCRM]
GO
/****** Object:  StoredProcedure [dbo].[p_KeyRightAttributes]    Script Date: 4/10/2017 9:59:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create procedure [dbo].[p_KeyRightAttributes](
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
    from KeyAttributes ka
         inner join AttributeView a
             on ka.ReferencedAttribute = a.AttributeId
         inner join AttributeTypes at
             on a.AttributeTypeId = at.AttributeTypeId
    where ka.KeyId = @keyid
    order by ka.AttributeId;
end;
GO
