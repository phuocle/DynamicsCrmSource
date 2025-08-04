

CREATE PROCEDURE [dbo].[p_CheckForMissedJobs]
    @thresholdInMinutes INT = 45,
    @retryCountThreshold INT = 10
AS
BEGIN;
    SET NOCOUNT ON;

    DECLARE @thresholdInMinutesDate DATETIME = DATEADD(MINUTE, -@thresholdInMinutes, GETUTCDATE());

    SELECT TOP (1) AsyncOperationId
    FROM dbo.AsyncOperationBase WITH (NOLOCK)
    WHERE ModifiedOn < @thresholdInMinutesDate AND
    (RetryCount IS NULL OR RetryCount < @retryCountThreshold) AND
    (OperationType = 92 OR Workload IS NOT NULL)
END;
