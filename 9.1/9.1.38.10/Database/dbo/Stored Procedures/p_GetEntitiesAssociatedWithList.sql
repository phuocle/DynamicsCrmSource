
  
CREATE PROCEDURE [dbo].[p_GetEntitiesAssociatedWithList](  
 @listId UNIQUEIDENTIFIER,   
 @entityIds ntext)   
  
AS  
BEGIN  
    
 declare @EntityIdsCollection EntityIdCollection;  
  
 insert into @EntityIdsCollection(id) select id from fn_GetGuidsFromString(@entityIds);  
  
 SET NOCOUNT ON   
  
 SELECT ListMemberId AS 'listmemberid', EntityId  AS 'entityid'
 FROM ListMemberBase   
 WHERE ListId = @listId and EXISTS (select 1 from  @EntityIdsCollection T where T.id = EntityId)  
END  
  
  
  