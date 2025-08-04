

create function [dbo].[fn_CollectReportsTree]
(	
	@ReportId uniqueidentifier
)
returns @ReportTree table (
	ReportId uniqueidentifier not null,
	SolutionId uniqueIdentifier not null
)
as
begin
	declare @SolutionId uniqueIdentifier
	declare @RootId uniqueIdentifier
	
	select @RootId = @ReportId
	
	--First Move to the parent node
	while(@@rowcount<>0)
		select 
			@RootId = r.ParentReportId
		from 
			Report r
		where r.ReportId = @RootId 
				and 
			  r.ParentReportId is not null
		
	
	--Insert current report
	select 
		@SolutionId = r.SolutionId 
	from 
		Report as r
	where 
		r.ReportId = @RootId 
	
	if(@@rowcount = 0)
		Return
	
	insert into @ReportTree values(@RootId, @SolutionId)
	
	--Insert Child Nodes
	while (@@rowcount <> 0) 
		insert into @ReportTree (r.ReportId, r.SolutionId) 
		select
			r.ReportId, r.SolutionId 
		from 
			Report r
		where 
			r.ReportId in (
				  select
					l.LinkedReportId 
				  from 
					ReportLink l, 
					@ReportTree t 
				  where 
					l.ReportId = t.ReportId and 
					l.LinkedReportId is not null and 
					l.LinkedReportId not in (
						select 
							ReportId 
						from 
							@ReportTree 
						where 
							ReportId = l.LinkedReportId))
		
	RETURN 
end