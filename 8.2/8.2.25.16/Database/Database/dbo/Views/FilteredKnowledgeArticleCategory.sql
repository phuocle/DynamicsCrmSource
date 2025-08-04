

--
-- report view for knowledgearticlescategories
--
create view dbo.[FilteredKnowledgeArticleCategory] (
    [categoryid],
    [knowledgearticlecategoryid],
    [knowledgearticleid],
    [versionnumber]
) with view_metadata as
select
    [KnowledgeArticlesCategories].[CategoryId],
    [KnowledgeArticlesCategories].[KnowledgeArticleCategoryId],
    [KnowledgeArticlesCategories].[KnowledgeArticleId],
    [KnowledgeArticlesCategories].[VersionNumber]
from KnowledgeArticlesCategories

GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredKnowledgeArticleCategory] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT SELECT
    ON OBJECT::[dbo].[FilteredKnowledgeArticleCategory] TO [CRMReaderRole]
    AS [dbo];

