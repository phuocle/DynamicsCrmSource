SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


CREATE   PROCEDURE [dbo].[p_CleanupInactiveWorkflowAssemblies] as

BEGIN
SET NOCOUNT ON
begin tran

DECLARE @ActivationsToDelete TABLE
(
	WorkflowId UNIQUEIDENTIFIER
)

INSERT @ActivationsToDelete
SELECT WorkflowId 
FROM WorkflowBase
WHERE
	Type = 2 -- it's a workflow activation
AND (Category = 0 OR Category = 2 OR Category = 3)
AND	StateCode = 0 -- not active
AND	WorkflowId NOT IN
	(SELECT WorkflowActivationId FROM AsyncOperationBase
	WHERE OperationType = 10
	AND WorkflowActivationId IS NOT NULL)

DELETE FROM WorkflowDependencyBase WHERE WorkflowId IN 
	(SELECT WorkflowId from @ActivationsToDelete)
	
DELETE FROM DependencyBase WHERE DependentComponentNodeId IN 
(SELECT DependencyNodeId FROM DependencyNodeBase WHERE ObjectId IN
(SELECT WorkflowId from @ActivationsToDelete))

DELETE FROM DependencyNodeBase WHERE 
	ComponentType = 29 AND
	ObjectId IN
	(SELECT WorkflowId from @ActivationsToDelete)

DELETE FROM WorkflowBase WHERE WorkflowId IN 
	(SELECT WorkflowId from @ActivationsToDelete)

commit tran

END

GO
