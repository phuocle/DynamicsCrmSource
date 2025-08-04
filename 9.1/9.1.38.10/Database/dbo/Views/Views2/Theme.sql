


--
-- base view for Theme
--
create view dbo.[Theme]
 (
    -- logical attributes
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [OrganizationIdName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [LogoIdName],
    [TransactionCurrencyIdName],

    -- physical attributes
    [ThemeId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OrganizationId],
    [statecode],
    [statuscode],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Name],
    [ExchangeRate],
    [TransactionCurrencyId],
    [GlobalLinkColor],
    [SelectedLinkEffect],
    [HoverLinkEffect],
    [NavBarBackgroundColor],
    [NavBarShelfColor],
    [LogoToolTip],
    [ControlShade],
    [ControlBorder],
    [ProcessControlColor],
    [Type],
    [IsDefaultTheme],
    [LogoId],
    [BackgroundColor],
    [DefaultEntityColor],
    [HeaderColor],
    [DefaultCustomEntityColor],
    [PageHeaderBackgroundColor],
    [PanelHeaderBackgroundColor],
    [MainColor],
    [AccentColor]
) with view_metadata as
select
    -- logical attributes
    [lk_theme_modifiedby].[FullName],
    [lk_theme_modifiedby].[YomiFullName],
    [lk_theme_createdby].[FullName],
    [lk_theme_createdby].[YomiFullName],
    [lk_theme_modifiedonbehalfby].[FullName],
    [lk_theme_modifiedonbehalfby].[YomiFullName],
    [organization_theme].[Name],
    [lk_theme_createdonbehalfby].[FullName],
    [lk_theme_createdonbehalfby].[YomiFullName],
    [lk_theme_logoid].[Name],
    [TransactionCurrency_Theme].[CurrencyName],

    -- physical attribute
    [ThemeBase].[ThemeId],
    [ThemeBase].[CreatedOn],
    [ThemeBase].[CreatedBy],
    [ThemeBase].[ModifiedOn],
    [ThemeBase].[ModifiedBy],
    [ThemeBase].[CreatedOnBehalfBy],
    [ThemeBase].[ModifiedOnBehalfBy],
    [ThemeBase].[OrganizationId],
    [ThemeBase].[statecode],
    [ThemeBase].[statuscode],
    [ThemeBase].[VersionNumber],
    [ThemeBase].[ImportSequenceNumber],
    [ThemeBase].[OverriddenCreatedOn],
    [ThemeBase].[TimeZoneRuleVersionNumber],
    [ThemeBase].[UTCConversionTimeZoneCode],
    [ThemeBase].[Name],
    [ThemeBase].[ExchangeRate],
    [ThemeBase].[TransactionCurrencyId],
    [ThemeBase].[GlobalLinkColor],
    [ThemeBase].[SelectedLinkEffect],
    [ThemeBase].[HoverLinkEffect],
    [ThemeBase].[NavBarBackgroundColor],
    [ThemeBase].[NavBarShelfColor],
    [ThemeBase].[LogoToolTip],
    [ThemeBase].[ControlShade],
    [ThemeBase].[ControlBorder],
    [ThemeBase].[ProcessControlColor],
    [ThemeBase].[Type],
    [ThemeBase].[IsDefaultTheme],
    [ThemeBase].[LogoId],
    [ThemeBase].[BackgroundColor],
    [ThemeBase].[DefaultEntityColor],
    [ThemeBase].[HeaderColor],
    [ThemeBase].[DefaultCustomEntityColor],
    [ThemeBase].[PageHeaderBackgroundColor],
    [ThemeBase].[PanelHeaderBackgroundColor],
    [ThemeBase].[MainColor],
    [ThemeBase].[AccentColor]
from [ThemeBase] 
    left join [SystemUserBase] [lk_theme_createdby]  on ([ThemeBase].[CreatedBy] = [lk_theme_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_theme_createdonbehalfby]  on ([ThemeBase].[CreatedOnBehalfBy] = [lk_theme_createdonbehalfby].[SystemUserId])
    left join [WebResourceBase] [lk_theme_logoid] on ([ThemeBase].[LogoId] = [lk_theme_logoid].[WebResourceId] and [lk_theme_logoid].OverwriteTime = 0 and [lk_theme_logoid].ComponentState = 0)
    left join [SystemUserBase] [lk_theme_modifiedby]  on ([ThemeBase].[ModifiedBy] = [lk_theme_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_theme_modifiedonbehalfby]  on ([ThemeBase].[ModifiedOnBehalfBy] = [lk_theme_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_theme]  on ([ThemeBase].[OrganizationId] = [organization_theme].[OrganizationId])
    left join [TransactionCurrencyBase] [TransactionCurrency_Theme] on ([ThemeBase].[TransactionCurrencyId] = [TransactionCurrency_Theme].[TransactionCurrencyId])
