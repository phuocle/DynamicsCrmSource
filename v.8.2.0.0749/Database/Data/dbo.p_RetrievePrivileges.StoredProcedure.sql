USE [D365_MSCRM]
GO
/****** Object:  StoredProcedure [dbo].[p_RetrievePrivileges]    Script Date: 4/10/2017 9:59:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


-- Retrieve a set of privileges given a list of privileges ids
CREATE PROC [dbo].[p_RetrievePrivileges](
        @privilege_ids nvarchar(max)	-- concatened list of GUIDs passed in as a string
        ) AS
BEGIN
     
	SELECT  PrivilegeId as 'privilegeid', CanBeBasic as 'canbebasic', 
			CanBeLocal as 'canbelocal',  CanBeDeep as 'canbedeep', 
			CanBeGlobal as 'canbeglobal' 
	FROM Privilege 
	WHERE (PrivilegeId in (SELECT id FROM fn_GetGuidsFromString(@privilege_ids)) )
	
END
GO
