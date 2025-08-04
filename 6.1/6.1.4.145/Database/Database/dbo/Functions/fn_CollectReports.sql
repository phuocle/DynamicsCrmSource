

create function [dbo].[fn_CollectReports]
(	
	@RootId uniqueidentifier,
	@IncludeDrillthrough bit
)
returns @CollectReports table (
	ReportId uniqueidentifier not null
)
as
begin
	-- Insert current report
	insert into @CollectReports values (@RootId)

	-- Insert children
	while (@@rowcount <> 0) 
		insert into @CollectReports (ReportId) 
		select
			l.LinkedReportId 
		from 
			ReportLink l, 
			@CollectReports c 
		where 
			l.ReportId = c.ReportId and 
			(l.LinkTypeCode <> 1 or @IncludeDrillthrough = 1) and -- LinkTypeCode 1 = Drillthrough
			l.LinkedReportId is not null and 
			l.LinkedReportId not in (
				select 
					ReportId 
				from 
					@CollectReports 
				where 
					ReportId = l.LinkedReportId)

	return
end