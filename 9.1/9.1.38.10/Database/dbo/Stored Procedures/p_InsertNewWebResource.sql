
CREATE PROCEDURE dbo.p_InsertNewWebResource(
	@webresourceid UNIQUEIDENTIFIER,
	@fileName SYSNAME,
	@isManaged BIT,
	@webResourceType INT,
	@orgId UNIQUEIDENTIFIER,
	@name SYSNAME,
	@isHidden BIT,
	@canBeDeleted BIT,
	@isCustomizable BIT,
	@content varchar(max),
	@description nvarchar(max),
	@introducedVersion nvarchar(96),
	@introducedVersionFloat FLOAT,
	@adminUserId UNIQUEIDENTIFIER,
	@systemUserId UNIQUEIDENTIFIER,
	@solutionId UNIQUEIDENTIFIER
) AS
BEGIN
	DECLARE @emptyGuid UNIQUEIDENTIFIER
	SET @emptyGuid = '00000000-0000-0000-0000-000000000000'

	IF NOT EXISTS (SELECT 1 FROM WebResourceBase WHERE WebResourceId = @webresourceid)
	BEGIN
		INSERT INTO WebResourceBaseIds (WebResourceId) VALUES(@webresourceid)
		INSERT INTO WebResourceBase(Name, IsManaged, WebResourceType, ComponentState, ModifiedOn, OrganizationId, WebResourceIdUnique, DisplayName, IsHidden, WebResourceId, CreatedOn, CanBeDeleted, IsCustomizable, Content, [Description], IntroducedVersion, CreatedBy, ModifiedBy, CreatedOnBehalfBy, ModifiedOnBehalfBy, SolutionId)
		VALUES (@fileName, @isManaged, @webResourceType, '0', getutcdate(), @orgId, newid(), @name, @isHidden, @webresourceid, getutcdate(),@canBeDeleted, @isCustomizable, @content, @description, @introducedVersion, @adminUserId, @adminUserId,  @systemUserId,  @systemUserId, @solutionId)
		INSERT INTO DependencyNodeBase(BaseSolutionId, TopSolutionId, ParentId, DependencyNodeId, ComponentType, ObjectId, IsSharedComponent, IntroducedVersion)
		VALUES (@solutionId, @solutionId, @emptyGuid, NEWID(), 61, @webresourceid, 0, @introducedVersionFloat)
		INSERT INTO SolutionComponentBase(SolutionComponentId, SolutionId, ComponentType, IsMetadata, ObjectId, ModifiedOn, ModifiedBy, CreatedOn, CreatedBy)
		VALUES (NEWID(), @solutionId, 61, 0, @webresourceid, getutcdate(), @systemUserId, getutcdate(), @systemUserId)
	END
END