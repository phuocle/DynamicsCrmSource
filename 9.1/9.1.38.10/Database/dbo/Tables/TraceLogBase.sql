CREATE TABLE [dbo].[TraceLogBase] (
    [TraceActionXml]            NVARCHAR (MAX)   NULL,
    [Text]                      NVARCHAR (2000)  NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ErrorTypeDisplay]          NVARCHAR (160)   NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [ErrorDetails]              NVARCHAR (1024)  NULL,
    [Level]                     INT              NULL,
    [TraceParameterXml]         NVARCHAR (MAX)   NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NOT NULL,
    [TraceStatus]               BIT              CONSTRAINT [DF_TraceLogBase_TraceStatus] DEFAULT ((0)) NULL,
    [TraceDetailXml]            NVARCHAR (MAX)   NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [TraceCode]                 INT              NOT NULL,
    [TraceRegardingId]          UNIQUEIDENTIFIER NOT NULL,
    [ParentTraceLogId]          UNIQUEIDENTIFIER NULL,
    [TraceLogId]                UNIQUEIDENTIFIER NOT NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [IsUnique]                  BIT              CONSTRAINT [DF_TraceLogBase_IsUnique] DEFAULT ((0)) NULL,
    [CanBeDeleted]              BIT              CONSTRAINT [DF_TraceLogBase_CanBeDeleted] DEFAULT ((1)) NULL,
    [MachineName]               NVARCHAR (160)   NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [CollationLevel]            INT              NULL,
    [CreatedOn]                 DATETIME         NULL,
    [TraceParameterHash]        INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_TraceBase] PRIMARY KEY CLUSTERED ([TraceLogId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [tracelog_parent_tracelog] FOREIGN KEY ([ParentTraceLogId]) REFERENCES [dbo].[TraceLogBase] ([TraceLogId]),
    CONSTRAINT [tracelog_TraceRegardings] FOREIGN KEY ([TraceRegardingId]) REFERENCES [dbo].[TraceRegardingBase] ([TraceRegardingId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[TraceLogBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[TraceLogBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_ErrorTypeDisplay]
    ON [dbo].[TraceLogBase]([ErrorTypeDisplay] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_TraceRegarding]
    ON [dbo].[TraceLogBase]([TraceRegardingId] ASC, [ModifiedOn] ASC, [CollationLevel] ASC, [TraceLogId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_TraceParameterHash]
    ON [dbo].[TraceLogBase]([TraceCode] ASC, [Level] ASC, [TraceParameterHash] ASC, [CollationLevel] ASC) WHERE ([IsUnique]=(1)) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_ParentTraceLogId]
    ON [dbo].[TraceLogBase]([ParentTraceLogId] ASC) WHERE ([ParentTraceLogId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_TraceCode]
    ON [dbo].[TraceLogBase]([TraceCode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_E5B64FE5329746AEA563B34C80E895D7]
    ON [dbo].[TraceLogBase]([TraceLogId] ASC)
    INCLUDE([Level], [CreatedOn], [ModifiedOn], [TraceStatus]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_E5B64FE5329746AEA563B34C80E895D7]
    ON [dbo].[TraceLogBase]([TraceLogId] ASC)
    INCLUDE([ErrorTypeDisplay]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

