CREATE TABLE [dbo].[workflowbinaryBase] (
    [workflowbinaryId]          UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OwnerId]                   UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_workflowbinaryBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [statecode]                 INT              NOT NULL,
    [statuscode]                INT              NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [name]                      NVARCHAR (100)   NULL,
    [Data]                      UNIQUEIDENTIFIER NULL,
    [FlowSessionId]             UNIQUEIDENTIFIER NULL,
    [Metadata]                  NVARCHAR (MAX)   NULL,
    [Process]                   UNIQUEIDENTIFIER NULL,
    [ReferenceName]             NVARCHAR (100)   NULL,
    [Type]                      NVARCHAR (4000)  NULL,
    [MimeType]                  NVARCHAR (4000)  NULL,
    CONSTRAINT [PK_workflowbinaryBase] PRIMARY KEY CLUSTERED ([workflowbinaryId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_workflowbinary] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [FileAttachment_workflowbinary_Data] FOREIGN KEY ([Data]) REFERENCES [dbo].[FileAttachmentBase] ([FileAttachmentId]),
    CONSTRAINT [flowsession_workflowbinary_FlowSessionId] FOREIGN KEY ([FlowSessionId]) REFERENCES [dbo].[flowsessionBase] ([flowsessionId]),
    CONSTRAINT [owner_workflowbinary] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [workflow_workflowbinary_Process] FOREIGN KEY ([Process]) REFERENCES [dbo].[WorkflowBaseIds] ([WorkflowId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_name]
    ON [dbo].[workflowbinaryBase]([name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_67773AC6650C4F97880CC79421B1C3F7]
    ON [dbo].[workflowbinaryBase]([workflowbinaryId] ASC)
    INCLUDE([name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_67773AC6650C4F97880CC79421B1C3F7]
    ON [dbo].[workflowbinaryBase]([workflowbinaryId] ASC)
    INCLUDE([name], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_67773AC6650C4F97880CC79421B1C3F7]
    ON [dbo].[workflowbinaryBase]([name] ASC, [workflowbinaryId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

