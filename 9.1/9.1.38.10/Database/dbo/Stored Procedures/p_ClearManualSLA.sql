

create procedure dbo.p_ClearManualSLA( 
	@incidentId uniqueidentifier
)
as 
begin 
	UPDATE IncidentBase SET SLAId = null WHERE IncidentId = @incidentId
end 