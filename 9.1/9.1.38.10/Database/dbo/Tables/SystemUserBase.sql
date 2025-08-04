CREATE TABLE [dbo].[SystemUserBase] (
    [IncomingEmailDeliveryMethod]       INT              CONSTRAINT [DF_SystemUserBase_IncomingEmailDeliveryMethod] DEFAULT ((1)) NOT NULL,
    [YammerUserId]                      NVARCHAR (64)    NULL,
    [PersonalEMailAddress]              NVARCHAR (100)   NULL,
    [DefaultMailbox]                    UNIQUEIDENTIFIER NULL,
    [YammerEmailAddress]                NVARCHAR (100)   NULL,
    [UserLicenseType]                   INT              CONSTRAINT [DF_SystemUserBase_UserLicenseType] DEFAULT ((3)) NOT NULL,
    [OrganizationId]                    UNIQUEIDENTIFIER NOT NULL,
    [MobileOfflineProfileId]            UNIQUEIDENTIFIER NULL,
    [ApplicationIdUri]                  NVARCHAR (1024)  NULL,
    [PreferredEmailCode]                INT              NULL,
    [ModifiedOn]                        DATETIME         NULL,
    [ModifiedBy]                        UNIQUEIDENTIFIER NULL,
    [IsDisabled]                        BIT              NULL,
    [CreatedOnBehalfBy]                 UNIQUEIDENTIFIER NULL,
    [VersionNumber]                     ROWVERSION       NULL,
    [IdentityId]                        INT              IDENTITY (1, 1) NOT NULL,
    [IsActiveDirectoryUser]             BIT              CONSTRAINT [DF_SystemUserBase_IsActiveDirectoryUser] DEFAULT ((1)) NOT NULL,
    [MiddleName]                        NVARCHAR (50)    NULL,
    [BusinessUnitId]                    UNIQUEIDENTIFIER NOT NULL,
    [HomePhone]                         NVARCHAR (50)    NULL,
    [DisabledReason]                    NVARCHAR (500)   NULL,
    [DefaultOdbFolderName]              NVARCHAR (200)   CONSTRAINT [DF_SystemUserBase_DefaultOdbFolderName] DEFAULT ('Dynamics365') NOT NULL,
    [TimeZoneRuleVersionNumber]         INT              NULL,
    [MobileAlertEMail]                  NVARCHAR (100)   NULL,
    [AzureActiveDirectoryObjectId]      UNIQUEIDENTIFIER NULL,
    [EmployeeId]                        NVARCHAR (100)   NULL,
    [PreferredAddressCode]              INT              NULL,
    [InternalEMailAddress]              NVARCHAR (100)   NULL,
    [OverriddenCreatedOn]               DATETIME         NULL,
    [OutgoingEmailDeliveryMethod]       INT              CONSTRAINT [DF_SystemUserBase_OutgoingEmailDeliveryMethod] DEFAULT ((1)) NOT NULL,
    [IsSyncWithDirectory]               BIT              CONSTRAINT [DF_SystemUserBase_IsSyncWithDirectory] DEFAULT ((0)) NOT NULL,
    [ModifiedOnBehalfBy]                UNIQUEIDENTIFIER NULL,
    [PhotoUrl]                          NVARCHAR (200)   NULL,
    [DisplayInServiceViews]             BIT              NULL,
    [TransactionCurrencyId]             UNIQUEIDENTIFIER NULL,
    [LastName]                          NVARCHAR (128)   NULL,
    [SetupUser]                         BIT              CONSTRAINT [DF_SystemUserBase_SetupUser] DEFAULT ((0)) NOT NULL,
    [JobTitle]                          NVARCHAR (100)   NULL,
    [NickName]                          NVARCHAR (50)    NULL,
    [MobilePhone]                       NVARCHAR (64)    NULL,
    [DefaultFiltersPopulated]           BIT              CONSTRAINT [DF_SystemUserBase_DefaultFiltersPopulated] DEFAULT ((0)) NOT NULL,
    [DomainName]                        NVARCHAR (1024)  NOT NULL,
    [ParentSystemUserId]                UNIQUEIDENTIFIER NULL,
    [SystemUserId]                      UNIQUEIDENTIFIER NOT NULL,
    [CreatedBy]                         UNIQUEIDENTIFIER NULL,
    [FullName]                          NVARCHAR (256)   NULL,
    [EmailRouterAccessApproval]         INT              CONSTRAINT [DF_SystemUserBase_EmailRouterAccessApproval] DEFAULT ((0)) NOT NULL,
    [Salutation]                        NVARCHAR (20)    NULL,
    [ImportSequenceNumber]              INT              NULL,
    [AccessMode]                        INT              CONSTRAINT [DF_SystemUserBase_AccessMode] DEFAULT ((0)) NOT NULL,
    [CreatedOn]                         DATETIME         NULL,
    [PreferredPhoneCode]                INT              NULL,
    [InviteStatusCode]                  INT              CONSTRAINT [DF_SystemUserBase_InviteStatusCode] DEFAULT ((0)) NULL,
    [SharePointEmailAddress]            NVARCHAR (1024)  NULL,
    [CalendarId]                        UNIQUEIDENTIFIER NULL,
    [Skills]                            NVARCHAR (100)   NULL,
    [ExchangeRate]                      DECIMAL (23, 10) NULL,
    [WindowsLiveID]                     NVARCHAR (1024)  NULL,
    [IsEmailAddressApprovedByO365Admin] BIT              CONSTRAINT [DF_SystemUserBase_IsEmailAddressApprovedByO365Admin] DEFAULT ((0)) NOT NULL,
    [ApplicationId]                     UNIQUEIDENTIFIER NULL,
    [CALType]                           INT              CONSTRAINT [DF_SystemUserBase_CALType] DEFAULT ((0)) NOT NULL,
    [IsLicensed]                        BIT              CONSTRAINT [DF_SystemUserBase_IsLicensed] DEFAULT ((0)) NOT NULL,
    [FirstName]                         NVARCHAR (256)   NULL,
    [UTCConversionTimeZoneCode]         INT              NULL,
    [PositionId]                        UNIQUEIDENTIFIER NULL,
    [ProcessId]                         UNIQUEIDENTIFIER NULL,
    [QueueId]                           UNIQUEIDENTIFIER NULL,
    [EntityImageId]                     UNIQUEIDENTIFIER NULL,
    [ActiveDirectoryGuid]               UNIQUEIDENTIFIER NULL,
    [TraversedPath]                     NVARCHAR (1250)  NULL,
    [IsIntegrationUser]                 BIT              CONSTRAINT [DF_SystemUserBase_IsIntegrationUser] DEFAULT ((0)) NOT NULL,
    [StageId]                           UNIQUEIDENTIFIER NULL,
    [Title]                             NVARCHAR (128)   NULL,
    [PassportHi]                        INT              NULL,
    [PassportLo]                        INT              NULL,
    [GovernmentId]                      NVARCHAR (100)   NULL,
    [YomiMiddleName]                    NVARCHAR (50)    NULL,
    [YomiFullName]                      NVARCHAR (256)   NULL,
    [YomiLastName]                      NVARCHAR (128)   NULL,
    [YomiFirstName]                     NVARCHAR (128)   NULL,
    [LatestUpdateTime]                  DATETIME         NULL,
    [UserPuid]                          NVARCHAR (128)   NULL,
    [TerritoryId]                       UNIQUEIDENTIFIER NULL,
    [SiteId]                            UNIQUEIDENTIFIER NULL,
    [msdyn_gdproptout]                  BIT              NULL,
    CONSTRAINT [cndx_PrimaryKey_SystemUser] PRIMARY KEY CLUSTERED ([SystemUserId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_system_users] FOREIGN KEY ([BusinessUnitId]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [calendar_system_users] FOREIGN KEY ([CalendarId]) REFERENCES [dbo].[CalendarBase] ([CalendarId]),
    CONSTRAINT [position_users] FOREIGN KEY ([PositionId]) REFERENCES [dbo].[PositionBase] ([PositionId]),
    CONSTRAINT [queue_system_user] FOREIGN KEY ([QueueId]) REFERENCES [dbo].[QueueBase] ([QueueId]),
    CONSTRAINT [site_system_users] FOREIGN KEY ([SiteId]) REFERENCES [dbo].[SiteBase] ([SiteId]),
    CONSTRAINT [systemuser_defaultmailbox_mailbox] FOREIGN KEY ([DefaultMailbox]) REFERENCES [dbo].[MailboxBase] ([MailboxId]),
    CONSTRAINT [territory_system_users] FOREIGN KEY ([TerritoryId]) REFERENCES [dbo].[TerritoryBase] ([TerritoryId]),
    CONSTRAINT [TransactionCurrency_SystemUser] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]),
    CONSTRAINT [user_parent_user] FOREIGN KEY ([ParentSystemUserId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]),
    CONSTRAINT [UQ_SystemUserBaseActiveDirectoryGuid] UNIQUE NONCLUSTERED ([ActiveDirectoryGuid] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[SystemUserBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[SystemUserBase]([BusinessUnitId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SystemUserBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_IdentityId]
    ON [dbo].[SystemUserBase]([IdentityId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_azure_active_directoryobjectid]
    ON [dbo].[SystemUserBase]([AzureActiveDirectoryObjectId] ASC) WHERE ([AzureActiveDirectoryObjectId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_application_user]
    ON [dbo].[SystemUserBase]([ApplicationId] ASC) WHERE ([ApplicationId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_IsSyncWithDirectory]
    ON [dbo].[SystemUserBase]([IsSyncWithDirectory] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_firstname]
    ON [dbo].[SystemUserBase]([FirstName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Cover]
    ON [dbo].[SystemUserBase]([FullName] ASC)
    INCLUDE([YomiFullName]) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_IsLicensed]
    ON [dbo].[SystemUserBase]([IsLicensed] ASC, [IsSyncWithDirectory] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_isdisabledaccessmodetitle]
    ON [dbo].[SystemUserBase]([IsDisabled] ASC, [AccessMode] ASC, [Title] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_user_parent_user]
    ON [dbo].[SystemUserBase]([ParentSystemUserId] ASC) WHERE ([ParentSystemUserId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_calendar_system_users]
    ON [dbo].[SystemUserBase]([CalendarId] ASC) WHERE ([CalendarId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_internalemailaddress]
    ON [dbo].[SystemUserBase]([InternalEMailAddress] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_lastname]
    ON [dbo].[SystemUserBase]([LastName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_userpuid]
    ON [dbo].[SystemUserBase]([UserPuid] ASC) WHERE ([UserPuid] IS NOT NULL) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_territory_system_users]
    ON [dbo].[SystemUserBase]([TerritoryId] ASC) WHERE ([TerritoryId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_DomainName]
    ON [dbo].[SystemUserBase]([DomainName] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_site_system_users]
    ON [dbo].[SystemUserBase]([SiteId] ASC) WHERE ([SiteId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_51A81E33E44A485FA24FACBE2C978B92]
    ON [dbo].[SystemUserBase]([SystemUserId] ASC)
    INCLUDE([FullName], [BusinessUnitId], [SiteId], [Title], [InternalEMailAddress], [PositionId], [IsDisabled], [AccessMode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_51A81E33E44A485FA24FACBE2C978B92]
    ON [dbo].[SystemUserBase]([SystemUserId] ASC)
    INCLUDE([FullName], [FirstName], [LastName], [InternalEMailAddress]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_51A81E33E44A485FA24FACBE2C978B92]
    ON [dbo].[SystemUserBase]([FullName] ASC, [SystemUserId] ASC)
    INCLUDE([BusinessUnitId], [SiteId], [Title], [InternalEMailAddress], [PositionId], [IsDisabled], [AccessMode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_systemuser_defaultmailbox_mailbox]
    ON [dbo].[SystemUserBase]([DefaultMailbox] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_queue_system_user]
    ON [dbo].[SystemUserBase]([QueueId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

