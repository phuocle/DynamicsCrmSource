USE [D365_MSCRM]
GO
/****** Object:  StoredProcedure [dbo].[p_CreateBusinessClosureCalendar]    Script Date: 4/10/2017 9:59:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[p_CreateBusinessClosureCalendar](@calendarId uniqueidentifier, @organizationId uniqueidentifier, @rootBusinessUnitId uniqueidentifier, @systemUserId uniqueidentifier,@name nvarchar(160),@description nvarchar(max)) as
BEGIN

	set nocount on

	INSERT INTO CalendarBase(CalendarId, BusinessUnitId, CreatedBy, ModifiedBy, Description, Name, OrganizationId, IsShared)
	VALUES(@calendarId, @rootBusinessUnitId, @systemUserId, @systemUserId, @name,@description, @organizationId, 1)

	SELECT @calendarId

END
GO
