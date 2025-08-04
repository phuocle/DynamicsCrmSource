

Create Proc p_RollupByOpportunity
	@OpportunityId	uniqueidentifier,
	@Extended bit,
	@ActivityRollup bit
As
Begin
	Set NOCOUNT ON

	-- Create temporary table to store a list of id's
	-- Create Table #RollupIds (RollupId uniqueidentifier PRIMARY KEY)
	-- table must be created outside sproc

	Insert Into #RollupIds (RollupId) Values (@OpportunityId)

	Insert Into #RollupIds (RollupId)
	(Select lead.LeadId
	 From LeadBase as lead (NOLOCK), OpportunityBase as opportunity (NOLOCK)
	 where lead.LeadId = opportunity.OriginatingLeadId
	 and opportunity.OpportunityId = @OpportunityId
	 )

	-- Add Related Quotes of Opportunity
	Insert Into #RollupIds (RollupId)
	(
		Select distinct q.QuoteId
		From QuoteBase as q (NOLOCK)
		join #RollupIds ri on
		(
			q.OpportunityId = ri.RollupId
		)
		where
			not exists(
				select RollupId from #RollupIds where q.QuoteId = RollupId
			)
	)
	
	-- Add Related Orders of opportunity and above quotes
	Insert Into #RollupIds (RollupId)
	(
		Select distinct ord.SalesOrderId
		From SalesOrderBase as ord (NOLOCK)
		join #RollupIds ri on
		(
			ord.OpportunityId = ri.RollupId
		)
		where
			not exists(
				select RollupId from #RollupIds where ord.SalesOrderId = RollupId
			)
	 )
	
	Insert Into #RollupIds (RollupId)
	(
		Select distinct ord.SalesOrderId
		From SalesOrderBase as ord (NOLOCK)
		join #RollupIds ri on
		(
			ord.QuoteId = ri.RollupId
		)
		where
			not exists(
				select RollupId from #RollupIds where ord.SalesOrderId = RollupId
			)
	 )

	-- Add Related Invoices of opportunity and above Orders
	Insert Into #RollupIds (RollupId)
	(
		Select distinct inv.InvoiceId
		From InvoiceBase as inv (NOLOCK)
 		join #RollupIds ri on
		(
			inv.OpportunityId = ri.RollupId
		)
		where
			not exists(
				select RollupId from #RollupIds where inv.InvoiceId = RollupId
			)
	 )
	 
	Insert Into #RollupIds (RollupId)
	(
		Select distinct inv.InvoiceId
		From InvoiceBase as inv (NOLOCK)
 		join #RollupIds ri on
		(
			inv.SalesOrderId = ri.RollupId
		)
		where
			not exists(
				select RollupId from #RollupIds where inv.InvoiceId = RollupId
			)
	 )

	
	if (@ActivityRollup <> 0)
	begin
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