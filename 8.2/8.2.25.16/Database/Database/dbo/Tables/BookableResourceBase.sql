CREATE TABLE [dbo].[BookableResourceBase] (
    [OwnerId]                   UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [AccountId]                 UNIQUEIDENTIFIER NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [StatusCode]                INT              NULL,
    [ProcessId]                 UNIQUEIDENTIFIER NULL,
    [StageId]                   UNIQUEIDENTIFIER NULL,
    [CalendarId]                UNIQUEIDENTIFIER NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ResourceType]              INT              NULL,
    [StateCode]                 INT              NOT NULL,
    [UserId]                    UNIQUEIDENTIFIER NULL,
    [ContactId]                 UNIQUEIDENTIFIER NULL,
    [CreatedOn]                 DATETIME         NULL,
    [TraversedPath]             NVARCHAR (1250)  NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [BookableResourceId]        UNIQUEIDENTIFIER NOT NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [ImportSequenceNumber]      INT              NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [TimeZone]                  INT              NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_BookableResourceBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
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
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[BookableResourceBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[BookableResourceBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[BookableResourceBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_account_bookableresource_AccountId]
    ON [dbo].[BookableResourceBase]([AccountId] ASC) WHERE ([AccountId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_for_cascaderelationship_systemuser_bookableresource_UserId]
    ON [dbo].[BookableResourceBase]([UserId] ASC) WHERE ([UserId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[BookableResourceBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_contact_bookableresource_ContactId]
    ON [dbo].[BookableResourceBase]([ContactId] ASC) WHERE ([ContactId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_calendar_bookableresources]
    ON [dbo].[BookableResourceBase]([CalendarId] ASC) WHERE ([CalendarId] IS NOT NULL) WITH (FILLFACTOR = 80);

