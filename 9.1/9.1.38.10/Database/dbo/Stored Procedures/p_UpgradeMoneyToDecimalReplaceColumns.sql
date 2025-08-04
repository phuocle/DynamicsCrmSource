

CREATE PROCEDURE [dbo].[p_UpgradeMoneyToDecimalReplaceColumns]
(
     @TableName                     NVARCHAR(128)
    ,@MoneyReplaceString            NVARCHAR(20)
    ,@ExchangeRateReplaceString     NVARCHAR(20)
    ,@Debug                         BIT = 0
)
AS

BEGIN TRY

DECLARE 
    @newline           NCHAR(2) = CHAR(13) + CHAR(10)
   ,@objectId          INT = OBJECT_ID('[dbo].'+ QUOTENAME(@TableName), N'U')
   ,@entityName        NVARCHAR(128) = IIF(@TableName LIKE N'%Base', LEFT(@TableName, LEN(@TableName)-4), @TableName)
   ,@beginDateTimeUTC  DATETIME2(7)
   ,@entityId          UNIQUEIDENTIFIER = NULL
   ,@errorMessage      NVARCHAR(4000)
;

-- in case an entity with money fields is deleted during migration
IF @objectId IS NULL
  RAISERROR(N'Table not found.', 16, 0);

IF OBJECT_ID('[dbo].'+ QUOTENAME(@entityName), N'V') IS NOT NULL
BEGIN
  SET @entityId = (SELECT e.[EntityId] FROM dbo.[EntityView] e WITH (NOLOCK) WHERE e.[LogicalName] = LOWER(@entityName));
END;

DECLARE
    @isVersionNumberCreationRequired   BIT = 0
   ,@isCompleted                       BIT = 0
;

SELECT @isVersionNumberCreationRequired = [IsVersionNumberCreationRequired]
      ,@isCompleted = [IsCompleted]
FROM [dbo].[TableListMoneyUpgrade]
WHERE [TableName] = @TableName;

IF @@ROWCOUNT = 0
BEGIN
  SET @errorMessage = N'Table {0} is not listed for upgrade.';
  RAISERROR(@errorMessage, 16, 1);
END;

IF @isCompleted = 1
BEGIN
  SET @errorMessage = N'Table {0} is already processed.';
  RAISERROR(@errorMessage, 16, 1);
END;

DECLARE
     @cmd                               NVARCHAR(MAX) = N''
    ,@cmdDropIndex                      NVARCHAR(MAX) = N'DROP INDEX ' + QUOTENAME(@TableName) + N'.<indexname>' + @newline
    ,@cmdDropStats                      NVARCHAR(MAX) = N'DROP STATISTICS ' + QUOTENAME(@TableName) + N'.<statsname>' + @newline
    ,@cmdDropDefault                    NVARCHAR(MAX) = N'ALTER TABLE [dbo].' + QUOTENAME(@TableName) + N' DROP CONSTRAINT <dfname>' + @newline
    ,@cmdDropComputedColumn             NVARCHAR(MAX) = N'ALTER TABLE [dbo].' + QUOTENAME(@TableName) + N' DROP COLUMN <ccname>' + @newline

    ,@cmdRenameColumn                   NVARCHAR(MAX) = N'EXEC sp_rename ''' + QUOTENAME(@TableName) + N'.<tempcolname>'', ''<permcolname>'', ''COLUMN''' + @newline
    ,@cmdAddDefaultConstraint           NVARCHAR(MAX) = N'ALTER TABLE [dbo].' + QUOTENAME(@TableName) + N' ADD CONSTRAINT <dfname> DEFAULT <dfdefinition> FOR <colname>' + @newline
    ,@cmdAddComputedColumn              NVARCHAR(MAX) = N'ALTER TABLE [dbo].' + QUOTENAME(@TableName) + N' ADD <ccname> AS <ccdefinition>' + @newline 
    ,@cmdScheduleIndexCreate            NVARCHAR(MAX) = N'UPDATE [MetadataSchema].[EntityIndex] SET [RecreateIndex] = 1 WHERE [EntityId] = ''' + CAST(@entityId AS NVARCHAR(50)) 
                                                        + N''' AND [Name] = N''<indexname>''' + @newline
;

DECLARE @clist TABLE ([ColumnName] NVARCHAR(128) PRIMARY KEY CLUSTERED);

INSERT INTO @clist ([ColumnName])
SELECT c.[name]
FROM sys.columns c WITH (NOLOCK)
WHERE c.[object_id] = @objectId
AND (c.[user_type_id] = 60 OR (LOWER(c.[name]) = N'exchangerate' AND c.[precision] = 23 AND c.[scale] = 10))
AND c.[is_computed] = 0
AND EXISTS (
    SELECT 1
    FROM sys.columns c1 WITH (NOLOCK) 
    WHERE c1.[object_id] = @objectId
    AND c1.[name] = CONCAT('__', c.[name]) -- shadow column pattern '__ColumnName'
);

IF @@ROWCOUNT = 0
  RAISERROR(N'No convertible columns found.', 16, 0);

--============================================================================
-- save dependent default constraints
--============================================================================

DECLARE @save_dep_default_constraints TABLE ([name] NVARCHAR(128), [definition] NVARCHAR(MAX), [ColumnName] NVARCHAR(128));

INSERT INTO @save_dep_default_constraints
SELECT dc.[name], dc.[definition], c.[name] AS [ColumnName]
FROM sys.default_constraints dc WITH (NOLOCK)
JOIN sys.columns c WITH (NOLOCK) 
  ON  c.[object_id] = dc.[parent_object_id] 
  AND c.[column_id] = dc.[parent_column_id] 
JOIN @clist cl 
  ON  cl.[ColumnName] = c.[name] 
WHERE dc.[parent_object_id] = @objectId;

--============================================================================
-- save dependent computed columns
--============================================================================

DECLARE @save_dep_computed_columns TABLE ([name] NVARCHAR(128), [definition] NVARCHAR(MAX));

WITH ComputedColumnCte
AS
(
  SELECT
    ISNULL(COL_NAME(d.[referenced_id], d.[referenced_minor_id]), 'NA') [referenced_column_name],
    ISNULL(COL_NAME(d.[referencing_id], d.[referencing_minor_id]), 'NA') [referencing_column_name]
  FROM sys.sql_expression_dependencies d WITH (NOLOCK)
  WHERE d.[referenced_id]     = @objectId
  AND   d.[referencing_class] = 1 -- 'OBJECT_OR_COLUMN' 
  AND   d.[referenced_class]  = 1 -- 'OBJECT_OR_COLUMN' 
)
-- multiple columns can be part of a single computed column. hence, taking distinct
INSERT INTO @save_dep_computed_columns
SELECT DISTINCT cc.[name], cc.[definition]
FROM ComputedColumnCte cte
JOIN @clist cl
  ON  cl.[ColumnName] = cte.[referenced_column_name] 
JOIN sys.computed_columns cc WITH (NOLOCK)
  ON  cc.[object_id] = @objectId 
  AND cc.[name] = cte.[referencing_column_name] 
;

DECLARE @columns_and_dependent_computed_columns TABLE ([ColumnName] NVARCHAR(128) PRIMARY KEY CLUSTERED);
INSERT INTO @columns_and_dependent_computed_columns
SELECT [ColumnName] FROM @clist
UNION
SELECT [name] FROM @save_dep_computed_columns;

--============================================================================
-- save dependent indexes
--============================================================================

DECLARE @save_dep_indexes TABLE ([name] NVARCHAR(128));

-- multiple columns can be part of a single index. hence, taking distinct index names
INSERT INTO @save_dep_indexes
SELECT DISTINCT i.[name]
FROM sys.indexes i WITH (NOLOCK)
JOIN sys.index_columns ic WITH (NOLOCK)
  ON  ic.[object_id] = i.[object_id] 
  AND ic.[index_id] = i.[index_id]
JOIN sys.columns c WITH (NOLOCK)
  ON  c.[object_id]= ic.[object_id] 
  AND c.[column_id] = ic.[column_id]
JOIN @columns_and_dependent_computed_columns cl 
  ON  cl.[ColumnName] = c.[name]
WHERE i.[object_id] = @objectId;

--============================================================================
-- save dependent user-created stats
--============================================================================

DECLARE @save_dep_user_stats TABLE ([name] NVARCHAR(128));

-- multiple columns can be part of a single stat. hence, take distinct stat names
INSERT INTO @save_dep_user_stats
SELECT DISTINCT st.[name]
FROM sys.stats st WITH (NOLOCK)
JOIN sys.stats_columns sc WITH (NOLOCK)
  ON  sc.[object_id] = st.[object_id] 
  AND sc.[stats_id] = st.[stats_id]
JOIN sys.columns c WITH (NOLOCK)
  ON  c.[object_id] = sc.[object_id] 
  AND c.[column_id] = sc.[column_id]
JOIN @columns_and_dependent_computed_columns cl
  ON  cl.[ColumnName] = c.[name]
WHERE st.[object_id] = @objectId 
AND st.[user_created] = 1;

--============================================================================
-- drop dependent objects
--============================================================================

SELECT @cmd = N'';

SELECT @cmd = @cmd + REPLACE(@cmdDropDefault, N'<dfname>', [name])
FROM @save_dep_default_constraints;

SELECT @cmd = @cmd + REPLACE(@cmdDropIndex, N'<indexname>', [name])
FROM @save_dep_indexes;

SELECT @cmd = @cmd + REPLACE(@cmdDropStats, N'<statsname>', [name])
FROM @save_dep_user_stats;

SELECT @cmd = @cmd + REPLACE(@cmdDropComputedColumn, N'<ccname>', [name])
FROM @save_dep_computed_columns;

EXEC [dbo].[p_UpgradeMoneyToDecimalExecuteCommand]
     @TableName = @TableName
    ,@Command = @cmd
    ,@EventSequence = 5 -- drop dependent objects
    ,@Debug = @Debug;

--============================================================================
-- drop old columns
--============================================================================

SELECT @cmd = N'ALTER TABLE [dbo].' + QUOTENAME(@TableName) + N' DROP COLUMN' + @newline;
SELECT @cmd = @cmd + QUOTENAME([ColumnName]) + @newline + N','
FROM @clist;

-- drop orphaned shadow '__%' decimal columns (columns dropped during migration)
SELECT @cmd = @cmd + QUOTENAME(c.[name]) + @newline + N','
FROM sys.columns c WITH (NOLOCK) 
WHERE c.[object_id] = @objectId
AND c.[name] LIKE N'[__]%'
AND c.[user_type_id] = 106 -- decimal
AND ((c.[precision] = 38 AND c.[scale] = 10) OR (c.[precision] = 28 AND c.[scale] = 12))
AND NOT EXISTS 
(
    SELECT 1
    FROM @clist cl
    WHERE cl.[ColumnName] = REPLACE(c.[name], N'__', N'')
);

-- drop VersionNumber column if explicitly added
SET @cmd = IIF(@isVersionNumberCreationRequired = 1, @cmd + N'[VersionNumber]', LEFT(@cmd, LEN(@cmd) - 1));

EXEC [dbo].[p_UpgradeMoneyToDecimalExecuteCommand]
     @TableName = @TableName
    ,@Command = @cmd
    ,@EventSequence = 6 -- drop old columns
    ,@Debug = @Debug;

--============================================================================
-- rename new columns
--============================================================================

SELECT @cmd = N'';
SELECT @cmd = @cmd + REPLACE(REPLACE(@cmdRenameColumn, N'<permcolname>', [ColumnName]), N'<tempcolname>', N'__'+[ColumnName])
FROM @clist;

EXEC [dbo].[p_UpgradeMoneyToDecimalExecuteCommand]
     @TableName = @TableName
    ,@Command = @cmd
    ,@EventSequence = 7 -- rename new columns
    ,@Debug = @Debug;

--============================================================================
-- create dependent objects
--============================================================================

SELECT @cmd = N'';
SELECT @cmd = @cmd + (REPLACE(REPLACE(REPLACE(@cmdAddDefaultConstraint, N'<dfname>', QUOTENAME([name])), N'<dfdefinition>', [definition]), N'<colname>', QUOTENAME([ColumnName])))
FROM @save_dep_default_constraints;

IF @entityId IS NOT NULL
BEGIN
  -- schedule CRM indexes for recreation
  SELECT @cmd = @cmd + REPLACE(@cmdScheduleIndexCreate, N'<indexname>', ei.[Name])
  FROM [MetadataSchema].[EntityIndex] ei WITH (NOLOCK)
  JOIN @save_dep_indexes di
    ON di.[name] COLLATE DATABASE_DEFAULT = ei.[Name] COLLATE DATABASE_DEFAULT
  WHERE ei.[EntityId] = @entityId;
END;

SELECT @cmd = @cmd + REPLACE(REPLACE(@cmdAddComputedColumn, N'<ccname>', QUOTENAME([name])), N'<ccdefinition>', [definition])
FROM @save_dep_computed_columns;

EXEC [dbo].[p_UpgradeMoneyToDecimalExecuteCommand]
     @TableName = @TableName
    ,@Command = @cmd
    ,@EventSequence = 8 -- create dependent objects
    ,@Debug = @Debug;

--============================================================================
-- regenerate scalar functions
--============================================================================

SET @beginDateTimeUTC = SYSUTCDATETIME();

DECLARE @save_nondep_computed_columns TABLE
(
    [Id] INT IDENTITY(1,1) PRIMARY KEY CLUSTERED
   ,[ColumnName] NVARCHAR(128)
   ,[Definition] NVARCHAR(MAX)
   ,[IsBaseCurrency] BIT
);

-- save non-dependent computed columns
INSERT INTO @save_nondep_computed_columns([ColumnName], [Definition], [IsBaseCurrency]) 
SELECT cc.[name], cc.[definition], a.[IsBaseCurrency]
FROM sys.columns c WITH (NOLOCK) 
JOIN sys.computed_columns cc WITH (NOLOCK) 
   ON  cc.[object_id] = c.[object_id] 
   AND cc.[name] = c.[name]
LEFT JOIN [dbo].[AttributeView] a WITH (NOLOCK)
   ON  a.[EntityId] = @entityId 
   AND a.[TableColumnName] = cc.[name]
WHERE c.[object_id] = @objectId 
AND c.[user_type_id] = 60
AND c.[is_computed] = 1;

DECLARE 
    @id                   INT = 0
   ,@count                INT = (SELECT COUNT(1) FROM @save_nondep_computed_columns)
   ,@columnName           NVARCHAR(128)
   ,@computedColumnDef    NVARCHAR(MAX) 
   ,@funtionName          NVARCHAR(MAX)
   ,@functionDef          NVARCHAR(MAX)
   ,@isBaseCurrency       BIT
;

SET @cmd = N'';

-- regenerate user-defined scalar functions used in computed columns
WHILE(@id < @count)
BEGIN -- regenerate UDF loop

    SET @id = @id + 1;

    SELECT @columnName = [ColumnName]
          ,@computedColumnDef = [Definition]
          ,@isBaseCurrency = [IsBaseCurrency]
    FROM @save_nondep_computed_columns 
    WHERE [Id] = @id;

    -- sample UDF based calculated/computed column definition: ([dbo].[fn_UDF_1dad628bb467ea11a81e000d3afd70c9]([Revenue]))
    SET @funtionName = RIGHT(@computedColumnDef, LEN(@computedColumnDef) - 1); -- remove leading '('
    SET @funtionName = SUBSTRING(@funtionName, 1, CHARINDEX('(', @funtionName) - 1);
    SET @functionDef = OBJECT_DEFINITION(OBJECT_ID(@funtionName));

    -- this can be null if computed column is not created with a UDF
    -- but it shouldn't happen because all dependent computed columns are already re-generated.
    IF @functionDef IS NULL
    BEGIN
      SET @errorMessage = N'No object definition found for function: ' + QUOTENAME(@funtionName);
      RAISERROR(@errorMessage, 16, 5);
    END;

    IF @isBaseCurrency IS NULL
    BEGIN
      SET @errorMessage = N'No attribute found in AttributeView for computed column: ' + QUOTENAME(@columnName);
      RAISERROR(@errorMessage, 16, 5);
    END;

    -- if computed column is created with UDF and attribute found, alter the UDF.

    -- drop old computed column
    SET @cmd = @cmd + N'ALTER TABLE [dbo].' + QUOTENAME(@TableName) + N' DROP COLUMN ' + QUOTENAME(@columnName) + @newline;

    -- drop old computed column's UDF
    SET @cmd = @cmd + N'DROP FUNCTION ' + @funtionName + @newline;

    -- create dummy computed column with the same name to avoid 'invalid column' error while re-generating UDF due to view usage in UDF
    SET @cmd = @cmd + N'ALTER TABLE [dbo].' + QUOTENAME(@TableName) + N' ADD ' + QUOTENAME(@columnName) + N' AS (1.0)' + @newline;

    -- modify UDF 
    SET @functionDef = REPLACE(@functionDef, N'''', N''''''); --replace single quote with double single quotes
    SET @functionDef = REPLACE(@functionDef, N' money', @MoneyReplaceString);

    -- to change exchange rate datatype in base currency UDF
    IF @isBaseCurrency = 1
    BEGIN
      SET @functionDef = REPLACE(@functionDef, N'@v0 decimal(23,10)', CONCAT(N'@v0', @ExchangeRateReplaceString));
      SET @functionDef = REPLACE(@functionDef, N'@v0 decimal(23, 10)', CONCAT(N'@v0', @ExchangeRateReplaceString));
    END

    -- in some places of UDF, money field's type is declared as decimal(23,10)
    SET @functionDef = REPLACE(@functionDef, N' decimal(23,10)', @MoneyReplaceString);
    SET @functionDef = REPLACE(@functionDef, N' decimal(23, 10)', @MoneyReplaceString);

    -- create UDF with the modified UDF definition
    SET @cmd = @cmd + @newline + N'EXEC (''' + @functionDef + N''')' + @newline;

    -- drop dummy computed column
    SET @cmd = @cmd + N'ALTER TABLE [dbo].' + QUOTENAME(@TableName) + N' DROP COLUMN ' + QUOTENAME(@columnName) + @newline;
        
    -- recreate computed column using new UDF
    SET @cmd = @cmd + N'ALTER TABLE [dbo].' + QUOTENAME(@TableName) + N' ADD ' + QUOTENAME(@columnName) + N' AS ' + @computedColumnDef;
    SET @cmd = @cmd + @newline + @newline;

END; -- regenerate UDF loop

EXEC [dbo].[p_UpgradeMoneyToDecimalExecuteCommand]
     @TableName = @TableName
    ,@Command = @cmd
    ,@EventSequence = 9 -- regenerate scalar functions
    ,@Debug = @Debug
    ,@BeginDateTimeUTC = @beginDateTimeUTC;

END TRY
BEGIN CATCH
    
    IF @@TRANCOUNT > 0 ROLLBACK;
    THROW;
    
END CATCH

RETURN;