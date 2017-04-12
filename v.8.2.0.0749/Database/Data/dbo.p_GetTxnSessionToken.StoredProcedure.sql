USE [D365_MSCRM]
GO
/****** Object:  StoredProcedure [dbo].[p_GetTxnSessionToken]    Script Date: 4/10/2017 9:59:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[p_GetTxnSessionToken] as
BEGIN
	SET NOCOUNT ON
	DECLARE @bind_token AS varchar(8000)
	EXECUTE dbo.sp_getbindtoken @bind_token OUTPUT
	SELECT @bind_token as token
END
GO
