

-- This is a TVF version of p_RollupByContact and should be used going forward as it provides perf advantages over the stored procedure
-- version which relies on a temp table.
create function [dbo].[fn_RollupByContact]
(
    @ContactId	uniqueidentifier,
	@Extended bit,
	@ActivityRollup bit
)
returns @tbl table
( 	
     RollupId uniqueidentifier primary key clustered
) 
as
begin
	insert into @tbl (RollupId) Values (@ContactId)
	
	insert into @tbl (RollupId) 
	(
		select distinct ContactId 
		from ContactBase WITH (NOLOCK)
		where ParentCustomerId = @ContactId and ParentCustomerIdType = 2
	)

	-- Extended rollup
	-- * ContactInvoices
	-- * ContactQuotes
	-- * ContactOrders
	-- * CustomerOpportunityRole

	if (@Extended <> 0)
	begin
		insert into @tbl(RollupId)
		(
			select distinct q.QuoteId 
			from QuoteBase as q WITH (NOLOCK)
			join ContactQuotes as cq WITH (NOLOCK) on
			(
				q.QuoteId = cq.QuoteId
			)
			where 
				exists (
					select RollupId from @tbl where cq.ContactId = RollupId
				)
				and 
				not exists(
					select RollupId from @tbl where q.QuoteId = RollupId
				)
		)

		insert into @tbl(RollupId)
		(
			select distinct i.InvoiceId 
			from InvoiceBase as i WITH (NOLOCK)
			join ContactInvoices as ci WITH (NOLOCK) on
			(
				i.InvoiceId = ci.InvoiceId
			)
			where 
				exists (
					select RollupId from @tbl where ci.ContactId = RollupId
				)
				and 
				not exists(
					select RollupId from @tbl where i.InvoiceId = RollupId
				)
		)
		
		insert into @tbl(RollupId)
		(
			select distinct s.SalesOrderId
			from SalesOrderBase as s WITH (NOLOCK) 
			join ContactOrders as co WITH (NOLOCK) on
			(
				s.SalesOrderId = co.SalesOrderId
			)
			where
				exists (
					select RollupId from @tbl where co.ContactId = RollupId
				)
				and
				not exists(
					select RollupId from @tbl where s.SalesOrderId = RollupId
				)
		)
		
		-- Opportunities from CustomerOpportunityRole 
		insert into @tbl(RollupId)
		(
			select distinct cor.OpportunityId
			from CustomerOpportunityRoleBase as cor WITH (NOLOCK)
			join @tbl ri on
			(
				cor.CustomerId = ri.RollupId
			)
			where
			not exists(
					select RollupId from @tbl where cor.OpportunityId = RollupId
				)
		)		
	end -- @Extended

	-- Contracts
	if (@Extended <> 0)
	begin
		insert into @tbl(RollupId)
		(
			select distinct c.ContractId
			from ContractBase as c WITH (NOLOCK)
			join @tbl ri on 
			(
				c.BillingCustomerId = ri.RollupId
			)
			where
			c.BillingCustomerIdType = 2 and
			not exists(
					select RollupId from @tbl where c.ContractId = RollupId
				)
		)
	end
	insert into @tbl(RollupId)
	(
		select distinct c.ContractId
		from ContractBase as c WITH (NOLOCK)
		join @tbl ri on 
		(
			c.CustomerId = ri.RollupId
		)
		where
		c.CustomerIdType = 2 and
		not exists(
				select RollupId from @tbl where c.ContractId = RollupId
			)
	)

	if (@ActivityRollup <> 0)
	begin
		insert into @tbl(RollupId)
		(
			select distinct i.IncidentId
			from IncidentBase as i WITH (NOLOCK) 
			join @tbl ri on
			(
				i.CustomerId = ri.RollupId
			)
			where
			i.CustomerIdType = 2 and
			not exists(
					select RollupId from @tbl where i.IncidentId = RollupId
				)
		)
	end

	insert into @tbl(RollupId)
	(
		select distinct o.OpportunityId
		from OpportunityBase as o WITH (NOLOCK)
		join @tbl ri on
		(
			o.CustomerId = ri.RollupId
		)
		where
		o.CustomerIdType = 2 and
		not exists(
				select RollupId from @tbl where o.OpportunityId = RollupId
			)
	)

	if (@Extended <> 0)
	begin
		-- Account/Contact from CustomerOpportunityRole 
		insert into @tbl(RollupId)
		(
			select distinct cor.CustomerId
			from CustomerOpportunityRoleBase as cor WITH (NOLOCK)
			join @tbl ri on
			(
				cor.OpportunityId = ri.RollupId
			)
			where
			not exists(
					select RollupId from @tbl where cor.CustomerId = RollupId
				)
		)
	end

	insert into @tbl(RollupId)
	(
		select distinct q.QuoteId
		from QuoteBase as q WITH (NOLOCK) 
		join @tbl ri on
		(
			q.CustomerId = ri.RollupId
		)
		where
		q.CustomerIdType = 2 and
		not exists(
				select RollupId from @tbl where q.QuoteId = RollupId
			)
	)

	insert into @tbl(RollupId)
	(
		select distinct so.SalesOrderId
		from SalesOrderBase as so WITH (NOLOCK) 
		join @tbl ri on
		(
			so.CustomerId = ri.RollupId
		)
		where
		so.CustomerIdType = 2 and 

		not exists(
				select RollupId from @tbl where so.SalesOrderId = RollupId
			)
	)

	insert into @tbl(RollupId)
	(
		select distinct i.InvoiceId
		from InvoiceBase as i WITH (NOLOCK) 
		join @tbl ri on
		(
			i.CustomerId = ri.RollupId
		)
		where
		i.CustomerIdType = 2 and
		not exists(
				select RollupId from @tbl where i.InvoiceId = RollupId
			)
	)

	insert into @tbl(RollupId)
	(
		select distinct contact.OriginatingLeadId
		from ContactBase as contact WITH (NOLOCK) 
		join @tbl as ri on
		(
			contact.ContactId = ri.RollupId
		)
		where contact.OriginatingLeadId is not null
		and
		not exists(
				select RollupId from @tbl where contact.OriginatingLeadId = RollupId
			)
		
	)

	if (@ActivityRollup <> 0)
	begin
		insert into @tbl(RollupId)
		(
			select distinct opportunity.OriginatingLeadId
			from OpportunityBase as opportunity WITH (NOLOCK) 
			join @tbl as ri on
			(
				opportunity.OpportunityId = ri.RollupId
			)
			where opportunity.OriginatingLeadId is not null
			and not exists(
				select RollupId from @tbl where RollupId = opportunity.OriginatingLeadId)
		)	

		insert into @tbl(RollupId)
		(
			select distinct activityparty.ActivityId
			from ActivityPartyBase as activityparty WITH (NOLOCK) 
			join @tbl as ri on
			(
				activityparty.PartyId = ri.RollupId
			)
			where 
				not exists(
						select RollupId from @tbl where activityparty.ActivityId = RollupId
					)
		
		)
	end

return  
end