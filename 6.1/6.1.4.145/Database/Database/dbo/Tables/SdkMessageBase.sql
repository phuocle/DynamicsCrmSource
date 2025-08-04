CREATE TABLE [dbo].[SdkMessageBase] (
    [OrganizationId]         UNIQUEIDENTIFIER NOT NULL,
    [IsPrivate]              BIT              NULL,
    [SdkMessageId]           UNIQUEIDENTIFIER NOT NULL,
    [CreatedBy]              UNIQUEIDENTIFIER NULL,
    [CategoryName]           NVARCHAR (25)    NOT NULL,
    [CustomizationLevel]     INT              CONSTRAINT [DF_SdkMessageBase_CustomizationLevel] DEFAULT ((0)) NOT NULL,
    [ModifiedOn]             DATETIME         NULL,
    [ModifiedBy]             UNIQUEIDENTIFIER NULL,
    [SdkMessageIdUnique]     UNIQUEIDENTIFIER CONSTRAINT [DF_SdkMessageBase_SdkMessageIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [Expand]                 BIT              NULL,
    [AutoTransact]           BIT              NULL,
    [VersionNumber]          ROWVERSION       NULL,
    [CreatedOn]              DATETIME         NULL,
    [Availability]           INT              NOT NULL,
    [Name]                   NVARCHAR (256)   NOT NULL,
    [Template]               BIT              NULL,
    [ModifiedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [ThrottleSettings]       NVARCHAR (512)   NULL,
    [CreatedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [IsActive]               BIT              NULL,
    [IsValidForExecuteAsync] BIT              NULL,
    CONSTRAINT [cndx_PrimaryKey_SdkMessage] PRIMARY KEY CLUSTERED ([SdkMessageId] ASC, [CustomizationLevel] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [createdby_sdkmessage] FOREIGN KEY ([CreatedBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]) NOT FOR REPLICATION,
    CONSTRAINT [createdonbehalfbysdkmessage] FOREIGN KEY ([CreatedOnBehalfBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]) NOT FOR REPLICATION,
    CONSTRAINT [modifiedby_sdkmessage] FOREIGN KEY ([ModifiedBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]) NOT FOR REPLICATION,
    CONSTRAINT [modifiedonbehalfby_sdkmessage] FOREIGN KEY ([ModifiedOnBehalfBy]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]) NOT FOR REPLICATION,
    CONSTRAINT [UQ_SdkMessageBase_SdkMessageIdUnique] UNIQUE NONCLUSTERED ([SdkMessageIdUnique] ASC)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SdkMessageBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Name]
    ON [dbo].[SdkMessageBase]([Name] ASC) WITH (FILLFACTOR = 80);

