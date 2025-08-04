


Create Proc p_AccountOVRollup
	@AccountId	uniqueidentifier,
	@subAccount bit,
	@acctDepth int,
	@subContact bit,
	@contactDepth int
as
begin

	Set NOCOUNT ON

	-- Create temporary table to store a list of id's
	-- Create Table #CustomerIds (CustomerId uniqueidentifier PRIMARY KEY)
	-- This table must be created outside the sproc
	
	-- rollup the sub-account and sub-contact with specific depth

	insert into #CustomerIds (CustomerId) Values (@AccountId)

	if (@subAccount <> 0)
	begin
          while (@acctDepth > 0)
	  begin
		insert into #CustomerIds (CustomerId) 
		(
			select a.AccountId 
			from AccountBase a (NOLOCK)
			join #CustomerIds ri on
			(
				a.ParentAccountId = ri.CustomerId
			)
			where
				not exists(
					select CustomerId from #CustomerIds where a.AccountId = CustomerId
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
	  insert into #CustomerIds (CustomerId) 
	  (
		select c.ContactId 
		from ContactBase c (NOLOCK)
		join #CustomerIds ri on
		(
			c.ParentCustomerId = ri.CustomerId
		)
		where
			c.ParentCustomerIdType = 1 and
			not exists (
				select CustomerId from #CustomerIds where c.ContactId = CustomerId
			)
	  )

	  if ( @@rowcount <> 0)
	  begin	

	    set @contactDepth = @contactDepth - 1
            while (@contactDepth > 0)
	    begin

		-- inserting contact ids
		insert into #CustomerIds (CustomerId) 
		(
			select c.ContactId 
			from ContactBase c (NOLOCK)
			join #CustomerIds ri on
			(
				c.ParentCustomerId = ri.CustomerId
			)
			where
				c.ParentCustomerIdType = 2 and
				not exists (
					select CustomerId from #CustomerIds where c.ContactId = CustomerId
				)
		)	

		set @contactDepth = @contactDepth - 1
	    end


	  end

	end

end
GO
GRANT EXECUTE
    ON OBJECT::[dbo].[p_AccountOVRollup] TO [CRM\ReportingGroup {8a0aa7db-84c3-4ddf-bdca-6fbc8b5e12c6}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[p_AccountOVRollup] TO [CRMReaderRole]
    AS [dbo];

