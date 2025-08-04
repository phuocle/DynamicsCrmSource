CREATE TABLE [XrmTds].[sys_fulltext_stoplists] (
    [stoplist_id]  INT       NOT NULL,
    [name]         [sysname] NOT NULL,
    [create_date]  DATETIME  NOT NULL,
    [modify_date]  DATETIME  NOT NULL,
    [principal_id] INT       NULL,
    CONSTRAINT [cndx_PrimaryKey_sys_fulltext_stoplists] PRIMARY KEY CLUSTERED ([stoplist_id] ASC)
);


GO
GRANT SELECT
    ON OBJECT::[XrmTds].[sys_fulltext_stoplists] TO [CRMReaderRole]
    AS [dbo];

