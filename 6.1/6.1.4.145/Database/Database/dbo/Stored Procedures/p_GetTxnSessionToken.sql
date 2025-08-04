

CREATE PROCEDURE p_GetTxnSessionToken as
BEGIN
	SET NOCOUNT ON
	DECLARE @bind_token AS varchar(8000)
	EXECUTE sp_getbindtoken @bind_token OUTPUT
	SELECT @bind_token as token
END