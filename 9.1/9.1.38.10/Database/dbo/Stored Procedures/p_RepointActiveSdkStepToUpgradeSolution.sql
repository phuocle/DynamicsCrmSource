

CREATE procedure [dbo].[p_RepointActiveSdkStepToUpgradeSolution]
(
	@SolutionName nvarchar(max)
)
as
BEGIN
	DECLARE @ActiveSolutionId uniqueidentifier
	DECLARE @TargetSolutionId uniqueidentifier
	SELECT @ActiveSolutionId = SolutionId FROM SolutionBase WHERE uniquename = 'Active'
	SELECT @TargetSolutionId = SolutionId FROM SolutionBase WHERE uniquename = @SolutionName -- input parameter
	BEGIN TRY
		BEGIN TRANSACTION
		--Create the following temporary tables
		-- #TempTable_SdkMessageProcessingStepBase_Upgrade: Table with rows in SdkMessageProcessingStepBase associated with a Upgrade solution that is also associated with an Active solution.
		-- #TempTable_SdkMessageProcessingStepBase_Active: Table with rows in SdkMessageProcessingStepBase associated with an Active solution that is also associated with an Upgrade solution.
		-- #TempTable_DependencyBase: Table with rows in DependencyBase which are dependencies of the form (SdkMessageProcessingSteps -> PluginTypes) created by the customizations that need to be deleted.  
		CREATE TABLE #TempTable_SdkMessageProcessingStepBase_Upgrade (SdkMessageProcessingStepIdUnique uniqueidentifier, SdkMessageProcessingStepId uniqueidentifier, PluginTypeId uniqueidentifier, EventHandler uniqueidentifier)
		CREATE TABLE #TempTable_SdkMessageProcessingStepBase_Active (SdkMessageProcessingStepIdUnique uniqueidentifier, SdkMessageProcessingStepId uniqueidentifier)
		CREATE TABLE #TempTable_DependencyBase (DependentComponentNodeId uniqueidentifier, OldRequiredComponentNodeId uniqueidentifier, NewRequiredComponentNodeId uniqueidentifier)
    
		INSERT INTO #TempTable_SdkMessageProcessingStepBase_Upgrade (SdkMessageProcessingStepIdUnique, SdkMessageProcessingStepId, PluginTypeId, EventHandler)
			SELECT SdkMessageProcessingStepIdUnique, SdkMessageProcessingStepId, PluginTypeId, EventHandler FROM SdkMessageProcessingStepBase WHERE SolutionId = @TargetSolutionId and 
				SdkMessageProcessingStepId IN 
					(SELECT SdkMessageProcessingStepId FROM SdkMessageProcessingStepBase WHERE SolutionId = @ActiveSolutionId and OverwriteTime = '1900-01-01 00:00:00.000')
                    
		INSERT INTO #TempTable_SdkMessageProcessingStepBase_Active (SdkMessageProcessingStepIdUnique, SdkMessageProcessingStepId)
			SELECT SdkMessageProcessingStepIdUnique, SdkMessageProcessingStepId FROM SdkMessageProcessingStepBase WHERE SolutionId = @ActiveSolutionId and 
				SdkMessageProcessingStepId IN 
					(SELECT SdkMessageProcessingStepId FROM #TempTable_SdkMessageProcessingStepBase_Upgrade)
                    
		INSERT INTO #TempTable_DependencyBase (DependentComponentNodeId, OldRequiredComponentNodeId, NewRequiredComponentNodeId)
			SELECT dnb1.DependencyNodeId,dnb2.DependencyNodeId, dnb3.DependencyNodeId FROM SdkMessageProcessingStepBase smpsb 
			JOIN DependencyNodeBase dnb1 ON smpsb.SdkMessageProcessingStepId = dnb1.ObjectId
			JOIN DependencyNodeBase dnb2 ON smpsb.PluginTypeId = dnb2.ObjectId  
			JOIN #TempTable_SdkMessageProcessingStepBase_Upgrade smpsu on smpsu.SdkMessageProcessingStepId = smpsb.SdkMessageProcessingStepId
			JOIN DependencyNodeBase dnb3 ON smpsu.PluginTypeId = dnb3.ObjectId          
			WHERE smpsb.SdkMessageProcessingStepIdUnique IN (SELECT SdkMessageProcessingStepIdUnique FROM #TempTable_SdkMessageProcessingStepBase_Active)
		
		--Updating the active layer.
		Update SdkMessageProcessingStepBase
		Set PluginTypeId = s3.PluginTypeId, EventHandler = s3.EventHandler
		from SdkMessageProcessingStepBase s1
		join  #TempTable_SdkMessageProcessingStepBase_Active s2 on s1.SdkMessageProcessingStepIdUnique = s2.SdkMessageProcessingStepIdUnique
		join #TempTable_SdkMessageProcessingStepBase_Upgrade s3 on s3.SdkMessageProcessingStepId = s1.SdkMessageProcessingStepId
		where s1.SolutionId = @ActiveSolutionId
		-- Updating Dependencies between SdkMessageProcessingSteps and PluginTypes
		Update DependencyBase 
		set RequiredComponentNodeId = tempdb.NewRequiredComponentNodeId
		from DependencyBase db
		JOIN #TempTable_DependencyBase tempdb ON db.DependentComponentNodeId=tempdb.DependentComponentNodeId AND db.RequiredComponentNodeId=tempdb.OldRequiredComponentNodeId

		--Get records that been updated
		SELECT SdkMessageProcessingStepId, PluginTypeId, EventHandler FROM #TempTable_SdkMessageProcessingStepBase_Upgrade

		DROP TABLE #TempTable_SdkMessageProcessingStepBase_Upgrade
		DROP TABLE #TempTable_SdkMessageProcessingStepBase_Active
		DROP TABLE #TempTable_DependencyBase
		COMMIT TRANSACTION
	END TRY
	BEGIN CATCH
		IF @@TRANCOUNT > 0
			BEGIN
				Print 'An error occured. Rolling back transaction'
				ROLLBACK TRANSACTION;
			END
	END CATCH;
End


