SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


create procedure [dbo].[p_SetDbCollation](
    @dbName sysname,
    @target_collation sysname)
as
begin;
    set nocount on;

    declare @sql nvarchar(512);
    declare @db_collation_name sysname;

    select @db_collation_name = collation_name
    from sys.databases
    where name = @dbName;

    if (@db_collation_name <> @target_collation)
    begin;
        -- Drop constraints which depends on DB collation.
        if exists (
                select 1
                from sys.objects
                where type = 'C'
                      and name = 'relationship_cascade_flag_values')
        begin;
            -- Constraints on allowed values of cascade link type.
            alter table MetadataSchema.Relationship
            drop constraint relationship_cascade_flag_values;
        end;

        if exists (
                select 1
                from sys.objects
                where type = 'C'
                      and name = 'extra_condition_condition_op_values')
        begin;
            alter table MetadataSchema.RelationshipExtraCondition
            drop constraint extra_condition_condition_op_values;
        end;

		if convert(nvarchar, serverproperty('Edition')) <> 'SQL Azure'
		begin;
			select @sql = N'alter database ' + quotename(@dbName) + N' set single_user with rollback immediate;';
			execute dbo.sp_executesql @sql;
		end;

        select @sql = N'alter database '+ quotename(@dbName) + N' collate '+ @target_collation + ';'
        execute dbo.sp_executesql @sql;

        -- Restore constraints which depends on DB collation.
        if not exists (
                select 1
                from sys.objects
                where type = 'C'
                and name = 'relationship_cascade_flag_values')
        begin;
            -- Constraints on allowed values of cascade link type.
            alter table MetadataSchema.Relationship
            add constraint relationship_cascade_flag_values check (
            ((CascadeDelete        is null) or (CascadeDelete        >=0 and CascadeDelete        <4)) and
            ((CascadeAssign        is null) or (CascadeAssign        >=0 and CascadeAssign        <6)) and
            ((CascadeShare         is null) or (CascadeShare         >=0 and CascadeShare         <6)) and
            ((CascadeUnShare       is null) or (CascadeUnShare       >=0 and CascadeUnShare       <6)) and
            ((CascadeMerge         is null) or (CascadeMerge         >=0 and CascadeMerge         <4)) and
            ((CascadeReparent      is null) or (CascadeReparent      >=0 and CascadeReparent      <6)));
        end;

        if not exists (
                    select 1
                    from sys.objects
                    where type = 'C'
                          and name = 'extra_condition_condition_op_values')
        begin;
            alter table MetadataSchema.RelationshipExtraCondition
            add constraint extra_condition_condition_op_values check (ConditionOp >=0 and ConditionOp <6);
        end;

        select @sql = N'alter database '+ quotename(@dbName) + N' set multi_user;';
        execute sp_executesql @sql;

    end; -- end if (@db_collation_name <> @target_collation)
end;
GO
