CREATE TABLE [dbo].[msdyn_AITemplateBase] (
    [msdyn_AITemplateId]                UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                         DATETIME         NULL,
    [CreatedBy]                         UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                        DATETIME         NULL,
    [ModifiedBy]                        UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]                UNIQUEIDENTIFIER NULL,
    [OwnerId]                           UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                       INT              CONSTRAINT [DF_msdyn_AITemplateBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]                UNIQUEIDENTIFIER NULL,
    [statecode]                         INT              NOT NULL,
    [statuscode]                        INT              NULL,
    [VersionNumber]                     ROWVERSION       NULL,
    [ImportSequenceNumber]              INT              NULL,
    [OverriddenCreatedOn]               DATETIME         NULL,
    [TimeZoneRuleVersionNumber]         INT              NULL,
    [UTCConversionTimeZoneCode]         INT              NULL,
    [msdyn_AITemplateIdUnique]          UNIQUEIDENTIFIER CONSTRAINT [DF_msdyn_AITemplateBase_msdyn_AITemplateIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [SolutionId]                        UNIQUEIDENTIFIER CONSTRAINT [DF_msdyn_AITemplateBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]              UNIQUEIDENTIFIER NULL,
    [ComponentState]                    INT              CONSTRAINT [DF_msdyn_AITemplateBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [OverwriteTime]                     DATETIME         CONSTRAINT [DF_msdyn_AITemplateBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [IsManaged]                         BIT              CONSTRAINT [DF_msdyn_AITemplateBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [IntroducedVersion]                 NVARCHAR (48)    NULL,
    [IsCustomizable]                    BIT              CONSTRAINT [DF_msdyn_AITemplateBase_IsCustomizable] DEFAULT ((0)) NOT NULL,
    [msdyn_ResourceInfo]                NVARCHAR (MAX)   NOT NULL,
    [msdyn_RunConfigSchema]             NVARCHAR (MAX)   NULL,
    [msdyn_IsTrainable]                 BIT              NOT NULL,
    [msdyn_TrainingDataSpecification]   NVARCHAR (MAX)   NULL,
    [msdyn_RunDataSpecification]        NVARCHAR (MAX)   NULL,
    [msdyn_TrainingConfigSchema]        NVARCHAR (MAX)   NULL,
    [msdyn_UniqueName]                  NVARCHAR (100)   NOT NULL,
    [msdyn_defaultrunschedulingoptions] NVARCHAR (MAX)   NULL,
    [msdyn_TemplateVersion]             INT              CONSTRAINT [DF_msdyn_AITemplateBase_msdyn_TemplateVersion] DEFAULT ((1)) NULL,
    [msdyn_DataBinding]                 NVARCHAR (MAX)   NULL,
    [msdyn_UXConfiguration]             NVARCHAR (MAX)   NULL,
    CONSTRAINT [PK_msdyn_AITemplateBase] PRIMARY KEY CLUSTERED ([msdyn_AITemplateId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_msdyn_aitemplate] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_msdyn_aitemplate] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [UQ_msdyn_AITemplateBase_msdyn_AITemplateIdUnique] UNIQUE NONCLUSTERED ([msdyn_AITemplateIdUnique] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Uniquename]
    ON [dbo].[msdyn_AITemplateBase]([msdyn_UniqueName] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_D74FE7B7797D49FCA84312C281F98560]
    ON [dbo].[msdyn_AITemplateBase]([msdyn_AITemplateId] ASC)
    INCLUDE([msdyn_UniqueName]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_D74FE7B7797D49FCA84312C281F98560]
    ON [dbo].[msdyn_AITemplateBase]([msdyn_AITemplateId] ASC)
    INCLUDE([msdyn_UniqueName], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_D74FE7B7797D49FCA84312C281F98560]
    ON [dbo].[msdyn_AITemplateBase]([msdyn_UniqueName] ASC, [msdyn_AITemplateId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

