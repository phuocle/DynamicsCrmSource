
	CREATE VIEW [XrmTds].[databases_view]
	(
		[name],				-- Name of database.
		[database_id],		-- ID of the database.
		[collation_name],	-- Collation for the database.
		[create_date]		-- Date the database was created.
	) WITH VIEW_METADATA AS
	SELECT TOP 1 [Name], 1, CONVERT(varchar(128), SERVERPROPERTY('collation')), [CreatedOn] FROM [dbo].[OrganizationBase] ORDER BY [VersionNumber] DESC
