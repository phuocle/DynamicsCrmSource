


--
-- base view for SavedQueryVisualizationSnapshot
--
create view dbo.[SavedQueryVisualizationSnapshot]

				AS WITH snapshotcte([SavedQueryVisualizationId], [SavedQueryVisualizationIdUnique]) AS
				(SELECT [SavedQueryVisualizationId], [SavedQueryVisualizationIdUnique] FROM [SavedQueryVisualizationBase] WHERE ComponentState = 4)
				SELECT      [CreatedOn],
    [OrganizationId],
    [SavedQueryVisualizationId],
    [CreatedBy],
    [ModifiedBy],
    [ModifiedOn],
    [VersionNumber],
    [PrimaryEntityTypeCode],
    [Name],
    [DataDescription],
    [IsDefault],
    [Description],
    [PresentationDescription],
    [SavedQueryVisualizationIdUnique],
ISNULL(cast(CASE [ComponentState] WHEN 4 THEN (0) ELSE [ComponentState] END AS int), 0) AS [ComponentState], 
ISNULL(cast(CASE [ComponentState] WHEN 4 THEN (0) ELSE [OverwriteTime] END AS datetime), 0) AS [OverwriteTime], 
ISNULL(cast(CASE [ComponentState] WHEN 4 THEN [SupportingSolutionId] ELSE [SolutionId] END AS uniqueidentifier), 'fd140aad-4df4-11dd-bd17-0019b9312238') AS [SolutionId], 
    [SupportingSolutionId],
    [ModifiedOnBehalfBy],
    [CreatedOnBehalfBy],
    [IsManaged],
    [IsCustomizable],
    [WebResourceId],
    [IntroducedVersion]
 FROM [SavedQueryVisualizationBase] WHERE SavedQueryVisualizationIdUnique IN (
					SELECT [SavedQueryVisualizationIdUnique] FROM snapshotcte
					UNION ALL
					SELECT [SavedQueryVisualizationIdUnique] FROM [SavedQueryVisualization] WHERE ComponentState IN  (0,2) -- delete or publish
					AND [SavedQueryVisualizationId] NOT IN (SELECT [SavedQueryVisualizationId] FROM snapshotcte)
					AND [SavedQueryVisualizationId] NOT IN (SELECT ObjectId FROM DependencyNode WHERE ComponentType = 59 AND BaseSolutionId = 'd2d99874-1635-42b3-b5c9-f4f9177cf65c')
				)