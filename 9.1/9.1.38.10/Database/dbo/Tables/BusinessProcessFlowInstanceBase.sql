CREATE TABLE [dbo].[BusinessProcessFlowInstanceBase] (
    [CreatedBy]                     UNIQUEIDENTIFIER NULL,
    [VersionNumber]                 ROWVERSION       NULL,
    [Entity4Id]                     UNIQUEIDENTIFIER NULL,
    [Entity1ObjectTypeCode]         INT              NULL,
    [Entity2Id]                     UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]             UNIQUEIDENTIFIER NULL,
    [StatusCode]                    INT              CONSTRAINT [DF_BusinessProcessFlowInstanceBase_StatusCode] DEFAULT ((1)) NOT NULL,
    [StateCode]                     INT              CONSTRAINT [DF_BusinessProcessFlowInstanceBase_StateCode] DEFAULT ((0)) NOT NULL,
    [Entity5ObjectTypeCode]         INT              NULL,
    [ActiveStageStartedOn]          DATETIME         NULL,
    [Entity1Id]                     UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                    UNIQUEIDENTIFIER NULL,
    [TraversedPath]                 NVARCHAR (1250)  NULL,
    [ModifiedOn]                    DATETIME         NULL,
    [Entity5Id]                     UNIQUEIDENTIFIER NULL,
    [CreatedOn]                     DATETIME         NULL,
    [BusinessProcessFlowInstanceId] UNIQUEIDENTIFIER CONSTRAINT [DF_BusinessProcessFlowInstanceBase_BusinessProcessFlowInstanceId] DEFAULT (newid()) NOT NULL,
    [Entity3Id]                     UNIQUEIDENTIFIER NULL,
    [Entity3ObjectTypeCode]         INT              NULL,
    [Entity2ObjectTypeCode]         INT              NULL,
    [Entity4ObjectTypeCode]         INT              NULL,
    [ProcessId]                     UNIQUEIDENTIFIER NOT NULL,
    [Name]                          NVARCHAR (200)   NULL,
    [ProcessStageId]                UNIQUEIDENTIFIER NULL,
    [CompletedOn]                   DATETIME         NULL,
    CONSTRAINT [cndx_PrimaryKey_BusinessProcessFlowInstance] PRIMARY KEY CLUSTERED ([BusinessProcessFlowInstanceId] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[BusinessProcessFlowInstanceBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [cndx_Entity5_ProcessId]
    ON [dbo].[BusinessProcessFlowInstanceBase]([Entity5Id] ASC, [Entity5ObjectTypeCode] ASC, [ProcessId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [cndx_Entity1_ProcessId]
    ON [dbo].[BusinessProcessFlowInstanceBase]([Entity1Id] ASC, [Entity1ObjectTypeCode] ASC, [ProcessId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [cndx_Entity4_ProcessId]
    ON [dbo].[BusinessProcessFlowInstanceBase]([Entity4Id] ASC, [Entity4ObjectTypeCode] ASC, [ProcessId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [cndx_ProcessId]
    ON [dbo].[BusinessProcessFlowInstanceBase]([ProcessId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [cndx_Entity3_ProcessId]
    ON [dbo].[BusinessProcessFlowInstanceBase]([Entity3Id] ASC, [Entity3ObjectTypeCode] ASC, [ProcessId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [cndx_Entity2_ProcessId]
    ON [dbo].[BusinessProcessFlowInstanceBase]([Entity2Id] ASC, [Entity2ObjectTypeCode] ASC, [ProcessId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[BusinessProcessFlowInstanceBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);

