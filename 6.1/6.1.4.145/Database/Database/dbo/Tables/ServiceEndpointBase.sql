CREATE TABLE [dbo].[ServiceEndpointBase] (
    [Contract]                INT              CONSTRAINT [DF_ServiceEndpointBase_Contract] DEFAULT ((1)) NOT NULL,
    [UserClaim]               INT              CONSTRAINT [DF_ServiceEndpointBase_UserClaim] DEFAULT ((1)) NOT NULL,
    [ConnectionMode]          INT              CONSTRAINT [DF_ServiceEndpointBase_ConnectionMode] DEFAULT ((1)) NOT NULL,
    [Description]             NVARCHAR (MAX)   NULL,
    [SolutionId]              UNIQUEIDENTIFIER CONSTRAINT [DF_ServiceEndpointBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [ServiceEndpointIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_ServiceEndpointBase_ServiceEndpointIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [ComponentState]          INT              CONSTRAINT [DF_ServiceEndpointBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [CreatedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [ModifiedOn]              DATETIME         NULL,
    [Name]                    NVARCHAR (256)   CONSTRAINT [DF_ServiceEndpointBase_Name] DEFAULT ('') NOT NULL,
    [IsCustomizable]          BIT              CONSTRAINT [DF_ServiceEndpointBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [ServiceEndpointId]       UNIQUEIDENTIFIER NOT NULL,
    [OrganizationId]          UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]               DATETIME         NULL,
    [IsManaged]               BIT              CONSTRAINT [DF_ServiceEndpointBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [SupportingSolutionId]    UNIQUEIDENTIFIER NULL,
    [Path]                    NVARCHAR (160)   NOT NULL,
    [ModifiedBy]              UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [OverwriteTime]           DATETIME         CONSTRAINT [DF_ServiceEndpointBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [CreatedBy]               UNIQUEIDENTIFIER NULL,
    [SolutionNamespace]       NVARCHAR (160)   NOT NULL,
    [IntroducedVersion]       NVARCHAR (48)    NULL,
    CONSTRAINT [cndx_PrimaryKey_ServiceEndpoint] PRIMARY KEY CLUSTERED ([ServiceEndpointId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_ServiceEndpointBase_ServiceEndpointIdUnique] UNIQUE NONCLUSTERED ([ServiceEndpointIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[ServiceEndpointBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Path]
    ON [dbo].[ServiceEndpointBase]([Path] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SolutionNamespace]
    ON [dbo].[ServiceEndpointBase]([SolutionNamespace] ASC) WITH (FILLFACTOR = 80);

