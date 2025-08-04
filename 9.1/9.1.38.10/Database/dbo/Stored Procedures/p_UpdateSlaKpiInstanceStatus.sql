

create procedure dbo.p_UpdateSlaKpiInstanceStatus( 
	@incidentId uniqueidentifier,
	@canceledStatus int
)
as 
begin 
	DECLARE @slaScript nvarchar(max)
	IF COL_LENGTH('SLAKPIInstanceBase', 'msdyn_slaitemid') IS NOT NULL
		SET @slaScript = 'UPDATE SLAKPIInstanceBase SET Status = ' + convert(varchar(1), @canceledStatus) + ' WHERE Regarding = ''' + convert(varchar(38), @incidentId) + ''' and msdyn_slaitemid IS NULL'
	ELSE
		SET @slaScript = 'UPDATE SLAKPIInstanceBase SET Status = ' + convert(varchar(1), @canceledStatus) + ' WHERE Regarding = ''' + convert(varchar(38), @incidentId) + ''''
	EXEC sp_executesql @slaScript
end 