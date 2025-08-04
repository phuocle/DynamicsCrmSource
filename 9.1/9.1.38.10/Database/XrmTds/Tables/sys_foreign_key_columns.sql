CREATE TABLE [XrmTds].[sys_foreign_key_columns] (
    [constraint_object_id] INT              NOT NULL,
    [constraint_column_id] INT              NOT NULL,
    [parent_object_id]     INT              NOT NULL,
    [parent_column_id]     INT              NOT NULL,
    [referenced_object_id] INT              NOT NULL,
    [referenced_column_id] INT              NOT NULL,
    [RelationshipId]       UNIQUEIDENTIFIER NOT NULL
);


GO
CREATE CLUSTERED INDEX [cndx_sys_foreign_key_columns]
    ON [XrmTds].[sys_foreign_key_columns]([constraint_object_id] ASC, [parent_column_id] ASC);


GO
GRANT SELECT
    ON OBJECT::[XrmTds].[sys_foreign_key_columns] TO [CRMReaderRole]
    AS [dbo];

