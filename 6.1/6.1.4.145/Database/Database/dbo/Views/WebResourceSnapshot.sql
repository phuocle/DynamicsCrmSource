


--
-- base view for WebResourceSnapshot
--
create view dbo.[WebResourceSnapshot]

				AS WITH snapshotcte([WebResourceId], [WebResourceIdUnique]) AS
				(SELECT [WebResourceId], [WebResourceIdUnique] FROM [WebResourceBase] WHERE ComponentState = 4)
				SELECT      [WebResourceId],
    [Name],
    [DisplayName],
    [Description],
    [Content],
    [SilverlightVersion],
    [WebResourceType],
    [OrganizationId],
ISNULL(cast(CASE [ComponentState] WHEN 4 THEN [SupportingSolutionId] ELSE [SolutionId] END AS uniqueidentifier), 'fd140aad-4df4-11dd-bd17-0019b9312238') AS [SolutionId], 
    [SupportingSolutionId],
ISNULL(cast(CASE [ComponentState] WHEN 4 THEN (0) ELSE [OverwriteTime] END AS datetime), 0) AS [OverwriteTime], 
ISNULL(cast(CASE [ComponentState] WHEN 4 THEN (0) ELSE [ComponentState] END AS int), 0) AS [ComponentState], 
    [VersionNumber],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOn],
    [CreatedBy],
    [WebResourceIdUnique],
    [ModifiedOnBehalfBy],
    [CreatedOnBehalfBy],
    [LanguageCode],
    [IsManaged],
    [IsCustomizable],
    [CanBeDeleted],
    [IsHidden],
    [IntroducedVersion]
 FROM [WebResourceBase] WHERE WebResourceIdUnique IN (
					SELECT [WebResourceIdUnique] FROM snapshotcte
					UNION ALL
					SELECT [WebResourceIdUnique] FROM [WebResource] WHERE ComponentState IN  (0,2) -- delete or publish
					AND [WebResourceId] NOT IN (SELECT [WebResourceId] FROM snapshotcte)
					AND [WebResourceId] NOT IN (SELECT ObjectId FROM DependencyNode WHERE ComponentType = 61 AND BaseSolutionId = 'd2d99874-1635-42b3-b5c9-f4f9177cf65c')
				)