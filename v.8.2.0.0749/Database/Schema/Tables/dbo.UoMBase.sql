CREATE TABLE [dbo].[UoMBase]
(
[UoMId] [uniqueidentifier] NOT NULL,
[BaseUoM] [uniqueidentifier] NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[UoMScheduleId] [uniqueidentifier] NOT NULL,
[Quantity] [decimal] (23, 10) NULL,
[CreatedOn] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[IsScheduleBaseUoM] [bit] NULL CONSTRAINT [Set_To_Zero151] DEFAULT ((0)),
[VersionNumber] [timestamp] NULL,
[ImportSequenceNumber] [int] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedByExternalParty] [uniqueidentifier] NULL,
[CreatedByExternalParty] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[UoMBase] ADD CONSTRAINT [cndx_PrimaryKey_UoM] PRIMARY KEY CLUSTERED  ([UoMId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name] ON [dbo].[UoMBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_unit_of_measure_schedule_conversions] ON [dbo].[UoMBase] ([UoMScheduleId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[UoMBase] ADD CONSTRAINT [AK1_UoMBase] UNIQUE NONCLUSTERED  ([UoMScheduleId], [Name]) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[UoMBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[UoMBase] ADD CONSTRAINT [unit_of_measure_schedule_conversions] FOREIGN KEY ([UoMScheduleId]) REFERENCES [dbo].[UoMScheduleBase] ([UoMScheduleId])
GO
ALTER TABLE [dbo].[UoMBase] ADD CONSTRAINT [unit_of_measurement_base_unit] FOREIGN KEY ([BaseUoM]) REFERENCES [dbo].[UoMBase] ([UoMId])
GO
