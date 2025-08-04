CREATE TABLE [dbo].[LookUpMappingBase] (
    [IntroducedVersion]                NVARCHAR (48)    NULL,
    [ComponentState]                   INT              CONSTRAINT [DF_LookUpMappingBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ProcessCode]                      INT              CONSTRAINT [DF_LookUpMappingBase_ProcessCode] DEFAULT ((1)) NOT NULL,
    [LookUpAttributeName]              NVARCHAR (160)   NULL,
    [LookUpMappingIdUnique]            UNIQUEIDENTIFIER CONSTRAINT [DF_LookUpMappingBase_LookUpMappingIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [LookUpEntityName]                 NVARCHAR (160)   NULL,
    [CreatedOn]                        DATETIME         NOT NULL,
    [SupportingSolutionId]             UNIQUEIDENTIFIER NULL,
    [OverwriteTime]                    DATETIME         CONSTRAINT [DF_LookUpMappingBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [StatusCode]                       INT              CONSTRAINT [DF_LookUpMappingBase_StatusCode] DEFAULT ((0)) NOT NULL,
    [ModifiedBy]                       UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                UNIQUEIDENTIFIER NULL,
    [StateCode]                        INT              CONSTRAINT [DF_LookUpMappingBase_StateCode] DEFAULT ((0)) NOT NULL,
    [SolutionId]                       UNIQUEIDENTIFIER CONSTRAINT [DF_LookUpMappingBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [IsManaged]                        BIT              CONSTRAINT [DF_LookUpMappingBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [CreatedBy]                        UNIQUEIDENTIFIER NULL,
    [LookUpSourceCode]                 INT              CONSTRAINT [DF_LookUpMappingBase_LookUpSourceCode] DEFAULT ((0)) NOT NULL,
    [TransformationParameterMappingId] UNIQUEIDENTIFIER NULL,
    [LookUpMappingId]                  UNIQUEIDENTIFIER NOT NULL,
    [ColumnMappingId]                  UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                       DATETIME         NOT NULL,
    [ModifiedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_lookupmapping] PRIMARY KEY CLUSTERED ([LookUpMappingId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[LookUpMappingBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[LookUpMappingBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[LookUpMappingBase]([LookUpMappingId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

