


--
-- base view for SdkMessageProcessingStepSnapshot
--
create view dbo.[SdkMessageProcessingStepSnapshot]

				AS WITH snapshotcte([SdkMessageProcessingStepId], [SdkMessageProcessingStepIdUnique]) AS
				(SELECT [SdkMessageProcessingStepId], [SdkMessageProcessingStepIdUnique] FROM [SdkMessageProcessingStepBase] WHERE ComponentState = 4)
				SELECT      [CreatedOn],
    [Configuration],
    [SupportedDeployment],
    [PluginTypeId],
    [Rank],
    [SdkMessageId],
    [ModifiedOn],
    [SdkMessageProcessingStepId],
    [Stage],
    [CreatedBy],
    [OrganizationId],
    [SdkMessageProcessingStepIdUnique],
    [FilteringAttributes],
    [CustomizationLevel],
    [ModifiedBy],
    [StateCode],
    [SdkMessageProcessingStepSecureConfigId],
    [Description],
    [VersionNumber],
    [Mode],
    [SdkMessageFilterId],
    [StatusCode],
    [ImpersonatingUserId],
    [InvocationSource],
    [ModifiedOnBehalfBy],
    [CreatedOnBehalfBy],
    [AsyncAutoDelete],
    [EventHandler],
    [EventHandlerTypeCode],
ISNULL(cast(CASE [ComponentState] WHEN 4 THEN (0) ELSE [ComponentState] END AS int), 0) AS [ComponentState], 
ISNULL(cast(CASE [ComponentState] WHEN 4 THEN (0) ELSE [OverwriteTime] END AS datetime), 0) AS [OverwriteTime], 
ISNULL(cast(CASE [ComponentState] WHEN 4 THEN [SupportingSolutionId] ELSE [SolutionId] END AS uniqueidentifier), 'fd140aad-4df4-11dd-bd17-0019b9312238') AS [SolutionId], 
    [SupportingSolutionId],
    [IsManaged],
    [Name],
    [IsCustomizable],
    [IsHidden],
    [IntroducedVersion]
 FROM [SdkMessageProcessingStepBase] WHERE SdkMessageProcessingStepIdUnique IN (
					SELECT [SdkMessageProcessingStepIdUnique] FROM snapshotcte
					UNION ALL
					SELECT [SdkMessageProcessingStepIdUnique] FROM [SdkMessageProcessingStep] WHERE ComponentState IN  (0,2) -- delete or publish
					AND [SdkMessageProcessingStepId] NOT IN (SELECT [SdkMessageProcessingStepId] FROM snapshotcte)
					AND [SdkMessageProcessingStepId] NOT IN (SELECT ObjectId FROM DependencyNode WHERE ComponentType = 92 AND BaseSolutionId = 'd2d99874-1635-42b3-b5c9-f4f9177cf65c')
				)