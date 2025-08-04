CREATE TABLE [dbo].[AppConfigInstanceBase] (
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [CreatedOn]                 DATETIME         NULL,
    [AppConfigId]               UNIQUEIDENTIFIER NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [Value]                     NVARCHAR (100)   NOT NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [AppConfigIdUnique]         UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [SupportingSolutionId]      UNIQUEIDENTIFIER NULL,
    [ComponentType]             NVARCHAR (100)   NULL,
    [AppConfigInstanceIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_AppConfigInstanceBase_AppConfigInstanceIdUnique] DEFAULT (newid()) ROWGUIDCOL NULL,
    [SolutionId]                UNIQUEIDENTIFIER CONSTRAINT [DF_AppConfigInstanceBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [AppConfigMasterId]         UNIQUEIDENTIFIER NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [ObjectId]                  UNIQUEIDENTIFIER NULL,
    [IntroducedVersion]         NVARCHAR (100)   NULL,
    [OverwriteTime]             DATETIME         CONSTRAINT [DF_AppConfigInstanceBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [AppConfigInstanceId]       UNIQUEIDENTIFIER CONSTRAINT [DF_AppConfigInstanceBase_AppConfigInstanceId] DEFAULT (newid()) NOT NULL,
    [IsManaged]                 BIT              CONSTRAINT [DF_AppConfigInstanceBase_IsManaged] DEFAULT ((0)) NULL,
    [ComponentState]            INT              CONSTRAINT [DF_AppConfigInstanceBase_ComponentState] DEFAULT ((1)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_AppConfigInstance] PRIMARY KEY CLUSTERED ([AppConfigInstanceId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[AppConfigInstanceBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [cndx_unq_AppConfigMasterId_ComponentType_ObjectId]
    ON [dbo].[AppConfigInstanceBase]([AppConfigId] ASC, [AppConfigMasterId] ASC, [ComponentType] ASC, [ObjectId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[AppConfigInstanceBase]([AppConfigInstanceId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

