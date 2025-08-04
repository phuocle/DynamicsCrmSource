CREATE TABLE [dbo].[ThemeBase]
(
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[DefaultCustomEntityColor] [nvarchar] (7) COLLATE Latin1_General_CI_AI NULL,
[ImportSequenceNumber] [int] NULL,
[OrganizationId] [uniqueidentifier] NULL,
[LogoToolTip] [nvarchar] (80) COLLATE Latin1_General_CI_AI NULL,
[VersionNumber] [timestamp] NULL,
[Type] [bit] NOT NULL CONSTRAINT [DF_ThemeBase_Type] DEFAULT ((1)),
[ProcessControlColor] [nvarchar] (7) COLLATE Latin1_General_CI_AI NULL,
[HeaderColor] [nvarchar] (7) COLLATE Latin1_General_CI_AI NULL,
[CreatedBy] [uniqueidentifier] NULL,
[statuscode] [int] NULL,
[DefaultEntityColor] [nvarchar] (7) COLLATE Latin1_General_CI_AI NULL,
[statecode] [int] NOT NULL,
[NavBarShelfColor] [nvarchar] (7) COLLATE Latin1_General_CI_AI NULL,
[ControlShade] [nvarchar] (7) COLLATE Latin1_General_CI_AI NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[LogoId] [uniqueidentifier] NULL,
[HoverLinkEffect] [nvarchar] (7) COLLATE Latin1_General_CI_AI NULL,
[SelectedLinkEffect] [nvarchar] (7) COLLATE Latin1_General_CI_AI NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[NavBarBackgroundColor] [nvarchar] (7) COLLATE Latin1_General_CI_AI NULL,
[ThemeId] [uniqueidentifier] NOT NULL,
[IsDefaultTheme] [bit] NOT NULL CONSTRAINT [DF_ThemeBase_IsDefaultTheme] DEFAULT ((0)),
[ModifiedOn] [datetime] NULL,
[CreatedOn] [datetime] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[ControlBorder] [nvarchar] (7) COLLATE Latin1_General_CI_AI NULL,
[GlobalLinkColor] [nvarchar] (7) COLLATE Latin1_General_CI_AI NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[BackgroundColor] [nvarchar] (7) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ThemeBase] ADD CONSTRAINT [PK_ThemeBase] PRIMARY KEY CLUSTERED  ([ThemeId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[ThemeBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[ThemeBase] ([OrganizationId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[ThemeBase] ([statecode], [statuscode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ThemeBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ThemeBase] ADD CONSTRAINT [TransactionCurrency_Theme] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
