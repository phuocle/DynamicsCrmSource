CREATE TABLE [dbo].[TraceLogBase] (
    [TraceActionXml]            NVARCHAR (MAX)   NULL,
    [TraceParameterHash]        INT              NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CollationLevel]            INT              NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [TraceDetailXml]            NVARCHAR (MAX)   NULL,
    [Level]                     INT              NULL,
    [CanBeDeleted]              BIT              CONSTRAINT [DF_TraceLogBase_CanBeDeleted] DEFAULT ((1)) NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [TraceRegardingId]          UNIQUEIDENTIFIER NOT NULL,
    [TraceParameterXml]         NVARCHAR (MAX)   NULL,
    [ModifiedOn]                DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NOT NULL,
    [TraceCode]                 INT              NOT NULL,
    [ParentTraceLogId]          UNIQUEIDENTIFIER NULL,
    [TraceLogId]                UNIQUEIDENTIFIER NOT NULL,
    [Text]                      NVARCHAR (2000)  NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [IsUnique]                  BIT              CONSTRAINT [DF_TraceLogBase_IsUnique] DEFAULT ((0)) NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [MachineName]               NVARCHAR (160)   NULL,
    CONSTRAINT [cndx_PrimaryKey_TraceBase] PRIMARY KEY CLUSTERED ([TraceLogId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [tracelog_parent_tracelog] FOREIGN KEY ([ParentTraceLogId]) REFERENCES [dbo].[TraceLogBase] ([TraceLogId]) NOT FOR REPLICATION,
    CONSTRAINT [tracelog_TraceRegardings] FOREIGN KEY ([TraceRegardingId]) REFERENCES [dbo].[TraceRegardingBase] ([TraceRegardingId]) NOT FOR REPLICATION
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_TraceParameterHash]
    ON [dbo].[TraceLogBase]([TraceCode] ASC, [Level] ASC, [TraceParameterHash] ASC, [CollationLevel] ASC) WHERE ([IsUnique]=(1)) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_TraceRegarding]
    ON [dbo].[TraceLogBase]([TraceRegardingId] ASC) WITH (FILLFACTOR = 80);

