USE [D365_MSCRM]
GO
/****** Object:  StoredProcedure [dbo].[p_CleanupSnapshotSolution]    Script Date: 4/10/2017 9:59:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[p_CleanupSnapshotSolution]
(
	@solutionId uniqueidentifier
)
AS
BEGIN
	--table to store list of table names
	DECLARE @solutionAwareEntities TABLE(BaseTableName SYSNAME)

	INSERT INTO @solutionAwareEntities SELECT BaseTableName FROM MetadataSchema.Entity WHERE IsSolutionAware=1

	-- Insert metadata entities and other entries not covered above
	INSERT INTO @solutionAwareEntities VALUES('MetadataSchema.Entity')
	INSERT INTO @solutionAwareEntities VALUES('MetadataSchema.Attribute')
	INSERT INTO @solutionAwareEntities VALUES('MetadataSchema.OptionSet')
	INSERT INTO @solutionAwareEntities VALUES('MetadataSchema.Relationship')
	INSERT INTO @solutionAwareEntities VALUES('MetadataSchema.EntityRelationship')
	INSERT INTO @solutionAwareEntities VALUES('SolutionBase')

 
	DECLARE @tableName SYSNAME;
	DECLARE tableNameCursor CURSOR LOCAL READ_ONLY FORWARD_ONLY FOR
	SELECT BaseTableName FROM @solutionAwareEntities

	OPEN tableNameCursor
	FETCH NEXT
	FROM tableNameCursor INTO @tableName
	WHILE @@FETCH_STATUS = 0
	BEGIN
		-- Cleanup all the rows belonging to SnapshotSolution 
		EXEC('DELETE FROM ' + @tableName + ' WHERE SolutionId = ''' + @solutionId + '''')

		FETCH NEXT FROM tableNameCursor INTO @tableName
	END
	CLOSE tableNameCursor
	DEALLOCATE tableNameCursor
END
GO
