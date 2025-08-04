

create procedure p_GetNewValueFromAuditTrail(
		@objectId uniqueidentifier,
		@objectTypeCode int,
		@attributeColumnNumber nvarchar(max),
		@oldValueCreatedOn datetime,
		@oldValueAuditId uniqueidentifier
)
as
begin

set nocount on

-- The stored proc will return the attribute mask and change data
-- for the new value when the following conditions are met:
-- 1. There exists a new value row for the attribute in the audit trail
-- AND
-- 2. There is no change in the audit settings that effect the 
--	  the attribute we are retrieving
--    The following are the changes that effect the auditing of a give attribute
--		2.1 Turn-on off the IsAuditEnabled flag (A turn of this flag is 
--			captured only when it is previously turned off. So, just checking for
--			turn on event is enough here). 
--			This checked by seeing id the attributemask contains column numnber and action is 103 (AuditAction.UpdateAttribute)
--		2.2 Change to the IsAuditEnabled flag of the entity (checked by action = 102(AuditAction.UpdateEntity) cond)
--		2.3 Change to the organization audit flags (checked by ObjectTypeCode = 1019 and [action] = 104(AuditAction.UpdateOrganizationSettings) condition)


declare @newValueAttributeMask nvarchar(max)
declare @newValueChangeData nvarchar(max)
declare @newValueCreatedOn datetime
declare @newValueAuditId uniqueidentifier
declare @emptyId uniqueidentifier

set @emptyId = '00000000-0000-0000-0000-000000000000'

-- Fetch the new value record's attribute mask, change data and created on
select top 1 @newValueAttributeMask = [AttributeMask],
@newValueChangeData = [ChangeData],
@newValueCreatedOn = [CreatedOn],
@newValueAuditId = [AuditId]
from AuditBase
where
ObjectTypeCode = @objectTypeCode and
ObjectId = @objectId and
(CreatedOn > @oldValueCreatedOn or (CreatedOn = @oldValueCreatedOn and AuditId > @oldValueAuditId)) and
AttributeMask like '%,'+  @attributeColumnNumber + ',%'
order by CreatedOn asc,AuditId asc

-- If the new value record was not found check for metadata changes till current date
if @@ROWCOUNT != 1
begin
	if EXISTS
	(select 1 from AuditBase
	 where
	 ((ObjectId = @emptyId and
	 ObjectTypeCode = @objectTypeCode and
	 ([Action] = 103 and 	 AttributeMask like '%,' + @attributeColumnNumber + ',%' 	 and ChangeData = 'false')) -- checking attribute level audit flag changes
	 or (ObjectId = @emptyId and ObjectTypeCode = @objectTypeCode and [Action] = 102) -- To check entity level audit flag changes
	 or (ObjectTypeCode = 1019 and [Action] = 104 and  AttributeMask like '%,156,%')) -- To check organization audit flags
	and
	 ((CreatedOn = @oldValueCreatedOn and AuditId > @oldValueAuditId) or (CreatedOn > @oldValueCreatedOn))
	 )
	begin
		select 'InvalidMask' as 'AttributeMask', null as 'ChangeData', @attributeColumnNumber as 'ColumnNumber'
		return
	end
end
else
begin
	if EXISTS
	(select 1 from AuditBase
	 where
		 (	(ObjectId = @emptyId and
				 ObjectTypeCode = @objectTypeCode and
				 ([Action] = 103 and 	 AttributeMask like '%,' + @attributeColumnNumber + ',%' 	 and ChangeData = 'false')) -- checking attribute level audit flag changes
			or (ObjectId = @emptyId and ObjectTypeCode = @objectTypeCode and [Action] = 102) -- To check entity level audit flag changes
			or (ObjectTypeCode = 1019 and [Action] = 104 and  AttributeMask like '%,156,%') -- To check organization audit flags
		)
		and ((CreatedOn > @oldValueCreatedOn and CreatedOn < @newValueCreatedOn) 
				or (CreatedOn = @oldValueCreatedOn and AuditId > @oldValueAuditId) 
				or ( CreatedOn = @newValueCreatedOn and AuditId < @newValueAuditId))
	)
	begin
		select 'InvalidMask' as 'AttributeMask', null as 'ChangeData', @attributeColumnNumber as 'ColumnNumber'
		return
	end
end

begin
	select @newValueAttributeMask as 'AttributeMask', @newValueChangeData as 'ChangeData', @attributeColumnNumber as 'ColumnNumber'
	return
end
end