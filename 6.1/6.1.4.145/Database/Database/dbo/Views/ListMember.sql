


--
-- base view for ListMember
--
create view dbo.[ListMember]
 (
    -- logical attributes
    [OwnerId],
    [OwnerIdType],
    [ModifiedOnBehalfByName],
    [OwningUser],
    [ModifiedOnBehalfByYomiName],
    [CreatedByYomiName],
    [ModifiedByName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [OwningBusinessUnit],
    [CreatedByName],
    [ModifiedByYomiName],

    -- physical attributes
    [EntityType],
    [CreatedOn],
    [CreatedBy],
    [VersionNumber],
    [EntityId],
    [ModifiedBy],
    [ListId],
    [ListMemberId],
    [ModifiedOn],
    [EntityIdTypeCode],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [list_member].[OwnerId],
    [list_member].[OwnerIdType],
    [lk_listmember_modifiedonbehalfby].[FullName],
    case when [list_member].OwnerIdType = 8
    then [list_member].OwnerId
    else null
    end,
    [lk_listmember_modifiedonbehalfby].[YomiFullName],
    [lk_listmember_createdby].[YomiFullName],
    [lk_listmember_modifiedby].[FullName],
    [lk_listmember_createdonbehalfby].[FullName],
    [lk_listmember_createdonbehalfby].[YomiFullName],
    [list_member].[OwningBusinessUnit],
    [lk_listmember_createdby].[FullName],
    [lk_listmember_modifiedby].[YomiFullName],

    -- physical attribute
    [ListMemberBase].[EntityType],
    [ListMemberBase].[CreatedOn],
    [ListMemberBase].[CreatedBy],
    [ListMemberBase].[VersionNumber],
    [ListMemberBase].[EntityId],
    [ListMemberBase].[ModifiedBy],
    [ListMemberBase].[ListId],
    [ListMemberBase].[ListMemberId],
    [ListMemberBase].[ModifiedOn],
    [ListMemberBase].[EntityIdTypeCode],
    [ListMemberBase].[CreatedOnBehalfBy],
    [ListMemberBase].[ModifiedOnBehalfBy]
from [ListMemberBase] 
    left join [ListBase] [list_member] on ([ListMemberBase].[ListId] = [list_member].[ListId])
    left join [SystemUserBase] [lk_listmember_createdby] with(nolock) on ([ListMemberBase].[CreatedBy] = [lk_listmember_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_listmember_createdonbehalfby] with(nolock) on ([ListMemberBase].[CreatedOnBehalfBy] = [lk_listmember_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_listmember_modifiedby] with(nolock) on ([ListMemberBase].[ModifiedBy] = [lk_listmember_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_listmember_modifiedonbehalfby] with(nolock) on ([ListMemberBase].[ModifiedOnBehalfBy] = [lk_listmember_modifiedonbehalfby].[SystemUserId])
