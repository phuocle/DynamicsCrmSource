CREATE TABLE [XrmTds].[sys_index_columns] (
    [object_id]          INT              NOT NULL,
    [index_id]           INT              NOT NULL,
    [index_column_id]    INT              DEFAULT ((-1)) NOT NULL,
    [column_id]          INT              NOT NULL,
    [key_ordinal]        TINYINT          NOT NULL,
    [partition_ordinal]  TINYINT          DEFAULT ((0)) NOT NULL,
    [is_descending_key]  BIT              DEFAULT ((0)) NULL,
    [is_included_column] BIT              DEFAULT ((0)) NULL,
    [IndexAttributeId]   UNIQUEIDENTIFIER NOT NULL
);


GO
CREATE CLUSTERED INDEX [cndx_sys_index_columns]
    ON [XrmTds].[sys_index_columns]([object_id] ASC, [index_id] ASC, [index_column_id] ASC);


GO
GRANT SELECT
    ON OBJECT::[XrmTds].[sys_index_columns] TO [CRMReaderRole]
    AS [dbo];

