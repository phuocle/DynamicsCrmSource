SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


CREATE PROCEDURE [dbo].[p_CleanSyncTables] AS
begin
	delete from SubscriptionSyncEntryOfflineBase where ObjectTypeCode not in (select ObjectTypeCode from EntityView)
end



GO
