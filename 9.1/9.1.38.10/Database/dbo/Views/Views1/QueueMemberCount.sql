create view dbo.QueueMemberCount (
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