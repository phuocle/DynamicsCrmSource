USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[QueueMemberCount]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[QueueMemberCount] (
		QueueId,
		QueueMemberCount
	) as 
	select
		QueueMembership.QueueId,
		Count(QueueMembership.QueueId)
	from 
		QueueBase join
		QueueMembership on QueueMembership.QueueId = QueueBase.QueueId
	Where QueueBase.QueueViewType=1
	Group By QueueMembership.QueueId
GO
