CREATE TABLE [dbo].[msdyn_tourBase] (
    [msdyn_tourId]              UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NULL,
    [statecode]                 INT              NOT NULL,
    [statuscode]                INT              NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [msdyn_displayname]         NVARCHAR (1024)  NULL,
    [OverwriteTime]             DATETIME         CONSTRAINT [DF_msdyn_tourBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SolutionId]                UNIQUEIDENTIFIER CONSTRAINT [DF_msdyn_tourBase_SolutionId] DEFAULT ('fd140aae-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]      UNIQUEIDENTIFIER NULL,
    [ComponentState]            INT              CONSTRAINT [DF_msdyn_tourBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ComponentIdUnique]         UNIQUEIDENTIFIER CONSTRAINT [DF_msdyn_tourBase_ComponentIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [IsManaged]                 BIT              CONSTRAINT [DF_msdyn_tourBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [IsCustomizable]            BIT              CONSTRAINT [DF_msdyn_tourBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [msdyn_path]                NVARCHAR (1024)  NULL,
    [msdyn_labelsresource]      NVARCHAR (1024)  NULL,
    [msdyn_tourdefinition]      NVARCHAR (MAX)   NULL,
    CONSTRAINT [cndx_PrimaryKey_msdyn_tour] PRIMARY KEY CLUSTERED ([msdyn_tourId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [UQ_msdyn_tourBase_ComponentIdUnique] UNIQUE NONCLUSTERED ([ComponentIdUnique] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[msdyn_tourBase]([OrganizationId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_tourBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_tourBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[msdyn_tourBase]([msdyn_tourId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_7990CD167D434DFEAA19C446B02D022B]
    ON [dbo].[msdyn_tourBase]([msdyn_tourId] ASC)
    INCLUDE([msdyn_displayname]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_7990CD167D434DFEAA19C446B02D022B]
    ON [dbo].[msdyn_tourBase]([msdyn_tourId] ASC)
    INCLUDE([msdyn_displayname], [msdyn_path], [CreatedOn], [CreatedBy], [ModifiedBy], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

