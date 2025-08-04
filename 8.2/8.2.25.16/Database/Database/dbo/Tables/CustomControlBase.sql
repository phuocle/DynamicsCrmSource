CREATE TABLE [dbo].[CustomControlBase] (
    [CustomControlIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_CustomControlBase_CustomControlIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [CompatibleDataTypes]   NVARCHAR (500)   NOT NULL,
    [Name]                  NVARCHAR (100)   NOT NULL,
    [CreatedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [CreatedOn]             DATETIME         NULL,
    [OrganizationId]        UNIQUEIDENTIFIER NOT NULL,
    [ComponentState]        INT              CONSTRAINT [DF_CustomControlBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [IntroducedVersion]     NVARCHAR (48)    NULL,
    [SupportingSolutionId]  UNIQUEIDENTIFIER NULL,
    [CustomControlId]       UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [Version]               NVARCHAR (20)    NOT NULL,
    [CreatedBy]             UNIQUEIDENTIFIER NULL,
    [ModifiedBy]            UNIQUEIDENTIFIER NULL,
    [Manifest]              NVARCHAR (MAX)   NOT NULL,
    [SolutionId]            UNIQUEIDENTIFIER CONSTRAINT [DF_CustomControlBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [IsManaged]             BIT              CONSTRAINT [DF_CustomControlBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [ModifiedOn]            DATETIME         NULL,
    [OverwriteTime]         DATETIME         CONSTRAINT [DF_CustomControlBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [VersionNumber]         ROWVERSION       NULL,
    CONSTRAINT [cndx_PrimaryKey_CustomControl] PRIMARY KEY CLUSTERED ([CustomControlId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC, [Version] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_CustomControlBase_CustomControlIdNameVersion] UNIQUE NONCLUSTERED ([CustomControlId] ASC, [Name] ASC, [Version] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_CustomControlBase_CustomControlIdUnique] UNIQUE NONCLUSTERED ([CustomControlIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [indx_Sync_VersionNumber]
    ON [dbo].[CustomControlBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);

