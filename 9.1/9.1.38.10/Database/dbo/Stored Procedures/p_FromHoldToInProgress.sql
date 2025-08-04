

create procedure dbo.p_FromHoldToInProgress( 
	@entityId uniqueidentifier,
	@status int
)
as
begin 

	declare @result int

	set @result = (SELECT TOP 1 Status FROM SLAKPIInstance WHERE Status = @status AND Regarding = @entityId)

	if @result is null
		select 0
	else
		select 1
end