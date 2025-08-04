CREATE TABLE [dbo].[BusinessProcessFlowInstanceBase] (
    [VersionNumber]                 ROWVERSION       NULL,
    [Entity4Id]                     UNIQUEIDENTIFIER NULL,
    [Entity2Id]                     UNIQUEIDENTIFIER NULL,
    [Entity5ObjectTypeCode]         INT              NULL,
    [Entity5Id]                     UNIQUEIDENTIFIER NULL,
    [BusinessProcessFlowInstanceId] UNIQUEIDENTIFIER CONSTRAINT [DF_BusinessProcessFlowInstanceBase_BusinessProcessFlowInstanceId] DEFAULT (newid()) NOT NULL,
    [Entity3Id]                     UNIQUEIDENTIFIER NULL,
    [Entity3ObjectTypeCode]         INT              NULL,
    [Entity2ObjectTypeCode]         INT              NULL,
    [Entity1ObjectTypeCode]         INT              NULL,
    [Entity1Id]                     UNIQUEIDENTIFIER NULL,
    [Entity4ObjectTypeCode]         INT              NULL,
    [ProcessId]                     UNIQUEIDENTIFIER NOT NULL,
    [ProcessStageId]                UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_BusinessProcessFlowInstance] PRIMARY KEY CLUSTERED ([BusinessProcessFlowInstanceId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [cndx_Entity1_ProcessId]
    ON [dbo].[BusinessProcessFlowInstanceBase]([ProcessId] ASC, [Entity1Id] ASC, [Entity1ObjectTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [cndx_Entity4_ProcessId]
    ON [dbo].[BusinessProcessFlowInstanceBase]([ProcessId] ASC, [Entity4Id] ASC, [Entity4ObjectTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [cndx_Entity2_ProcessId]
    ON [dbo].[BusinessProcessFlowInstanceBase]([ProcessId] ASC, [Entity2Id] ASC, [Entity2ObjectTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [cndx_Entity3_ProcessId]
    ON [dbo].[BusinessProcessFlowInstanceBase]([ProcessId] ASC, [Entity3Id] ASC, [Entity3ObjectTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [cndx_Entity5_ProcessId]
    ON [dbo].[BusinessProcessFlowInstanceBase]([ProcessId] ASC, [Entity5Id] ASC, [Entity5ObjectTypeCode] ASC) WITH (FILLFACTOR = 80);

