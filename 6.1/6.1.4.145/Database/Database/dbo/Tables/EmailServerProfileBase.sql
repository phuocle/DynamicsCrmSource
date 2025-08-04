CREATE TABLE [dbo].[EmailServerProfileBase] (
    [IncomingUserName]                      NVARCHAR (250)   NULL,
    [OwningBusinessUnit]                    UNIQUEIDENTIFIER NULL,
    [StateCode]                             INT              NOT NULL,
    [IncomingPartnerApplication]            UNIQUEIDENTIFIER NULL,
    [UTCConversionTimeZoneCode]             INT              NULL,
    [IncomingUseImpersonation]              BIT              CONSTRAINT [DF_EmailServerProfileBase_IncomingUseImpersonation] DEFAULT ((0)) NULL,
    [ServerType]                            INT              NULL,
    [ProcessEmailsReceivedAfter]            DATETIME         NULL,
    [IncomingAuthenticationProtocol]        INT              CONSTRAINT [DF_EmailServerProfileBase_IncomingAuthenticationProtocol] DEFAULT ((0)) NULL,
    [OutgoingServerLocation]                NVARCHAR (1042)  NULL,
    [UseSameSettingsForOutgoingConnections] BIT              CONSTRAINT [DF_EmailServerProfileBase_UseSameSettingsForOutgoingConnections] DEFAULT ((1)) NULL,
    [OutgoingAutoGrantDelegateAccess]       BIT              CONSTRAINT [DF_EmailServerProfileBase_OutgoingAutoGrantDelegateAccess] DEFAULT ((0)) NULL,
    [StatusCode]                            INT              NULL,
    [EntityImageId]                         UNIQUEIDENTIFIER NULL,
    [EncodingCodePage]                      NVARCHAR (100)   NULL,
    [ModifiedOnBehalfBy]                    UNIQUEIDENTIFIER NULL,
    [IncomingCredentialRetrieval]           INT              NULL,
    [MoveUndeliveredEmails]                 BIT              CONSTRAINT [DF_EmailServerProfileBase_MoveUndeliveredEmails] DEFAULT ((0)) NULL,
    [CreatedBy]                             UNIQUEIDENTIFIER NULL,
    [EmailServerProfileId]                  UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOn]                            DATETIME         NULL,
    [OutgoingUseSSL]                        BIT              CONSTRAINT [DF_EmailServerProfileBase_OutgoingUseSSL] DEFAULT ((1)) NULL,
    [OutgoingPortNumber]                    INT              NULL,
    [OwnerId]                               UNIQUEIDENTIFIER NOT NULL,
    [IncomingUseSSL]                        BIT              CONSTRAINT [DF_EmailServerProfileBase_IncomingUseSSL] DEFAULT ((1)) NULL,
    [ModifiedBy]                            UNIQUEIDENTIFIER NULL,
    [IncomingPortNumber]                    INT              NULL,
    [OutgoingUsername]                      NVARCHAR (250)   NULL,
    [Description]                           NVARCHAR (MAX)   NULL,
    [OrganizationId]                        UNIQUEIDENTIFIER NOT NULL,
    [OutgoingCredentialRetrieval]           INT              NULL,
    [IncomingServerLocation]                NVARCHAR (1042)  NULL,
    [MaxConcurrentConnections]              INT              NULL,
    [TimeZoneRuleVersionNumber]             INT              NULL,
    [OutgoingPartnerApplication]            UNIQUEIDENTIFIER NULL,
    [Name]                                  NVARCHAR (100)   NULL,
    [OutgoingPassword]                      VARBINARY (MAX)  NULL,
    [CreatedOnBehalfBy]                     UNIQUEIDENTIFIER NULL,
    [ExchangeVersion]                       INT              CONSTRAINT [DF_EmailServerProfileBase_ExchangeVersion] DEFAULT ((0)) NULL,
    [MinPollingIntervalInMinutes]           INT              CONSTRAINT [DF_EmailServerProfileBase_MinPollingIntervalInMinutes] DEFAULT ((0)) NULL,
    [OutgoingUseImpersonation]              BIT              NULL,
    [UseAutoDiscover]                       BIT              CONSTRAINT [DF_EmailServerProfileBase_UseAutoDiscover] DEFAULT ((0)) NULL,
    [IncomingPassword]                      VARBINARY (MAX)  NULL,
    [CreatedOn]                             DATETIME         NULL,
    [OutgoingAuthenticationProtocol]        INT              CONSTRAINT [DF_EmailServerProfileBase_OutgoingAuthenticationProtocol] DEFAULT ((0)) NULL,
    [OwnerIdType]                           INT              CONSTRAINT [DF_EmailServerProfileBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [PK_EmailServerProfileBase] PRIMARY KEY CLUSTERED ([EmailServerProfileId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_emailserverprofile] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION,
    CONSTRAINT [owner_emailserverprofile] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]) NOT FOR REPLICATION
);


GO
CREATE NONCLUSTERED INDEX [ndx_EmailServerProfile_ServerType]
    ON [dbo].[EmailServerProfileBase]([ServerType] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_EmailServerProfile_IncomingServerLocation]
    ON [dbo].[EmailServerProfileBase]([IncomingServerLocation] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_EmailServerProfile_Name]
    ON [dbo].[EmailServerProfileBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_EmailServerProfile_OutgoingServerLocation]
    ON [dbo].[EmailServerProfileBase]([OutgoingServerLocation] ASC) WITH (FILLFACTOR = 80);

