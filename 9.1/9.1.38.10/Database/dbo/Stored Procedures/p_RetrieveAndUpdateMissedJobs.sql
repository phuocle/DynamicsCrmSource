

CREATE PROCEDURE [dbo].[p_RetrieveAndUpdateMissedJobs]
    @skip INT,
    @take INT = 100,
    @thresholdInMinutes INT = 45,
    @retryCountThreshold INT = 10
AS
BEGIN;
    BEGIN TRANSACTION
    BEGIN TRY
        SET NOCOUNT ON;

        DECLARE @thresholdInMinutesDate DATETIME = DATEADD(MINUTE, -@thresholdInMinutes, GETUTCDATE());

        WITH PageSet AS 
        (
            SELECT AsyncOperationId
            FROM dbo.AsyncOperationBase
            WHERE ModifiedOn < @thresholdInMinutesDate AND
            (RetryCount IS NULL OR RetryCount < @retryCountThreshold) AND
            (OperationType = 92 OR Workload IS NOT NULL)
            ORDER BY Sequence
            OFFSET @skip ROWS
            FETCH NEXT @take ROWS ONLY
        )
        SELECT
            aob.AsyncOperationId,
            aob.CorrelationId,
            aob.RetryCount,
            aob.Data
        FROM dbo.AsyncOperationBase AS AOB
        INNER JOIN PageSet ON AOB.AsyncOperationId = PageSet.AsyncOperationId
        ORDER BY AOB.Sequence;

        WITH PageSet AS 
        (
            SELECT AsyncOperationId, RetryCount, ModifiedOn, ExpanderStartTime
            FROM dbo.AsyncOperationBase
            WHERE ModifiedOn < @thresholdInMinutesDate AND
            (RetryCount IS NULL OR RetryCount < @retryCountThreshold) AND
            (OperationType = 92 OR Workload IS NOT NULL)
            ORDER BY Sequence
            OFFSET @skip ROWS
            FETCH NEXT @take ROWS ONLY
        )
        UPDATE PageSet
        SET PageSet.RetryCount = IIF(PageSet.RetryCount IS NULL, 1, PageSet.RetryCount + 1),
        PageSet.ModifiedOn = GETUTCDATE();
        COMMIT TRANSACTION
    END TRY
    BEGIN CATCH
        ROLLBACK TRANSACTION
    END CATCH
END;
