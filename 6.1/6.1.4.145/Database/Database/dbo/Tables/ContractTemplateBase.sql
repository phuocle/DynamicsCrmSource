CREATE TABLE [dbo].[ContractTemplateBase] (
    [ContractTemplateId]       UNIQUEIDENTIFIER NOT NULL,
    [Name]                     NVARCHAR (100)   NOT NULL,
    [OrganizationId]           UNIQUEIDENTIFIER NOT NULL,
    [Description]              NVARCHAR (MAX)   NULL,
    [Abbreviation]             NVARCHAR (20)    NOT NULL,
    [ContractServiceLevelCode] INT              NULL,
    [BillingFrequencyCode]     INT              NULL,
    [AllotmentTypeCode]        INT              NULL,
    [UseDiscountAsPercentage]  BIT              NULL,
    [EffectivityCalendar]      NVARCHAR (168)   NULL,
    [CreatedOn]                DATETIME         NULL,
    [CreatedBy]                UNIQUEIDENTIFIER NULL,
    [ModifiedBy]               UNIQUEIDENTIFIER NULL,
    [ModifiedOn]               DATETIME         NULL,
    [VersionNumber]            ROWVERSION       NULL,
    [OverriddenCreatedOn]      DATETIME         NULL,
    [ImportSequenceNumber]     INT              NULL,
    [IsManaged]                BIT              CONSTRAINT [DF_ContractTemplateBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [ModifiedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [ComponentState]           INT              CONSTRAINT [DF_ContractTemplateBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [SolutionId]               UNIQUEIDENTIFIER CONSTRAINT [DF_ContractTemplateBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [OverwriteTime]            DATETIME         CONSTRAINT [DF_ContractTemplateBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SupportingSolutionId]     UNIQUEIDENTIFIER NULL,
    [ContractTemplateIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_ContractTemplateBase_ContractTemplateIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [IsCustomizable]           BIT              CONSTRAINT [DF_ContractTemplateBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [CreatedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [IntroducedVersion]        NVARCHAR (48)    NULL,
    CONSTRAINT [cndx_PrimaryKey_ContractTemplate] PRIMARY KEY CLUSTERED ([ContractTemplateId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [AK1_ContractTemplateBase] UNIQUE NONCLUSTERED ([Abbreviation] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_ContractTemplateBase_ContractTemplateIdUnique] UNIQUE NONCLUSTERED ([ContractTemplateIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ContractTemplateBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ContractTemplateBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[ContractTemplateBase]([Name] ASC) WITH (FILLFACTOR = 80);

