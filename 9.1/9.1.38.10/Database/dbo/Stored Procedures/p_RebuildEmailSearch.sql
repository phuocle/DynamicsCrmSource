

create procedure [dbo].[p_RebuildEmailSearch]
(
	@rebuildFrequencyInMinutes INT = 0, -- 0 means rebuild unconditionally
	@top INT = 10000, -- Act only on this many records
	@whatIfMode BIT = 0, -- If true, returns a table of hypothetical script actions
	@emitQueries BIT = 0 -- If true, returns a table of queries run
)
AS
BEGIN
	SET NOCOUNT ON;

	-- Ensure that only one instance of the stored procedure is running at a time. Lock owner is the session (the DB connection)
	DECLARE @lockResult INT
	DECLARE @lockName NVARCHAR(70) = N'2fa6cc2b-ef30-4681-9ee7-2ad0799e5978-p_RebuildEmailSearch-Lock'
	DECLARE @owner NVARCHAR(10) = N'Session'
	EXEC @lockResult = sp_getapplock @Resource = @lockName, @LockMode = 'Exclusive', @LockOwner = @owner, @LockTimeout = 0;

	-- Subsequent callers will receive notice that no work was done
	IF (@lockResult < 0)
	BEGIN
		SELECT 0 as RecordsInserted, 0 as RecordsUpdated, 0 as RecordsDeleted, 0 as ElapsedMilliseconds, N'Another instance is running' as [Message]
		RETURN;
	END

	BEGIN TRY
		DECLARE @lastRunTime DATETIME = (SELECT TOP 1 LastUpdated FROM EmailSearchBaseChangeLog);

		IF (@rebuildFrequencyInMinutes > 0 AND @lastRunTime IS NOT NULL AND DATEDIFF(minute, @lastRunTime, GETUTCDATE()) < @rebuildFrequencyInMinutes)
		BEGIN
			THROW 50000, 'Ran too recently, try again later', 1
		END

		DECLARE @start DATETIME = GETUTCDATE()

		DECLARE @entityName NVARCHAR(124)
		DECLARE @parentObjectTypeCode int
		DECLARE @emailAddressColumnName NVARCHAR(50) 
		DECLARE @emailColumnNumber int
		DECLARE @recordsInserted int = 0
		DECLARE @recordsUpdated int = 0
		DECLARE @recordsDeleted int = 0
		DECLARE @topStatement NVARCHAR(25)

		IF (@top > 0)
		BEGIN
			set @topStatement = (SELECT CONCAT(N'TOP(', @top, N')'))
		END
		ELSE
		BEGIN
			set @topStatement = N''
		END

		DECLARE @whatIfModeHypotheticalResults TABLE (EmailSearchId UNIQUEIDENTIFIER, EmailAddress NVARCHAR(160), ParentObjectId UNIQUEIDENTIFIER, ParentObjectTypeCode INT, EmailColumnNumber INT, Action NVARCHAR(10))
		DECLARE @queries TABLE (Query NVARCHAR(3000))

		DECLARE @emailAttributes EmailAttributeTableType
		INSERT INTO @emailAttributes SELECT DISTINCT E.[LogicalName], E.[ObjectTypeCode], A.[Name], A.[ColumnNumber]
				FROM [MetadataSchema].[Attribute] A
				inner join [MetadataSchema].[Entity] E on A.EntityId=E.EntityId
				WHERE AttributeLogicalTypeId = 'EMAIL' AND E.IsActivityParty = 1 AND E.LogicalName != 'campaignactivity' AND E.LogicalName != 'invoice' AND E.LogicalName != 'bulkoperation' AND E.LogicalName != 'opportunity' AND E.LogicalName != 'campaign' AND E.LogicalName != 'quote' AND E.LogicalName != 'contract' AND E.LogicalName != 'salesorder' AND E.LogicalName != 'incident'

		-- Get all email-format attributes for activity party entities. Exclude a hardcoded set of entities that are not valid for this scenario.
		DECLARE entityEmailAttributeIterator CURSOR LOCAL FORWARD_ONLY READ_ONLY FOR SELECT * FROM @emailAttributes

		OPEN entityEmailAttributeIterator
		FETCH NEXT FROM entityEmailAttributeIterator INTO @entityName, @parentObjectTypeCode, @emailAddressColumnName, @emailColumnNumber
		WHILE @@FETCH_STATUS = 0
		BEGIN
			DECLARE @parentObjectIdColumnName NVARCHAR(128) = @entityName + 'id';
			DECLARE @tableName NVARCHAR(128) = @entityname + 'base';
			DECLARE @query nvarchar(3000)
			DECLARE @predicate nvarchar(3000)

			IF EXISTS (SELECT 1 FROM sys.tables WHERE name = @tableName)
			BEGIN
				-- Create missing EmailSearchBase records
				SET @predicate = (SELECT CONCAT(' FROM dbo.', QUOTENAME(@tableName), ' E LEFT JOIN EmailSearchBase A on E.', QUOTENAME(@parentObjectIdColumnName), ' = A.ParentObjectId AND A.EmailColumnNumber = ', @emailColumnNumber, ' AND A.ParentObjectTypeCode = ', @parentObjectTypeCode, ' WHERE A.ParentObjectId IS NULL AND LTRIM(RTRIM(ISNULL(E.', QUOTENAME(@emailAddressColumnName), ', ''''))) != '''''));

				IF @whatIfMode = 0
				BEGIN
					SET @query = (SELECT CONCAT(N'INSERT INTO EmailSearchBase (EmailAddress, ParentObjectId, EmailSearchId, ParentObjectTypeCode, EmailColumnNumber) SELECT ', @topStatement, ' E.', QUOTENAME(@emailAddressColumnName), ', E.', QUOTENAME(@parentObjectIdColumnName), ', NEWID(), ', @parentObjectTypeCode, ', ', @emailColumnNumber, @predicate));
					EXEC sys.sp_executesql @query
					set @recordsInserted = @@ROWCOUNT + @recordsInserted
				END
				ELSE
				BEGIN
					SET @query = (SELECT CONCAT(N'SELECT ', @topStatement, 'NULL, E.', QUOTENAME(@emailAddressColumnName), ', E.', QUOTENAME(@parentObjectIdColumnName), ', ', @parentObjectTypeCode, ', ', @emailColumnNumber, ', ''INSERT''', @predicate));
					INSERT INTO @whatIfModeHypotheticalResults EXEC sys.sp_executesql @query
				END

				IF @emitQueries = 1
				BEGIN
					INSERT INTO @queries (Query) Values(@query)
				END

				---- Delete EmailSearchBase records that point to an entity record that no longer exists
				SET @predicate = (SELECT CONCAT(N' FROM EmailSearchBase A LEFT JOIN ', QUOTENAME(@tableName) , ' E ON E.', QUOTENAME(@parentObjectIdColumnName), ' = A.ParentObjectId WHERE E.', QUOTENAME(@parentObjectIdColumnName), ' IS NULL AND A.ParentObjectTypeCode=', @parentObjectTypeCode, ' and A.EmailColumnNumber=', @emailColumnNumber));

				IF @whatIfMode = 0
				BEGIN
					SET @query = (SELECT CONCAT(N'DELETE ', @topStatement, ' EmailSearchBase ', @predicate));
					EXEC sys.sp_executesql @query
					SET @recordsDeleted = @@ROWCOUNT + @recordsDeleted
				END
				ELSE
				BEGIN
					SET @query = (SELECT CONCAT(N'SELECT ', @topStatement, 'A.EmailSearchId, A.EmailAddress, A.ParentObjectId, A.ParentObjectTypeCode, A.EmailColumnNumber, ''DELETE''', @predicate));
					INSERT INTO @whatIfModeHypotheticalResults EXEC sys.sp_executesql @query
				END

				IF @emitQueries = 1
				BEGIN
					INSERT INTO @queries (Query) Values(@query)
				END

				-- Delete EmailSearchBase records that point to an entity attribute that is null or whitespace
				SET @predicate = (SELECT CONCAT(N' FROM ', QUOTENAME(@tableName), ' E LEFT JOIN EmailSearchBase A ON E.', QUOTENAME(@parentObjectIdColumnName), ' = A.ParentObjectId AND A.ParentObjectTypeCode=', @parentObjectTypeCode, ' and A.EmailColumnNumber=', @emailColumnNumber, ' WHERE LTRIM(RTRIM(ISNULL(E.', QUOTENAME(@emailAddressColumnName), ', ''''))) = '''''));

				IF @whatIfMode = 0
				BEGIN
					SET @query = (SELECT CONCAT(N'DELETE ', @topStatement, ' EmailSearchBase ', @predicate));
					EXEC sys.sp_executesql @query
					SET @recordsDeleted = @@ROWCOUNT + @recordsDeleted
				END
				ELSE
				BEGIN
					SET @query = (SELECT CONCAT(N'SELECT ', @topStatement, 'A.EmailSearchId, A.EmailAddress, A.ParentObjectId, A.ParentObjectTypeCode, A.EmailColumnNumber, ''DELETE''', @predicate));
					INSERT INTO @whatIfModeHypotheticalResults EXEC sys.sp_executesql @query
				END

				IF @emitQueries = 1
				BEGIN
					INSERT INTO @queries (Query) Values(@query)
				END

				-- Update EmailSearchBase records that point to an entity attribute whose value has changed
				SET @predicate = (SELECT CONCAT(N' FROM ', QUOTENAME(@tableName), ' E LEFT JOIN EmailSearchBase A ON E.', QUOTENAME(@parentObjectIdColumnName), ' = A.ParentObjectId AND A.ParentObjectTypeCode=', @parentObjectTypeCode, ' and A.EmailColumnNumber=', @emailColumnNumber, ' WHERE E.', QUOTENAME(@emailAddressColumnName), ' != A.EmailAddress'));

				IF @whatIfMode = 0
				BEGIN
					SET @query = (SELECT CONCAT(N'UPDATE ', @topStatement, ' EmailSearchBase SET EmailAddress = E.', QUOTENAME(@emailAddressColumnName), @predicate));
					EXEC sys.sp_executesql @query
					SET @recordsUpdated = @@ROWCOUNT + @recordsUpdated
				END
				ELSE
				BEGIN
					SET @query = (SELECT CONCAT(N'SELECT ', @topStatement, 'A.EmailSearchId, E.', QUOTENAME(@emailAddressColumnName), ', A.ParentObjectId, A.ParentObjectTypeCode, A.EmailColumnNumber, ''UPDATE''', @predicate));
					INSERT INTO @whatIfModeHypotheticalResults EXEC sys.sp_executesql @query
				END

				IF @emitQueries = 1
				BEGIN
					INSERT INTO @queries (Query) Values(@query)
				END

			END
			FETCH NEXT FROM entityEmailAttributeIterator INTO @entityName, @parentObjectTypeCode, @emailAddressColumnName, @emailColumnNumber
		END

		CLOSE entityEmailAttributeIterator
		DEALLOCATE entityEmailAttributeIterator

		-- Delete EmailSearchBase records that point to entity attributes that are not email format
		SET @predicate = ' FROM EmailSearchBase A LEFT JOIN @emailAttributes E ON A.ParentObjectTypeCode = E.ParentObjectTypeCode AND A.EmailColumnNumber = E.EmailColumnNumber WHERE E.ParentObjectTypeCode IS NULL AND E.EmailColumnNumber IS NULL'
		IF @whatIfMode = 0
		BEGIN
			SET @query = (SELECT CONCAT(N'DELETE EmailSearchBase ', @predicate));
			EXEC sys.sp_executesql @query, N'@emailAttributes EmailAttributeTableType readonly', @emailAttributes = @emailAttributes
			set @recordsDeleted = @@ROWCOUNT + @recordsDeleted
		END
		ELSE
		BEGIN
			SET @query = (SELECT CONCAT(N'SELECT A.EmailSearchId, A.EmailAddress, A.ParentObjectId, A.ParentObjectTypeCode, A.EmailColumnNumber, ''DELETE''', @predicate));
			INSERT INTO @whatIfModeHypotheticalResults EXEC sys.sp_executesql @query, N'@emailAttributes EmailAttributeTableType readonly', @emailAttributes = @emailAttributes
		END

		IF @emitQueries = 1
		BEGIN
			INSERT INTO @queries (Query) Values(@query)
		END

		DECLARE @end DATETIME = GETUTCDATE()

		TRUNCATE TABLE EmailSearchBaseChangeLog
		INSERT INTO EmailSearchBaseChangeLog VALUES(NEWID(), @end)

		IF @whatIfMode = 0
		BEGIN
			SELECT @recordsInserted as RecordsInserted, @recordsUpdated as RecordsUpdated, @recordsDeleted as RecordsDeleted, DATEDIFF(ms, @start, @end) as ElapsedMilliseconds, N'' as [Message]
		END
		ELSE
		BEGIN
			DELETE FROM @whatIfModeHypotheticalResults WHERE EmailAddress IS NULL
			SELECT EmailSearchId, EmailAddress, ParentObjectId, ParentObjectTypeCode, EmailColumnNumber, [Action] FROM @whatIfModeHypotheticalResults
		END

		IF @emitQueries = 1
		BEGIN
			SELECT Query from @queries
		END
	END TRY
	BEGIN CATCH
		SELECT -1 as RecordsInserted, -1 as RecordsUpdated, -1 as RecordsDeleted, 0 as ElapsedMilliseconds, (SELECT CONCAT('Error ''', ERROR_MESSAGE(), N''' on line ', ERROR_LINE())) as [Message]
	END CATCH

	EXEC sp_releaseapplock @Resource = @lockName, @LockOwner = @owner
END

