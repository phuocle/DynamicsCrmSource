CREATE TABLE [XrmTds].[SchemaVersion] (
    [MetadataVersionNumber]     VARBINARY (8) NULL,
    [EntityIndexModifiedOn]     DATETIME      NULL,
    [IndexAttributesModifiedOn] DATETIME      NULL
);


GO
GRANT SELECT
    ON OBJECT::[XrmTds].[SchemaVersion] TO [CRMReaderRole]
    AS [dbo];

