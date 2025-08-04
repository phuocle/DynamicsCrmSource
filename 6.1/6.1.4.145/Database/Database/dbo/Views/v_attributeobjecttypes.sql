

-- the case in this view is a total hack, it's here to capture
-- the missing CreatedBy and ModifiedBy FK constraints.
create view dbo.v_attributeobjecttypes (EntityId, 
									AttributeId, AttributeName, LocalizedName, Description, 
									ObjectTypeCode, 
									IsRequiredByPlatform, IsRequiredForGrid, IsRequiredForForm, IsValidForAdvancedFind,
									ValidForGrid, ValidForForm, ValidForRead, ValidForCreate, ValidForUpdate,
									Datatype, MaxLength, IsCustomField) as
select Attribute.EntityId, 
	   Attribute.AttributeId,
	   Attribute.LogicalName,
	   NULL,
	   LL.Label,
	   case Attribute.LogicalName
		 when 'createdby' then 8 
		 when 'modifiedby' then 8
		 else coalesce(Entity.ObjectTypeCode, 0)
	   end,
	   -- isrequiredbyplatform
	   case Attribute.IsNullable
		 when 1 then 'false'
		 else 'true'
	   end,
	   -- isrequiredforgrid
	   case cast(coalesce(Attribute.DisplayMask & 1073741824, 0) as bit)
		 when 1 then 'true'
		 else 'false'
	   end,
	   -- isrequiredforform
	   case cast(coalesce(Attribute.DisplayMask & 536870912, 0) as bit)
		 when 1 then 'true'
		 else 'false'
	   end,
	   -- isvalidforadvancedfind
	   case cast(coalesce(Attribute.DisplayMask & 67108864, 0) as bit)
		 when 1 then 'true'
		 else 'false'
	   end,
	   -- isvalidforgrid
	   case cast(coalesce(Attribute.DisplayMask & 268435456, 0) as bit)
		 when 1 then 'true'
		 else 'false'
	   end,
	   -- isvalidforform
	   case cast(coalesce(Attribute.DisplayMask & 134217728, 0) as bit)
		 when 1 then 'true'
		 else 'false'
	   end,
	   -- validforread
	   case Attribute.ValidForReadAPI
		 when 1 then 'true'
		 else 'false'
	   end,
	   -- validforcreate
	   case Attribute.ValidForCreateAPI
		 when 1 then 'true'
		 else 'false'
	   end,
	   -- validforupdate
	   case Attribute.ValidForUpdateAPI
		 when 1 then 'true'
		 else 'false'
	   end,
	   case AttributeTypes.Description
		when 'nvarchar' then 'text'
		when 'ntext' then 'memo'
		when 'int' then 'integer'
		when 'float' then 'float'
		when 'decimal' then 'decimal'
		when 'bit' then 'boolean'
		when 'datetime' then 'datetime'
		when 'lookup' then 'lookup'
		when 'uniqueidentifier' then 'uniqueidentifier'
		when 'picklist' then 'picklist'
		when 'money' then 'money'
		when 'state' then 'state'
		when 'status' then 'status'
		when 'primarykey' then 'primarykey'
		when 'virtual' then 'string'
		when 'customer' then 'customer'
		when 'owner' then 'owner'
		when 'timezone' then 'timezone'
		when 'partylist' then 'partylist'
		else 'unknown-data-type: ' + AttributeTypes.Description
	   end,
	   case AttributeTypes.Description
		when 'nvarchar' then Attribute.Length / 2
		when 'nchar' then Attribute.Length / 2
		when 'ntext' then 5000
		else Attribute.Length
	   end,
	   case Attribute.IsCustomField
		 when 1 then 'true'
		 else 'false'
	   end
from AttributeTypes 
	   join AttributeAsIfPublishedView as Attribute on AttributeTypes.AttributeTypeId = Attribute.AttributeTypeId
	   -- For now we just grab labels for description for default organization.  Once form editor is made to be MUI aware
	   -- this code will need to change (maybe replace all of this with something a bit simpler...?)
	   left join LocalizedLabelAsIfPublishedView as LL on (Attribute.AttributeId = LL.ObjectId AND LL.LanguageId = (SELECT TOP 1 LanguageCode FROM Organization) AND LL.ObjectColumnName='Description')
	   left join RelationshipAsIfPublishedView as Relationship on (Relationship.ReferencingAttributeId = Attribute.AttributeId)
	   left join EntityAsIfPublishedView as Entity on (Entity.EntityId = Relationship.ReferencedEntityId)
where Attribute.AttributeOf is NULL
  and Attribute.AggregateOf is NULL
  and (Attribute.ValidForCreateAPI = 1 or Attribute.ValidForUpdateAPI = 1 or Attribute.ValidForReadAPI = 1)