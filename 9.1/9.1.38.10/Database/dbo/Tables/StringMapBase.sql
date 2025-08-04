CREATE TABLE [dbo].[StringMapBase] (
    [VersionNumber]  ROWVERSION       NULL,
    [DisplayOrder]   INT              NULL,
    [Value]          NVARCHAR (4000)  NULL,
    [ObjectTypeCode] INT              NOT NULL,
    [LangId]         INT              NOT NULL,
    [StringMapId]    UNIQUEIDENTIFIER CONSTRAINT [DF_StringMapBase_StringMapId] DEFAULT (newid()) NOT NULL,
    [AttributeValue] INT              NOT NULL,
    [OrganizationId] UNIQUEIDENTIFIER NOT NULL,
    [AttributeName]  NVARCHAR (128)   NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_StringMap] PRIMARY KEY CLUSTERED ([StringMapId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_StringMap] UNIQUE NONCLUSTERED ([ObjectTypeCode] ASC, [AttributeName] ASC, [AttributeValue] ASC, [LangId] ASC, [OrganizationId] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[StringMapBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_StringMap_FilteredViews]
    ON [dbo].[StringMapBase]([LangId] ASC, [ObjectTypeCode] ASC, [AttributeName] ASC, [AttributeValue] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[StringMapBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);

