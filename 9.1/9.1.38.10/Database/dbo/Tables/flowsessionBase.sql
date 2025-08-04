CREATE TABLE [dbo].[flowsessionBase] (
    [flowsessionId]             UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OwnerId]                   UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_flowsessionBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [statecode]                 INT              NOT NULL,
    [statuscode]                INT              NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [Gateway]                   NVARCHAR (100)   NULL,
    [Context]                   NVARCHAR (MAX)   NULL,
    [AdditionalContext]         UNIQUEIDENTIFIER NULL,
    [CompletedOn]               DATETIME         NULL,
    [CorrelationId]             NVARCHAR (100)   NULL,
    [ErrorCode]                 NVARCHAR (1000)  NULL,
    [ErrorMessage]              NVARCHAR (MAX)   NULL,
    [Outputs]                   UNIQUEIDENTIFIER NULL,
    [StartedOn]                 DATETIME         NULL,
    [RegardingObjectId]         UNIQUEIDENTIFIER NULL,
    [ProcessVersion]            NVARCHAR (4000)  NULL,
    [RegardingObjectTypeCode]   INT              NULL,
    [RegardingObjectIdName]     NVARCHAR (4000)  NULL,
    [RegardingObjectIdYomiName] NVARCHAR (4000)  NULL,
    CONSTRAINT [PK_flowsessionBase] PRIMARY KEY CLUSTERED ([flowsessionId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_flowsession] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [FileAttachment_FlowSession_AdditionalContext] FOREIGN KEY ([AdditionalContext]) REFERENCES [dbo].[FileAttachmentBase] ([FileAttachmentId]),
    CONSTRAINT [FileAttachment_FlowSession_Outputs] FOREIGN KEY ([Outputs]) REFERENCES [dbo].[FileAttachmentBase] ([FileAttachmentId]),
    CONSTRAINT [owner_flowsession] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_9A9D5D3A05CE4A61871833FEAFEC535A]
    ON [dbo].[flowsessionBase]([flowsessionId] ASC)
    INCLUDE([Name], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[flowsessionBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_9A9D5D3A05CE4A61871833FEAFEC535A]
    ON [dbo].[flowsessionBase]([Name] ASC, [flowsessionId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_9A9D5D3A05CE4A61871833FEAFEC535A]
    ON [dbo].[flowsessionBase]([flowsessionId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

