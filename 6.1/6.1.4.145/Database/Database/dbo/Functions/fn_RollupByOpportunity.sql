

-- This is a TVF version of fn_RollupByOpportunity and should be used going forward as it provides perf advantages over the stored procedure
-- version which relies on a temp table.
create function [dbo].[fn_RollupByOpportunity]
(
    @OpportunityId	uniqueidentifier,
	@Extended bit,
	@ActivityRollup bit
)
returns @tbl table
( 	
     RollupId uniqueidentifier primary key clustered
) 
as
begin
	insert into @tbl (RollupId) Values (@OpportunityId)

	Insert Into @tbl (RollupId)
	(Select lead.LeadId
	 From LeadBase as lead WITH (NOLOCK), OpportunityBase as opportunity WITH (NOLOCK)
	 where lead.LeadId = opportunity.OriginatingLeadId
	 and opportunity.OpportunityId = @OpportunityId
	 )

	-- Add Related Quotes of Opportunity
	Insert Into @tbl (RollupId)
	(
		Select distinct q.QuoteId
		From QuoteBase as q WITH (NOLOCK)
		join @tbl ri on
		(
			q.OpportunityId = ri.RollupId
		)
		where
			not exists(
				select RollupId from @tbl where q.QuoteId = RollupId
			)
	)
	
	-- Add Related Orders of opportunity and above quotes
	Insert Into @tbl (RollupId)
	(
		Select distinct ord.SalesOrderId
		From SalesOrderBase as ord WITH (NOLOCK)
		join @tbl ri on
		(
			ord.OpportunityId = ri.RollupId
		)
		where
			not exists(
				select RollupId from @tbl where ord.SalesOrderId = RollupId
			)
	 )
	
	Insert Into @tbl (RollupId)
	(
		Select distinct ord.SalesOrderId
		From SalesOrderBase as ord WITH (NOLOCK)
		join @tbl ri on
		(
			ord.QuoteId = ri.RollupId
		)
		where
			not exists(
				select RollupId from @tbl where ord.SalesOrderId = RollupId
			)
	 )

	-- Add Related Invoices of opportunity and above Orders
	Insert Into @tbl (RollupId)
	(
		Select distinct inv.InvoiceId
		From InvoiceBase as inv WITH (NOLOCK)
 		join @tbl ri on
		(
			inv.OpportunityId = ri.RollupId
		)
		where
			not exists(
				select RollupId from @tbl where inv.InvoiceId = RollupId
			)
	 )
	 
	Insert Into @tbl (RollupId)
	(
		Select distinct inv.InvoiceId
		From InvoiceBase as inv WITH (NOLOCK)
 		join @tbl ri on
		(
			inv.SalesOrderId = ri.RollupId
		)
		where
			not exists(
				select RollupId from @tbl where inv.InvoiceId = RollupId
			)
	 )

	
	if (@ActivityRollup <> 0)
	begin
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
End
