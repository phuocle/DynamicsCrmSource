CREATE TABLE [dbo].[EnvironmentVariableValueBase] (
    [EnvironmentVariableValueId]       UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                        DATETIME         NULL,
    [CreatedBy]                        UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                       DATETIME         NULL,
    [ModifiedBy]                       UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    [OwnerId]                          UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                      INT              CONSTRAINT [DF_EnvironmentVariableValueBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]               UNIQUEIDENTIFIER NULL,
    [statecode]                        INT              NOT NULL,
    [statuscode]                       INT              NULL,
    [VersionNumber]                    ROWVERSION       NULL,
    [ImportSequenceNumber]             INT              NULL,
    [OverriddenCreatedOn]              DATETIME         NULL,
    [TimeZoneRuleVersionNumber]        INT              NULL,
    [UTCConversionTimeZoneCode]        INT              NULL,
    [EnvironmentVariableValueIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_EnvironmentVariableValueBase_EnvironmentVariableValueIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [SchemaName]                       NVARCHAR (100)   CONSTRAINT [DF_EnvironmentVariableValueBase_SchemaName] DEFAULT (newid()) NULL,
    [Value]                            NVARCHAR (MAX)   NULL,
    [EnvironmentVariableDefinitionId]  UNIQUEIDENTIFIER NULL,
    [SolutionId]                       UNIQUEIDENTIFIER CONSTRAINT [DF_EnvironmentVariableValueBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]             UNIQUEIDENTIFIER NULL,
    [ComponentState]                   INT              CONSTRAINT [DF_EnvironmentVariableValueBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [OverwriteTime]                    DATETIME         CONSTRAINT [DF_EnvironmentVariableValueBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [IsManaged]                        BIT              CONSTRAINT [DF_EnvironmentVariableValueBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [IntroducedVersion]                NVARCHAR (48)    NULL,
    [IsCustomizable]                   BIT              CONSTRAINT [DF_EnvironmentVariableValueBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [Value_QF_prefix]                  AS               (CONVERT([nvarchar](850),substring([Value],(1),(850)))),
    CONSTRAINT [PK_EnvironmentVariableValueBase] PRIMARY KEY CLUSTERED ([EnvironmentVariableValueId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_environmentvariablevalue] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [environmentvariabledefinition_environmentvariablevalue] FOREIGN KEY ([EnvironmentVariableDefinitionId]) REFERENCES [dbo].[EnvironmentVariableDefinitionBaseIds] ([EnvironmentVariableDefinitionId]),
    CONSTRAINT [owner_environmentvariablevalue] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [ndx_envvarval_schemaname] UNIQUE NONCLUSTERED ([SchemaName] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [UQ_EnvironmentVariableValueBase_EnvironmentVariableValueIdUnique] UNIQUE NONCLUSTERED ([EnvironmentVariableValueIdUnique] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_405626C24C5B4E03A39E8548368C4D92]
    ON [dbo].[EnvironmentVariableValueBase]([EnvironmentVariableValueId] ASC)
    INCLUDE([Value], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_405626C24C5B4E03A39E8548368C4D92]
    ON [dbo].[EnvironmentVariableValueBase]([EnvironmentVariableValueId] ASC)
    INCLUDE([Value]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Value]
    ON [dbo].[EnvironmentVariableValueBase]([Value_QF_prefix] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

