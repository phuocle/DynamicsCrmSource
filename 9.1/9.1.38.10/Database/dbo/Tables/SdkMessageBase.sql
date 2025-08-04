CREATE TABLE [dbo].[SdkMessageBase] (
    [SdkMessageId]           UNIQUEIDENTIFIER NOT NULL,
    [Template]               BIT              NULL,
    [CreatedOn]              DATETIME         NULL,
    [SdkMessageIdUnique]     UNIQUEIDENTIFIER CONSTRAINT [DF_SdkMessageBase_SdkMessageIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [SupportingSolutionId]   UNIQUEIDENTIFIER NULL,
    [CustomizationLevel]     INT              CONSTRAINT [DF_SdkMessageBase_CustomizationLevel] DEFAULT ((0)) NOT NULL,
    [Availability]           INT              NOT NULL,
    [ModifiedOn]             DATETIME         NULL,
    [IsReadOnly]             BIT              CONSTRAINT [DF_SdkMessageBase_IsReadOnly] DEFAULT ((0)) NOT NULL,
    [ModifiedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [IsPrivate]              BIT              NULL,
    [CreatedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [CategoryName]           NVARCHAR (25)    NOT NULL,
    [AutoTransact]           BIT              NULL,
    [IsManaged]              BIT              CONSTRAINT [DF_SdkMessageBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [CreatedBy]              UNIQUEIDENTIFIER NULL,
    [OrganizationId]         UNIQUEIDENTIFIER NOT NULL,
    [SolutionId]             UNIQUEIDENTIFIER CONSTRAINT [DF_SdkMessageBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [IsActive]               BIT              NULL,
    [Expand]                 BIT              NULL,
    [IsValidForExecuteAsync] BIT              NULL,
    [IntroducedVersion]      NVARCHAR (48)    NULL,
    [Name]                   NVARCHAR (256)   NOT NULL,
    [ModifiedBy]             UNIQUEIDENTIFIER NULL,
    [WorkflowSdkStepEnabled] BIT              CONSTRAINT [DF_SdkMessageBase_WorkflowSdkStepEnabled] DEFAULT ((0)) NULL,
    [OverwriteTime]          DATETIME         CONSTRAINT [DF_SdkMessageBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [VersionNumber]          ROWVERSION       NULL,
    [ThrottleSettings]       NVARCHAR (512)   NULL,
    [ComponentState]         INT              CONSTRAINT [DF_SdkMessageBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ExecutePrivilegeName]   NVARCHAR (100)   NULL,
    CONSTRAINT [cndx_PrimaryKey_SdkMessage] PRIMARY KEY CLUSTERED ([SdkMessageId] ASC, [CustomizationLevel] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_SdkMessageBase_SdkMessageIdUnique] UNIQUE NONCLUSTERED ([SdkMessageIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[SdkMessageBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SdkMessageBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_Name]
    ON [dbo].[SdkMessageBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[SdkMessageBase]([SdkMessageId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_5FEAA7DB65C54172B7496CD602AF731F]
    ON [dbo].[SdkMessageBase]([SdkMessageId] ASC)
    INCLUDE([Name], [Availability], [CategoryName], [AutoTransact], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_5FEAA7DB65C54172B7496CD602AF731F]
    ON [dbo].[SdkMessageBase]([Name] ASC, [SdkMessageId] ASC)
    INCLUDE([Availability], [CategoryName], [AutoTransact], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_5FEAA7DB65C54172B7496CD602AF731F]
    ON [dbo].[SdkMessageBase]([SdkMessageId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

