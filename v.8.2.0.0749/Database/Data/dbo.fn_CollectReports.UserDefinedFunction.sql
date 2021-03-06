USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_CollectReports]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create function [dbo].[fn_CollectReports]
(
	@RootId uniqueidentifier,
	@IncludeDrillthrough bit
)
returns @CollectReports table (
	ReportId uniqueidentifier not null
)
as
begin;
	-- Insert current report
	insert into @CollectReports values (@RootId);

	-- Insert children
	while (@@rowcount <> 0) 
	begin;
		insert into @CollectReports (ReportId) 
		select l.LinkedReportId 
		from ReportLink as l 
		inner join @CollectReports as c on l.ReportId = c.ReportId 
		where (l.LinkTypeCode <> 1 or @IncludeDrillthrough = 1) -- LinkTypeCode 1 = Drillthrough
			and l.LinkedReportId is not null 
			and l.LinkedReportId not in (
				select ReportId 
				from @CollectReports 
				where ReportId = l.LinkedReportId);
	end;

	return;
end;
GO
