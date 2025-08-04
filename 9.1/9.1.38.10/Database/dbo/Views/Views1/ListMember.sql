


--
-- base view for ListMember
--
create view dbo.[ListMember]
 (
    -- logical attributes
    [OwnerId],
    [OwnerIdType],
    [OwningUser],
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [OwningBusinessUnit],

    -- physical attributes
    [ListMemberId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Name],
    [EntityId],
    [EntityType],
    [ListId],
    [EntityIdTypeCode]
) with view_metadata as
select
    -- logical attributes
    [list_member].[OwnerId],
    [list_member].[OwnerIdType],
    case when [list_member].OwnerIdType = 8
    then [list_member].OwnerId
    else null
    end,
    [lk_listmember_createdby].[FullName],
    [lk_listmember_createdby].[YomiFullName],
    [lk_listmember_createdonbehalfby].[FullName],
    [lk_listmember_createdonbehalfby].[YomiFullName],
    [lk_listmember_modifiedby].[FullName],
    [lk_listmember_modifiedby].[YomiFullName],
    [lk_listmember_modifiedonbehalfby].[FullName],
    [lk_listmember_modifiedonbehalfby].[YomiFullName],
    [list_member].[OwningBusinessUnit],

    -- physical attribute
    [ListMemberBase].[ListMemberId],
    [ListMemberBase].[CreatedOn],
    [ListMemberBase].[CreatedBy],
    [ListMemberBase].[ModifiedOn],
    [ListMemberBase].[ModifiedBy],
    [ListMemberBase].[CreatedOnBehalfBy],
    [ListMemberBase].[ModifiedOnBehalfBy],
    [ListMemberBase].[VersionNumber],
    [ListMemberBase].[ImportSequenceNumber],
    [ListMemberBase].[OverriddenCreatedOn],
    [ListMemberBase].[TimeZoneRuleVersionNumber],
    [ListMemberBase].[UTCConversionTimeZoneCode],
    [ListMemberBase].[Name],
    [ListMemberBase].[EntityId],
    [ListMemberBase].[EntityType],
    [ListMemberBase].[ListId],
    [ListMemberBase].[EntityIdTypeCode]
from [ListMemberBase] 
    left join [ListBase] [list_member] on ([ListMemberBase].[ListId] = [list_member].[ListId])
    left join [SystemUserBase] [lk_listmember_createdby] on ([ListMemberBase].[CreatedBy] = [lk_listmember_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_listmember_createdonbehalfby] on ([ListMemberBase].[CreatedOnBehalfBy] = [lk_listmember_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_listmember_modifiedby] on ([ListMemberBase].[ModifiedBy] = [lk_listmember_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_listmember_modifiedonbehalfby] on ([ListMemberBase].[ModifiedOnBehalfBy] = [lk_listmember_modifiedonbehalfby].[SystemUserId])
