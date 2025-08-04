CREATE TABLE [dbo].[ConnectionRoleBase] (
    [ConnectionRoleIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_ConnectionRoleBase_ConnectionRoleIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [Category]               INT              NULL,
    [ModifiedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [VersionNumber]          ROWVERSION       NULL,
    [ConnectionRoleId]       UNIQUEIDENTIFIER NOT NULL,
    [SupportingSolutionId]   UNIQUEIDENTIFIER NULL,
    [OrganizationId]         UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOn]             DATETIME         NULL,
    [IsManaged]              BIT              CONSTRAINT [DF_ConnectionRoleBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [ImportSequenceNumber]   INT              NULL,
    [Name]                   NVARCHAR (100)   NOT NULL,
    [CreatedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [StatusCode]             INT              NULL,
    [StateCode]              INT              NOT NULL,
    [CreatedOn]              DATETIME         NULL,
    [ModifiedBy]             UNIQUEIDENTIFIER NULL,
    [OverwriteTime]          DATETIME         CONSTRAINT [DF_ConnectionRoleBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [Description]            NVARCHAR (1000)  NULL,
    [IsCustomizable]         BIT              CONSTRAINT [DF_ConnectionRoleBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [ComponentState]         INT              CONSTRAINT [DF_ConnectionRoleBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [IntroducedVersion]      NVARCHAR (48)    NULL,
    [CreatedBy]              UNIQUEIDENTIFIER NULL,
    [SolutionId]             UNIQUEIDENTIFIER CONSTRAINT [DF_ConnectionRoleBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_ConnectionRole] PRIMARY KEY CLUSTERED ([ConnectionRoleId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_ConnectionRoleBase_ConnectionRoleIdUnique] UNIQUE NONCLUSTERED ([ConnectionRoleIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[ConnectionRoleBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ConnectionRoleBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[ConnectionRoleBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[ConnectionRoleBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[ConnectionRoleBase]([ConnectionRoleId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_E2F906DB86094212A1320CD24A14765A]
    ON [dbo].[ConnectionRoleBase]([ConnectionRoleId] ASC)
    INCLUDE([Category], [Name], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_E2F906DB86094212A1320CD24A14765A]
    ON [dbo].[ConnectionRoleBase]([ConnectionRoleId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

