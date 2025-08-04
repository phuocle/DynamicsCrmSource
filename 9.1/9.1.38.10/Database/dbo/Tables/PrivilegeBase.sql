CREATE TABLE [dbo].[PrivilegeBase] (
    [PrivilegeId]                UNIQUEIDENTIFIER NOT NULL,
    [Name]                       NVARCHAR (256)   NULL,
    [CanBeLocal]                 BIT              CONSTRAINT [Set_To_Zero133] DEFAULT ((0)) NULL,
    [CanBeDeep]                  BIT              CONSTRAINT [Set_To_Zero134] DEFAULT ((0)) NULL,
    [VersionNumber]              ROWVERSION       NULL,
    [CanBeGlobal]                BIT              CONSTRAINT [Set_To_Zero135] DEFAULT ((0)) NULL,
    [CanBeBasic]                 BIT              NULL,
    [AccessRight]                INT              NULL,
    [IsDisabledWhenIntegrated]   BIT              CONSTRAINT [DF_PrivilegeBase_IsDisabledWhenIntegrated] DEFAULT ((0)) NOT NULL,
    [CanBeEntityReference]       BIT              DEFAULT ((0)) NOT NULL,
    [CanBeParentEntityReference] BIT              DEFAULT ((0)) NOT NULL,
    [SolutionId]                 UNIQUEIDENTIFIER DEFAULT ('FD140AAD-4DF4-11DD-BD17-0019B9312238') NOT NULL,
    [SupportingSolutionId]       UNIQUEIDENTIFIER DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [ComponentState]             TINYINT          DEFAULT ((0)) NOT NULL,
    [OverwriteTime]              DATETIME         DEFAULT ((0)) NOT NULL,
    [PrivilegeRowId]             UNIQUEIDENTIFIER DEFAULT (newid()) NOT NULL,
    [IntroducedVersion]          NVARCHAR (48)    NULL,
    [IsCustomizable]             BIT              NULL,
    [IsManaged]                  BIT              DEFAULT ((0)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_Privilege] PRIMARY KEY CLUSTERED ([PrivilegeId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [solution_privilege] FOREIGN KEY ([SolutionId]) REFERENCES [dbo].[SolutionBase] ([SolutionId])
);


GO
ALTER TABLE [dbo].[PrivilegeBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[PrivilegeBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[PrivilegeBase]([Name] ASC, [OverwriteTime] ASC, [ComponentState] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[PrivilegeBase]([PrivilegeId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_4953CF385042465FA057027307D715E0]
    ON [dbo].[PrivilegeBase]([PrivilegeId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_4953CF385042465FA057027307D715E0]
    ON [dbo].[PrivilegeBase]([PrivilegeId] ASC)
    INCLUDE([Name], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_4953CF385042465FA057027307D715E0]
    ON [dbo].[PrivilegeBase]([Name] ASC, [PrivilegeId] ASC)
    INCLUDE([VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_solution_privilege]
    ON [dbo].[PrivilegeBase]([SolutionId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

