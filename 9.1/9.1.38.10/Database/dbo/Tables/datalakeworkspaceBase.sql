CREATE TABLE [dbo].[datalakeworkspaceBase] (
    [datalakeworkspaceId]          UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                    DATETIME         NULL,
    [CreatedBy]                    UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                   DATETIME         NULL,
    [ModifiedBy]                   UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [OrganizationId]               UNIQUEIDENTIFIER NULL,
    [statecode]                    INT              NOT NULL,
    [statuscode]                   INT              NULL,
    [VersionNumber]                ROWVERSION       NULL,
    [ImportSequenceNumber]         INT              NULL,
    [OverriddenCreatedOn]          DATETIME         NULL,
    [TimeZoneRuleVersionNumber]    INT              NULL,
    [UTCConversionTimeZoneCode]    INT              NULL,
    [name]                         NVARCHAR (100)   NULL,
    [OverwriteTime]                DATETIME         CONSTRAINT [DF_datalakeworkspaceBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SolutionId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_datalakeworkspaceBase_SolutionId] DEFAULT ('fd140aae-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]         UNIQUEIDENTIFIER NULL,
    [ComponentState]               INT              CONSTRAINT [DF_datalakeworkspaceBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ComponentIdUnique]            UNIQUEIDENTIFIER CONSTRAINT [DF_datalakeworkspaceBase_ComponentIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [IsManaged]                    BIT              CONSTRAINT [DF_datalakeworkspaceBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [IsCustomizable]               BIT              CONSTRAINT [DF_datalakeworkspaceBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [containerendpoint]            NVARCHAR (100)   NULL,
    [datalakeworkspace_UniqueName] NVARCHAR (128)   NULL,
    [path]                         NVARCHAR (100)   NULL,
    [iscustomercapacity]           BIT              NULL,
    [isprivate]                    BIT              NULL,
    [isdeepcopyenabled]            BIT              NULL,
    [owningappid]                  UNIQUEIDENTIFIER NULL,
    [tenantid]                     UNIQUEIDENTIFIER NULL,
    [whitelistedappid]             UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_datalakeworkspace] PRIMARY KEY CLUSTERED ([datalakeworkspaceId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [UQ_datalakeworkspaceBase_ComponentIdUnique] UNIQUE NONCLUSTERED ([ComponentIdUnique] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[datalakeworkspaceBase]([OrganizationId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[datalakeworkspaceBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[datalakeworkspaceBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[datalakeworkspaceBase]([name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[datalakeworkspaceBase]([datalakeworkspaceId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_for_entitykey_datalakeworkspace_uniquename]
    ON [dbo].[datalakeworkspaceBase]([ComponentState] ASC, [datalakeworkspace_UniqueName] ASC, [OverwriteTime] ASC)
    INCLUDE([datalakeworkspaceId]) WHERE ([ComponentState] IS NOT NULL AND [datalakeworkspace_UniqueName] IS NOT NULL AND [OverwriteTime] IS NOT NULL) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_E5141490C2264D4696D3C7F0B302B343]
    ON [dbo].[datalakeworkspaceBase]([datalakeworkspaceId] ASC)
    INCLUDE([name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_E5141490C2264D4696D3C7F0B302B343]
    ON [dbo].[datalakeworkspaceBase]([datalakeworkspaceId] ASC)
    INCLUDE([name], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_E5141490C2264D4696D3C7F0B302B343]
    ON [dbo].[datalakeworkspaceBase]([name] ASC, [datalakeworkspaceId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

