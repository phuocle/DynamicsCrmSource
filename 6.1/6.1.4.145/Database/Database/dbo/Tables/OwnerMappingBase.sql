CREATE TABLE [dbo].[OwnerMappingBase] (
    [CreatedOn]                           DATETIME         NOT NULL,
    [TargetUserValueForSourceCRMUserLink] NVARCHAR (160)   NULL,
    [StatusCode]                          INT              CONSTRAINT [DF_OwnerMappingBase_StatusCode] DEFAULT ((0)) NOT NULL,
    [ImportMapId]                         UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                          UNIQUEIDENTIFIER NULL,
    [OwnerMappingId]                      UNIQUEIDENTIFIER NOT NULL,
    [CreatedBy]                           UNIQUEIDENTIFIER NULL,
    [ProcessCode]                         INT              CONSTRAINT [DF_OwnerMappingBase_ProcessCode] DEFAULT ((1)) NOT NULL,
    [SourceSystemUserName]                NVARCHAR (160)   NULL,
    [TargetSystemUserId]                  UNIQUEIDENTIFIER NULL,
    [StateCode]                           INT              CONSTRAINT [DF_OwnerMappingBase_StateCode] DEFAULT ((0)) NOT NULL,
    [SourceUserValueForSourceCRMUserLink] NVARCHAR (160)   NULL,
    [TargetSystemUserDomainName]          NVARCHAR (260)   NULL,
    [ModifiedOn]                          DATETIME         NOT NULL,
    [CreatedOnBehalfBy]                   UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]                  UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_OwnerMapping] PRIMARY KEY CLUSTERED ([OwnerMappingId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [OwnerMapping_ImportMap] FOREIGN KEY ([ImportMapId]) REFERENCES [dbo].[ImportMapBase] ([ImportMapId]) NOT FOR REPLICATION,
    CONSTRAINT [OwnerMapping_SystemUser] FOREIGN KEY ([TargetSystemUserId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]) NOT FOR REPLICATION
);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[OwnerMappingBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);

