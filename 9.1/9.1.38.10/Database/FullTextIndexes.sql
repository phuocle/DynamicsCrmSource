CREATE FULLTEXT INDEX ON [dbo].[MultiSelectAttributeOptionValuesBase]
    ([SelectedOptionValues] LANGUAGE 1042)
    KEY INDEX [ndx_MultiSelectFullTextIdKey]
    ON [CRMFullTextCatalog]
    WITH STOPLIST OFF;


GO
CREATE FULLTEXT INDEX ON [dbo].[BusinessDataLocalizedLabelBase]
    ([Label] LANGUAGE 1033)
    KEY INDEX [ndx_PrimaryKey_BusinessDataLocalizedLabelId]
    ON [CRMFullTextCatalog];


GO
CREATE FULLTEXT INDEX ON [dbo].[DocumentIndex]
    ([KeyWords] LANGUAGE 1033, [SearchText] LANGUAGE 1033, [Title] LANGUAGE 1033)
    KEY INDEX [cndx_PrimaryKey_DocumentIndex]
    ON [CRMFullTextCatalog];

