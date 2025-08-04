CREATE TABLE [dbo].[ThemeBase] (
    [TimeZoneRuleVersionNumber]  INT              NULL,
    [TransactionCurrencyId]      UNIQUEIDENTIFIER NULL,
    [OrganizationId]             UNIQUEIDENTIFIER NULL,
    [ProcessControlColor]        NVARCHAR (7)     NULL,
    [PageHeaderBackgroundColor]  NVARCHAR (7)     NULL,
    [BackgroundColor]            NVARCHAR (7)     NULL,
    [ControlShade]               NVARCHAR (7)     NULL,
    [ControlBorder]              NVARCHAR (7)     NULL,
    [SelectedLinkEffect]         NVARCHAR (7)     NULL,
    [ModifiedOn]                 DATETIME         NULL,
    [Name]                       NVARCHAR (100)   NULL,
    [AccentColor]                NVARCHAR (7)     NULL,
    [UTCConversionTimeZoneCode]  INT              NULL,
    [CreatedBy]                  UNIQUEIDENTIFIER NULL,
    [NavBarShelfColor]           NVARCHAR (7)     NULL,
    [DefaultEntityColor]         NVARCHAR (7)     NULL,
    [ModifiedBy]                 UNIQUEIDENTIFIER NULL,
    [HoverLinkEffect]            NVARCHAR (7)     NULL,
    [ModifiedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [VersionNumber]              ROWVERSION       NULL,
    [CreatedOn]                  DATETIME         NULL,
    [DefaultCustomEntityColor]   NVARCHAR (7)     NULL,
    [CreatedOnBehalfBy]          UNIQUEIDENTIFIER NULL,
    [Type]                       BIT              CONSTRAINT [DF_ThemeBase_Type] DEFAULT ((1)) NOT NULL,
    [ExchangeRate]               DECIMAL (23, 10) NULL,
    [IsDefaultTheme]             BIT              CONSTRAINT [DF_ThemeBase_IsDefaultTheme] DEFAULT ((0)) NOT NULL,
    [LogoId]                     UNIQUEIDENTIFIER NULL,
    [HeaderColor]                NVARCHAR (7)     NULL,
    [statuscode]                 INT              NULL,
    [GlobalLinkColor]            NVARCHAR (7)     NULL,
    [NavBarBackgroundColor]      NVARCHAR (7)     NULL,
    [OverriddenCreatedOn]        DATETIME         NULL,
    [statecode]                  INT              NOT NULL,
    [PanelHeaderBackgroundColor] NVARCHAR (7)     NULL,
    [LogoToolTip]                NVARCHAR (80)    NULL,
    [ThemeId]                    UNIQUEIDENTIFIER NOT NULL,
    [MainColor]                  NVARCHAR (7)     NULL,
    [ImportSequenceNumber]       INT              NULL,
    CONSTRAINT [PK_ThemeBase] PRIMARY KEY CLUSTERED ([ThemeId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [TransactionCurrency_Theme] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
ALTER TABLE [dbo].[ThemeBase] SET (LOCK_ESCALATION = DISABLE);


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


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_A8673D05B0A545A480BFEFFB228CB031]
    ON [dbo].[ThemeBase]([ThemeId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_A8673D05B0A545A480BFEFFB228CB031]
    ON [dbo].[ThemeBase]([ThemeId] ASC)
    INCLUDE([Name], [Type], [IsDefaultTheme], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_A8673D05B0A545A480BFEFFB228CB031]
    ON [dbo].[ThemeBase]([Name] ASC, [ThemeId] ASC)
    INCLUDE([Type], [IsDefaultTheme], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

