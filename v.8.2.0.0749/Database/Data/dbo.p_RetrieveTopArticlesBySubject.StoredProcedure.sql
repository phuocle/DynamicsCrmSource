USE [D365_MSCRM]
GO
/****** Object:  StoredProcedure [dbo].[p_RetrieveTopArticlesBySubject]    Script Date: 4/10/2017 9:59:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create procedure [dbo].[p_RetrieveTopArticlesBySubject]
    @SubjectId uniqueidentifier
as;
begin;
    set nocount on;

    with IncidentBaseCte (KbArticleId, NumCases)
    as
    (
        select ib.KbArticleId as KbArticleId,
               count(*) as NumCases
        from IncidentBase ib
        where ib.SubjectId = @SubjectId
              and ib.KbArticleId is not null
        group by ib.KbArticleId
    )
    select top 10 kab.KbArticleId as kbarticleid,
           kab.Title as title,
           ibc.NumCases
    from KbArticleBase kab
         inner join IncidentBaseCte ibc
             on kab.KbArticleId = ibc.KbArticleId
    order by ibc.NumCases desc;
end;
GO
