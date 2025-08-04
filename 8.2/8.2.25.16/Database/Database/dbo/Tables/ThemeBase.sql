CREATE TABLE [dbo].[ThemeBase] (
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [DefaultCustomEntityColor]  NVARCHAR (7)     NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NULL,
    [LogoToolTip]               NVARCHAR (80)    NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [Type]                      BIT              CONSTRAINT [DF_ThemeBase_Type] DEFAULT ((1)) NOT NULL,
    [ProcessControlColor]       NVARCHAR (7)     NULL,
    [HeaderColor]               NVARCHAR (7)     NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [statuscode]                INT              NULL,
    [DefaultEntityColor]        NVARCHAR (7)     NULL,
    [statecode]                 INT              NOT NULL,
    [NavBarShelfColor]          NVARCHAR (7)     NULL,
    [ControlShade]              NVARCHAR (7)     NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [LogoId]                    UNIQUEIDENTIFIER NULL,
    [HoverLinkEffect]           NVARCHAR (7)     NULL,
    [SelectedLinkEffect]        NVARCHAR (7)     NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [NavBarBackgroundColor]     NVARCHAR (7)     NULL,
    [ThemeId]                   UNIQUEIDENTIFIER NOT NULL,
    [IsDefaultTheme]            BIT              CONSTRAINT [DF_ThemeBase_IsDefaultTheme] DEFAULT ((0)) NOT NULL,
    [ModifiedOn]                DATETIME         NULL,
    [CreatedOn]                 DATETIME         NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [ControlBorder]             NVARCHAR (7)     NULL,
    [GlobalLinkColor]           NVARCHAR (7)     NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [BackgroundColor]           NVARCHAR (7)     NULL,
    CONSTRAINT [PK_ThemeBase] PRIMARY KEY CLUSTERED ([ThemeId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [TransactionCurrency_Theme] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[ThemeBase]([OrganizationId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ThemeBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[ThemeBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[ThemeBase]([Name] ASC) WITH (FILLFACTOR = 80);

