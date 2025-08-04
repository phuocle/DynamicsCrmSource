CREATE TABLE [dbo].[EnvironmentVariableDefinitionBase] (
    [EnvironmentVariableDefinitionId]       UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                             DATETIME         NULL,
    [CreatedBy]                             UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                            DATETIME         NULL,
    [ModifiedBy]                            UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                     UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]                    UNIQUEIDENTIFIER NULL,
    [OwnerId]                               UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                           INT              CONSTRAINT [DF_EnvironmentVariableDefinitionBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]                    UNIQUEIDENTIFIER NULL,
    [statecode]                             INT              NOT NULL,
    [statuscode]                            INT              NULL,
    [VersionNumber]                         ROWVERSION       NULL,
    [ImportSequenceNumber]                  INT              NULL,
    [OverriddenCreatedOn]                   DATETIME         NULL,
    [TimeZoneRuleVersionNumber]             INT              NULL,
    [UTCConversionTimeZoneCode]             INT              NULL,
    [EnvironmentVariableDefinitionIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_EnvironmentVariableDefinitionBase_EnvironmentVariableDefinitionIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [SchemaName]                            NVARCHAR (100)   NULL,
    [DisplayName]                           NVARCHAR (100)   NULL,
    [Description]                           NVARCHAR (MAX)   NULL,
    [Hint]                                  NVARCHAR (MAX)   NULL,
    [IsRequired]                            BIT              NULL,
    [Type]                                  INT              NULL,
    [ValueSchema]                           NVARCHAR (MAX)   NULL,
    [DefaultValue]                          NVARCHAR (MAX)   NULL,
    [SolutionId]                            UNIQUEIDENTIFIER CONSTRAINT [DF_EnvironmentVariableDefinitionBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]                  UNIQUEIDENTIFIER NULL,
    [ComponentState]                        INT              CONSTRAINT [DF_EnvironmentVariableDefinitionBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [OverwriteTime]                         DATETIME         CONSTRAINT [DF_EnvironmentVariableDefinitionBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [IsManaged]                             BIT              CONSTRAINT [DF_EnvironmentVariableDefinitionBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [IntroducedVersion]                     NVARCHAR (48)    NULL,
    [IsCustomizable]                        BIT              CONSTRAINT [DF_EnvironmentVariableDefinitionBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [ConnectionReferenceId]                 UNIQUEIDENTIFIER NULL,
    [ConnectionId]                          NVARCHAR (300)   NULL,
    [DataSourceType]                        NVARCHAR (150)   NULL,
    [ParentDefinitionId]                    UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_EnvironmentVariableDefinitionBase] PRIMARY KEY CLUSTERED ([EnvironmentVariableDefinitionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_environmentvariabledefinition] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_environmentvariabledefinition] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [UQ_EnvironmentVariableDefinitionBase_EnvironmentVariableDefinitionIdUnique] UNIQUE NONCLUSTERED ([EnvironmentVariableDefinitionIdUnique] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_2C1649EF483A49F986624934C62E4EC2]
    ON [dbo].[EnvironmentVariableDefinitionBase]([EnvironmentVariableDefinitionId] ASC)
    INCLUDE([SchemaName]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_2C1649EF483A49F986624934C62E4EC2]
    ON [dbo].[EnvironmentVariableDefinitionBase]([EnvironmentVariableDefinitionId] ASC)
    INCLUDE([SchemaName], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SchemaName]
    ON [dbo].[EnvironmentVariableDefinitionBase]([SchemaName] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_2C1649EF483A49F986624934C62E4EC2]
    ON [dbo].[EnvironmentVariableDefinitionBase]([SchemaName] ASC, [EnvironmentVariableDefinitionId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

