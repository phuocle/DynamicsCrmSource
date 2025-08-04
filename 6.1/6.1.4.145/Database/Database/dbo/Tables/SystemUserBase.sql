CREATE TABLE [dbo].[SystemUserBase] (
    [SystemUserId]                      UNIQUEIDENTIFIER NOT NULL,
    [TerritoryId]                       UNIQUEIDENTIFIER NULL,
    [OrganizationId]                    UNIQUEIDENTIFIER NOT NULL,
    [BusinessUnitId]                    UNIQUEIDENTIFIER NOT NULL,
    [ParentSystemUserId]                UNIQUEIDENTIFIER NULL,
    [FirstName]                         NVARCHAR (64)    NULL,
    [Salutation]                        NVARCHAR (20)    NULL,
    [MiddleName]                        NVARCHAR (50)    NULL,
    [LastName]                          NVARCHAR (64)    NULL,
    [PersonalEMailAddress]              NVARCHAR (100)   NULL,
    [FullName]                          NVARCHAR (200)   NULL,
    [NickName]                          NVARCHAR (50)    NULL,
    [Title]                             NVARCHAR (128)   NULL,
    [InternalEMailAddress]              NVARCHAR (100)   NULL,
    [JobTitle]                          NVARCHAR (100)   NULL,
    [MobileAlertEMail]                  NVARCHAR (100)   NULL,
    [PreferredEmailCode]                INT              NULL,
    [HomePhone]                         NVARCHAR (50)    NULL,
    [MobilePhone]                       NVARCHAR (64)    NULL,
    [PreferredPhoneCode]                INT              NULL,
    [PreferredAddressCode]              INT              NULL,
    [PhotoUrl]                          NVARCHAR (200)   NULL,
    [DomainName]                        NVARCHAR (1024)  NOT NULL,
    [PassportLo]                        INT              NULL,
    [CreatedOn]                         DATETIME         NULL,
    [PassportHi]                        INT              NULL,
    [DisabledReason]                    NVARCHAR (500)   NULL,
    [ModifiedOn]                        DATETIME         NULL,
    [CreatedBy]                         UNIQUEIDENTIFIER NULL,
    [EmployeeId]                        NVARCHAR (100)   NULL,
    [ModifiedBy]                        UNIQUEIDENTIFIER NULL,
    [IsDisabled]                        BIT              NULL,
    [GovernmentId]                      NVARCHAR (100)   NULL,
    [VersionNumber]                     ROWVERSION       NULL,
    [Skills]                            NVARCHAR (100)   NULL,
    [DisplayInServiceViews]             BIT              NULL,
    [CalendarId]                        UNIQUEIDENTIFIER NULL,
    [ActiveDirectoryGuid]               UNIQUEIDENTIFIER NULL,
    [SetupUser]                         BIT              CONSTRAINT [DF_SystemUserBase_SetupUser] DEFAULT ((0)) NOT NULL,
    [SiteId]                            UNIQUEIDENTIFIER NULL,
    [WindowsLiveID]                     NVARCHAR (1024)  NULL,
    [IncomingEmailDeliveryMethod]       INT              CONSTRAINT [DF_SystemUserBase_IncomingEmailDeliveryMethod] DEFAULT ((1)) NOT NULL,
    [OutgoingEmailDeliveryMethod]       INT              CONSTRAINT [DF_SystemUserBase_OutgoingEmailDeliveryMethod] DEFAULT ((1)) NOT NULL,
    [ImportSequenceNumber]              INT              NULL,
    [AccessMode]                        INT              CONSTRAINT [DF_SystemUserBase_AccessMode] DEFAULT ((0)) NOT NULL,
    [InviteStatusCode]                  INT              CONSTRAINT [DF_SystemUserBase_InviteStatusCode] DEFAULT ((0)) NULL,
    [IsActiveDirectoryUser]             BIT              CONSTRAINT [DF_SystemUserBase_IsActiveDirectoryUser] DEFAULT ((1)) NOT NULL,
    [OverriddenCreatedOn]               DATETIME         NULL,
    [UTCConversionTimeZoneCode]         INT              NULL,
    [TimeZoneRuleVersionNumber]         INT              NULL,
    [YomiFullName]                      NVARCHAR (200)   NULL,
    [YomiLastName]                      NVARCHAR (64)    NULL,
    [YomiMiddleName]                    NVARCHAR (50)    NULL,
    [YomiFirstName]                     NVARCHAR (64)    NULL,
    [CreatedOnBehalfBy]                 UNIQUEIDENTIFIER NULL,
    [ExchangeRate]                      DECIMAL (23, 10) NULL,
    [IsIntegrationUser]                 BIT              CONSTRAINT [DF_SystemUserBase_IsIntegrationUser] DEFAULT ((0)) NOT NULL,
    [ModifiedOnBehalfBy]                UNIQUEIDENTIFIER NULL,
    [EmailRouterAccessApproval]         INT              CONSTRAINT [DF_SystemUserBase_EmailRouterAccessApproval] DEFAULT ((0)) NOT NULL,
    [DefaultFiltersPopulated]           BIT              CONSTRAINT [DF_SystemUserBase_DefaultFiltersPopulated] DEFAULT ((0)) NOT NULL,
    [CALType]                           INT              CONSTRAINT [DF_SystemUserBase_CALType] DEFAULT ((0)) NOT NULL,
    [QueueId]                           UNIQUEIDENTIFIER NULL,
    [TransactionCurrencyId]             UNIQUEIDENTIFIER NULL,
    [YammerEmailAddress]                NVARCHAR (100)   NULL,
    [IsSyncWithDirectory]               BIT              CONSTRAINT [DF_SystemUserBase_IsSyncWithDirectory] DEFAULT ((0)) NOT NULL,
    [DefaultMailbox]                    UNIQUEIDENTIFIER NULL,
    [ProcessId]                         UNIQUEIDENTIFIER NULL,
    [UserLicenseType]                   INT              CONSTRAINT [DF_SystemUserBase_UserLicenseType] DEFAULT ((3)) NOT NULL,
    [IsEmailAddressApprovedByO365Admin] BIT              CONSTRAINT [DF_SystemUserBase_IsEmailAddressApprovedByO365Admin] DEFAULT ((0)) NOT NULL,
    [YammerUserId]                      NVARCHAR (64)    NULL,
    [EntityImageId]                     UNIQUEIDENTIFIER NULL,
    [IsLicensed]                        BIT              CONSTRAINT [DF_SystemUserBase_IsLicensed] DEFAULT ((0)) NOT NULL,
    [StageId]                           UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_SystemUser] PRIMARY KEY CLUSTERED ([SystemUserId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_system_users] FOREIGN KEY ([BusinessUnitId]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION,
    CONSTRAINT [calendar_system_users] FOREIGN KEY ([CalendarId]) REFERENCES [dbo].[CalendarBase] ([CalendarId]) NOT FOR REPLICATION,
    CONSTRAINT [queue_system_user] FOREIGN KEY ([QueueId]) REFERENCES [dbo].[QueueBase] ([QueueId]) NOT FOR REPLICATION,
    CONSTRAINT [site_system_users] FOREIGN KEY ([SiteId]) REFERENCES [dbo].[SiteBase] ([SiteId]) NOT FOR REPLICATION,
    CONSTRAINT [systemuser_defaultmailbox_mailbox] FOREIGN KEY ([DefaultMailbox]) REFERENCES [dbo].[MailboxBase] ([MailboxId]) NOT FOR REPLICATION,
    CONSTRAINT [territory_system_users] FOREIGN KEY ([TerritoryId]) REFERENCES [dbo].[TerritoryBase] ([TerritoryId]) NOT FOR REPLICATION,
    CONSTRAINT [TransactionCurrency_SystemUser] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]) NOT FOR REPLICATION,
    CONSTRAINT [user_parent_user] FOREIGN KEY ([ParentSystemUserId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]) NOT FOR REPLICATION,
    CONSTRAINT [UQ_SystemUserBaseActiveDirectoryGuid] UNIQUE NONCLUSTERED ([ActiveDirectoryGuid] ASC)
);


GO
CREATE NONCLUSTERED INDEX [ndx_lastname]
    ON [dbo].[SystemUserBase]([LastName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[SystemUserBase]([BusinessUnitId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SystemUserBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_firstname]
    ON [dbo].[SystemUserBase]([FirstName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_site_system_users]
    ON [dbo].[SystemUserBase]([SiteId] ASC) WHERE ([SiteId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_isdisabledaccessmodetitle]
    ON [dbo].[SystemUserBase]([IsDisabled] ASC, [AccessMode] ASC, [Title] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_internalemailaddress]
    ON [dbo].[SystemUserBase]([InternalEMailAddress] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_user_parent_user]
    ON [dbo].[SystemUserBase]([ParentSystemUserId] ASC) WHERE ([ParentSystemUserId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_calendar_system_users]
    ON [dbo].[SystemUserBase]([CalendarId] ASC) WHERE ([CalendarId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_territory_system_users]
    ON [dbo].[SystemUserBase]([TerritoryId] ASC) WHERE ([TerritoryId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Cover]
    ON [dbo].[SystemUserBase]([FullName] ASC, [YomiFullName] ASC) WITH (FILLFACTOR = 80);

