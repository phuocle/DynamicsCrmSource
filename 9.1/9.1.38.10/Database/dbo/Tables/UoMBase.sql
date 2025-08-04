CREATE TABLE [dbo].[UoMBase] (
    [UoMId]                     UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (100)   NOT NULL,
    [BaseUoM]                   UNIQUEIDENTIFIER NULL,
    [IsScheduleBaseUoM]         BIT              CONSTRAINT [DF_UoMBase_IsScheduleBaseUoM] DEFAULT ((0)) NULL,
    [Quantity]                  DECIMAL (23, 10) NULL,
    [UoMScheduleId]             UNIQUEIDENTIFIER NOT NULL,
    [CreatedByExternalParty]    UNIQUEIDENTIFIER NULL,
    [ModifiedByExternalParty]   UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_UoM] PRIMARY KEY CLUSTERED ([UoMId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [lk_externalparty_uom_createdby] FOREIGN KEY ([CreatedByExternalParty]) REFERENCES [dbo].[ExternalPartyBase] ([ExternalPartyId]),
    CONSTRAINT [lk_externalparty_uom_modifiedby] FOREIGN KEY ([ModifiedByExternalParty]) REFERENCES [dbo].[ExternalPartyBase] ([ExternalPartyId]),
    CONSTRAINT [unit_of_measure_schedule_conversions] FOREIGN KEY ([UoMScheduleId]) REFERENCES [dbo].[UoMScheduleBase] ([UoMScheduleId]),
    CONSTRAINT [unit_of_measurement_base_unit] FOREIGN KEY ([BaseUoM]) REFERENCES [dbo].[UoMBase] ([UoMId]),
    CONSTRAINT [AK1_UoMBase] UNIQUE NONCLUSTERED ([UoMScheduleId] ASC, [Name] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW)
);


GO
ALTER TABLE [dbo].[UoMBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[UoMBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_unit_of_measure_schedule_conversions]
    ON [dbo].[UoMBase]([UoMScheduleId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_47BD14A4D4964B2086F604D21C42F14E]
    ON [dbo].[UoMBase]([UoMId] ASC)
    INCLUDE([Name], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[UoMBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_47BD14A4D4964B2086F604D21C42F14E]
    ON [dbo].[UoMBase]([UoMId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_unit_of_measurement_base_unit]
    ON [dbo].[UoMBase]([BaseUoM] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

