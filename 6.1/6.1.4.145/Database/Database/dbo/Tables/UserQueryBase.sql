CREATE TABLE [dbo].[UserQueryBase] (
    [QueryType]             INT              NOT NULL,
    [ModifiedOn]            DATETIME         NOT NULL,
    [ModifiedBy]            UNIQUEIDENTIFIER NOT NULL,
    [StatusCode]            INT              NULL,
    [VersionNumber]         ROWVERSION       NULL,
    [FetchXml]              NVARCHAR (MAX)   NULL,
    [Description]           NVARCHAR (MAX)   NULL,
    [ColumnSetXml]          NVARCHAR (MAX)   NULL,
    [StateCode]             INT              CONSTRAINT [DF_UserQueryBase_StateCode] DEFAULT ((0)) NOT NULL,
    [UserQueryId]           UNIQUEIDENTIFIER NOT NULL,
    [Name]                  NVARCHAR (200)   NOT NULL,
    [CreatedBy]             UNIQUEIDENTIFIER NOT NULL,
    [ReturnedTypeCode]      INT              NOT NULL,
    [OwningBusinessUnit]    UNIQUEIDENTIFIER NULL,
    [LayoutXml]             NVARCHAR (MAX)   NULL,
    [CreatedOn]             DATETIME         NOT NULL,
    [AdvancedGroupBy]       NVARCHAR (160)   NULL,
    [ConditionalFormatting] NVARCHAR (MAX)   NULL,
    [OwnerId]               UNIQUEIDENTIFIER CONSTRAINT [DF_UserQueryBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [ParentQueryId]         UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [OwnerIdType]           INT              CONSTRAINT [DF_UserQueryBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_UserQuery] PRIMARY KEY CLUSTERED ([UserQueryId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_userquery] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION,
    CONSTRAINT [owner_userquerys] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]) NOT FOR REPLICATION
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[UserQueryBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[UserQueryBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[UserQueryBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[UserQueryBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);

