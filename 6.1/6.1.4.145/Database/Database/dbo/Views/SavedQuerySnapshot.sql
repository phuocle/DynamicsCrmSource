


--
-- base view for SavedQuerySnapshot
--
create view dbo.[SavedQuerySnapshot]

				AS WITH snapshotcte([SavedQueryId], [SavedQueryIdUnique]) AS
				(SELECT [SavedQueryId], [SavedQueryIdUnique] FROM [SavedQueryBase] WHERE ComponentState = 4)
				SELECT      [SavedQueryId],
    [Name],
    [OrganizationId],
    [Description],
    [QueryType],
    [IsDefault],
    [ReturnedTypeCode],
    [QueryAppUsage],
    [IsUserDefined],
    [FetchXml],
    [IsCustomizable],
    [IsQuickFindQuery],
    [ColumnSetXml],
    [LayoutXml],
    [QueryAPI],
    [CreatedBy],
    [CreatedOn],
    [ModifiedBy],
    [ModifiedOn],
    [VersionNumber],
    [StateCode],
    [IsPrivate],
    [SavedQueryIdUnique],
ISNULL(cast(CASE [ComponentState] WHEN 4 THEN [SupportingSolutionId] ELSE [SolutionId] END AS uniqueidentifier), 'fd140aad-4df4-11dd-bd17-0019b9312238') AS [SolutionId], 
ISNULL(cast(CASE [ComponentState] WHEN 4 THEN (0) ELSE [OverwriteTime] END AS datetime), 0) AS [OverwriteTime], 
    [SupportingSolutionId],
ISNULL(cast(CASE [ComponentState] WHEN 4 THEN (0) ELSE [ComponentState] END AS int), 0) AS [ComponentState], 
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [AdvancedGroupBy],
    [ConditionalFormatting],
    [OrganizationTabOrder],
    [IsManaged],
    [StatusCode],
    [CanBeDeleted],
    [IntroducedVersion]
 FROM [SavedQueryBase] WHERE SavedQueryIdUnique IN (
					SELECT [SavedQueryIdUnique] FROM snapshotcte
					UNION ALL
					SELECT [SavedQueryIdUnique] FROM [SavedQuery] WHERE ComponentState IN  (0,2) -- delete or publish
					AND [SavedQueryId] NOT IN (SELECT [SavedQueryId] FROM snapshotcte)
					AND [SavedQueryId] NOT IN (SELECT ObjectId FROM DependencyNode WHERE ComponentType = 26 AND BaseSolutionId = 'd2d99874-1635-42b3-b5c9-f4f9177cf65c')
				)