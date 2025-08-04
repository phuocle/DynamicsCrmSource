CREATE TABLE [XrmTds].[sys_fulltext_catalogs] (
    [fulltext_catalog_id]      INT            NOT NULL,
    [name]                     [sysname]      NOT NULL,
    [path]                     NVARCHAR (260) NULL,
    [is_default]               BIT            NOT NULL,
    [is_accent_sensitivity_on] BIT            NOT NULL,
    [data_space_id]            INT            NULL,
    [file_id]                  INT            NULL,
    [principal_id]             INT            NULL,
    [is_importing]             BIT            NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_sys_fulltext_catalogs] PRIMARY KEY CLUSTERED ([fulltext_catalog_id] ASC)
);


GO
GRANT SELECT
    ON OBJECT::[XrmTds].[sys_fulltext_catalogs] TO [CRMReaderRole]
    AS [dbo];

