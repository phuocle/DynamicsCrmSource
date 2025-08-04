CREATE FULLTEXT INDEX ON [dbo].[DocumentIndex]
    ([Title] LANGUAGE 1033, [KeyWords] LANGUAGE 1033, [SearchText] LANGUAGE 1033)
    KEY INDEX [cndx_PrimaryKey_DocumentIndex]
    ON [CRMFullTextCatalog];


GO
CREATE FULLTEXT INDEX ON [dbo].[BusinessDataLocalizedLabelBase]
    ([Label] LANGUAGE 1033)
    KEY INDEX [ndx_PrimaryKey_BusinessDataLocalizedLabelId]
    ON [CRMFullTextCatalog];

