CREATE TABLE [dbo].[UoMScheduleBase] (
    [UoMScheduleId]             UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (200)   NOT NULL,
    [BaseUoMName]               NVARCHAR (100)   NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [StateCode]                 INT              CONSTRAINT [DF_UoMScheduleBase_StateCode] DEFAULT ((0)) NOT NULL,
    [StatusCode]                INT              NULL,
    [CreatedByExternalParty]    UNIQUEIDENTIFIER NULL,
    [ModifiedByExternalParty]   UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_UoMSchedule] PRIMARY KEY CLUSTERED ([UoMScheduleId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [lk_externalparty_uomschedule_createdby] FOREIGN KEY ([CreatedByExternalParty]) REFERENCES [dbo].[ExternalPartyBase] ([ExternalPartyId]),
    CONSTRAINT [lk_externalparty_uomschedule_modifiedby] FOREIGN KEY ([ModifiedByExternalParty]) REFERENCES [dbo].[ExternalPartyBase] ([ExternalPartyId]),
    CONSTRAINT [AK1_UoMScheduleBase] UNIQUE NONCLUSTERED ([Name] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[UoMScheduleBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[UoMScheduleBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[UoMScheduleBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_4172CAA0E0C34957AC40C2581E243E2C]
    ON [dbo].[UoMScheduleBase]([UoMScheduleId] ASC)
    INCLUDE([Name], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_4172CAA0E0C34957AC40C2581E243E2C]
    ON [dbo].[UoMScheduleBase]([Name] ASC, [UoMScheduleId] ASC)
    INCLUDE([VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_4172CAA0E0C34957AC40C2581E243E2C]
    ON [dbo].[UoMScheduleBase]([UoMScheduleId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

