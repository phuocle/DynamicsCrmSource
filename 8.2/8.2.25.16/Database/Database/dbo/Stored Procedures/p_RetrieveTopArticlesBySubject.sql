

create procedure dbo.p_RetrieveTopArticlesBySubject
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