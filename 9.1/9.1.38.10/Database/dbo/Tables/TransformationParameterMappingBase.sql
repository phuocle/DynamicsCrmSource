CREATE TABLE [dbo].[TransformationParameterMappingBase] (
    [ModifiedOn]                             DATETIME         NOT NULL,
    [Data]                                   NVARCHAR (500)   NULL,
    [SolutionId]                             UNIQUEIDENTIFIER CONSTRAINT [DF_TransformationParameterMappingBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [CreatedBy]                              UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                             UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]                     UNIQUEIDENTIFIER NULL,
    [CreatedOn]                              DATETIME         NOT NULL,
    [TransformationMappingId]                UNIQUEIDENTIFIER NULL,
    [IsManaged]                              BIT              CONSTRAINT [DF_TransformationParameterMappingBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [ParameterTypeCode]                      INT              NULL,
    [OverwriteTime]                          DATETIME         CONSTRAINT [DF_TransformationParameterMappingBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [TransformationParameterMappingIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_TransformationParameterMappingBase_TransformationParameterMappingIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [ParameterArrayIndex]                    INT              NULL,
    [ParameterSequence]                      INT              NULL,
    [CreatedOnBehalfBy]                      UNIQUEIDENTIFIER NULL,
    [DataTypeCode]                           INT              CONSTRAINT [DF_TransformationParameterMappingBase_DataTypeCode] DEFAULT ((0)) NULL,
    [SupportingSolutionId]                   UNIQUEIDENTIFIER NULL,
    [ComponentState]                         INT              CONSTRAINT [DF_TransformationParameterMappingBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [IntroducedVersion]                      NVARCHAR (48)    NULL,
    [TransformationParameterMappingId]       UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_TransformationParameterMapping] PRIMARY KEY CLUSTERED ([TransformationParameterMappingId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[TransformationParameterMappingBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[TransformationParameterMappingBase]([TransformationParameterMappingId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_7CF4CC40D3BF4CB7A08B173B4F8A4010]
    ON [dbo].[TransformationParameterMappingBase]([TransformationParameterMappingId] ASC)
    INCLUDE([Data]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_7CF4CC40D3BF4CB7A08B173B4F8A4010]
    ON [dbo].[TransformationParameterMappingBase]([TransformationParameterMappingId] ASC)
    INCLUDE([Data]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Data]
    ON [dbo].[TransformationParameterMappingBase]([Data] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_7CF4CC40D3BF4CB7A08B173B4F8A4010]
    ON [dbo].[TransformationParameterMappingBase]([Data] ASC, [TransformationParameterMappingId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

