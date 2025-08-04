

create procedure p_DetectArbitraryLoop(@parentid uniqueidentifier, @childid uniqueidentifier, @basetablename sysname, @pkattributename sysname, @fkattributename sysname, @fktypeidattributename sysname, @otc int) as
BEGIN
set nocount on

declare @sql nvarchar(max)
declare @parameters nvarchar(max)

-- These are special Select and condition statements incase the @fkattributename has a typecode field associated with it.
-- e.g. ParentCustomerId on ContactBase has ParentCustomerIdType. The @typeIdAttributeCondition checks whether the 
-- parent is either null or parenttypeid is null (which means parent is null) or if the parent is of a different type then the current entity
declare @typeIdAttributeSelect nvarchar(max)
declare @typeIdAttributeCondition nvarchar(256)

if @fktypeidattributename is not null
begin
	SET @typeIdAttributeSelect = ', @currentparentidtype = ' + QUOTENAME(@fktypeidattributename)
	SET @typeIdAttributeCondition = ' or @currentparentidtype is null or @currentparentidtype != ' + cast(@otc as nvarchar(10))
end
else
begin
	SET @typeIdAttributeSelect = ''
	SET @typeIdAttributeCondition = ''	
end

declare @quotedPkAttributeName nvarchar(258)
select @quotedPkAttributeName = QUOTENAME(@pkattributename)

declare @quotedBaseTableName nvarchar(258)
select @quotedBaseTableName = QUOTENAME(@basetablename)

set @sql = 
'set nocount on

declare @currentparentid uniqueidentifier
declare @currentparentidtype int
SET @currentparentidtype = null

declare @visited table (
    visited uniqueidentifier primary key
)

-- make sure that the @ParentId is a valid id.
if not exists (select ' + @quotedPkAttributeName + ' from ' + @quotedBaseTableName + ' where ' + @quotedPkAttributeName + ' = @parent_id_value)  
begin  
   select ErrorCode = 4  
   return  
end  

-- make sure that the @ChildId is a valid id.
if not exists (select ' + @quotedPkAttributeName + ' from ' + @quotedBaseTableName + ' where ' + @quotedPkAttributeName + ' = @child_id_value)  
begin  
   select ErrorCode = 3  
   return  
end 

select @currentparentid = @parent_id_value 
while (1 = 1)  
begin  
   if @currentparentid = @child_id_value 
   begin  
       -- while chasing the parent of the parent (of the parent...) you bumped into the child.  this would create a loop
      select ErrorCode = 2  
      break  
   end  

   select @currentparentid = ' + QUOTENAME(@fkattributename) + @typeIdAttributeSelect + ' from ' + @quotedBaseTableName + ' where ' + @quotedPkAttributeName + ' = @currentparentid  

   if @currentparentid is null ' + @typeIdAttributeCondition + ' 
   begin  
       -- This implies that there is a dead end to the parent->grand parent-> chain and hence no fear of looping.
      select ErrorCode = 0  
      break  
   end  
   else  
      begin  
         if exists (select * from @visited where @currentparentid = visited)  
         begin  
            -- This should never happen.  if it does, that means some one has been mucking with the DB from the backend.
            select ErrorCode = 1  
            break  
         end  
         else  
         begin  
            insert into @visited (visited) values (@currentparentid)  
            continue  
         end  
      end  
   break  
end'

select @parameters = N'@parent_id_value uniqueidentifier, @child_id_value uniqueidentifier'

exec sp_executesql @sql, @parameters, @parent_id_value = @parentid, @child_id_value = @childid
END