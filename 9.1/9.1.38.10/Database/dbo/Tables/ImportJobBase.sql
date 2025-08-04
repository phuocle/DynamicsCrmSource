CREATE TABLE [dbo].[ImportJobBase] (
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [SolutionName]              NVARCHAR (256)   NULL,
    [CompletedOn]               DATETIME         NULL,
    [OrganizationId]            UNIQUEIDENTIFIER CONSTRAINT [DF_ImportJobBase_OrganizationId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [StartedOn]                 DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Data]                      NVARCHAR (MAX)   NULL,
    [Progress]                  FLOAT (53)       NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [Name]                      NVARCHAR (256)   NULL,
    [ImportJobId]               UNIQUEIDENTIFIER NOT NULL,
    [OperationContext]          NVARCHAR (25)    NULL,
    [ImportContext]             NVARCHAR (50)    NULL,
    [SolutionId]                UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_ImportJob] PRIMARY KEY CLUSTERED ([ImportJobId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ImportJobBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[ImportJobBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_SolutionName]
    ON [dbo].[ImportJobBase]([SolutionName] ASC) WHERE ([SolutionName] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_0A0D735C8B704D4F925B7F4D1130A118]
    ON [dbo].[ImportJobBase]([ImportJobId] ASC)
    INCLUDE([SolutionName], [Name], [Progress], [CreatedOn], [StartedOn], [CompletedOn], [ModifiedOn], [CreatedBy], [ModifiedBy], [Data]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SolutionName]
    ON [dbo].[ImportJobBase]([SolutionName] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_0A0D735C8B704D4F925B7F4D1130A118]
    ON [dbo].[ImportJobBase]([ImportJobId] ASC)
    INCLUDE([SolutionName]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

