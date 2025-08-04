


--
-- base view for marketingformdisplayattributes
--
create view dbo.[marketingformdisplayattributes]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [OrganizationIdName],

    -- physical attributes
    [marketingformdisplayattributesId],
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
    [EntityLogicalName],
    [DisplayAttributeList]
) with view_metadata as
select
    -- logical attributes
    [lk_marketingformdisplayattributes_modifiedonbehalfby].[FullName],
    [lk_marketingformdisplayattributes_modifiedonbehalfby].[YomiFullName],
    [lk_marketingformdisplayattributes_createdby].[FullName],
    [lk_marketingformdisplayattributes_createdby].[YomiFullName],
    [lk_marketingformdisplayattributes_createdonbehalfby].[FullName],
    [lk_marketingformdisplayattributes_createdonbehalfby].[YomiFullName],
    [lk_marketingformdisplayattributes_modifiedby].[FullName],
    [lk_marketingformdisplayattributes_modifiedby].[YomiFullName],
    [organization_marketingformdisplayattributes].[Name],

    -- physical attribute
    [marketingformdisplayattributesBase].[marketingformdisplayattributesId],
    [marketingformdisplayattributesBase].[CreatedOn],
    [marketingformdisplayattributesBase].[CreatedBy],
    [marketingformdisplayattributesBase].[ModifiedOn],
    [marketingformdisplayattributesBase].[ModifiedBy],
    [marketingformdisplayattributesBase].[CreatedOnBehalfBy],
    [marketingformdisplayattributesBase].[ModifiedOnBehalfBy],
    [marketingformdisplayattributesBase].[OrganizationId],
    [marketingformdisplayattributesBase].[statecode],
    [marketingformdisplayattributesBase].[statuscode],
    [marketingformdisplayattributesBase].[VersionNumber],
    [marketingformdisplayattributesBase].[ImportSequenceNumber],
    [marketingformdisplayattributesBase].[OverriddenCreatedOn],
    [marketingformdisplayattributesBase].[TimeZoneRuleVersionNumber],
    [marketingformdisplayattributesBase].[UTCConversionTimeZoneCode],
    [marketingformdisplayattributesBase].[Name],
    [marketingformdisplayattributesBase].[EntityLogicalName],
    [marketingformdisplayattributesBase].[DisplayAttributeList]
from [marketingformdisplayattributesBase] 
    left join [SystemUserBase] [lk_marketingformdisplayattributes_createdby] on ([marketingformdisplayattributesBase].[CreatedBy] = [lk_marketingformdisplayattributes_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_marketingformdisplayattributes_createdonbehalfby] on ([marketingformdisplayattributesBase].[CreatedOnBehalfBy] = [lk_marketingformdisplayattributes_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_marketingformdisplayattributes_modifiedby] on ([marketingformdisplayattributesBase].[ModifiedBy] = [lk_marketingformdisplayattributes_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_marketingformdisplayattributes_modifiedonbehalfby] on ([marketingformdisplayattributesBase].[ModifiedOnBehalfBy] = [lk_marketingformdisplayattributes_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_marketingformdisplayattributes] on ([marketingformdisplayattributesBase].[OrganizationId] = [organization_marketingformdisplayattributes].[OrganizationId])
