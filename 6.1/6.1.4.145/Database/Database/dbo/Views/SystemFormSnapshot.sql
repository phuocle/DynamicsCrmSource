


--
-- base view for SystemFormSnapshot
--
create view dbo.[SystemFormSnapshot]

				AS WITH snapshotcte([FormId], [FormIdUnique]) AS
				(SELECT [FormId], [FormIdUnique] FROM [SystemFormBase] WHERE ComponentState = 4)
				SELECT  ISNULL(cast(CASE [ComponentState] WHEN 4 THEN (0) ELSE [ComponentState] END AS int), 0) AS [ComponentState], 
    [Description],
    [FormId],
    [FormIdUnique],
    [FormXml],
    [IsDefault],
    [Name],
    [ObjectTypeCode],
    [OrganizationId],
ISNULL(cast(CASE [ComponentState] WHEN 4 THEN (0) ELSE [OverwriteTime] END AS datetime), 0) AS [OverwriteTime], 
ISNULL(cast(CASE [ComponentState] WHEN 4 THEN [SupportingSolutionId] ELSE [SolutionId] END AS uniqueidentifier), 'fd140aad-4df4-11dd-bd17-0019b9312238') AS [SolutionId], 
    [SupportingSolutionId],
    [Type],
    [Version],
    [VersionNumber],
    [IsManaged],
    [IsCustomizable],
    [PublishedOn],
    [AncestorFormId],
    [FormXmlManaged],
    [CanBeDeleted],
    [IntroducedVersion],
    [IsAIRMerged],
    [FormPresentation],
    [FormActivationState]
 FROM [SystemFormBase] WHERE FormIdUnique IN (
					SELECT [FormIdUnique] FROM snapshotcte
					UNION ALL
					SELECT [FormIdUnique] FROM [SystemForm] WHERE ComponentState IN  (0,2) -- delete or publish
					AND [FormId] NOT IN (SELECT [FormId] FROM snapshotcte)
					AND [FormId] NOT IN (SELECT ObjectId FROM DependencyNode WHERE ComponentType = 60 AND BaseSolutionId = 'd2d99874-1635-42b3-b5c9-f4f9177cf65c')
				)