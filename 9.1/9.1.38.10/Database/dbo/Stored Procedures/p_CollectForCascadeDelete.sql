

create procedure [dbo].[p_CollectForCascadeDelete]
(
	@x CascadeCollectionTable READONLY,	-- Cascade Collection for Cascade Delete
	@f int,								-- is Offline or not; if the call is coming from Outlook Offline or not. 
	@u int								-- 1 if we're doing the operation during a solution install/uninstall, otherwise 0
)
as;
begin;
	
	declare @collectedRecords CascadeDeleteCollection;

	-- Insert passed-in records to the return table
	insert into @collectedRecords(o, t, d, s) select o,t,c,0 from @x;

	-- Define necessary variables for processing
	declare @currentDepth int = -1;
	declare @nextDepth int = 0;
	declare @countOfRecordsAtNextDepth int = 1;
	declare @cascadeStatement nvarchar(max);

	declare @uniqueTypes table (ObjectTypeCode int primary key clustered);
	insert into @uniqueTypes select distinct t from @collectedRecords;
	set @countOfRecordsAtNextDepth = 1;

	-- While there are records to process at the next depth
	while (0 < @countOfRecordsAtNextDepth) 
	begin;

		-- Reset count
		set @countOfRecordsAtNextDepth = 0;

		-- Increment counters
		set @currentDepth = @currentDepth + 1;
		set @nextDepth = @nextDepth + 1;

		declare cascadeStatements cursor local FAST_FORWARD for
		select CascadeStatement from CascadeOperation c
		join @uniqueTypes ut on ut.ObjectTypeCode = c.ReferencedEntityObjectTypeCode
		where CascadeLinkType in (1, 3);	-- 1 == Cascade, 3 == Restrict

		open cascadeStatements;
		fetch next from cascadeStatements into @cascadeStatement;
		while(0=@@FETCH_STATUS)
		begin;

			insert into @collectedRecords (o, t, d, s)
			exec sp_executesql @cascadeStatement, N'@i CascadeDeleteCollection READONLY, @n int, @p int, @c int',
			@i = @collectedRecords, @n = @nextDepth, @p = @u, @c = @currentDepth;

			fetch next from cascadeStatements into @cascadeStatement;
		end;
		close cascadeStatements;
		deallocate cascadeStatements;

		delete from @uniqueTypes;
		insert into @uniqueTypes select distinct t from @collectedRecords where d = @nextDepth and t > 0;
		set @countOfRecordsAtNextDepth = @@ROWCOUNT;
	end;

	-- Delete restrict rows where there exists an identical row that indicates the same row should actually be deleted
	-- because the delete takes precedence over the restrict
	delete cr2 from @collectedRecords cr1 join @collectedRecords cr2 on cr1.o = cr2.o and cr1.t = -cr2.t and cr1.t > 0;

	-- If any delete rows still exist, return
	if (exists(select 1 from @collectedRecords where t < 0))
	begin;
		insert into #CascadeRestrictDetails(restrictingObjectTypeCode, restrictingEntityRecordCount) select abs(t), count(*) as 'restrictingEntityRecordCount' from @collectedRecords where t < 0 group by t;

		delete @collectedRecords;
		insert into @collectedRecords(o,t,d,s) values(N'00000000-0000-0000-0000-000000000000', -1, -1, 0);
	end;

	insert into #CascadeWorkingSpace(o, t, d, s)
	select o, t, d, s from @collectedRecords;
end;
