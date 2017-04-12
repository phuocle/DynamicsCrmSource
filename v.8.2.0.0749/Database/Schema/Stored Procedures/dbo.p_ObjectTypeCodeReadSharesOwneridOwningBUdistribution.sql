SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


create procedure [dbo].[p_ObjectTypeCodeReadSharesOwneridOwningBUdistribution]
	@updatePOAReadSnapshotTable bit = 0,
	@minimumCount		int = 10,
	@OwnerIDFilter		int = 10,
	@OwningBUFilter		int = 10,
	@Debug				bit = 0
as
begin;	
	set nocount on;	

	select PrincipalObjectAccessReadSnapshotId, ObjectTypeCode, PrincipalId, [Count] 
		into #PrincipalObjectAccessReadSnapshot 
	from PrincipalObjectAccessReadSnapshot  		
		where [Count] > 0;
	

	alter table #PrincipalObjectAccessReadSnapshot  add
		Count_percent_of_totalRows	int		NOT NULL DEFAULT 0,

		--OwnerID
		RecordCountForOwnerID						bigint	NOT NULL DEFAULT 0,
		RecordCountForOwnerID_percent_of_totalRows	int		NOT NULL DEFAULT 0,
		
		--OwningBU
		RecordCountForOwningBU						bigint	NOT NULL DEFAULT 0,
		RecordCountForOwningBU_percent_of_totalRows	int		NOT NULL DEFAULT 0;
	
	
	declare @strBaseTableName nvarchar(128), @strSQL nvarchar(1000);
	

--===================================================
--Owner Bucket
	
	create table #tmp_BaseTableRecordVisibleDueToOwnerID (BaseTableName nvarchar(128) COLLATE database_default, OwnerId uniqueidentifier, RecordVisibleDueToOwnerID bigint);

	--Identify all BaseTable with UserOwned Entity	
	declare cur cursor local fast_forward 
	for
	select distinct BaseTableName 
		from EntityView e 
		where e.OwnershipTypeMask = 1 AND e.EntityId IN (select EntityId from AttributeView a  where a.EntityId = e.EntityId AND a.Name = 'OwnerId');

	open cur;
	fetch next from cur into @strBaseTableName;
	while (@@FETCH_STATUS = 0 )
	begin;		
		set @strSQL = N'insert into #tmp_BaseTableRecordVisibleDueToOwnerID (BaseTableName, OwnerId, RecordVisibleDueToOwnerID) ';
		set @strSQL = @strSQL + N' select ''' + @strBaseTableName + ''', OwnerID, count(*) as Count from ' + @strBaseTableName + N'  ';
		set @strSQL = @strSQL + N'	group by OwnerId having Count(*) >  ' + CAST(@minimumCount AS nvarchar)	;	-- default for @minimumCount is 10 

		--select @strSQL
		exec sp_executeSQL @strSQL;

		fetch next from cur into @strBaseTableName;
	end;

	close cur;
	deallocate cur;

	if (@Debug = 1)	
		select * from #tmp_BaseTableRecordVisibleDueToOwnerID order by RecordVisibleDueToOwnerID desc;
	

	--Get OTC for BaseTable
	select e.ObjectTypeCode, e.BaseTableName, t.OwnerId, t.RecordVisibleDueToOwnerID 
		into #tmp_OTCRecordVisibleDueToOwnerID
		from EntityView e 
			inner join #tmp_BaseTableRecordVisibleDueToOwnerID t ON t.BaseTableName = e.BaseTableName
		where e.OwnershipTypeMask = 1 AND e.EntityId IN (select EntityId from AttributeView a  where a.EntityId = e.EntityId AND a.Name = 'OwnerId');	

	IF (@Debug = 1)
		select * from #tmp_OTCRecordVisibleDueToOwnerID order by RecordVisibleDueToOwnerID desc;
		
	--Get SystemUID's OTC  SUM : This includes mapping for SUID to team	
	select sup.SystemUserId, t.ObjectTypeCode, SUM(t.RecordVisibleDueToOwnerID) AS 'SUID_RecordVisibleDueToOwnerID'
		into #tmp_SUIDRecordVisibleDueToOwnerID	
		from SystemUserPrincipals sup  
			inner join #tmp_OTCRecordVisibleDueToOwnerID t ON t.OwnerId = sup.PrincipalId
	group by sup.SystemUserId, t.ObjectTypeCode
	having SUM(t.RecordVisibleDueToOwnerID) > @OwnerIDFilter;		-- default > 10

	IF (@Debug = 1)
		select * from #tmp_SUIDRecordVisibleDueToOwnerID order by SUID_RecordVisibleDueToOwnerID desc;

	--INSERT missing rows with no Aggregate data. Following UPDATE statements will update the rows
	insert into #PrincipalObjectAccessReadSnapshot  (PrincipalObjectAccessReadSnapshotId, ObjectTypeCode, PrincipalId, [Count])
	select NEWID(), a.ObjectTypeCode, a.SystemUserId, 0 AS 'Count'
	from (
			select distinct t.ObjectTypeCode, t.SystemUserId
			from #tmp_SUIDRecordVisibleDueToOwnerID t
				left join #PrincipalObjectAccessReadSnapshot  poars on poars.PrincipalId = t.SystemUserId and poars.ObjectTypeCode = t.ObjectTypeCode
			where poars.PrincipalId is null 
		) a;

	--UPDATE 
	update #PrincipalObjectAccessReadSnapshot  
		set RecordCountForOwnerID = t.SUID_RecordVisibleDueToOwnerID
		from #tmp_SUIDRecordVisibleDueToOwnerID t
		where #PrincipalObjectAccessReadSnapshot.PrincipalId = t.SystemUserId
				AND #PrincipalObjectAccessReadSnapshot.ObjectTypeCode = t.ObjectTypeCode; 


	IF (@Debug = 1)
		select * from #PrincipalObjectAccessReadSnapshot  order by RecordCountForOwnerID  desc;

--===================================================
--OwningBusinessUnit 
	
	create table #tmp_RecordCountForOwningBU (BaseTableName nvarchar(128) COLLATE database_default, OwningBusinessUnit uniqueidentifier, RecordVisibleDueToOwningBusinessUnit bigint);
		
	declare cur cursor local fast_forward 
	for
		select distinct BaseTableName 
			from EntityView e 
			where e.OwnershipTypeMask = 1 AND e.EntityId IN (select EntityId from AttributeView a  where a.EntityId = e.EntityId AND a.Name = 'OwningBusinessUnit');

	open cur;
	fetch next from cur into @strBaseTableName;
	while (@@FETCH_STATUS = 0 )
	begin;		
		set @strSQL = N'insert into #tmp_RecordCountForOwningBU (BaseTableName, OwningBusinessUnit, RecordVisibleDueToOwningBusinessUnit) ';
		set @strSQL = @strSQL + N' select ''' + @strBaseTableName + ''', OwningBusinessUnit, count(*) as Count from ' + @strBaseTableName + N'  ';
		set @strSQL = @strSQL + N' where OwningBusinessUnit IS NOT NULL ';
		set @strSQL = @strSQL + N' group by OwningBusinessUnit having Count(*) >  ' + CAST(@minimumCount AS nvarchar);		-- default for @minimumCount is 10 

		--select @strSQL
		exec sp_executeSQL @strSQL;

		fetch next from cur into @strBaseTableName;
	end

	close cur;
	deallocate cur;

	IF (@Debug = 1)
		select * from #tmp_RecordCountForOwningBU order by RecordVisibleDueToOwningBusinessUnit desc;

	select e.ObjectTypeCode, e.BaseTableName, t.OwningBusinessUnit, t.RecordVisibleDueToOwningBusinessUnit 
		into #tmp_OTCRecordCountForOwningBU
		from EntityView e 
			inner join #tmp_RecordCountForOwningBU t ON t.BaseTableName = e.BaseTableName
		where e.OwnershipTypeMask = 1 AND e.EntityId IN (select EntityId from AttributeView a  where a.EntityId = e.EntityId AND a.Name = 'OwningBusinessUnit');

	IF (@Debug = 1)
		select * from #tmp_OTCRecordCountForOwningBU order by RecordVisibleDueToOwningBusinessUnit desc;
			
	select subem.SystemUserId, t.ObjectTypeCode, SUM(t.RecordVisibleDueToOwningBusinessUnit) AS 'SUID_RecordVisibleDueToOwningBusinessUnit'
		into #tmp_SUID_RecordVisibleDueToOwningBusinessUnit	
		from SystemUserBusinessUnitEntityMap subem  
			inner join #tmp_OTCRecordCountForOwningBU t ON t.OwningBusinessUnit = subem.BusinessUnitId AND t.ObjectTypeCode = subem.ObjectTypeCode
	group by subem.SystemUserId, t.ObjectTypeCode
	having SUM(t.RecordVisibleDueToOwningBusinessUnit) > @OwningBUFilter;	-- default > 10

	IF (@Debug = 1)
		select * from #tmp_SUID_RecordVisibleDueToOwningBusinessUnit order by SUID_RecordVisibleDueToOwningBusinessUnit desc;
		
	
	--INSERT missing rows with no Aggregate data. Following UPDATE statements will update the rows
	insert into #PrincipalObjectAccessReadSnapshot  (PrincipalObjectAccessReadSnapshotId, ObjectTypeCode, PrincipalId, [Count])
	select NEWID(), a.ObjectTypeCode, a.SystemUserId, 0 AS 'Count'
	from (
			select distinct t.ObjectTypeCode, t.SystemUserId
			from #tmp_SUID_RecordVisibleDueToOwningBusinessUnit t
				left join #PrincipalObjectAccessReadSnapshot  poars on poars.PrincipalId = t.SystemUserId and poars.ObjectTypeCode = t.ObjectTypeCode
			where poars.PrincipalId is null 
		) a;

	update #PrincipalObjectAccessReadSnapshot  
		set RecordCountForOwningBU = t.SUID_RecordVisibleDueToOwningBusinessUnit
		from #tmp_SUID_RecordVisibleDueToOwningBusinessUnit t
		where #PrincipalObjectAccessReadSnapshot.PrincipalId = t.SystemUserId
				AND #PrincipalObjectAccessReadSnapshot.ObjectTypeCode = t.ObjectTypeCode;

	
	IF (@Debug = 1)
		select * from #PrincipalObjectAccessReadSnapshot  order by RecordCountForOwningBU  desc;

------------------------------------------------
--Update percent_of_totalRows

	update #PrincipalObjectAccessReadSnapshot  
		set Count_percent_of_totalRows  =  (CAST(#PrincipalObjectAccessReadSnapshot.[Count] AS decimal(12,2))/ rcs.[Count]) *100,
			RecordCountForOwnerID_percent_of_totalRows = (CAST(#PrincipalObjectAccessReadSnapshot.RecordCountForOwnerID AS decimal(12,2))/ rcs.[Count]) * 100,
			RecordCountForOwningBU_percent_of_totalRows = (CAST(#PrincipalObjectAccessReadSnapshot.RecordCountForOwningBU AS decimal(12,2))/ rcs.[Count]) * 100
		from RecordCountSnapshot rcs
		where #PrincipalObjectAccessReadSnapshot.ObjectTypeCode = rcs.ObjectTypeCode AND rcs.[Count] > 0; 
	
--============================================
	if (@Debug = 1)
	begin;
		select rcs.[Count] AS 'TotalRecordCount', poars.* from #PrincipalObjectAccessReadSnapshot  poars, RecordCountSnapshot rcs where poars.ObjectTypeCode = rcs.ObjectTypeCode order by poars.count desc;
		select rcs.[Count] AS 'TotalRecordCount', poars.* from #PrincipalObjectAccessReadSnapshot  poars, RecordCountSnapshot rcs where poars.ObjectTypeCode = rcs.ObjectTypeCode order by RecordCountForOwnerID desc;
		select rcs.[Count] AS 'TotalRecordCount', poars.* from #PrincipalObjectAccessReadSnapshot  poars, RecordCountSnapshot rcs where poars.ObjectTypeCode = rcs.ObjectTypeCode order by RecordCountForOwningBU desc;		
	end;

--==================Update POA ReadSnapshot Table=========================
	if (@updatePOAReadSnapshotTable = 1)
	begin;
		--First - Cleanup : Delete POA Distribution data which dont have Read Shares
		DELETE 	PrincipalObjectAccessReadSnapshot WHERE [Count] = 0;

		--Check if the new COLUMNS exists
		if exists(select 1 FROM sys.columns WHERE Name = N'CountPercentOfTotalRows' AND OBJECT_ID = OBJECT_ID(N'PrincipalObjectAccessReadSnapshot'))
		begin;
			--Next Update matching rows
			update PrincipalObjectAccessReadSnapshot
				set CountPercentOfTotalRows = tpoars.Count_percent_of_totalRows,
					RecordCountForOwnerID = tpoars.RecordCountForOwnerID,
					RecordCountForOwnerIDPercentOfTotalRows = tpoars.RecordCountForOwnerID_percent_of_totalRows,
					RecordCountForOwningBU = tpoars.RecordCountForOwningBU,
					RecordCountForOwningBUPercentOfTotalRows = tpoars.RecordCountForOwningBU_percent_of_totalRows
			from #PrincipalObjectAccessReadSnapshot tpoars
			where PrincipalObjectAccessReadSnapshot.PrincipalId = tpoars.PrincipalId and PrincipalObjectAccessReadSnapshot.ObjectTypeCode = tpoars.ObjectTypeCode; 

			--next INSERT missing rows. 
			insert into PrincipalObjectAccessReadSnapshot  (PrincipalObjectAccessReadSnapshotId, ObjectTypeCode, PrincipalId, [Count], TeamPrincipalsCount, ChildUserPrincipalsCount,
						CountPercentOfTotalRows, RecordCountForOwnerID, RecordCountForOwnerIDPercentOfTotalRows, RecordCountForOwningBU, RecordCountForOwningBUPercentOfTotalRows)		
			select tpoars.PrincipalObjectAccessReadSnapshotId, tpoars.ObjectTypeCode, tpoars.PrincipalId, tpoars.[Count], 0, 0, tpoars.Count_percent_of_totalRows, 
					tpoars.RecordCountForOwnerID, tpoars.RecordCountForOwnerID_percent_of_totalRows, tpoars.RecordCountForOwningBU, tpoars.RecordCountForOwningBU_percent_of_totalRows
			from #PrincipalObjectAccessReadSnapshot tpoars
				left join PrincipalObjectAccessReadSnapshot poars on poars.PrincipalId = tpoars.PrincipalId and poars.ObjectTypeCode = tpoars.ObjectTypeCode																	
			where poars.PrincipalId is null ;
		end;
		else
		begin;
			if (@Debug = 1)
			begin;
				PRINT 'Table:PrincipalObjectAccessReadSnapshot, column:CountPercentOfTotalRows NOT FOUND!'; 
			end;
		end;
	end;

--====================RETURN DATA to CALLER===============================
	;with poarsByReadShares
	as
	(
		select ObjectTypeCode, 
			MAX([Count]) AS Max_OTCReadShareByUID, AVG([Count]) AS Avg_OTCReadShareByUID, 
			STDEV([Count]) AS STDEV_OTCReadShareByUID, Count([Count]) AS Count_OTCReadShareByUID
		from #PrincipalObjectAccessReadSnapshot
		where [Count] > 0
		group by ObjectTypeCode
	),
	poarsByOwnerID
	as
	(
		select ObjectTypeCode, 		
			MAX([RecordCountForOwnerID]) AS Max_OTCForOwnerIDByUID, AVG([RecordCountForOwnerID]) AS Avg_OTCForOwnerIDByUID, 
			STDEV([RecordCountForOwnerID]) AS STDEV_OTCForOwnerIDByUID, Count([RecordCountForOwnerID]) AS Count_OTCForOwnerIDByUID
		from #PrincipalObjectAccessReadSnapshot
		where [RecordCountForOwnerID] > 0
		group by ObjectTypeCode
	),
	poarsByOwningBU
	as
	(
		select ObjectTypeCode, 							
				MAX([RecordCountForOwningBU]) AS Max_OTCForOwningBUByUID, AVG([RecordCountForOwningBU]) AS Avg_OTCForOwningBUByUID, 
				STDEV([RecordCountForOwningBU]) AS STDEV_OTCForOwningBUByUID, Count([RecordCountForOwningBU]) AS Count_OTCForOwningBUByUID
		from #PrincipalObjectAccessReadSnapshot
		where [RecordCountForOwningBU] > 0			
		group by ObjectTypeCode 
	)

	select rcs.ObjectTypeCode, rcs.Count AS 'RecordCount', 
		poarsByReadShares.Max_OTCReadShareByUID,poarsByReadShares.Avg_OTCReadShareByUID, poarsByReadShares.STDEV_OTCReadShareByUID, poarsByReadShares.Count_OTCReadShareByUID,
		poarsByOwnerID.Max_OTCForOwnerIDByUID,poarsByOwnerID.Avg_OTCForOwnerIDByUID,poarsByOwnerID.STDEV_OTCForOwnerIDByUID,poarsByOwnerID.Count_OTCForOwnerIDByUID,
		poarsByOwningBU.Max_OTCForOwningBUByUID,poarsByOwningBU.Avg_OTCForOwningBUByUID,poarsByOwningBU.STDEV_OTCForOwningBUByUID,poarsByOwningBU.Count_OTCForOwningBUByUID		 
	from RecordCountSnapshot rcs
		LEFT JOIN poarsByReadShares on rcs.ObjectTypeCode = poarsByReadShares.ObjectTypeCode
		LEFT JOIN poarsByOwnerID on rcs.ObjectTypeCode = poarsByOwnerID.ObjectTypeCode
		LEFT JOIN poarsByOwningBU on rcs.ObjectTypeCode = poarsByOwningBU.ObjectTypeCode 
	where rcs.[Count] > 1000		--Tables with less than 1000 rows are filtered to avoid noise 
		AND ( poarsByReadShares.Max_OTCReadShareByUID IS NOT NULL OR poarsByOwnerID.Max_OTCForOwnerIDByUID IS NOT NULL OR poarsByOwningBU.Max_OTCForOwningBUByUID IS NOT NULL)
	order by rcs.[Count] desc;		--Record Count in table sorted desc

end
GO
