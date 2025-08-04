CREATE TABLE [dbo].[RibbonMetadataToProcess] (
    [ExceptionMessage]    NVARCHAR (1024)  NULL,
    [Status]              INT              NOT NULL,
    [SolutionName]        NVARCHAR (256)   NULL,
    [SolutionId]          UNIQUEIDENTIFIER NOT NULL,
    [IsDbUpdate]          INT              CONSTRAINT [DF_RibbonMetadataToProcess_IsDbUpdate] DEFAULT ((0)) NULL,
    [ProcessedOn]         DATETIME         NULL,
    [RibbonMetadataRowId] UNIQUEIDENTIFIER NOT NULL,
    [CompletedOn]         DATETIME         NULL,
    [CreatedOn]           DATETIME         NULL,
    [EntityName]          NVARCHAR (256)   NOT NULL,
    [RetryCount]          INT              NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_RibbonMetadataToProcess] PRIMARY KEY CLUSTERED ([RibbonMetadataRowId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
ALTER TABLE [dbo].[RibbonMetadataToProcess] SET (LOCK_ESCALATION = DISABLE);

