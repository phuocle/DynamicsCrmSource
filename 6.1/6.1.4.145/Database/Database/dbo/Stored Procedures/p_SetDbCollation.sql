

create procedure p_SetDbCollation(
	@dbName sysname,
	@target_collation sysname
) as
begin
set nocount on

Declare @sql nvarchar(512)
Declare @db_collation_name sysname
select @db_collation_name=collation_name from sys.databases where name = @dbName

if (@db_collation_name <> @target_collation)
Begin
    -- Drop constraints which depends on DB collation
    if exists(select * from sys.objects where type = 'C' and name = 'relationship_cascade_flag_values')
    begin
    -- constraints on allowed values of cascade link type
    ALTER TABLE MetadataSchema.Relationship
        DROP CONSTRAINT relationship_cascade_flag_values 
    end

    if exists(select * from sys.objects where type = 'C' and name = 'extra_condition_condition_op_values')
    begin
    ALTER TABLE MetadataSchema.RelationshipExtraCondition
          DROP CONSTRAINT extra_condition_condition_op_values 
    end

	Select @sql = N'ALTER DATABASE ' + QUOTENAME(@dbName) + N' SET SINGLE_USER WITH ROLLBACK IMMEDIATE' 
	exec sp_executesql @sql

	Select @sql = N'ALTER DATABASE '+ QUOTENAME(@dbName) + N' COLLATE '+ @target_collation
	exec sp_executesql @sql

    -- Restore constraints which depends on DB collation
    if not exists(select * from sys.objects where type = 'C' and name = 'relationship_cascade_flag_values')
    begin
    -- constraints on allowed values of cascade link type
    ALTER TABLE MetadataSchema.Relationship
        ADD CONSTRAINT relationship_cascade_flag_values CHECK 
        (
            ((CascadeDelete        IS NULL) OR (CascadeDelete        >=0 AND CascadeDelete        <4)) AND
            ((CascadeAssign        IS NULL) OR (CascadeAssign        >=0 AND CascadeAssign        <6)) AND
            ((CascadeShare         IS NULL) OR (CascadeShare         >=0 AND CascadeShare         <6)) AND
            ((CascadeUnShare       IS NULL) OR (CascadeUnShare       >=0 AND CascadeUnShare       <6)) AND
            ((CascadeMerge         IS NULL) OR (CascadeMerge         >=0 AND CascadeMerge         <4)) AND
            ((CascadeReparent      IS NULL) OR (CascadeReparent      >=0 AND CascadeReparent      <6))
        )
    end

    if not exists(select * from sys.objects where type = 'C' and name = 'extra_condition_condition_op_values')
    begin
    ALTER TABLE MetadataSchema.RelationshipExtraCondition
          ADD CONSTRAINT extra_condition_condition_op_values CHECK
          (ConditionOp >=0 AND ConditionOp <6)
    end

	Select @sql = N'ALTER DATABASE '+ QUOTENAME(@dbName) + N' SET MULTI_USER' 
	exec sp_executesql @sql
End

end