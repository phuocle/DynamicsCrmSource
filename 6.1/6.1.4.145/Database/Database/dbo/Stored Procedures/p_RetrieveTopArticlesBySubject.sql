

 

CREATE PROC p_RetrieveTopArticlesBySubject 

            @SubjectId UNIQUEIDENTIFIER

AS

BEGIN

            SET NOCOUNT ON

                SELECT TOP 10 KbArticleBase.KbArticleId as kbarticleid, KbArticleBase.Title as title, T.NumCases
                FROM KbArticleBase (NOLOCK) join
                        (SELECT KbArticleId as KbArticleId, count(*) as NumCases
                     FROM IncidentBase (NOLOCK) 
                         WHERE IncidentBase.SubjectId = @SubjectId and IncidentBase.KbArticleId IS NOT NULL
                         GROUP BY KbArticleId) T ON KbArticleBase.KbArticleId = T.KbArticleId
                ORDER BY NumCases DESC

END
