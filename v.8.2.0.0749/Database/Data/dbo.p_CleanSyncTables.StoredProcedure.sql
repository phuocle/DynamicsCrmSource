USE [D365_MSCRM]
GO
/****** Object:  StoredProcedure [dbo].[p_CleanSyncTables]    Script Date: 4/10/2017 9:59:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[p_CleanSyncTables] AS
begin
	delete from SubscriptionSyncEntryOfflineBase where ObjectTypeCode not in (select ObjectTypeCode from EntityView)
end




GO
