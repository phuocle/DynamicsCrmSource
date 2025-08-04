
	
create proc dbo.p_CascadeCollect
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
	--"set nocount on" is commented since we need the record count for Insert to # table for logging to Telemetry
    --set nocount on
    
    if(@operation_type = N'CascadeAssign')
    begin
        insert into #CascadeCollectAssign (objectid, objecttype, objectOwnerId, parentobjectid, parentobjecttype, cascading, [level])
			select o, t, u, q, s, y, l
            from dbo.fn_CollectForCascadeAssign
                 (@root_entity_oid
                 ,@root_entity_otc
                 ,@isOffline
                 ,@old_owner
                 )
    end
    else if(@operation_type = N'CascadeReparent')
    begin
        insert into #CascadeCollectReparent (objectid, objecttype, ownerid, owneridtype, parentobjectid, parentobjecttype, [level])
			select distinct o, t, u, v, q, s, l
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
        insert into #CascadeCollect (objectid, objecttype, tablecolumnname, basetablename)
			select distinct o, t, r, s
            from dbo.fn_CollectForCascadeShare
                 (@root_entity_oid
                 ,@root_entity_otc
                 ,@isOffline
                 ,@old_owner
                 )
    end
    else if(@operation_type = N'CascadeUnShare')
    begin
        insert into #CascadeCollect (objectid, objecttype, tablecolumnname, basetablename)
			select distinct o, t, r, s
            from dbo.fn_CollectForCascadeUnShare
                 (@root_entity_oid
                 ,@root_entity_otc
                 ,@isOffline
                 ,@old_owner
                 )
    end
    else
	begin
        RAISERROR ('Invalid cascade operation type : %s', 16, 1, @operation_type)	
	end
end