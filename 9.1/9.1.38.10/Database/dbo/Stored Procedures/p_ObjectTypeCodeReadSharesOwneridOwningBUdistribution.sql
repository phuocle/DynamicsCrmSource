

create procedure [dbo].[p_ObjectTypeCodeReadSharesOwneridOwningBUdistribution]
    @updatePOAReadSnapshotTable bit = 0,
    @minimumCount       int = 10,
    @OwnerIDFilter      int = 10,
    @OwningBUFilter     int = 10,
    @Debug              bit = 0
as
begin;
    set nocount on;

    select PrincipalObjectAccessReadSnapshotId,
           ObjectTypeCode,
           PrincipalId,
           [Count]
    into #PrincipalObjectAccessReadSnapshot
    from PrincipalObjectAccessReadSnapshot
    where [Count] > 0;

    alter table #PrincipalObjectAccessReadSnapshot  add
        Count_percent_of_totalRows                  int     not null default 0,

        -- OwnerID
        RecordCountForOwnerID                       bigint  not null default 0,
        RecordCountForOwnerID_percent_of_totalRows  int     not null default 0,

        -- OwningBU
        RecordCountForOwningBU                      bigint  not null default 0,
        RecordCountForOwningBU_percent_of_totalRows int     not null default 0;

    declare @strBaseTableName nvarchar(128),
            @strSQL nvarchar(1000);

    -- Owner Bucket
    create table #tmp_BaseTableRecordVisibleDueToOwnerID (
        BaseTableName nvarchar(128) collate database_default,
        OwnerId uniqueidentifier,
        RecordVisibleDueToOwnerID bigint);

    -- Identify all BaseTable with UserOwned entity.
    declare cur cursor local fast_forward for
    select distinct BaseTableName
    from EntityView e
    where e.OwnershipTypeMask = 1
          and e.EntityId in (
              select EntityId
              from AttributeView a
              where a.EntityId = e.EntityId
                    and a.Name = 'OwnerId'
                    and a.IsLogical = 0);

    open cur;
    fetch next from cur into @strBaseTableName;
    while (@@fetch_status = 0 )
    begin;
        set @strSQL = N'insert into #tmp_BaseTableRecordVisibleDueToOwnerID (BaseTableName, OwnerId, RecordVisibleDueToOwnerID) ';
        set @strSQL = @strSQL + N' select ''' + @strBaseTableName + ''', OwnerID, count(*) as Count from ' + @strBaseTableName + N'  ';
        set @strSQL = @strSQL + N'  group by OwnerId having Count(*) >  ' + cast(@minimumCount as nvarchar) ;   -- default for @minimumCount is 10

        exec sp_executeSQL @strSQL;

        fetch next from cur into @strBaseTableName;
    end;

    close cur;
    deallocate cur;

    if (@Debug = 1)
    begin;
        select *
        from #tmp_BaseTableRecordVisibleDueToOwnerID
        order by RecordVisibleDueToOwnerID desc;
    end;

    -- Get OTC for BaseTable.
    select e.ObjectTypeCode,
           e.BaseTableName,
           t.OwnerId,
           t.RecordVisibleDueToOwnerID
    into #tmp_OTCRecordVisibleDueToOwnerID
    from EntityView e
         inner join #tmp_BaseTableRecordVisibleDueToOwnerID t
             on t.BaseTableName = e.BaseTableName
    where e.OwnershipTypeMask = 1
          and e.EntityId in (
              select EntityId
              from AttributeView a
              where a.EntityId = e.EntityId
                    and a.Name = 'OwnerId');

    if (@Debug = 1)
    begin;
        select *
        from #tmp_OTCRecordVisibleDueToOwnerID
        order by RecordVisibleDueToOwnerID desc;
    end;

    -- Get SystemUID's OTC SUM: This includes mapping for SUID to team.
    select sup.SystemUserId,
           t.ObjectTypeCode,
           sum(t.RecordVisibleDueToOwnerID) as 'SUID_RecordVisibleDueToOwnerID'
    into #tmp_SUIDRecordVisibleDueToOwnerID
    from SystemUserPrincipals sup
         inner join #tmp_OTCRecordVisibleDueToOwnerID t
             on t.OwnerId = sup.PrincipalId
    group by sup.SystemUserId,
             t.ObjectTypeCode
    having sum(t.RecordVisibleDueToOwnerID) > @OwnerIDFilter;   -- default > 10

    if (@Debug = 1)
    begin;
        select *
        from #tmp_SUIDRecordVisibleDueToOwnerID
        order by SUID_RecordVisibleDueToOwnerID desc;
    end;

    -- Insert missing rows with no aggregate data. Following update statements will update the rows.
    insert into #PrincipalObjectAccessReadSnapshot (PrincipalObjectAccessReadSnapshotId, ObjectTypeCode, PrincipalId, [Count])
    select newid(), a.ObjectTypeCode, a.SystemUserId, 0 AS 'Count'
    from (
        select distinct t.ObjectTypeCode,
               t.SystemUserId
        from #tmp_SUIDRecordVisibleDueToOwnerID t
             left outer join #PrincipalObjectAccessReadSnapshot poars
                 on poars.PrincipalId = t.SystemUserId
                 and poars.ObjectTypeCode = t.ObjectTypeCode
        where poars.PrincipalId is null) a;

    update #PrincipalObjectAccessReadSnapshot
    set RecordCountForOwnerID = t.SUID_RecordVisibleDueToOwnerID
    from #tmp_SUIDRecordVisibleDueToOwnerID t
    where #PrincipalObjectAccessReadSnapshot.PrincipalId = t.SystemUserId
          and #PrincipalObjectAccessReadSnapshot.ObjectTypeCode = t.ObjectTypeCode;

    if (@Debug = 1)
    begin;
        select *
        from #PrincipalObjectAccessReadSnapshot
        order by RecordCountForOwnerID  desc;
    end;

    -- OwningBusinessUnit

    create table #tmp_RecordCountForOwningBU (
        BaseTableName nvarchar(128) collate database_default,
        OwningBusinessUnit uniqueidentifier,
        RecordVisibleDueToOwningBusinessUnit bigint);

    declare cur cursor local fast_forward for
        select distinct BaseTableName
        from EntityView e
        where e.OwnershipTypeMask = 1
              and e.EntityId in (
                  select EntityId
                  from AttributeView a
                  where a.EntityId = e.EntityId
                        and a.Name = 'OwningBusinessUnit'
                        and a.IsLogical = 0);

    open cur;
    fetch next from cur into @strBaseTableName;
    while (@@fetch_status = 0 )
    begin;
        set @strSQL = N'insert into #tmp_RecordCountForOwningBU (BaseTableName, OwningBusinessUnit, RecordVisibleDueToOwningBusinessUnit) ';
        set @strSQL = @strSQL + N' select ''' + @strBaseTableName + ''', OwningBusinessUnit, count(*) as Count from ' + @strBaseTableName + N'  ';
        set @strSQL = @strSQL + N' where OwningBusinessUnit IS NOT NULL ';
        set @strSQL = @strSQL + N' group by OwningBusinessUnit having Count(*) >  ' + cast(@minimumCount as nvarchar); -- default for @minimumCount is 10

        exec sp_executeSQL @strSQL;

        fetch next from cur into @strBaseTableName;
    end

    close cur;
    deallocate cur;

    if (@Debug = 1)
    begin;
        select *
        from #tmp_RecordCountForOwningBU
        order by RecordVisibleDueToOwningBusinessUnit desc;
    end;

    select e.ObjectTypeCode,
           e.BaseTableName,
           t.OwningBusinessUnit,
           t.RecordVisibleDueToOwningBusinessUnit
    into #tmp_OTCRecordCountForOwningBU
    from EntityView e
         inner join #tmp_RecordCountForOwningBU t
             on t.BaseTableName = e.BaseTableName
    where e.OwnershipTypeMask = 1
          and e.EntityId in (
              select EntityId
              from AttributeView a
              where a.EntityId = e.EntityId
                    and a.Name = 'OwningBusinessUnit');

    if (@Debug = 1)
    begin;
        select *
        from #tmp_OTCRecordCountForOwningBU
        order by RecordVisibleDueToOwningBusinessUnit desc;
    end;

    select subem.SystemUserId,
           t.ObjectTypeCode,
           sum(t.RecordVisibleDueToOwningBusinessUnit) as 'SUID_RecordVisibleDueToOwningBusinessUnit'
    into #tmp_SUID_RecordVisibleDueToOwningBusinessUnit
    from SystemUserBusinessUnitEntityMap subem
         inner join #tmp_OTCRecordCountForOwningBU t
             on t.OwningBusinessUnit = subem.BusinessUnitId
                 and t.ObjectTypeCode = subem.ObjectTypeCode
    group by subem.SystemUserId,
             t.ObjectTypeCode
    having sum(t.RecordVisibleDueToOwningBusinessUnit) > @OwningBUFilter;   -- default > 10

    if (@Debug = 1)
    begin;
        select *
        from #tmp_SUID_RecordVisibleDueToOwningBusinessUnit
        order by SUID_RecordVisibleDueToOwningBusinessUnit desc;
    end;

    -- Insert missing rows with no Aggregate data. Following update statements will update the rows.
    insert into #PrincipalObjectAccessReadSnapshot (PrincipalObjectAccessReadSnapshotId, ObjectTypeCode, PrincipalId, [Count])
    select newid(), a.ObjectTypeCode, a.SystemUserId, 0 as 'Count'
    from (
        select distinct t.ObjectTypeCode,
               t.SystemUserId
        from #tmp_SUID_RecordVisibleDueToOwningBusinessUnit t
             left outer join #PrincipalObjectAccessReadSnapshot poars
                 on poars.PrincipalId = t.SystemUserId
                     and poars.ObjectTypeCode = t.ObjectTypeCode
        where poars.PrincipalId is null) a;

    update #PrincipalObjectAccessReadSnapshot
    set RecordCountForOwningBU = t.SUID_RecordVisibleDueToOwningBusinessUnit
    from #tmp_SUID_RecordVisibleDueToOwningBusinessUnit t
    where #PrincipalObjectAccessReadSnapshot.PrincipalId = t.SystemUserId
          and #PrincipalObjectAccessReadSnapshot.ObjectTypeCode = t.ObjectTypeCode;

    if (@Debug = 1)
    begin;
        select *
        from #PrincipalObjectAccessReadSnapshot
        order by RecordCountForOwningBU  desc;
    end;

    -- Create #RecordCountSnapshot with latest data.
    create table #RecordCountSnapshot (ObjectTypeCode int, [Count] bigint)

    insert into #RecordCountSnapshot (ObjectTypeCode, [Count])
    select e.ObjectTypeCode,
           sum(row_count) as recordCount
    from sys.dm_db_partition_stats
         inner join EntityView e
             on e.BaseTableName = object_name(object_id) collate database_default
    where index_id = 0
          or index_id = 1
    group by object_id,
             e.ObjectTypeCode;

    if (@Debug = 1)
    begin;
        select *
        from #RecordCountSnapshot;
    end;

    -- Update percent_of_totalRows.
    update #PrincipalObjectAccessReadSnapshot
    set Count_percent_of_totalRows = (cast(#PrincipalObjectAccessReadSnapshot.[Count] as decimal(12,2)) / rcs.[Count]) * 100,
        RecordCountForOwnerID_percent_of_totalRows = (cast(#PrincipalObjectAccessReadSnapshot.RecordCountForOwnerID as decimal(12, 2)) / rcs.[Count]) * 100,
        RecordCountForOwningBU_percent_of_totalRows = (cast(#PrincipalObjectAccessReadSnapshot.RecordCountForOwningBU as decimal(12, 2))/ rcs.[Count]) * 100
    from #RecordCountSnapshot rcs
    where #PrincipalObjectAccessReadSnapshot.ObjectTypeCode = rcs.ObjectTypeCode
          and rcs.[Count] > 0;

    if (@Debug = 1)
    begin;
        select rcs.[Count] as 'TotalRecordCount', poars.* from #PrincipalObjectAccessReadSnapshot  poars, #RecordCountSnapshot rcs where poars.ObjectTypeCode = rcs.ObjectTypeCode order by poars.count desc;
        select rcs.[Count] as 'TotalRecordCount', poars.* from #PrincipalObjectAccessReadSnapshot  poars, #RecordCountSnapshot rcs where poars.ObjectTypeCode = rcs.ObjectTypeCode order by RecordCountForOwnerID desc;
        select rcs.[Count] as 'TotalRecordCount', poars.* from #PrincipalObjectAccessReadSnapshot  poars, #RecordCountSnapshot rcs where poars.ObjectTypeCode = rcs.ObjectTypeCode order by RecordCountForOwningBU desc;
    end;

	-- Update POA ReadSnapshot Table.
	-- Cleanup: Delete POA Distribution data which dont have Read Shares.
	delete PrincipalObjectAccessReadSnapshot
    where [Count] = 0;

    if (@updatePOAReadSnapshotTable = 1)
    begin;
        -- Check if the new columns exists.
        if exists (select 1 from sys.columns where name = N'CountPercentOfTotalRows' and object_id = object_id(N'PrincipalObjectAccessReadSnapshot'))
        begin;
            -- Update matching rows.
            update PrincipalObjectAccessReadSnapshot
            set CountPercentOfTotalRows = tpoars.Count_percent_of_totalRows,
                RecordCountForOwnerID = tpoars.RecordCountForOwnerID,
                RecordCountForOwnerIDPercentOfTotalRows = tpoars.RecordCountForOwnerID_percent_of_totalRows,
                RecordCountForOwningBU = tpoars.RecordCountForOwningBU,
                RecordCountForOwningBUPercentOfTotalRows = tpoars.RecordCountForOwningBU_percent_of_totalRows
            from #PrincipalObjectAccessReadSnapshot tpoars
            where PrincipalObjectAccessReadSnapshot.PrincipalId = tpoars.PrincipalId
                  and PrincipalObjectAccessReadSnapshot.ObjectTypeCode = tpoars.ObjectTypeCode;

            -- Insert missing rows.
            insert into PrincipalObjectAccessReadSnapshot  (PrincipalObjectAccessReadSnapshotId, ObjectTypeCode, PrincipalId, [Count], TeamPrincipalsCount, ChildUserPrincipalsCount,
                        CountPercentOfTotalRows, RecordCountForOwnerID, RecordCountForOwnerIDPercentOfTotalRows, RecordCountForOwningBU, RecordCountForOwningBUPercentOfTotalRows)
            select tpoars.PrincipalObjectAccessReadSnapshotId, tpoars.ObjectTypeCode, tpoars.PrincipalId, tpoars.[Count], 0, 0, tpoars.Count_percent_of_totalRows,
                    tpoars.RecordCountForOwnerID, tpoars.RecordCountForOwnerID_percent_of_totalRows, tpoars.RecordCountForOwningBU, tpoars.RecordCountForOwningBU_percent_of_totalRows
            from #PrincipalObjectAccessReadSnapshot tpoars
                 left outer join PrincipalObjectAccessReadSnapshot poars
                     on poars.PrincipalId = tpoars.PrincipalId
                         and poars.ObjectTypeCode = tpoars.ObjectTypeCode
            where poars.PrincipalId is null;
        end;
        else
        begin;
            if (@Debug = 1)
            begin;
                print 'Table:PrincipalObjectAccessReadSnapshot, column:CountPercentOfTotalRows NOT FOUND!';
            end;
        end;
    end;

    -- Return data to caller.
    with poarsByReadShares
    as
    (
        select ObjectTypeCode,
               max([Count]) as Max_OTCReadShareByUID,
               avg([Count]) as Avg_OTCReadShareByUID,
               stdev([Count]) as STDEV_OTCReadShareByUID,
               count([Count]) as Count_OTCReadShareByUID
        from #PrincipalObjectAccessReadSnapshot
        where [Count] > 0
        group by ObjectTypeCode
    ),
    poarsByOwnerID as
    (
        select ObjectTypeCode,
               max([RecordCountForOwnerID]) as Max_OTCForOwnerIDByUID,
               avg([RecordCountForOwnerID]) as Avg_OTCForOwnerIDByUID,
               stdev([RecordCountForOwnerID]) as STDEV_OTCForOwnerIDByUID,
               count([RecordCountForOwnerID]) as Count_OTCForOwnerIDByUID
        from #PrincipalObjectAccessReadSnapshot
        where [RecordCountForOwnerID] > 0
        group by ObjectTypeCode
    ),
    poarsByOwningBU as
    (
        select ObjectTypeCode,
               max([RecordCountForOwningBU]) as Max_OTCForOwningBUByUID,
               avg([RecordCountForOwningBU]) as Avg_OTCForOwningBUByUID,
               stdev([RecordCountForOwningBU]) as STDEV_OTCForOwningBUByUID,
               count([RecordCountForOwningBU]) as Count_OTCForOwningBUByUID
        from #PrincipalObjectAccessReadSnapshot
        where [RecordCountForOwningBU] > 0
        group by ObjectTypeCode
    )
    select rcs.ObjectTypeCode,
           rcs.Count as 'RecordCount',
           poarsByReadShares.Max_OTCReadShareByUID,
           poarsByReadShares.Avg_OTCReadShareByUID,
           poarsByReadShares.STDEV_OTCReadShareByUID,
           poarsByReadShares.Count_OTCReadShareByUID,
           poarsByOwnerID.Max_OTCForOwnerIDByUID,
           poarsByOwnerID.Avg_OTCForOwnerIDByUID,
           poarsByOwnerID.STDEV_OTCForOwnerIDByUID,
           poarsByOwnerID.Count_OTCForOwnerIDByUID,
           poarsByOwningBU.Max_OTCForOwningBUByUID,
           poarsByOwningBU.Avg_OTCForOwningBUByUID,
           poarsByOwningBU.STDEV_OTCForOwningBUByUID,
           poarsByOwningBU.Count_OTCForOwningBUByUID
    from #RecordCountSnapshot rcs
         left outer join poarsByReadShares
             on rcs.ObjectTypeCode = poarsByReadShares.ObjectTypeCode
         left outer join poarsByOwnerID
             on rcs.ObjectTypeCode = poarsByOwnerID.ObjectTypeCode
         left outer join poarsByOwningBU
             on rcs.ObjectTypeCode = poarsByOwningBU.ObjectTypeCode
    where rcs.[Count] > 1000  -- Tables with less than 1000 rows are filtered to avoid noise
          and ( poarsByReadShares.Max_OTCReadShareByUID is not null
                or poarsByOwnerID.Max_OTCForOwnerIDByUID is not null
                or poarsByOwningBU.Max_OTCForOwningBUByUID is not null)
    order by rcs.[Count] desc;  -- Record Count in table sorted desc

end;
