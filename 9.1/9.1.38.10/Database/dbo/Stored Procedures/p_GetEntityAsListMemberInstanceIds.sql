

CREATE PROCEDURE [dbo].[p_GetEntityAsListMemberInstanceIds](
	@listId UNIQUEIDENTIFIER, 
	@entityId UNIQUEIDENTIFIER) 

AS
BEGIN
	SET NOCOUNT ON	

	SELECT ListMemberId AS 'listmemberid'
	FROM ListMemberBase
	WHERE ListId = @listId and EntityId = @entityId		
END