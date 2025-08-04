


--
-- base view for RibbonCommandSnapshot
--
create view dbo.[RibbonCommandSnapshot]

				AS WITH snapshotcte([RibbonCommandId], [RibbonCommandUniqueId]) AS
				(SELECT [RibbonCommandId], [RibbonCommandUniqueId] FROM [RibbonCommandBase] WHERE ComponentState = 4)
				SELECT      [CommandDefinition],
    [Entity],
    [RibbonCommandUniqueId],
    [Command],
    [VersionNumber],
    [OrganizationId],
    [RibbonCommandId],
ISNULL(cast(CASE [ComponentState] WHEN 4 THEN [SupportingSolutionId] ELSE [SolutionId] END AS uniqueidentifier), 'fd140aad-4df4-11dd-bd17-0019b9312238') AS [SolutionId], 
    [SupportingSolutionId],
ISNULL(cast(CASE [ComponentState] WHEN 4 THEN (0) ELSE [ComponentState] END AS int), 0) AS [ComponentState], 
ISNULL(cast(CASE [ComponentState] WHEN 4 THEN (0) ELSE [OverwriteTime] END AS datetime), 0) AS [OverwriteTime], 
    [RibbonCustomizationId],
    [IsManaged]
 FROM [RibbonCommandBase] WHERE RibbonCommandUniqueId IN (
					SELECT [RibbonCommandUniqueId] FROM snapshotcte
					UNION ALL
					SELECT [RibbonCommandUniqueId] FROM [RibbonCommand] WHERE ComponentState IN  (0,2) -- delete or publish
					AND [RibbonCommandId] NOT IN (SELECT [RibbonCommandId] FROM snapshotcte)
					AND [RibbonCommandId] NOT IN (SELECT ObjectId FROM DependencyNode WHERE ComponentType = 48 AND BaseSolutionId = 'd2d99874-1635-42b3-b5c9-f4f9177cf65c')
				)