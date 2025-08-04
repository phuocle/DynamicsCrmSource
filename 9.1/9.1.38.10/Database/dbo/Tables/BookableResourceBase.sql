CREATE TABLE [dbo].[BookableResourceBase] (
    [BookableResourceId]        UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OwnerId]                   UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_BookableResourceBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [ProcessId]                 UNIQUEIDENTIFIER NULL,
    [StageId]                   UNIQUEIDENTIFIER NULL,
    [TraversedPath]             NVARCHAR (1250)  NULL,
    [AccountId]                 UNIQUEIDENTIFIER NULL,
    [CalendarId]                UNIQUEIDENTIFIER NULL,
    [ContactId]                 UNIQUEIDENTIFIER NULL,
    [ResourceType]              INT              NULL,
    [StateCode]                 INT              NOT NULL,
    [StatusCode]                INT              NULL,
    [TimeZone]                  INT              NULL,
    [UserId]                    UNIQUEIDENTIFIER NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_bookableresourceBase] PRIMARY KEY CLUSTERED ([BookableResourceId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [account_bookableresource_AccountId] FOREIGN KEY ([AccountId]) REFERENCES [dbo].[AccountBase] ([AccountId]),
    CONSTRAINT [business_unit_bookableresource] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [calendar_bookableresources] FOREIGN KEY ([CalendarId]) REFERENCES [dbo].[CalendarBase] ([CalendarId]),
    CONSTRAINT [contact_bookableresource_ContactId] FOREIGN KEY ([ContactId]) REFERENCES [dbo].[ContactBase] ([ContactId]),
    CONSTRAINT [owner_bookableresource] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [systemuser_bookableresource_UserId] FOREIGN KEY ([UserId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]),
    CONSTRAINT [TransactionCurrency_bookableresource] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
ALTER TABLE [dbo].[BookableResourceBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[BookableResourceBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_for_cascaderelationship_systemuser_bookableresource_UserId]
    ON [dbo].[BookableResourceBase]([UserId] ASC) WHERE ([UserId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[BookableResourceBase]([OwnerId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[BookableResourceBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[BookableResourceBase]([Name] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_contact_bookableresource_ContactId]
    ON [dbo].[BookableResourceBase]([ContactId] ASC) WHERE ([ContactId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_account_bookableresource_AccountId]
    ON [dbo].[BookableResourceBase]([AccountId] ASC) WHERE ([AccountId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_calendar_bookableresources]
    ON [dbo].[BookableResourceBase]([CalendarId] ASC) WHERE ([CalendarId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_E44C61EEB35B4F15B6A5BEF5B0379330]
    ON [dbo].[BookableResourceBase]([Name] ASC, [BookableResourceId] ASC)
    INCLUDE([CreatedOn], [ResourceType], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_E44C61EEB35B4F15B6A5BEF5B0379330]
    ON [dbo].[BookableResourceBase]([BookableResourceId] ASC)
    INCLUDE([Name], [CreatedOn], [ResourceType], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_E44C61EEB35B4F15B6A5BEF5B0379330]
    ON [dbo].[BookableResourceBase]([BookableResourceId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

