

CREATE PROCEDURE [dbo].[p_CleanupSnapshotSolution]
AS
BEGIN
	--table to store list of table names
	DECLARE @solutionAwareEntities TABLE(BaseTableName SYSNAME)
	DECLARE @deleteSql NVARCHAR(MAX)
	
	-- objecttypecodes between 9800-9820 for bpo representation of metadata entities, should be excluded
	-- TODO: emoberst add flag isMetadata, remove objecttypecode check
	INSERT INTO @solutionAwareEntities SELECT BaseTableName FROM EntityView WHERE IsSolutionAware=1 AND (ObjectTypeCode < 9800 OR ObjectTypeCode > 9820)

	-- Insert metadata entities and other entries not covered above
	INSERT INTO @solutionAwareEntities VALUES('MetadataSchema.Entity')
	INSERT INTO @solutionAwareEntities VALUES('MetadataSchema.Attribute')
	INSERT INTO @solutionAwareEntities VALUES('MetadataSchema.OptionSet')
	INSERT INTO @solutionAwareEntities VALUES('MetadataSchema.Relationship')
	INSERT INTO @solutionAwareEntities VALUES('MetadataSchema.EntityRelationship')
 
	DECLARE @tableName SYSNAME;
	DECLARE tableNameCursor CURSOR LOCAL READ_ONLY FORWARD_ONLY FOR
	SELECT BaseTableName FROM @solutionAwareEntities

	OPEN tableNameCursor
	FETCH NEXT
	FROM tableNameCursor INTO @tableName
	WHILE @@FETCH_STATUS = 0
	BEGIN
		-- Cleanup all the rows belonging to SnapshotSolutions. All the snapshot rows have componentstate = 4, 
		-- to be cleaned up during major version upgrade 
		SET @deleteSql = N'delete from ' + @tableName + ' where ComponentState=4'
		EXEC sp_executesql @deleteSql

		FETCH NEXT FROM tableNameCursor INTO @tableName
	END
	CLOSE tableNameCursor
	DEALLOCATE tableNameCursor
	
	--delete from SolutionBase at last
	Set @deleteSql = N'delete from dbo.SolutionBase where SolutionType = 1';
	Exec sp_executesql @deleteSql;
END