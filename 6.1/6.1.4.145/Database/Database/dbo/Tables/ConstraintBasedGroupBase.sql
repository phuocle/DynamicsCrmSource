CREATE TABLE [dbo].[ConstraintBasedGroupBase] (
    [ModifiedBy]             UNIQUEIDENTIFIER NULL,
    [GroupTypeCode]          INT              NOT NULL,
    [VersionNumber]          ROWVERSION       NULL,
    [Name]                   NVARCHAR (160)   NOT NULL,
    [ModifiedOn]             DATETIME         NULL,
    [CreatedBy]              UNIQUEIDENTIFIER NULL,
    [OrganizationId]         UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]              DATETIME         NULL,
    [ConstraintBasedGroupId] UNIQUEIDENTIFIER NOT NULL,
    [Description]            NVARCHAR (MAX)   NULL,
    [Constraints]            NVARCHAR (MAX)   NOT NULL,
    [BusinessUnitId]         UNIQUEIDENTIFIER NOT NULL,
    [CreatedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_ConstraintBasedGroup] PRIMARY KEY CLUSTERED ([ConstraintBasedGroupId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_constraint_based_groups] FOREIGN KEY ([BusinessUnitId]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ConstraintBasedGroupBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ConstraintBasedGroupBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[ConstraintBasedGroupBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[ConstraintBasedGroupBase]([BusinessUnitId] ASC) WITH (FILLFACTOR = 80);

