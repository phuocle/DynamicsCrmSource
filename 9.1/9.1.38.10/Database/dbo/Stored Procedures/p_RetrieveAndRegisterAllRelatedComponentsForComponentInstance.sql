/*
	Procedure reponsible for loading all related components to a particular component instance.
*/
CREATE   PROCEDURE dbo.p_RetrieveAndRegisterAllRelatedComponentsForComponentInstance(
								@TargetComponentId UNIQUEIDENTIFIER,
								@TargetComponentType INT,
								@TargetSolutionId UNIQUEIDENTIFIER)
AS
BEGIN
	
	DECLARE @Components TABLE (ObjectId UNIQUEIDENTIFIER, ComponentType INT)
	DECLARE @ActiveSolutionId UNIQUEIDENTIFIER = 'FD140AAE-4DF4-11DD-BD17-0019B9312238'
	DECLARE @SystemUserId UNIQUEIDENTIFIER 
	DECLARE @ComponentId UNIQUEIDENTIFIER 
	DECLARE @ComponentType INT

	-- Loading all related components to the component instance declared as input
	INSERT INTO @Components 
	SELECT DISTINCT DependentComponentObjectId, DependentComponentType FROM Dependency 
				-- Retrieve all components that declare the target component instance as a required component
				WHERE RequiredComponentObjectId = @TargetComponentId AND
						-- Only load related components with an active customization being consumed by runtime
						EXISTS (SELECT 1 FROM DependencyNode WHERE ObjectId = DependentComponentObjectId AND ComponentType = DependentComponentType AND TopSolutionId = @ActiveSolutionId) AND
						-- Only load related components that reference the target component instance via a Parent-Child or N:N relationship
						DependentComponentType IN
						(SELECT SCD1.SolutionComponentType FROM SolutionComponentDefinition SCD1
							JOIN EntityView EV1 ON SCD1.PrimaryEntityName = EV1.LogicalName
							JOIN EntityRelationshipRoleView ERRV1 ON ERRV1.EntityId = EV1.EntityId
							JOIN EntityRelationshipRoleView ERRV2 ON ERRV2.EntityRelationshipId = ERRV1.EntityRelationshipId
							LEFT JOIN solutioncomponentrelationshipconfiguration SCRC ON SCRC.EntityRelationshipId = ERRV2.EntityRelationshipId
							JOIN EntityView EV2 ON EV2.EntityId = ERRV2.EntityId
							JOIN SolutionComponentDefinition SCD2 ON SCD2.PrimaryEntityName = EV2.LogicalName
							-- Retrieve all child records related to the component
							WHERE SCD1.GroupParentComponentType = @TargetComponentType OR
							-- Retrieve all related components being referenced via N:N relationships
							(EV1.IsIntersect = 1 AND EV1.IsSolutionAware = 1 AND ERRV1.RelationshipRoleType = 3 AND ERRV2.RelationshipRoleType = 2 AND ERRV2.AssociationRoleOrdinal = 1 AND SCD2.SolutionComponentType = @TargetComponentType) OR
							-- Retrieve all related components where the relationship is configured to be added to the solution
							(EV1.IsSolutionAware = 1 AND ERRV1.RelationshipRoleType = 1 AND ERRV2.RelationshipRoleType = 0 AND SCRC.AddRelatedComponents = 1 AND SCD2.SolutionComponentType = @TargetComponentType))

	-- Declaring a dynamic cursor, so it's sensitive to changes to the dataset while it's opened
	-- This cursor should process each retrieved instance and check if it can have other references or not
	DECLARE ProcessingComponent CURSOR DYNAMIC FOR SELECT ObjectId, ComponentType FROM @Components
	OPEN ProcessingComponent
	FETCH NEXT FROM ProcessingComponent INTO @ComponentId, @ComponentType

	WHILE (@@FETCH_STATUS = 0)
	BEGIN
			
			-- Adding all required components of the processing instance with an active customization
			INSERT INTO @Components 
			SELECT RequiredComponentObjectId, RequiredComponentType FROM Dependency WHERE DependentComponentObjectId = @ComponentId AND 
																							NOT EXISTS (SELECT 1 FROM @Components WHERE ObjectId = RequiredComponentObjectId) AND
																							EXISTS (SELECT 1 FROM DependencyNode WHERE ObjectId = RequiredComponentObjectId AND ComponentType = RequiredComponentType AND TopSolutionId = @ActiveSolutionId)

			-- Adding all related components of the processing instance with an active customization which share a Parent-Child or N:N relationship
			INSERT INTO @Components 
			SELECT DependentComponentObjectId, DependentComponentType FROM Dependency WHERE RequiredComponentObjectId = @ComponentId AND 
																							NOT EXISTS (SELECT 1 FROM @Components WHERE ObjectId = DependentComponentObjectId) AND
																							EXISTS (SELECT 1 FROM DependencyNode WHERE ObjectId = DependentComponentObjectId AND ComponentType = DependentComponentType AND TopSolutionId = @ActiveSolutionId) AND
																							DependentComponentType IN (SELECT SCD1.SolutionComponentType FROM SolutionComponentDefinition SCD1
																															JOIN EntityView EV1 ON SCD1.PrimaryEntityName = EV1.LogicalName
																															JOIN EntityRelationshipRoleView ERRV1 ON ERRV1.EntityId = EV1.EntityId
																															JOIN EntityRelationshipRoleView ERRV2 ON ERRV2.EntityRelationshipId = ERRV1.EntityRelationshipId
																															LEFT JOIN solutioncomponentrelationshipconfiguration SCRC ON SCRC.EntityRelationshipId = ERRV2.EntityRelationshipId
																															JOIN EntityView EV2 ON EV2.EntityId = ERRV2.EntityId
																															JOIN SolutionComponentDefinition SCD2 ON SCD2.PrimaryEntityName = EV2.LogicalName
																															-- Retrieve all child records related to the component
																															WHERE SCD1.GroupParentComponentType = @ComponentType OR
																															-- Retrieve all related components being referenced via N:N relationships
																															(EV1.IsIntersect = 1 AND EV1.IsSolutionAware = 1 AND ERRV1.RelationshipRoleType = 3 AND ERRV2.RelationshipRoleType = 2 AND ERRV2.AssociationRoleOrdinal = 1 AND SCD2.SolutionComponentType = @ComponentType) OR
																															-- Retrieve all related components where the relationship is configured to be added to the solution
																															(EV1.IsSolutionAware = 1 AND ERRV1.RelationshipRoleType = 1 AND ERRV2.RelationshipRoleType = 0 AND SCRC.AddRelatedComponents = 1 AND SCD2.SolutionComponentType = @ComponentType))
			FETCH NEXT FROM ProcessingComponent INTO @ComponentId, @ComponentType
	END
	CLOSE ProcessingComponent
	DEALLOCATE ProcessingComponent

	-- Removing the target instance if it's present as there's no need to add it to the solution, given that's already present
	DELETE FROM @Components WHERE ObjectId = @TargetComponentId

	SET @SystemUserId = (SELECT TOP(1) SystemUserId FROM SystemUser WHERE LastName = 'SYSTEM')

	-- Insert all SCF components to the SolutionComponent table due to the fact that all of them are root and have the same behavior
	-- Adding those records in bulk skips the pipeline overhead
	INSERT INTO [dbo].[SolutionComponentBase]
           ([ModifiedOn],[RootSolutionComponentId],[ComponentType],[CreatedBy],[IsMetadata],[ModifiedBy],[RootComponentBehavior],[SolutionComponentId],[SolutionId],[ObjectId],[CreatedOn],[CreatedOnBehalfBy],[ModifiedOnBehalfBy])
	SELECT GETDATE(), null, ComponentType, @SystemUserId, 0, @SystemUserId, 0, NEWID(), @TargetSolutionId, ObjectId, GETDATE(), null, null  FROM @Components 
	WHERE ComponentType IN (SELECT DISTINCT SolutionComponentType FROM SolutionComponentDefinition) AND ObjectId NOT IN (SELECT ObjectId FROM SolutionComponentBase WHERE SolutionId = @TargetSolutionId)

	-- Retrieve all remaining records (legacy components) for full pipeline processing
	SELECT ObjectId, ComponentType FROM @Components 
		WHERE ComponentType NOT IN (SELECT DISTINCT SolutionComponentType FROM SolutionComponentDefinition) 
END
