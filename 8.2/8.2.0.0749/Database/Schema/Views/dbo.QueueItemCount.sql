SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
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
