CREATE TABLE [dbo].[OwnerMappingBase] (
    [SupportingSolutionId]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                   UNIQUEIDENTIFIER NULL,
    [IntroducedVersion]                   NVARCHAR (48)    NULL,
    [CreatedBy]                           UNIQUEIDENTIFIER NULL,
    [ProcessCode]                         INT              CONSTRAINT [DF_OwnerMappingBase_ProcessCode] DEFAULT ((1)) NOT NULL,
    [SourceSystemUserName]                NVARCHAR (160)   NULL,
    [OwnerMappingId]                      UNIQUEIDENTIFIER NOT NULL,
    [OverwriteTime]                       DATETIME         CONSTRAINT [DF_OwnerMappingBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SourceUserValueForSourceCRMUserLink] NVARCHAR (160)   NULL,
    [StateCode]                           INT              CONSTRAINT [DF_OwnerMappingBase_StateCode] DEFAULT ((0)) NOT NULL,
    [StatusCode]                          INT              CONSTRAINT [DF_OwnerMappingBase_StatusCode] DEFAULT ((0)) NOT NULL,
    [ModifiedOnBehalfBy]                  UNIQUEIDENTIFIER NULL,
    [CreatedOn]                           DATETIME         NOT NULL,
    [TargetUserValueForSourceCRMUserLink] NVARCHAR (160)   NULL,
    [ComponentState]                      INT              CONSTRAINT [DF_OwnerMappingBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ModifiedBy]                          UNIQUEIDENTIFIER NULL,
    [ImportMapId]                         UNIQUEIDENTIFIER NULL,
    [IsManaged]                           BIT              CONSTRAINT [DF_OwnerMappingBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [TargetSystemUserDomainName]          NVARCHAR (260)   NULL,
    [TargetSystemUserId]                  UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                          DATETIME         NOT NULL,
    [OwnerMappingIdUnique]                UNIQUEIDENTIFIER CONSTRAINT [DF_OwnerMappingBase_OwnerMappingIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [SolutionId]                          UNIQUEIDENTIFIER CONSTRAINT [DF_OwnerMappingBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_OwnerMapping] PRIMARY KEY CLUSTERED ([OwnerMappingId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[OwnerMappingBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[OwnerMappingBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[OwnerMappingBase]([OwnerMappingId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

