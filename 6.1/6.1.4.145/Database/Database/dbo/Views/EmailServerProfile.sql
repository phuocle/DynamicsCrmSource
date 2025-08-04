


--
-- base view for EmailServerProfile
--
create view dbo.[EmailServerProfile]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [OrganizationIdName],
    [EntityImage],
    [EntityImage_URL],
    [IncomingPartnerApplicationName],
    [OwningBusinessUnitName],
    [EntityImage_Timestamp],
    [OutgoingPartnerApplicationName],
    [IsIncomingPasswordSet],
    [IsOutgoingPasswordSet],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [EmailServerProfileId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OrganizationId],
    [StateCode],
    [StatusCode],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Name],
    [ServerType],
    [OutgoingServerLocation],
    [IncomingServerLocation],
    [IncomingUserName],
    [IncomingPassword],
    [OutgoingUsername],
    [OutgoingPassword],
    [IncomingPortNumber],
    [OutgoingPortNumber],
    [IncomingUseSSL],
    [OutgoingUseSSL],
    [UseAutoDiscover],
    [IncomingAuthenticationProtocol],
    [OutgoingCredentialRetrieval],
    [IncomingCredentialRetrieval],
    [EncodingCodePage],
    [ProcessEmailsReceivedAfter],
    [MaxConcurrentConnections],
    [OutgoingAutoGrantDelegateAccess],
    [OutgoingUseImpersonation],
    [IncomingUseImpersonation],
    [OwningBusinessUnit],
    [IncomingPartnerApplication],
    [OutgoingPartnerApplication],
    [MoveUndeliveredEmails],
    [MinPollingIntervalInMinutes],
    [Description],
    [UseSameSettingsForOutgoingConnections],
    [OutgoingAuthenticationProtocol],
    [ExchangeVersion],
    [EntityImageId]
) with view_metadata as
select
    -- logical attributes
    [lk_emailserverprofile_createdby].[FullName],
    [lk_emailserverprofile_createdby].[YomiFullName],
    [lk_emailserverprofile_createdonbehalfby].[FullName],
    [lk_emailserverprofile_createdonbehalfby].[YomiFullName],
    [lk_emailserverprofile_modifiedby].[FullName],
    [lk_emailserverprofile_modifiedby].[YomiFullName],
    [lk_emailserverprofile_modifiedonbehalfby].[FullName],
    [lk_emailserverprofile_modifiedonbehalfby].[YomiFullName],
    [organization_emailserverprofile].[Name],
    [lk_emailserverprofile_entityimage].[ImageData],
    [lk_emailserverprofile_entityimage].[ImageURL],
    [emailserverprofile_incoming_partnerapplication].[Name],
    [business_unit_emailserverprofile].[Name],
    [lk_emailserverprofile_entityimage].[ImageTimestamp],
    [emailserverprofile_outgoing_partnerapplication].[Name],
    CAST(case when [EmailServerProfileBase].[IncomingPassword] is null then 0 else 1 end as bit),
    CAST(case when [EmailServerProfileBase].[OutgoingPassword] is null then 0 else 1 end as bit),

    -- ownership entries
    OwnerId = [EmailServerProfileBase].OwnerId,
    OwnerName = XXowner.Name,
    OwnerYomiName =  XXowner.YomiName,
    OwnerDsc = 0, -- DSC is removed, stub it to 0
    OwnerIdType = XXowner.OwnerIdType,
    OwningUser = case 
 		when XXowner.OwnerIdType= 8 then XXowner.OwnerId
		else null
		end,
    OwningTeam = case 
 		when XXowner.OwnerIdType= 9 then XXowner.OwnerId
		else null
		end,

    -- physical attribute
    [EmailServerProfileBase].[EmailServerProfileId],
    [EmailServerProfileBase].[CreatedOn],
    [EmailServerProfileBase].[CreatedBy],
    [EmailServerProfileBase].[ModifiedOn],
    [EmailServerProfileBase].[ModifiedBy],
    [EmailServerProfileBase].[CreatedOnBehalfBy],
    [EmailServerProfileBase].[ModifiedOnBehalfBy],
    [EmailServerProfileBase].[OrganizationId],
    [EmailServerProfileBase].[StateCode],
    [EmailServerProfileBase].[StatusCode],
    [EmailServerProfileBase].[TimeZoneRuleVersionNumber],
    [EmailServerProfileBase].[UTCConversionTimeZoneCode],
    [EmailServerProfileBase].[Name],
    [EmailServerProfileBase].[ServerType],
    [EmailServerProfileBase].[OutgoingServerLocation],
    [EmailServerProfileBase].[IncomingServerLocation],
    [EmailServerProfileBase].[IncomingUserName],
    [EmailServerProfileBase].[IncomingPassword],
    [EmailServerProfileBase].[OutgoingUsername],
    [EmailServerProfileBase].[OutgoingPassword],
    [EmailServerProfileBase].[IncomingPortNumber],
    [EmailServerProfileBase].[OutgoingPortNumber],
    [EmailServerProfileBase].[IncomingUseSSL],
    [EmailServerProfileBase].[OutgoingUseSSL],
    [EmailServerProfileBase].[UseAutoDiscover],
    [EmailServerProfileBase].[IncomingAuthenticationProtocol],
    [EmailServerProfileBase].[OutgoingCredentialRetrieval],
    [EmailServerProfileBase].[IncomingCredentialRetrieval],
    [EmailServerProfileBase].[EncodingCodePage],
    [EmailServerProfileBase].[ProcessEmailsReceivedAfter],
    [EmailServerProfileBase].[MaxConcurrentConnections],
    [EmailServerProfileBase].[OutgoingAutoGrantDelegateAccess],
    [EmailServerProfileBase].[OutgoingUseImpersonation],
    [EmailServerProfileBase].[IncomingUseImpersonation],
    [EmailServerProfileBase].[OwningBusinessUnit],
    [EmailServerProfileBase].[IncomingPartnerApplication],
    [EmailServerProfileBase].[OutgoingPartnerApplication],
    [EmailServerProfileBase].[MoveUndeliveredEmails],
    [EmailServerProfileBase].[MinPollingIntervalInMinutes],
    [EmailServerProfileBase].[Description],
    [EmailServerProfileBase].[UseSameSettingsForOutgoingConnections],
    [EmailServerProfileBase].[OutgoingAuthenticationProtocol],
    [EmailServerProfileBase].[ExchangeVersion],
    [EmailServerProfileBase].[EntityImageId]
from [EmailServerProfileBase] 
    left join [BusinessUnitBase] [business_unit_emailserverprofile] on ([EmailServerProfileBase].[OwningBusinessUnit] = [business_unit_emailserverprofile].[BusinessUnitId])
    left join [PartnerApplicationBase] [emailserverprofile_incoming_partnerapplication] on ([EmailServerProfileBase].[IncomingPartnerApplication] = [emailserverprofile_incoming_partnerapplication].[PartnerApplicationId])
    left join [PartnerApplicationBase] [emailserverprofile_outgoing_partnerapplication] on ([EmailServerProfileBase].[OutgoingPartnerApplication] = [emailserverprofile_outgoing_partnerapplication].[PartnerApplicationId])
    left join [SystemUserBase] [lk_emailserverprofile_createdby] with(nolock) on ([EmailServerProfileBase].[CreatedBy] = [lk_emailserverprofile_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_emailserverprofile_createdonbehalfby] with(nolock) on ([EmailServerProfileBase].[CreatedOnBehalfBy] = [lk_emailserverprofile_createdonbehalfby].[SystemUserId])
    left join [ImageDescriptor] [lk_emailserverprofile_entityimage] on ([EmailServerProfileBase].[EntityImageId] = [lk_emailserverprofile_entityimage].[ImageDescriptorId])
    left join [SystemUserBase] [lk_emailserverprofile_modifiedby] with(nolock) on ([EmailServerProfileBase].[ModifiedBy] = [lk_emailserverprofile_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_emailserverprofile_modifiedonbehalfby] with(nolock) on ([EmailServerProfileBase].[ModifiedOnBehalfBy] = [lk_emailserverprofile_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_emailserverprofile] with(nolock) on ([EmailServerProfileBase].[OrganizationId] = [organization_emailserverprofile].[OrganizationId])
    left join OwnerBase XXowner with(nolock) on ([EmailServerProfileBase].OwnerId = XXowner.OwnerId)
