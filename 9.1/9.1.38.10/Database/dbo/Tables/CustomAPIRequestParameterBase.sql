CREATE TABLE [dbo].[CustomAPIRequestParameterBase] (
    [CustomAPIRequestParameterId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                   DATETIME         NULL,
    [CreatedBy]                   UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                  DATETIME         NULL,
    [ModifiedBy]                  UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]          UNIQUEIDENTIFIER NULL,
    [OwnerId]                     UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                 INT              CONSTRAINT [DF_CustomAPIRequestParameterBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]          UNIQUEIDENTIFIER NULL,
    [statecode]                   INT              NOT NULL,
    [statuscode]                  INT              NULL,
    [VersionNumber]               ROWVERSION       NULL,
    [ImportSequenceNumber]        INT              NULL,
    [OverriddenCreatedOn]         DATETIME         NULL,
    [TimeZoneRuleVersionNumber]   INT              NULL,
    [UTCConversionTimeZoneCode]   INT              NULL,
    [Name]                        NVARCHAR (100)   NULL,
    [OverwriteTime]               DATETIME         CONSTRAINT [DF_CustomAPIRequestParameterBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SolutionId]                  UNIQUEIDENTIFIER CONSTRAINT [DF_CustomAPIRequestParameterBase_SolutionId] DEFAULT ('fd140aae-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]        UNIQUEIDENTIFIER NULL,
    [ComponentState]              INT              CONSTRAINT [DF_CustomAPIRequestParameterBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ComponentIdUnique]           UNIQUEIDENTIFIER CONSTRAINT [DF_CustomAPIRequestParameterBase_ComponentIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [IsManaged]                   BIT              CONSTRAINT [DF_CustomAPIRequestParameterBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [IsCustomizable]              BIT              CONSTRAINT [DF_CustomAPIRequestParameterBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [EntityLogicalName]           NVARCHAR (100)   NULL,
    [Description]                 NVARCHAR (100)   NULL,
    [DisplayName]                 NVARCHAR (100)   NULL,
    [IsOptional]                  BIT              NULL,
    [CustomAPIId]                 UNIQUEIDENTIFIER NULL,
    [Type]                        INT              NULL,
    [UniqueName]                  NVARCHAR (128)   NULL,
    CONSTRAINT [cndx_PrimaryKey_CustomAPIRequestParameter] PRIMARY KEY CLUSTERED ([CustomAPIRequestParameterId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_customapirequestparameter] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [customapi_customapirequestparameter] FOREIGN KEY ([CustomAPIId]) REFERENCES [dbo].[CustomAPIBaseIds] ([CustomAPIId]),
    CONSTRAINT [owner_customapirequestparameter] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [UQ_CustomAPIRequestParameterBase_ComponentIdUnique] UNIQUE NONCLUSTERED ([ComponentIdUnique] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[CustomAPIRequestParameterBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_CustomAPIRequestParameters]
    ON [dbo].[CustomAPIRequestParameterBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[CustomAPIRequestParameterBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[CustomAPIRequestParameterBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Name]
    ON [dbo].[CustomAPIRequestParameterBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[CustomAPIRequestParameterBase]([CustomAPIRequestParameterId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_customapi_customapirequestparameter]
    ON [dbo].[CustomAPIRequestParameterBase]([CustomAPIId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_for_entitykey_Custom API Request Parameter Export Key]
    ON [dbo].[CustomAPIRequestParameterBase]([ComponentState] ASC, [CustomAPIId] ASC, [OverwriteTime] ASC, [UniqueName] ASC)
    INCLUDE([CustomAPIRequestParameterId]) WHERE ([ComponentState] IS NOT NULL AND [CustomAPIId] IS NOT NULL AND [OverwriteTime] IS NOT NULL AND [UniqueName] IS NOT NULL) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

