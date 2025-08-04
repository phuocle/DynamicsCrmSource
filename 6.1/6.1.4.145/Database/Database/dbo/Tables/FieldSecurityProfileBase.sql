CREATE TABLE [dbo].[FieldSecurityProfileBase] (
    [Description]                  NVARCHAR (MAX)   NULL,
    [SolutionId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_FieldSecurityProfileBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [ComponentState]               INT              CONSTRAINT [DF_FieldSecurityProfileBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ModifiedOn]                   DATETIME         NULL,
    [OverwriteTime]                DATETIME         CONSTRAINT [DF_FieldSecurityProfileBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [CreatedOn]                    DATETIME         NULL,
    [IsManaged]                    BIT              CONSTRAINT [DF_FieldSecurityProfileBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [ModifiedBy]                   UNIQUEIDENTIFIER NULL,
    [OrganizationId]               UNIQUEIDENTIFIER NOT NULL,
    [CreatedBy]                    UNIQUEIDENTIFIER NULL,
    [Name]                         NVARCHAR (100)   NOT NULL,
    [ModifiedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [VersionNumber]                ROWVERSION       NULL,
    [FieldSecurityProfileId]       UNIQUEIDENTIFIER NOT NULL,
    [FieldSecurityProfileIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_FieldSecurityProfileBase_FieldSecurityProfileIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [CreatedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [SupportingSolutionId]         UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_FieldSecurityProfile] PRIMARY KEY CLUSTERED ([FieldSecurityProfileId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_FieldSecurityProfileBase_FieldSecurityProfileIdUnique] UNIQUE NONCLUSTERED ([FieldSecurityProfileIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[FieldSecurityProfileBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[FieldSecurityProfileBase]([Name] ASC) WITH (FILLFACTOR = 80);

