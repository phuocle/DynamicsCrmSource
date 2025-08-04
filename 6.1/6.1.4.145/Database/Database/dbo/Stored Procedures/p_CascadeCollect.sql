
	
create proc p_CascadeCollect
(
    @operation_type nvarchar(15),
    @root_entity_otc int,
    @root_entity_oid uniqueidentifier,
    @isOffline int,
    @old_owner uniqueidentifier,
	@old_owner_type int
)
as
begin
    set nocount on
    
    if(@operation_type = N'CascadeAssign')
    begin
        insert into #CascadeCollectAssign select o, t, q, s, y, l
                 from dbo.fn_CollectForCascadeAssign
                 (@root_entity_oid
                 ,@root_entity_otc
                 ,@isOffline
                 ,@old_owner
                 )
    end
    else if(@operation_type = N'CascadeReparent')
    begin
        insert into #CascadeCollectReparent select distinct o, t, u, v, q, s, l
                 from dbo.fn_CollectForCascadeReparent
                 (@root_entity_oid
                 ,@root_entity_otc
                 ,@isOffline
                 ,@old_owner
				 ,@old_owner_type
                 )
    end
    else if(@operation_type = N'CascadeShare')
    begin
        insert into #CascadeCollect select distinct o, t
                 from dbo.fn_CollectForCascadeShare
                 (@root_entity_oid
                 ,@root_entity_otc
                 ,@isOffline
                 ,@old_owner
                 )
    end
    else if(@operation_type = N'CascadeUnShare')
    begin
        insert into #CascadeCollect select distinct o, t
                 from dbo.fn_CollectForCascadeUnShare
                 (@root_entity_oid
                 ,@root_entity_otc
                 ,@isOffline
                 ,@old_owner
                 )
    end
    else
        RAISERROR ('invalid cascade operation', 16, 1)	
end