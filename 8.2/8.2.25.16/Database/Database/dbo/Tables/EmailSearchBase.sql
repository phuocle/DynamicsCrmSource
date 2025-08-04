CREATE TABLE [dbo].[EmailSearchBase] (
    [EmailAddress]         NVARCHAR (160)   NOT NULL,
    [VersionNumber]        ROWVERSION       NULL,
    [ParentObjectId]       UNIQUEIDENTIFIER NOT NULL,
    [EmailSearchId]        UNIQUEIDENTIFIER NOT NULL,
    [ParentObjectTypeCode] INT              NULL,
    [EmailColumnNumber]    INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_EmailSearch] PRIMARY KEY CLUSTERED ([EmailSearchId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_emailaddress_for_specificobject_search]
    ON [dbo].[EmailSearchBase]([EmailAddress] ASC, [ParentObjectTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_for_forward_update]
    ON [dbo].[EmailSearchBase]([ParentObjectId] ASC, [EmailColumnNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_emailaddress_for_search]
    ON [dbo].[EmailSearchBase]([EmailAddress] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[EmailSearchBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

