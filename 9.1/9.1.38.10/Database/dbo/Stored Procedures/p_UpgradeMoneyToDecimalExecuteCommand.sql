

CREATE PROCEDURE [dbo].[p_UpgradeMoneyToDecimalExecuteCommand]
(
     @TableName                     NVARCHAR(128)
    ,@Command                       NVARCHAR(MAX)
    ,@EventSequence                 TINYINT
    ,@Debug                         BIT = 0
    ,@BeginDateTimeUTC              DATETIME2(7) = NULL
)
AS

DECLARE
     @tableState        SMALLINT = 0
    ,@eventId           INT
    ,@errorNumber       INT
    ,@errorMessage      NVARCHAR(4000)
;

BEGIN TRY
    
    SET @BeginDateTimeUTC  = ISNULL(@BeginDateTimeUTC, SYSUTCDATETIME());

    INSERT INTO [dbo].[TableListMoneyUpgradeEvent]
    (    
         [TableName]
        ,[BeginDateTimeUTC]
        ,[EventSequence]
        ,[State]
        ,[Command]
    )
    SELECT 
         @TableName
        ,@BeginDateTimeUTC
        ,@EventSequence
        ,@tableState 
        ,@Command
    ;

    SET @eventId = SCOPE_IDENTITY();

    IF @Command <> N''
     BEGIN
        IF @Debug = 1 PRINT @Command;
        EXEC sp_executesql @Command;
     END;

    SELECT @tableState = 1;

    UPDATE [dbo].[TableListMoneyUpgradeEvent]
    SET [EndDateTimeUTC] = SYSUTCDATETIME()
       ,[State] = @tableState
    WHERE [EventId] = @eventId;

END TRY
BEGIN CATCH

    SELECT @errorNumber = ERROR_NUMBER()
          ,@errorMessage = ERROR_MESSAGE();

    IF @@TRANCOUNT > 0 ROLLBACK;
    
    SELECT @tableState = -1;
            
    INSERT INTO [dbo].[TableListMoneyUpgradeEvent]
    (    [TableName]
        ,[BeginDateTimeUTC]
        ,[EndDateTimeUTC] 
        ,[EventSequence]
        ,[State]
        ,[Command]
        ,[ErrorNumber]
        ,[ErrorMessage]
    )
    SELECT  
         @TableName
        ,@BeginDateTimeUTC
        ,SYSUTCDATETIME()
        ,@EventSequence
        ,@tableState
        ,@Command
        ,@errorNumber
        ,@errorMessage
    ;

    IF @TableName <> N''
    BEGIN
        UPDATE [dbo].[TableListMoneyUpgrade]
        SET [ErrorEvent] = @EventSequence
        WHERE [TableName] = @TableName;
    END;
    
    THROW;

END CATCH;

RETURN