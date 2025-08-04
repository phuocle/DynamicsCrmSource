

CREATE PROCEDURE [dbo].[p_GetMarketingListMemberCount](
    @increment INT,
    @listid UNIQUEIDENTIFIER)
AS

BEGIN
    SET NOCOUNT ON

	DECLARE @memberCount INT

	IF(@increment = 0 )
	BEGIN
		SET @memberCount = (SELECT COUNT(ListMemberId) 
							FROM ListMember 
							WHERE ListId = @listid)
	END
	ELSE
	BEGIN
	    SET @memberCount = (SELECT ISNULL(MemberCount,0)
							FROM ListBase
							WHERE ListId = @listid)

		SET @memberCount = @memberCount + @increment
	END  
	
	SELECT @memberCount  
END