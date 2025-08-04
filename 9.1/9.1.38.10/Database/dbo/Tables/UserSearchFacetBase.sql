CREATE TABLE [dbo].[UserSearchFacetBase] (
    [FacetOrder]        INT              NOT NULL,
    [AttributeName]     NVARCHAR (128)   NOT NULL,
    [SystemUserId]      UNIQUEIDENTIFIER NOT NULL,
    [EntityName]        NVARCHAR (128)   NOT NULL,
    [UserSearchFacetId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [cndx_UserSearchFacet] PRIMARY KEY CLUSTERED ([SystemUserId] ASC, [EntityName] ASC, [AttributeName] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_User_Entity_AttributeOrderMap] UNIQUE NONCLUSTERED ([SystemUserId] ASC, [EntityName] ASC, [AttributeName] ASC, [FacetOrder] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[UserSearchFacetBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_SystemUserId]
    ON [dbo].[UserSearchFacetBase]([SystemUserId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_EntityName]
    ON [dbo].[UserSearchFacetBase]([EntityName] ASC) WITH (FILLFACTOR = 80);

