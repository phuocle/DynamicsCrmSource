CREATE TABLE [dbo].[SdkMessageResponseFieldBase] (
    [PublicName]                      NVARCHAR (256)   NULL,
    [ModifiedOn]                      DATETIME         NULL,
    [ModifiedBy]                      UNIQUEIDENTIFIER NULL,
    [CreatedOn]                       DATETIME         NULL,
    [SdkMessageResponseFieldIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_SdkMessageResponseFieldBase_SdkMessageResponseFieldIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [Value]                           NVARCHAR (256)   NOT NULL,
    [OrganizationId]                  UNIQUEIDENTIFIER NOT NULL,
    [Formatter]                       NVARCHAR (256)   NULL,
    [ClrFormatter]                    NVARCHAR (256)   NULL,
    [CustomizationLevel]              INT              CONSTRAINT [DF_SdkMessageResponseFieldBase_CustomizationLevel] DEFAULT ((0)) NOT NULL,
    [Name]                            NVARCHAR (256)   NOT NULL,
    [CreatedBy]                       UNIQUEIDENTIFIER NULL,
    [Position]                        INT              CONSTRAINT [DF_SdkMessageResponseFieldBase_Position] DEFAULT ((0)) NOT NULL,
    [VersionNumber]                   ROWVERSION       NULL,
    [SdkMessageResponseFieldId]       UNIQUEIDENTIFIER NOT NULL,
    [SdkMessageResponseId]            UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]              UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_SdkMessageResponseField] PRIMARY KEY CLUSTERED ([SdkMessageResponseFieldId] ASC, [CustomizationLevel] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [createdby_sdkmessageresponsefield] FOREIGN KEY ([CreatedBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]) NOT FOR REPLICATION,
    CONSTRAINT [createdonbehalfby_sdkmessageresponsefield] FOREIGN KEY ([CreatedOnBehalfBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]) NOT FOR REPLICATION,
    CONSTRAINT [messageresponse_sdkmessageresponsefield] FOREIGN KEY ([SdkMessageResponseId]) REFERENCES [dbo].[SdkMessageResponseBaseIds] ([SdkMessageResponseId]) NOT FOR REPLICATION,
    CONSTRAINT [modifiedby_sdkmessageresponsefield] FOREIGN KEY ([ModifiedBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]) NOT FOR REPLICATION,
    CONSTRAINT [modifiedonbehalfby_sdkmessageresponsefield] FOREIGN KEY ([ModifiedOnBehalfBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]) NOT FOR REPLICATION,
    CONSTRAINT [UQ_SdkMessageResponseFieldBase_SdkMessageResponseFieldIdUnique] UNIQUE NONCLUSTERED ([SdkMessageResponseFieldIdUnique] ASC)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SdkMessageResponseFieldBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

