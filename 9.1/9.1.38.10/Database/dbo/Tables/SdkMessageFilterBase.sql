CREATE TABLE [dbo].[SdkMessageFilterBase] (
    [PrimaryObjectTypeCode]         INT              NOT NULL,
    [CreatedBy]                     UNIQUEIDENTIFIER NULL,
    [IsVisible]                     BIT              CONSTRAINT [DF_SdkMessageFilterBase_IsVisible] DEFAULT ((1)) NOT NULL,
    [VersionNumber]                 ROWVERSION       NULL,
    [ModifiedOn]                    DATETIME         NULL,
    [IsManaged]                     BIT              CONSTRAINT [DF_SdkMessageFilterBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [CreatedOn]                     DATETIME         NULL,
    [Availability]                  INT              NOT NULL,
    [SdkMessageFilterIdUnique]      UNIQUEIDENTIFIER CONSTRAINT [DF_SdkMessageFilterBase_SdkMessageFilterIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [WorkflowSdkStepEnabled]        BIT              CONSTRAINT [DF_SdkMessageFilterBase_WorkflowSdkStepEnabled] DEFAULT ((0)) NULL,
    [ModifiedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [RestrictionLevel]              INT              CONSTRAINT [DF_SdkMessageFilterBase_RestrictionLevel] DEFAULT ((0)) NOT NULL,
    [IntroducedVersion]             NVARCHAR (42)    NULL,
    [SolutionId]                    UNIQUEIDENTIFIER CONSTRAINT [DF_SdkMessageFilterBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [CreatedOnBehalfBy]             UNIQUEIDENTIFIER NULL,
    [CustomizationLevel]            INT              CONSTRAINT [DF_SdkMessageFilterBase_CustomizationLevel] DEFAULT ((0)) NOT NULL,
    [OrganizationId]                UNIQUEIDENTIFIER NOT NULL,
    [ComponentState]                INT              CONSTRAINT [DF_SdkMessageFilterBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [SupportingSolutionId]          UNIQUEIDENTIFIER NULL,
    [SecondaryObjectTypeCode]       INT              NOT NULL,
    [SdkMessageFilterId]            UNIQUEIDENTIFIER NOT NULL,
    [ModifiedBy]                    UNIQUEIDENTIFIER NULL,
    [IsCustomProcessingStepAllowed] BIT              CONSTRAINT [DF_SdkMessageFilterBase_IsCustomProcessingStepAllowed] DEFAULT ((0)) NOT NULL,
    [SdkMessageId]                  UNIQUEIDENTIFIER NOT NULL,
    [OverwriteTime]                 DATETIME         CONSTRAINT [DF_SdkMessageFilterBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [Name]                          NVARCHAR (256)   NULL,
    CONSTRAINT [cndx_PrimaryKey_SdkMessageFilter] PRIMARY KEY CLUSTERED ([SdkMessageFilterId] ASC, [CustomizationLevel] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_SdkMessageFilterBase_SdkMessageFilterIdUnique] UNIQUE NONCLUSTERED ([SdkMessageFilterIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[SdkMessageFilterBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SdkMessageFilterBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_Cover_SdkMessageFilter]
    ON [dbo].[SdkMessageFilterBase]([SdkMessageId] ASC, [PrimaryObjectTypeCode] ASC, [SecondaryObjectTypeCode] ASC)
    INCLUDE([CustomizationLevel], [SdkMessageFilterIdUnique], [IsVisible]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_SdkMessageFilterId_PrimaryObjectTypeCode]
    ON [dbo].[SdkMessageFilterBase]([SdkMessageFilterId] ASC, [PrimaryObjectTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[SdkMessageFilterBase]([SdkMessageFilterId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_FE78214F46EB4BE9A011A4ED6FD17BE7]
    ON [dbo].[SdkMessageFilterBase]([SdkMessageFilterId] ASC)
    INCLUDE([SdkMessageId], [PrimaryObjectTypeCode], [SecondaryObjectTypeCode], [Availability], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

