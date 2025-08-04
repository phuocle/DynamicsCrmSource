CREATE TABLE [dbo].[SolutionHistoryData] (
    [SolutionId]                UNIQUEIDENTIFIER NULL,
    [PackageName]               NVARCHAR (100)   NULL,
    [IsMicrosoftPublisher]      BIT              NULL,
    [SolutionHistoryDataId]     UNIQUEIDENTIFIER NOT NULL,
    [ExceptionStack]            NVARCHAR (MAX)   NULL,
    [ErrorCode]                 INT              NULL,
    [Operation]                 INT              NULL,
    [Status]                    INT              NULL,
    [IsOverwriteCustomizations] BIT              NOT NULL,
    [SubOperation]              INT              NULL,
    [StartTime]                 DATETIME         NULL,
    [PublisherName]             NVARCHAR (256)   NULL,
    [ExceptionMessage]          NVARCHAR (MAX)   NULL,
    [EndTime]                   DATETIME         NULL,
    [ActivityId]                UNIQUEIDENTIFIER NULL,
    [Result]                    INT              NULL,
    [IsPatch]                   BIT              NOT NULL,
    [PackageVersion]            NVARCHAR (256)   NULL,
    [SolutionVersion]           NVARCHAR (256)   NULL,
    [IsManaged]                 BIT              NOT NULL,
    [CorrelationId]             UNIQUEIDENTIFIER NULL,
    [SolutionName]              NVARCHAR (65)    NULL,
    CONSTRAINT [cndx_PrimaryKey_SolutionHistoryData] PRIMARY KEY CLUSTERED ([SolutionHistoryDataId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[SolutionHistoryData]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[SolutionHistoryData] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_IsMicrosoftPublisher]
    ON [dbo].[SolutionHistoryData]([IsMicrosoftPublisher] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

