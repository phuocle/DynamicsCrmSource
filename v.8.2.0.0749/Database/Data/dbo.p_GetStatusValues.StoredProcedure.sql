USE [D365_MSCRM]
GO
/****** Object:  StoredProcedure [dbo].[p_GetStatusValues]    Script Date: 4/10/2017 9:59:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create procedure [dbo].[p_GetStatusValues](
	@otype int, 
	@state int, 
	@langid int,
	@orgid uniqueidentifier 
) 
as 
begin

set nocount on

select  1 as tag, 
        null as parent, 
        StatusMap.Status as [statusmap!1!statuscode!element], 
        StringMap.Value as [statusmap!1!statuscodename!element], 
        StatusMap.IsDefault as [statusmap!1!isdefault!element] 
from StringMap, StatusMap 
where StatusMap.ObjectTypeCode = @otype 
  and StatusMap.OrganizationId = @orgid 
  and StatusMap.State = @state 
  and StatusMap.Status = StringMap.AttributeValue 
  and StringMap.ObjectTypeCode = @otype 
  and StringMap.OrganizationId = @orgid 
  and StringMap.LangId = @langid 
  and StringMap.AttributeName = 'statuscode' 
order by StringMap.DisplayOrder
for xml explicit 

end

GO
