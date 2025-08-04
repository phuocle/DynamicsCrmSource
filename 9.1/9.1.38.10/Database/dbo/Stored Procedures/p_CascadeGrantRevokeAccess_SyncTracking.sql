

create procedure [dbo].[p_CascadeGrantRevokeAccess_SyncTracking](
    @updateVersionNumberOfSyncableEntitiesOnly bit = 0)
as;
begin;
    set nocount on;

    -- WARNING: any change into the logic for activities should be matched with a change into the
    -- BusinessProcessObject.DoRetrieveSharedPrincipals method (file: src\ManagedPlatform\Server\BusinessProcessObject.cs).
    -- In both places if the entity instance is an activity then we use the ObjectTypeCode of the base ActivityPointer entity (4200).
    --

	-- Track sync changes for entities only if there is an Outlook subscription
	if (not exists(select top(1) 1 from Subscription))
	    return;
        
	DECLARE @ObjectTypeCode INT
	DECLARE @BaseTableName sysname
	DECLARE @PrimaryKeyName sysname
	DECLARE @sql nvarchar(2000)
	DECLARE @OriginalActivityObjectType INT

    IF (@updateVersionNumberOfSyncableEntitiesOnly = 0) -- Update all entities
    BEGIN
	    DECLARE MyCursor CURSOR LOCAL FORWARD_ONLY FOR 
				SELECT distinct objecttype, basetablename, tablecolumnname FROM #CascadeCollect
			
		OPEN MyCursor
		FETCH NEXT FROM MyCursor INTO @ObjectTypeCode, @BaseTableName, @PrimaryKeyName
		WHILE @@FETCH_STATUS = 0
		BEGIN
			-- For all entities with current OTC get OwnerIdType from base table and update to same value. 
			-- Update will change VersionNumber which is used for tracking. 
			-- NOTE: Can't parameterize update statement with dynamic table name
			set @sql = 'update ' + @BaseTableName + ' set OwnerIdType = OwnerIdType where '
				+ @PrimaryKeyName + ' in (select objectid from #CascadeCollect where objecttype = '+ cast(@ObjectTypeCode as nvarchar(20)) +')'

			exec sp_executesql @sql
			
    		FETCH NEXT FROM MyCursor INTO @ObjectTypeCode, @BaseTableName, @PrimaryKeyName
		END

		CLOSE MyCursor
		DEALLOCATE MyCursor
    END
    ELSE -- Update only Account, Contact and Activity entities which is needed for Outlook Sync (SSS)
    BEGIN
	    DECLARE MyCursor CURSOR LOCAL FORWARD_ONLY FOR 
				SELECT distinct objecttype, basetablename, tablecolumnname FROM #CascadeCollect
				WHERE objecttype in (1,2,4200) -- Account, Contact and Activity
			
		OPEN MyCursor
		FETCH NEXT FROM MyCursor INTO @ObjectTypeCode, @BaseTableName, @PrimaryKeyName
		WHILE @@FETCH_STATUS = 0
		BEGIN
			IF (@ObjectTypeCode = 4200) -- Activity
			BEGIN
				-- For all activity entities with current OTC get OwnerIdType from base table and update to same value. 
				-- Update will change VersionNumber which is used for tracking. 

				-- Only perform update for following activities
				--	Name							ObjectTypeCode
				--	Appointment						4201
				--	Fax								4204
				--	Letter							4207
				--	PhoneCall						4210
				--	Task							4212
				--	ServiceAppointment				4214
				--	RecurringAppointmentMaster		4251
				set @sql = 'update ActivityPointerBase set OwnerIdType = OwnerIdType where ActivityId in (select objectid from #CascadeCollect where originalactivityobjecttype in (4201,4204,4207,4210,4212,4214,4251))'

			END
			ELSE IF (@ObjectTypeCode = 1) -- Account Entity
			BEGIN
				-- For all Account records with current OTC get OwnerIdType from base table and update to same value. 
				-- Update will change VersionNumber which is used for tracking. 
				set @sql = 'update AccountBase set OwnerIdType = OwnerIdType where AccountId in (select objectid from #CascadeCollect where objecttype = 1)'

			END
			ELSE -- Contact Entity
			BEGIN
				-- For all Contact records with current OTC get OwnerIdType from base table and update to same value. 
				-- Update will change VersionNumber which is used for tracking. 
				set @sql = 'update ContactBase set OwnerIdType = OwnerIdType where ContactId in (select objectid from #CascadeCollect where objecttype = 2)'

			END
			exec sp_executesql @sql
			
    		FETCH NEXT FROM MyCursor INTO @ObjectTypeCode, @BaseTableName, @PrimaryKeyName
		END

		CLOSE MyCursor
		DEALLOCATE MyCursor
    END
END