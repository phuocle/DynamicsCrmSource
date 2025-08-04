CREATE FULLTEXT INDEX ON [dbo].[DocumentIndex]
    ([Title] LANGUAGE 1033, [KeyWords] LANGUAGE 1033, [SearchText] LANGUAGE 1033)
    KEY INDEX [cndx_PrimaryKey_DocumentIndex]
    ON [ftcat_documentindex_8a0aa7db84c34ddfbdca6fbc8b5e12c6];

