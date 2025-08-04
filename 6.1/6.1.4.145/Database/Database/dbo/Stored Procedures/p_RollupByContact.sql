

Create Proc p_RollupByContact
	@ContactId	uniqueidentifier,
	@Extended bit,
	@ActivityRollup bit
As
Begin
	Set NOCOUNT ON

	-- Create temporary table to store a list of id's
	-- Create Table #RollupIds (PartyId uniqueidentifier PRIMARY KEY)
	-- table must be created outside sproc

	insert into #RollupIds (RollupId) Values (@ContactId)
	
	insert into #RollupIds (RollupId) 
	(
		select distinct ContactId 
		from ContactBase (NOLOCK)
		where ParentCustomerId = @ContactId and ParentCustomerIdType = 2
	)

	-- Extended rollup
	-- * ContactInvoices
	-- * ContactQuotes
	-- * ContactOrders
	-- * CustomerOpportunityRole

	if (@Extended <> 0)
	begin
		insert into #RollupIds(RollupId)
		(
			select distinct q.QuoteId 
			from QuoteBase as q (NOLOCK)
			join ContactQuotes as cq (NOLOCK) on
			(
				q.QuoteId = cq.QuoteId
			)
			where 
				exists (
					select RollupId from #RollupIds where cq.ContactId = RollupId
				)
				and 
				not exists(
					select RollupId from #RollupIds where q.QuoteId = RollupId
				)
		)

		insert into #RollupIds(RollupId)
		(
			select distinct i.InvoiceId 
			from InvoiceBase as i (NOLOCK)
			join ContactInvoices as ci (NOLOCK) on
			(
				i.InvoiceId = ci.InvoiceId
			)
			where 
				exists (
					select RollupId from #RollupIds where ci.ContactId = RollupId
				)
				and 
				not exists(
					select RollupId from #RollupIds where i.InvoiceId = RollupId
				)
		)
		
		insert into #RollupIds(RollupId)
		(
			select distinct s.SalesOrderId
			from SalesOrderBase as s (NOLOCK) 
			join ContactOrders as co (NOLOCK) on
			(
				s.SalesOrderId = co.SalesOrderId
			)
			where
				exists (
					select RollupId from #RollupIds where co.ContactId = RollupId
				)
				and
				not exists(
					select RollupId from #RollupIds where s.SalesOrderId = RollupId
				)
		)
		
		-- Opportunities from CustomerOpportunityRole 
		insert into #RollupIds(RollupId)
		(
			select distinct cor.OpportunityId
			from CustomerOpportunityRoleBase as cor (NOLOCK)
			join #RollupIds ri on
			(
				cor.CustomerId = ri.RollupId
			)
			where
			not exists(
					select RollupId from #RollupIds where cor.OpportunityId = RollupId
				)
		)		
	end -- @Extended

	-- Contracts
	if (@Extended <> 0)
	begin
		insert into #RollupIds(RollupId)
		(
			select distinct c.ContractId
			from ContractBase as c (NOLOCK)
			join #RollupIds ri on 
			(
				c.BillingCustomerId = ri.RollupId
			)
			where
			c.BillingCustomerIdType = 2 and
			not exists(
					select RollupId from #RollupIds where c.ContractId = RollupId
				)
		)
	end
	insert into #RollupIds(RollupId)
	(
		select distinct c.ContractId
		from ContractBase as c (NOLOCK)
		join #RollupIds ri on 
		(
			c.CustomerId = ri.RollupId
		)
		where
		c.CustomerIdType = 2 and
		not exists(
				select RollupId from #RollupIds where c.ContractId = RollupId
			)
	)

	if (@ActivityRollup <> 0)
	begin
		insert into #RollupIds(RollupId)
		(
			select distinct i.IncidentId
			from IncidentBase as i (NOLOCK) 
			join #RollupIds ri on
			(
				i.CustomerId = ri.RollupId
			)
			where
			i.CustomerIdType = 2 and
			not exists(
					select RollupId from #RollupIds where i.IncidentId = RollupId
				)
		)
	end

	insert into #RollupIds(RollupId)
	(
		select distinct o.OpportunityId
		from OpportunityBase as o (NOLOCK)
		join #RollupIds ri on
		(
			o.CustomerId = ri.RollupId
		)
		where
		o.CustomerIdType = 2 and
		not exists(
				select RollupId from #RollupIds where o.OpportunityId = RollupId
			)
	)

	if (@Extended <> 0)
	begin
		-- Account/Contact from CustomerOpportunityRole 
		insert into #RollupIds(RollupId)
		(
			select distinct cor.CustomerId
			from CustomerOpportunityRoleBase as cor (NOLOCK)
			join #RollupIds ri on
			(
				cor.OpportunityId = ri.RollupId
			)
			where
			not exists(
					select RollupId from #RollupIds where cor.CustomerId = RollupId
				)
		)
	end

	insert into #RollupIds(RollupId)
	(
		select distinct q.QuoteId
		from QuoteBase as q (NOLOCK) 
		join #RollupIds ri on
		(
			q.CustomerId = ri.RollupId
		)
		where
		q.CustomerIdType = 2 and
		not exists(
				select RollupId from #RollupIds where q.QuoteId = RollupId
			)
	)

	insert into #RollupIds(RollupId)
	(
		select distinct so.SalesOrderId
		from SalesOrderBase as so (NOLOCK) 
		join #RollupIds ri on
		(
			so.CustomerId = ri.RollupId
		)
		where
		so.CustomerIdType = 2 and 

		not exists(
				select RollupId from #RollupIds where so.SalesOrderId = RollupId
			)
	)

	insert into #RollupIds(RollupId)
	(
		select distinct i.InvoiceId
		from InvoiceBase as i (NOLOCK) 
		join #RollupIds ri on
		(
			i.CustomerId = ri.RollupId
		)
		where
		i.CustomerIdType = 2 and
		not exists(
				select RollupId from #RollupIds where i.InvoiceId = RollupId
			)
	)

	insert into #RollupIds(RollupId)
	(
		select distinct contact.OriginatingLeadId
		from ContactBase as contact (NOLOCK) 
		join #RollupIds as ri on
		(
			contact.ContactId = ri.RollupId
		)
		where contact.OriginatingLeadId is not null
		and
		not exists(
				select RollupId from #RollupIds where contact.OriginatingLeadId = RollupId
			)
		
	)

	if (@ActivityRollup <> 0)
	begin
		insert into #RollupIds(RollupId)
		(
			select distinct opportunity.OriginatingLeadId
			from OpportunityBase as opportunity (NOLOCK) 
			join #RollupIds as ri on
			(
				opportunity.OpportunityId = ri.RollupId
			)
			where opportunity.OriginatingLeadId is not null
			and not exists(
				select RollupId from #RollupIds where RollupId = opportunity.OriginatingLeadId)
		)	

		insert into #RollupIds(RollupId)
		(
			select distinct activityparty.ActivityId
			from ActivityPartyBase as activityparty (NOLOCK) 
			join #RollupIds as ri on
			(
				activityparty.PartyId = ri.RollupId
			)
			where 
				not exists(
						select RollupId from #RollupIds where activityparty.ActivityId = RollupId
					)
		
		)
	end
End