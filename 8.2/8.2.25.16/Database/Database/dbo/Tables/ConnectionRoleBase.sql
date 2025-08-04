CREATE TABLE [dbo].[ConnectionRoleBase] (
    [ConnectionRoleIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_ConnectionRoleBase_ConnectionRoleIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [ConnectionRoleId]       UNIQUEIDENTIFIER NOT NULL,
    [CreatedBy]              UNIQUEIDENTIFIER NULL,
    [CreatedOn]              DATETIME         NULL,
    [VersionNumber]          ROWVERSION       NULL,
    [ComponentState]         INT              CONSTRAINT [DF_ConnectionRoleBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [IsManaged]              BIT              CONSTRAINT [DF_ConnectionRoleBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [SupportingSolutionId]   UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [OrganizationId]         UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOn]             DATETIME         NULL,
    [ImportSequenceNumber]   INT              NULL,
    [Name]                   NVARCHAR (100)   NOT NULL,
    [CreatedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [StatusCode]             INT              NULL,
    [StateCode]              INT              NOT NULL,
    [Category]               INT              NULL,
    [ModifiedBy]             UNIQUEIDENTIFIER NULL,
    [OverwriteTime]          DATETIME         CONSTRAINT [DF_ConnectionRoleBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [IsCustomizable]         BIT              CONSTRAINT [DF_ConnectionRoleBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [Description]            NVARCHAR (1000)  NULL,
    [SolutionId]             UNIQUEIDENTIFIER CONSTRAINT [DF_ConnectionRoleBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [IntroducedVersion]      NVARCHAR (48)    NULL,
    CONSTRAINT [cndx_PrimaryKey_ConnectionRole] PRIMARY KEY CLUSTERED ([ConnectionRoleId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_ConnectionRoleBase_ConnectionRoleIdUnique] UNIQUE NONCLUSTERED ([ConnectionRoleIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ConnectionRoleBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[ConnectionRoleBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[ConnectionRoleBase]([Name] ASC) WITH (FILLFACTOR = 80);

