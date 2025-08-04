CREATE TYPE [dbo].[EmailAttributeTableType] AS TABLE (
    [EntityName]             NVARCHAR (64) NULL,
    [ParentObjectTypeCode]   INT           NULL,
    [EmailAddressColumnName] NVARCHAR (50) NULL,
    [EmailColumnNumber]      INT           NULL);

