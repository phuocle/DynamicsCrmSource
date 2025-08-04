CREATE TABLE [dbo].[ConstraintBasedGroupBase] (
    [ConstraintBasedGroupId]    UNIQUEIDENTIFIER NOT NULL,
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
    [Constraints]               NVARCHAR (MAX)   NOT NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [GroupTypeCode]             INT              NOT NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_ConstraintBasedGroup] PRIMARY KEY CLUSTERED ([ConstraintBasedGroupId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_constraint_based_groups] FOREIGN KEY ([BusinessUnitId]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ConstraintBasedGroupBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[ConstraintBasedGroupBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ConstraintBasedGroupBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[ConstraintBasedGroupBase]([BusinessUnitId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_D2CD0C61F3424B17BB6D2CD46FCFE8B5]
    ON [dbo].[ConstraintBasedGroupBase]([ConstraintBasedGroupId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_D2CD0C61F3424B17BB6D2CD46FCFE8B5]
    ON [dbo].[ConstraintBasedGroupBase]([Name] ASC, [ConstraintBasedGroupId] ASC)
    INCLUDE([BusinessUnitId], [GroupTypeCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[ConstraintBasedGroupBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_D2CD0C61F3424B17BB6D2CD46FCFE8B5]
    ON [dbo].[ConstraintBasedGroupBase]([ConstraintBasedGroupId] ASC)
    INCLUDE([Name], [BusinessUnitId], [GroupTypeCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

