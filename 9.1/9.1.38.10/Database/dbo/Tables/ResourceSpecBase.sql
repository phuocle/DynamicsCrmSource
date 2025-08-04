CREATE TABLE [dbo].[ResourceSpecBase] (
    [ResourceSpecId]            UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [BusinessUnitId]            UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (160)   NOT NULL,
    [Constraints]               NVARCHAR (MAX)   NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [EffortRequired]            FLOAT (53)       NOT NULL,
    [GroupObjectId]             UNIQUEIDENTIFIER NOT NULL,
    [ObjectiveExpression]       NVARCHAR (MAX)   NOT NULL,
    [ObjectTypeCode]            INT              NOT NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [RequiredCount]             INT              NOT NULL,
    [SameSite]                  BIT              NULL,
    CONSTRAINT [cndx_PrimaryKey_ResourceSpec] PRIMARY KEY CLUSTERED ([ResourceSpecId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_resource_specs] FOREIGN KEY ([BusinessUnitId]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ResourceSpecBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[ResourceSpecBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ResourceSpecBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[ResourceSpecBase]([BusinessUnitId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_constraint_based_group_resource_specs]
    ON [dbo].[ResourceSpecBase]([GroupObjectId] ASC, [ObjectTypeCode] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Name]
    ON [dbo].[ResourceSpecBase]([Name] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_4AB5FD2A59B746CE81FB40EF5DF43B6B]
    ON [dbo].[ResourceSpecBase]([Name] ASC, [ResourceSpecId] ASC)
    INCLUDE([VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_4AB5FD2A59B746CE81FB40EF5DF43B6B]
    ON [dbo].[ResourceSpecBase]([ResourceSpecId] ASC)
    INCLUDE([Name], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_4AB5FD2A59B746CE81FB40EF5DF43B6B]
    ON [dbo].[ResourceSpecBase]([ResourceSpecId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

