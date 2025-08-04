CREATE TABLE [XrmTds].[sys_foreign_keys] (
    [name]                           NVARCHAR (255)   NOT NULL,
    [object_id]                      INT              IDENTITY (1000000, 1) NOT NULL,
    [principal_id]                   INT              DEFAULT (NULL) NULL,
    [schema_id]                      INT              NOT NULL,
    [parent_object_id]               INT              NOT NULL,
    [type]                           CHAR (2)         DEFAULT ('F') NULL,
    [type_desc]                      NVARCHAR (60)    DEFAULT ('FOREIGN_KEY_CONSTRAINT') NULL,
    [create_date]                    DATETIME         DEFAULT (getutcdate()) NOT NULL,
    [modify_date]                    DATETIME         DEFAULT (getutcdate()) NOT NULL,
    [is_ms_shipped]                  BIT              DEFAULT ((0)) NOT NULL,
    [is_published]                   BIT              DEFAULT ((0)) NOT NULL,
    [is_schema_published]            BIT              DEFAULT ((0)) NOT NULL,
    [referenced_object_id]           INT              NULL,
    [key_index_id]                   INT              NULL,
    [is_disabled]                    BIT              DEFAULT ((0)) NOT NULL,
    [is_not_for_replication]         BIT              DEFAULT ((0)) NOT NULL,
    [is_not_trusted]                 BIT              DEFAULT ((0)) NOT NULL,
    [delete_referential_action]      TINYINT          DEFAULT ((0)) NULL,
    [delete_referential_action_desc] NVARCHAR (60)    DEFAULT ('NO_ACTION') NULL,
    [update_referential_action]      TINYINT          DEFAULT ((0)) NULL,
    [update_referential_action_desc] NVARCHAR (60)    DEFAULT ('NO_ACTION') NULL,
    [is_system_named]                BIT              DEFAULT ((0)) NOT NULL,
    [RelationshipId]                 UNIQUEIDENTIFIER NOT NULL
);


GO
CREATE CLUSTERED INDEX [cndx_sys_foreign_keys]
    ON [XrmTds].[sys_foreign_keys]([object_id] ASC);


GO
GRANT SELECT
    ON OBJECT::[XrmTds].[sys_foreign_keys] TO [CRMReaderRole]
    AS [dbo];

