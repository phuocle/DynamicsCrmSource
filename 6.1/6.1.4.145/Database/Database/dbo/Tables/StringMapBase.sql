CREATE TABLE [dbo].[StringMapBase] (
    [ObjectTypeCode] INT              NOT NULL,
    [AttributeName]  NVARCHAR (100)   NOT NULL,
    [AttributeValue] INT              NOT NULL,
    [LangId]         INT              NOT NULL,
    [OrganizationId] UNIQUEIDENTIFIER NOT NULL,
    [Value]          NVARCHAR (4000)  NULL,
    [DisplayOrder]   INT              NULL,
    [VersionNumber]  ROWVERSION       NULL,
    [StringMapId]    UNIQUEIDENTIFIER CONSTRAINT [DF_StringMap_StringMapId] DEFAULT (newid()) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_StringMap] PRIMARY KEY CLUSTERED ([StringMapId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_StringMap] UNIQUE NONCLUSTERED ([ObjectTypeCode] ASC, [AttributeName] ASC, [AttributeValue] ASC, [LangId] ASC, [OrganizationId] ASC)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_StringMap_FilteredViews]
    ON [dbo].[StringMapBase]([LangId] ASC, [ObjectTypeCode] ASC, [AttributeName] ASC, [AttributeValue] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[StringMapBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

