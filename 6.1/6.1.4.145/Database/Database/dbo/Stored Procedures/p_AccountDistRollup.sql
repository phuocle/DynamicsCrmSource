


Create Proc p_AccountDistRollup
	@subAccount bit, @acctDepth int, @subContact bit, @contactDepth int
as
begin

	set nocount on

	-- Create temporary table to store a list of id's
	-- Create table #CustomerIds (
	--	ParentId uniqueidentifier,
	--	ChildId uniqueidentifier
	--     	constraint [PK_CustomerIds] primary key clustered
	--	(	
	--		[ParentId],
	--		[ChildId]
	--	) 
	--)
	-- This table must be created outside the sproc

	-- rollup the sub-account and sub-contact with specific depth 

	if (@subAccount <> 0)
	begin
          while (@acctDepth > 0)
	  begin
	    insert into #CustomerIds (ParentId, ChildId) 
            (
		select ri.ParentId, a.AccountId 
		from AccountBase a (NOLOCK)
		join #CustomerIds ri on
		(
			a.ParentAccountId = ri.ChildId
		)
		where
		not exists(
			select ParentId, ChildId from #CustomerIds 
			where ri.ParentId = ParentId
			and a.AccountId = ChildId
			)
		)

		if ( @@rowcount = 0)
		begin	
			break
		end

		set @acctDepth = @acctDepth - 1

          end
	end

	if (@subContact <> 0)
	begin
	  -- inserting contact ids
	  insert into #CustomerIds (ParentId, ChildId) 
	  (
		select ri.ParentId, c.ContactId 
		from ContactBase c (NOLOCK)
		join #CustomerIds ri on
		(
			c.ParentCustomerId = ri.ChildId
		)
		where
			c.ParentCustomerIdType = 1 and
			not exists (
				select ParentId, ChildId from #CustomerIds 
				where c.ContactId = ChildId
				and ri.ParentId = ParentId
			)
	  )

	  if ( @@rowcount <> 0)
   	  begin	
		set @contactDepth = @contactDepth - 1
		  while (@contactDepth > 0)
		  begin	
			  -- inserting contact ids
			  insert into #CustomerIds (ParentId, ChildId) 
			  (
				select ri.ParentId, c.ContactId 
				from ContactBase c (NOLOCK)
				join #CustomerIds ri on
				(
					c.ParentCustomerId = ri.ChildId
				)
				where
					c.ParentCustomerIdType = 2 and
					not exists (
						select ParentId, ChildId from #CustomerIds 
						where c.ContactId = ChildId
						and ri.ParentId = ParentId
					)
			  )

		    if ( @@rowcount = 0)
		    begin	
			break
		    end
		
		    set @contactDepth = @contactDepth - 1
		  end
	  end

	end


end

GO
GRANT EXECUTE
    ON OBJECT::[dbo].[p_AccountDistRollup] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[p_AccountDistRollup] TO [CRMReaderRole]
    AS [dbo];

