CREATE TABLE [dbo].[UoMBase] (
    [UoMId]                UNIQUEIDENTIFIER NOT NULL,
    [BaseUoM]              UNIQUEIDENTIFIER NULL,
    [Name]                 NVARCHAR (100)   NOT NULL,
    [UoMScheduleId]        UNIQUEIDENTIFIER NOT NULL,
    [Quantity]             DECIMAL (23, 10) NULL,
    [CreatedOn]            DATETIME         NULL,
    [CreatedBy]            UNIQUEIDENTIFIER NULL,
    [ModifiedBy]           UNIQUEIDENTIFIER NULL,
    [ModifiedOn]           DATETIME         NULL,
    [IsScheduleBaseUoM]    BIT              CONSTRAINT [Set_To_Zero151] DEFAULT ((0)) NULL,
    [VersionNumber]        ROWVERSION       NULL,
    [ImportSequenceNumber] INT              NULL,
    [OverriddenCreatedOn]  DATETIME         NULL,
    [ModifiedOnBehalfBy]   UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_UoM] PRIMARY KEY CLUSTERED ([UoMId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [unit_of_measure_schedule_conversions] FOREIGN KEY ([UoMScheduleId]) REFERENCES [dbo].[UoMScheduleBase] ([UoMScheduleId]) NOT FOR REPLICATION,
    CONSTRAINT [unit_of_measurement_base_unit] FOREIGN KEY ([BaseUoM]) REFERENCES [dbo].[UoMBase] ([UoMId]) NOT FOR REPLICATION,
    CONSTRAINT [AK1_UoMBase] UNIQUE NONCLUSTERED ([UoMScheduleId] ASC, [Name] ASC)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[UoMBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_unit_of_measure_schedule_conversions]
    ON [dbo].[UoMBase]([UoMScheduleId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[UoMBase]([Name] ASC) WITH (FILLFACTOR = 80);

