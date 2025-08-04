CREATE TABLE [dbo].[ContractTemplateBase] (
    [ContractTemplateId]        UNIQUEIDENTIFIER NOT NULL,
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
    [Abbreviation]              NVARCHAR (20)    NOT NULL,
    [AllotmentTypeCode]         INT              NULL,
    [BillingFrequencyCode]      INT              NULL,
    [ComponentState]            INT              CONSTRAINT [DF_ContractTemplateBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ContractServiceLevelCode]  INT              NULL,
    [ContractTemplateIdUnique]  UNIQUEIDENTIFIER CONSTRAINT [DF_ContractTemplateBase_ContractTemplateIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [EffectivityCalendar]       NVARCHAR (168)   NULL,
    [IsCustomizable]            BIT              CONSTRAINT [DF_ContractTemplateBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [IsManaged]                 BIT              CONSTRAINT [DF_ContractTemplateBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [Name]                      NVARCHAR (100)   NOT NULL,
    [OverwriteTime]             DATETIME         CONSTRAINT [DF_ContractTemplateBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SolutionId]                UNIQUEIDENTIFIER CONSTRAINT [DF_ContractTemplateBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]      UNIQUEIDENTIFIER NULL,
    [UseDiscountAsPercentage]   BIT              NULL,
    [IntroducedVersion]         NVARCHAR (48)    NULL,
    CONSTRAINT [cndx_PrimaryKey_ContractTemplate] PRIMARY KEY CLUSTERED ([ContractTemplateId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [AK1_ContractTemplateBase] UNIQUE NONCLUSTERED ([Abbreviation] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW),
    CONSTRAINT [UQ_ContractTemplateBase_ContractTemplateIdUnique] UNIQUE NONCLUSTERED ([ContractTemplateIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ContractTemplateBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[ContractTemplateBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ContractTemplateBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[ContractTemplateBase]([ContractTemplateId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[ContractTemplateBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_9D019AE33C9E415B831D0A29EE21E32B]
    ON [dbo].[ContractTemplateBase]([ContractTemplateId] ASC)
    INCLUDE([Name], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_9D019AE33C9E415B831D0A29EE21E32B]
    ON [dbo].[ContractTemplateBase]([ContractTemplateId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

