CREATE TABLE [dbo].[SdkMessageRequestFieldBase] (
    [CreatedOn]                      DATETIME         NULL,
    [SdkMessageRequestFieldIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_SdkMessageRequestFieldBase_SdkMessageRequestFieldIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [Optional]                       BIT              NULL,
    [CreatedBy]                      UNIQUEIDENTIFIER NULL,
    [Position]                       INT              CONSTRAINT [DF_SdkMessageRequestFieldBase_Position] DEFAULT ((0)) NOT NULL,
    [ClrParser]                      NVARCHAR (256)   NULL,
    [PublicName]                     NVARCHAR (256)   NULL,
    [SdkMessageRequestId]            UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                     DATETIME         NULL,
    [Parser]                         NVARCHAR (256)   NULL,
    [CustomizationLevel]             INT              CONSTRAINT [DF_SdkMessageRequestFieldBase_CustomizationLevel] DEFAULT ((0)) NOT NULL,
    [OrganizationId]                 UNIQUEIDENTIFIER NOT NULL,
    [SdkMessageRequestFieldId]       UNIQUEIDENTIFIER NOT NULL,
    [ModifiedBy]                     UNIQUEIDENTIFIER NULL,
    [Name]                           NVARCHAR (256)   NOT NULL,
    [VersionNumber]                  ROWVERSION       NULL,
    [FieldMask]                      INT              CONSTRAINT [DF_SdkMessageRequestFieldBase_FieldMask] DEFAULT ((0)) NOT NULL,
    [CreatedOnBehalfBy]              UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]             UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_SdkMessageRequestField] PRIMARY KEY CLUSTERED ([SdkMessageRequestFieldId] ASC, [CustomizationLevel] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [createdby_sdkmessagerequestfield] FOREIGN KEY ([CreatedBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]) NOT FOR REPLICATION,
    CONSTRAINT [createdonbehalfby_sdkmessagerequestfield] FOREIGN KEY ([CreatedOnBehalfBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]) NOT FOR REPLICATION,
    CONSTRAINT [messagerequest_sdkmessagerequestfield] FOREIGN KEY ([SdkMessageRequestId]) REFERENCES [dbo].[SdkMessageRequestBaseIds] ([SdkMessageRequestId]) NOT FOR REPLICATION,
    CONSTRAINT [modifiedby_sdkmessagerequestfield] FOREIGN KEY ([ModifiedBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]) NOT FOR REPLICATION,
    CONSTRAINT [modifiedonbehalfby_sdkmessagerequestfield] FOREIGN KEY ([ModifiedOnBehalfBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]) NOT FOR REPLICATION,
    CONSTRAINT [UQ_SdkMessageRequestFieldBase_SdkMessageRequestFieldIdUnique] UNIQUE NONCLUSTERED ([SdkMessageRequestFieldIdUnique] ASC)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SdkMessageRequestFieldBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

