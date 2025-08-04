


--
-- base view for SiteMapSnapshot
--
create view dbo.[SiteMapSnapshot]

				AS WITH snapshotcte([SiteMapId], [SiteMapIdUnique]) AS
				(SELECT [SiteMapId], [SiteMapIdUnique] FROM [SiteMapBase] WHERE ComponentState = 4)
				SELECT  ISNULL(cast(CASE [ComponentState] WHEN 4 THEN (0) ELSE [ComponentState] END AS int), 0) AS [ComponentState], 
    [OrganizationId],
ISNULL(cast(CASE [ComponentState] WHEN 4 THEN (0) ELSE [OverwriteTime] END AS datetime), 0) AS [OverwriteTime], 
    [SiteMapId],
    [SiteMapIdUnique],
    [SiteMapXml],
ISNULL(cast(CASE [ComponentState] WHEN 4 THEN [SupportingSolutionId] ELSE [SolutionId] END AS uniqueidentifier), 'fd140aad-4df4-11dd-bd17-0019b9312238') AS [SolutionId], 
    [SupportingSolutionId],
    [VersionNumber],
    [IsManaged],
    [SiteMapXmlManaged]
 FROM [SiteMapBase] WHERE SiteMapIdUnique IN (
					SELECT [SiteMapIdUnique] FROM snapshotcte
					UNION ALL
					SELECT [SiteMapIdUnique] FROM [SiteMap] WHERE ComponentState IN  (0,2) -- delete or publish
					AND [SiteMapId] NOT IN (SELECT [SiteMapId] FROM snapshotcte)
					AND [SiteMapId] NOT IN (SELECT ObjectId FROM DependencyNode WHERE ComponentType = 62 AND BaseSolutionId = 'd2d99874-1635-42b3-b5c9-f4f9177cf65c')
				)