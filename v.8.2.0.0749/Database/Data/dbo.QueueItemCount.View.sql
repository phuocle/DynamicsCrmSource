USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[QueueItemCount]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
create view [dbo].[QueueItemCount] (
		QueueId,
		QueueItemCount
	) as 
	select
		QueueBase.QueueId,
		Count(QueueItemBase.QueueId)
	From QueueBase
	Left Outer Join QueueItemBase 
	On QueueItemBase.QueueId = QueueBase.QueueId
		and QueueItemBase.StateCode=0
	Group By QueueBase.QueueId
GO
