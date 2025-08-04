CREATE TABLE [dbo].[CustomControlResourceBase] (
    [ModifiedOn]                    DATETIME         NULL,
    [CustomControlResourceId]       UNIQUEIDENTIFIER NOT NULL,
    [ModifiedBy]                    UNIQUEIDENTIFIER NULL,
    [CustomControlId]               UNIQUEIDENTIFIER NOT NULL,
    [VersionRequirement]            NVARCHAR (20)    NULL,
    [CreatedOnBehalfBy]             UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [Version]                       NVARCHAR (20)    NOT NULL,
    [Name]                          NVARCHAR (100)   NOT NULL,
    [CreatedOn]                     DATETIME         NULL,
    [WebResourceId]                 UNIQUEIDENTIFIER NOT NULL,
    [CreatedBy]                     UNIQUEIDENTIFIER NULL,
    [OrganizationId]                UNIQUEIDENTIFIER NOT NULL,
    [IntroducedVersion]             NVARCHAR (48)    NULL,
    [CustomControlResourceIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_CustomControlResourceBase_CustomControlResourceIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [OverwriteTime]                 DATETIME         CONSTRAINT [DF_CustomControlResourceBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [VersionNumber]                 ROWVERSION       NULL,
    [IsManaged]                     BIT              CONSTRAINT [DF_CustomControlResourceBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [SupportingSolutionId]          UNIQUEIDENTIFIER NULL,
    [SolutionId]                    UNIQUEIDENTIFIER CONSTRAINT [DF_CustomControlResourceBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [ComponentState]                INT              CONSTRAINT [DF_CustomControlResourceBase_ComponentState] DEFAULT ((0)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_CustomControlResource] PRIMARY KEY CLUSTERED ([CustomControlResourceId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC, [Version] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_CustomControlresourceBase_CustomControlResourceIdUnique] UNIQUE NONCLUSTERED ([CustomControlResourceIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [indx_Sync_VersionNumber]
    ON [dbo].[CustomControlResourceBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);

