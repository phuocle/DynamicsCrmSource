

create procedure [dbo].[p_GetOrganizationSettingsJson]
as
begin
	select top 1 * from Organization for json auto, INCLUDE_NULL_VALUES
end

