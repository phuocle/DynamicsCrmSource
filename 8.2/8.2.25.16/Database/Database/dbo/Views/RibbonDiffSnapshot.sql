


--
-- base view for RibbonDiffSnapshot
--
create view dbo.[RibbonDiffSnapshot]

				AS WITH snapshotcte([RibbonDiffId], [RibbonDiffUniqueId]) AS
				(SELECT [RibbonDiffId], [RibbonDiffUniqueId] FROM [RibbonDiffBase] WHERE ComponentState = 4)
				SELECT      [TabId],
    [RDX],
    [ContextGroupId],
    [OrganizationId],
    [VersionNumber],
    [RibbonDiffUniqueId],
    [Entity],
    [Sequence],
    [RibbonDiffId],
    [DiffType],
ISNULL(cast(CASE [ComponentState] WHEN 4 THEN [SupportingSolutionId] ELSE [SolutionId] END AS uniqueidentifier), 'fd140aad-4df4-11dd-bd17-0019b9312238') AS [SolutionId], 
    [SupportingSolutionId],
ISNULL(cast(CASE [ComponentState] WHEN 4 THEN (0) ELSE [ComponentState] END AS int), 0) AS [ComponentState], 
ISNULL(cast(CASE [ComponentState] WHEN 4 THEN (0) ELSE [OverwriteTime] END AS datetime), 0) AS [OverwriteTime], 
    [RibbonCustomizationId],
    [DiffId],
    [IsManaged]
 FROM [RibbonDiffBase] WHERE RibbonDiffUniqueId IN (
					SELECT [RibbonDiffUniqueId] FROM snapshotcte
					UNION ALL
					SELECT [RibbonDiffUniqueId] FROM [RibbonDiff] WHERE ComponentState IN  (0,2) -- delete or publish
					AND [RibbonDiffId] NOT IN (SELECT [RibbonDiffId] FROM snapshotcte)
					AND [RibbonDiffId] NOT IN (SELECT ObjectId FROM DependencyNode WHERE ComponentType = 55 AND BaseSolutionId = 'd2d99874-1635-42b3-b5c9-f4f9177cf65c')
				)