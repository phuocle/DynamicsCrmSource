CREATE TABLE [dbo].[EmailServerProfileBase] (
    [SendEmailAlert]                        BIT              CONSTRAINT [DF_EmailServerProfileBase_SendEmailAlert] DEFAULT ((0)) NULL,
    [IncomingUserName]                      NVARCHAR (250)   NULL,
    [ExchangeVersion]                       INT              CONSTRAINT [DF_EmailServerProfileBase_ExchangeVersion] DEFAULT ((0)) NULL,
    [StatusCode]                            INT              NULL,
    [OwningBusinessUnit]                    UNIQUEIDENTIFIER NULL,
    [StateCode]                             INT              NOT NULL,
    [UTCConversionTimeZoneCode]             INT              NULL,
    [IncomingPartnerApplication]            UNIQUEIDENTIFIER NULL,
    [EncodingCodePage]                      NVARCHAR (100)   NULL,
    [ExchangeOnlineTenantId]                NVARCHAR (36)    NULL,
    [IncomingUseImpersonation]              BIT              CONSTRAINT [DF_EmailServerProfileBase_IncomingUseImpersonation] DEFAULT ((0)) NULL,
    [ProcessEmailsReceivedAfter]            DATETIME         NULL,
    [OutgoingServerLocation]                NVARCHAR (1042)  NULL,
    [IncomingAuthenticationProtocol]        INT              CONSTRAINT [DF_EmailServerProfileBase_IncomingAuthenticationProtocol] DEFAULT ((0)) NULL,
    [OwnerId]                               UNIQUEIDENTIFIER NOT NULL,
    [UseSameSettingsForOutgoingConnections] BIT              CONSTRAINT [DF_EmailServerProfileBase_UseSameSettingsForOutgoingConnections] DEFAULT ((1)) NULL,
    [EntityImageId]                         UNIQUEIDENTIFIER NULL,
    [LastTestExecutionStatus]               INT              NULL,
    [ModifiedOnBehalfBy]                    UNIQUEIDENTIFIER NULL,
    [OwnerEmailAddress]                     NVARCHAR (250)   NULL,
    [DefaultServerLocation]                 NVARCHAR (1042)  NULL,
    [IncomingCredentialRetrieval]           INT              NULL,
    [MoveUndeliveredEmails]                 BIT              CONSTRAINT [DF_EmailServerProfileBase_MoveUndeliveredEmails] DEFAULT ((0)) NULL,
    [CreatedBy]                             UNIQUEIDENTIFIER NULL,
    [EmailServerProfileId]                  UNIQUEIDENTIFIER NOT NULL,
    [OutgoingUseSSL]                        BIT              CONSTRAINT [DF_EmailServerProfileBase_OutgoingUseSSL] DEFAULT ((1)) NULL,
    [OutgoingPortNumber]                    INT              NULL,
    [VersionNumber]                         ROWVERSION       NULL,
    [IncomingUseSSL]                        BIT              CONSTRAINT [DF_EmailServerProfileBase_IncomingUseSSL] DEFAULT ((1)) NULL,
    [ModifiedOn]                            DATETIME         NULL,
    [ModifiedBy]                            UNIQUEIDENTIFIER NULL,
    [EmailServerTypeName]                   NVARCHAR (250)   NULL,
    [OutgoingUsername]                      NVARCHAR (250)   NULL,
    [Description]                           NVARCHAR (MAX)   NULL,
    [LastTestValidationStatus]              INT              NULL,
    [TimeZoneRuleVersionNumber]             INT              NULL,
    [OrganizationId]                        UNIQUEIDENTIFIER NOT NULL,
    [OutgoingCredentialRetrieval]           INT              NULL,
    [IncomingServerLocation]                NVARCHAR (1042)  NULL,
    [MaxConcurrentConnections]              INT              NULL,
    [OutgoingPartnerApplication]            UNIQUEIDENTIFIER NULL,
    [Name]                                  NVARCHAR (100)   NULL,
    [LastAuthorizationStatus]               INT              NULL,
    [UseDefaultTenantId]                    BIT              CONSTRAINT [DF_EmailServerProfileBase_UseDefaultTenantId] DEFAULT ((1)) NULL,
    [IncomingPortNumber]                    INT              NULL,
    [TimeoutMailboxConnectionAfterAmount]   INT              NULL,
    [OutgoingPassword]                      VARBINARY (MAX)  NULL,
    [LastCrmMessage]                        NVARCHAR (MAX)   NULL,
    [TimeoutMailboxConnection]              BIT              CONSTRAINT [DF_EmailServerProfileBase_TimeoutMailboxConnection] DEFAULT ((0)) NULL,
    [CreatedOnBehalfBy]                     UNIQUEIDENTIFIER NULL,
    [LastTestStartTime]                     DATETIME         NULL,
    [MinPollingIntervalInMinutes]           INT              CONSTRAINT [DF_EmailServerProfileBase_MinPollingIntervalInMinutes] DEFAULT ((0)) NULL,
    [OutgoingUseImpersonation]              BIT              NULL,
    [LastTestResponse]                      NVARCHAR (MAX)   NULL,
    [UseAutoDiscover]                       BIT              CONSTRAINT [DF_EmailServerProfileBase_UseAutoDiscover] DEFAULT ((0)) NULL,
    [IncomingPassword]                      VARBINARY (MAX)  NULL,
    [LastTestRequest]                       NVARCHAR (MAX)   NULL,
    [OutgoingAutoGrantDelegateAccess]       BIT              CONSTRAINT [DF_EmailServerProfileBase_OutgoingAutoGrantDelegateAccess] DEFAULT ((0)) NULL,
    [CreatedOn]                             DATETIME         NULL,
    [LastTestTotalExecutionTime]            BIGINT           NULL,
    [ServerType]                            INT              NULL,
    [OutgoingAuthenticationProtocol]        INT              CONSTRAINT [DF_EmailServerProfileBase_OutgoingAuthenticationProtocol] DEFAULT ((0)) NULL,
    [OwnerIdType]                           INT              CONSTRAINT [DF_EmailServerProfileBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [CredentialInfo]                        NVARCHAR (2000)  NULL,
    [DataEncryptionKey]                     VARBINARY (MAX)  NULL,
    [OauthClientSecret]                     VARBINARY (MAX)  NULL,
    [OauthClientId]                         NVARCHAR (1024)  NULL,
    CONSTRAINT [PK_EmailServerProfileBase] PRIMARY KEY CLUSTERED ([EmailServerProfileId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_emailserverprofile] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_emailserverprofile] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[EmailServerProfileBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[EmailServerProfileBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_EmailServerProfile_IncomingServerLocation]
    ON [dbo].[EmailServerProfileBase]([IncomingServerLocation] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_EmailServerProfile_OutgoingServerLocation]
    ON [dbo].[EmailServerProfileBase]([OutgoingServerLocation] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_EmailServerProfile_Name]
    ON [dbo].[EmailServerProfileBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_EmailServerProfile_ServerType]
    ON [dbo].[EmailServerProfileBase]([ServerType] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_18CED71D408345D3B6BCB307E7A782C4]
    ON [dbo].[EmailServerProfileBase]([EmailServerProfileId] ASC)
    INCLUDE([OutgoingServerLocation], [Name], [IncomingServerLocation]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_18CED71D408345D3B6BCB307E7A782C4]
    ON [dbo].[EmailServerProfileBase]([Name] ASC, [EmailServerProfileId] ASC)
    INCLUDE([ServerType], [EmailServerTypeName], [OutgoingServerLocation], [IncomingServerLocation], [CreatedOn], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_18CED71D408345D3B6BCB307E7A782C4]
    ON [dbo].[EmailServerProfileBase]([EmailServerProfileId] ASC)
    INCLUDE([Name], [ServerType], [EmailServerTypeName], [OutgoingServerLocation], [IncomingServerLocation], [CreatedOn], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

