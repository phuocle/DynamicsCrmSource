

--
-- this stored procedure will update the manager of each user to NULL if the manager
-- is no longer in the business hierarchy.
-- NOTE: this sproc assumes the parent business id for BizId has already been
-- changed (in the transaction).
--
create procedure p_FixUsersForBusinessMove(@bizId uniqueidentifier, @userid uniqueidentifier) as
begin

update sub
set sub.ParentSystemUserId = null, sub.ModifiedBy = @userid, sub.ModifiedOn = getutcdate()
from SystemUserBase as sub
join SystemUserBase as subParent on ( 
	sub.BusinessUnitId = @bizId and 
	sub.ParentSystemUserId is not null and 
	subParent.SystemUserId = sub.ParentSystemUserId
	)
where
not exists (
	select SubBusinessId 
	from BusinessUnitMap 
	where BusinessId = subParent.BusinessUnitId and SubBusinessId = @bizId
)

end -- p_FixUsersForBusinessMove