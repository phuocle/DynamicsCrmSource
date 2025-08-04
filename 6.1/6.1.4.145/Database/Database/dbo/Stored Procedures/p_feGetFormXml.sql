

create procedure [dbo].[p_feGetFormXml](@entityname nvarchar(255)) as
set nocount on

set nocount on

set nocount on

declare @entityid uniqueidentifier

select @entityid = EntityId
from EntityView
where LogicalName = @entityname

select 
	1 as tag,
	null as parent,
	EntityId as [entity!1!enityid!hide],
	LogicalName as [entity!1!name],
	ObjectTypeCode as [entity!1!otc],
	null as [fields!2!name],
	null as [field!3!entityid!hide],
	null as [field!3!name],
	null as [field!3!localizedname],
	null as [field!3!description],
	null as [field!3!requiredforplatform],
	null as [field!3!requiredforgrid],
	null as [field!3!requiredforform],
	null as [field!3!validforadvancedfind],
	null as [field!3!validforgrid],
	null as [field!3!validforform],
	null as [field!3!validforcreateapi],
	null as [field!3!validforupdateapi],
	null as [field!3!validforreadapi],
	null as [field!3!maxlength],
	null as [field!3!datatype],
    null as [field!3!objecttypecode],
	null as [field!3!customfield]
from EntityView
where EntityId = @entityid

union all

select
	2 as tag,
	1 as parent,
	EntityId,
	null, -- entity name
	null, -- entity ot code
	null, -- fields name
	null, -- entity id
	null, -- field name
	null, -- localized name
	null, -- description
	null, -- required platform
	null, -- required grid
	null, -- required form
	null, -- valid advanced find
	null, -- valid grid
	null, -- valid form
	null, -- valid create
	null, -- valid update
	null, -- valid read
	null, -- max length
	null, -- data type
    null,  -- field otc
    null  -- is custom field
from EntityView
where EntityId = @entityid
	
union all

select
	3 as tag,
	2 as parent,
	EntityId,
	null, -- entity name
	null, -- entity ot code
	null, -- fields name
	null, -- entityid
	AttributeName,
	LocalizedName,
	cast(Description as nvarchar(255)),
	IsRequiredByPlatform, 
	IsRequiredForGrid, 
	IsRequiredForForm,
	IsValidForAdvancedFind, 
	ValidForGrid, 
	ValidForForm,	
	ValidForCreate,
	ValidForUpdate,
	ValidForRead,
	MaxLength,
    Datatype,
    ObjectTypeCode,
	IsCustomField
from v_attributeobjecttypes
where EntityId = @entityid

order by [entity!1!enityid!hide], [field!3!name], parent

for xml explicit
