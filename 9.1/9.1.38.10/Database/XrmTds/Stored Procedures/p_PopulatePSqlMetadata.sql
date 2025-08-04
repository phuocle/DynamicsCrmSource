

-- Create the stored procedure.
CREATE PROCEDURE [XrmTds].[p_PopulatePSqlMetadata]
@isDiffEnabled bit = 0
AS
BEGIN

    /*------ Execute p_CreatePSqlSchemaTables to create PSql Schema Tables. ---------------------------------------------------------------------------------*/
    IF EXISTS (SELECT * FROM sys.objects WHERE object_id = object_id(N'[XrmTds].[p_CreatePSqlSchemaTables]') AND type IN (N'P', N'SP')) 
    BEGIN
         EXEC [XrmTds].[p_CreatePSqlSchemaTables]
    END
    ELSE
         THROW 50100, 'The stored procedure [XrmTds].[p_CreatePSqlSchemaTables] does not exist', 1;

    /*------ Execute p_CreatePSqlSchemaViews to create PSql Schema Views. -----------------------------------------------------------------------------------*/
    IF EXISTS (SELECT * FROM sys.objects WHERE object_id = object_id(N'[XrmTds].[p_CreatePSqlSchemaViews]') AND type IN (N'P', N'SP')) 
    BEGIN
         EXEC [XrmTds].[p_CreatePSqlSchemaViews]
    END
    ELSE
         THROW 50100, 'The stored procedure [XrmTds].[p_CreatePSqlSchemaViews] does not exist', 1;

    /*------ Execute p_CleanupObsoletePSqlSchema to cleanup obsolete PSql schema. ---------------------------------------------------------------------------*/
    IF EXISTS (SELECT * FROM sys.objects WHERE object_id = object_id(N'[XrmTds].[p_CleanupObsoletePSqlSchema]') AND type IN (N'P', N'SP')) 
    BEGIN
         EXEC [XrmTds].[p_CleanupObsoletePSqlSchema]
    END
    ELSE
         THROW 50100, 'The stored procedure [XrmTds].[p_CleanupObsoletePSqlSchema] does not exist', 1;
    
    /*------ Execute p_CreateRefreshPSqlTables to create p_RefreshPSqlTables stored procedure. --------------------------------------------------------------------------------*/
    IF EXISTS (SELECT * FROM sys.objects WHERE object_id = object_id(N'[XrmTds].[p_CreateRefreshPSqlTables]') AND type IN (N'P', N'SP')) 
    BEGIN
        EXEC [XrmTds].[p_CreateRefreshPSqlTables]
    END
    ELSE
        THROW 50100, 'The stored procedure [XrmTds].[p_CreateRefreshPSqlTables] does not exist', 1;

    /*------ Execute p_CreateRefreshPSqlTables_Diff to create p_RefreshPSqlTables_Diff stored procedure. --------------------------------------------------------------------------------*/
    IF EXISTS (SELECT * FROM sys.objects WHERE object_id = object_id(N'[XrmTds].[p_CreateRefreshPSqlTables_Diff]') AND type IN (N'P', N'SP')) 
    BEGIN
        EXEC [XrmTds].[p_CreateRefreshPSqlTables_Diff]
    END
    ELSE
        THROW 50100, 'The stored procedure [XrmTds].[p_CreateRefreshPSqlTables_Diff] does not exist', 1;

    IF @isDiffEnabled = 1
    BEGIN
        /*------ Execute p_CreatePSqlSchemaIndexes to create PSql Schema Tables index. --------------------------------------------------------------------------------*/
        IF EXISTS (SELECT * FROM sys.objects WHERE object_id = object_id(N'[XrmTds].[p_CreatePSqlSchemaIndexes]') AND type IN (N'P', N'SP'))
        BEGIN
            EXEC [XrmTds].[p_CreatePSqlSchemaIndexes]
        END
        ELSE
            THROW 50100, 'The stored procedure [XrmTds].[p_CreatePSqlSchemaIndexes] does not exist', 1;

        /*------ Execute p_RefreshPSqlTables_Diff to refresh PSql Schema Tables data. --------------------------------------------------------------------------------*/
        IF EXISTS (SELECT * FROM sys.objects WHERE object_id = object_id(N'[XrmTds].[p_RefreshPSqlTables_Diff]') AND type IN (N'P', N'SP')) 
        BEGIN
            EXEC [XrmTds].[p_RefreshPSqlTables_Diff]
        END
        ELSE
            THROW 50100, 'The stored procedure [XrmTds].[p_RefreshPSqlTables_Diff] does not exist', 1;
    END
    ELSE
    BEGIN
        /*------ Execute p_RefreshPSqlTables to refresh PSql Schema Tables data. --------------------------------------------------------------------------------*/
        IF EXISTS (SELECT * FROM sys.objects WHERE object_id = object_id(N'[XrmTds].[p_RefreshPSqlTables]') AND type IN (N'P', N'SP')) 
        BEGIN
            EXEC [XrmTds].[p_RefreshPSqlTables]
        END
        ELSE
            THROW 50100, 'The stored procedure [XrmTds].[p_RefreshPSqlTables] does not exist', 1;
    END

END