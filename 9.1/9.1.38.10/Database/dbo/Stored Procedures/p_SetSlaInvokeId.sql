

create procedure dbo.p_SetSlaInvokeId( 
	@incidentId uniqueidentifier,
	@slainvokeId uniqueidentifier
)
as 
begin 
	UPDATE IncidentBase SET SLAInvokedId = @slainvokeId, SLAId = @slainvokeId WHERE IncidentId = @incidentId
end 