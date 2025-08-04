CREATE TABLE [dbo].[ResourceSpecBase] (
    [EffortRequired]      FLOAT (53)       NOT NULL,
    [OrganizationId]      UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOn]          DATETIME         NULL,
    [ObjectTypeCode]      INT              NOT NULL,
    [Description]         NVARCHAR (MAX)   NULL,
    [ModifiedBy]          UNIQUEIDENTIFIER NULL,
    [BusinessUnitId]      UNIQUEIDENTIFIER NOT NULL,
    [Name]                NVARCHAR (160)   NOT NULL,
    [CreatedBy]           UNIQUEIDENTIFIER NULL,
    [CreatedOn]           DATETIME         NULL,
    [VersionNumber]       ROWVERSION       NULL,
    [ObjectiveExpression] NVARCHAR (MAX)   NOT NULL,
    [SameSite]            BIT              NULL,
    [Constraints]         NVARCHAR (MAX)   NULL,
    [ResourceSpecId]      UNIQUEIDENTIFIER NOT NULL,
    [GroupObjectId]       UNIQUEIDENTIFIER NOT NULL,
    [RequiredCount]       INT              NOT NULL,
    [ModifiedOnBehalfBy]  UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]   UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_ResourceSpec] PRIMARY KEY CLUSTERED ([ResourceSpecId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_resource_specs] FOREIGN KEY ([BusinessUnitId]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ResourceSpecBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[ResourceSpecBase]([BusinessUnitId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ResourceSpecBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_constraint_based_group_resource_specs]
    ON [dbo].[ResourceSpecBase]([GroupObjectId] ASC, [ObjectTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Name]
    ON [dbo].[ResourceSpecBase]([Name] ASC) WITH (FILLFACTOR = 80);

