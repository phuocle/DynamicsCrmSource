


--
-- base view for Connection
--
create view dbo.[Connection]
 (
    -- logical attributes
    [CreatedByYomiName],
    [Record2RoleIdName],
    [CreatedOnBehalfByYomiName],
    [EntityImage],
    [ModifiedByYomiName],
    [EntityImage_Timestamp],
    [Record1RoleIdName],
    [EntityImage_URL],
    [CreatedOnBehalfByName],
    [TransactionCurrencyIdName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedByName],
    [CreatedByName],
    [Name],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [ModifiedBy],
    [StatusCode],
    [ImportSequenceNumber],
    [ConnectionId],
    [VersionNumber],
    [EffectiveStart],
    [IsMaster],
    [RelatedConnectionId],
    [Description],
    [OwningBusinessUnit],
    [OverriddenCreatedOn],
    [Record2Id],
    [CreatedBy],
    [Record2RoleId],
    [EffectiveEnd],
    [Record1RoleId],
    [CreatedOn],
    [ModifiedOn],
    [Record1Id],
    [StateCode],
    [Record1IdObjectTypeCode],
    [Record2IdObjectTypeCode],
    [Record1IdName],
    [Record2IdName],
    [ModifiedOnBehalfBy],
    [CreatedOnBehalfBy],
    [TransactionCurrencyId],
    [ExchangeRate],
    [Record2ObjectTypeCode],
    [Record1ObjectTypeCode],
    [EntityImageId]
) with view_metadata as
select
    -- logical attributes
    [createdby_connection].[YomiFullName],
    [connection_role_connections2].[Name],
    [lk_connectionbase_createdonbehalfby].[YomiFullName],
    [lk_connection_entityimage].[ImageData],
    [modifiedby_connection].[YomiFullName],
    [lk_connection_entityimage].[ImageTimestamp],
    [connection_role_connections1].[Name],
    [lk_connection_entityimage].[ImageURL],
    [lk_connectionbase_createdonbehalfby].[FullName],
    [TransactionCurrency_Connection].[CurrencyName],
    [lk_connectionbase_modifiedonbehalfby].[YomiFullName],
    [lk_connectionbase_modifiedonbehalfby].[FullName],
    [modifiedby_connection].[FullName],
    [createdby_connection].[FullName],
    [ConnectionBase].[Record2IdName],

    -- ownership entries
    OwnerId = [ConnectionBase].OwnerId,
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
    [ConnectionBase].[ModifiedBy],
    [ConnectionBase].[StatusCode],
    [ConnectionBase].[ImportSequenceNumber],
    [ConnectionBase].[ConnectionId],
    [ConnectionBase].[VersionNumber],
    [ConnectionBase].[EffectiveStart],
    [ConnectionBase].[IsMaster],
    [ConnectionBase].[RelatedConnectionId],
    [ConnectionBase].[Description],
    [ConnectionBase].[OwningBusinessUnit],
    [ConnectionBase].[OverriddenCreatedOn],
    [ConnectionBase].[Record2Id],
    [ConnectionBase].[CreatedBy],
    [ConnectionBase].[Record2RoleId],
    [ConnectionBase].[EffectiveEnd],
    [ConnectionBase].[Record1RoleId],
    [ConnectionBase].[CreatedOn],
    [ConnectionBase].[ModifiedOn],
    [ConnectionBase].[Record1Id],
    [ConnectionBase].[StateCode],
    [ConnectionBase].[Record1IdObjectTypeCode],
    [ConnectionBase].[Record2IdObjectTypeCode],
    [ConnectionBase].[Record1IdName],
    [ConnectionBase].[Record2IdName],
    [ConnectionBase].[ModifiedOnBehalfBy],
    [ConnectionBase].[CreatedOnBehalfBy],
    [ConnectionBase].[TransactionCurrencyId],
    [ConnectionBase].[ExchangeRate],
    [ConnectionBase].[Record2ObjectTypeCode],
    [ConnectionBase].[Record1ObjectTypeCode],
    [ConnectionBase].[EntityImageId]
from [ConnectionBase] 
    left join [ConnectionRoleBase] [connection_role_connections1] on ([ConnectionBase].[Record1RoleId] = [connection_role_connections1].[ConnectionRoleId] and [connection_role_connections1].OverwriteTime = 0 and [connection_role_connections1].ComponentState = 0)
    left join [ConnectionRoleBase] [connection_role_connections2] on ([ConnectionBase].[Record2RoleId] = [connection_role_connections2].[ConnectionRoleId] and [connection_role_connections2].OverwriteTime = 0 and [connection_role_connections2].ComponentState = 0)
    left join [SystemUserBase] [createdby_connection] with(nolock) on ([ConnectionBase].[CreatedBy] = [createdby_connection].[SystemUserId])
    left join [ImageDescriptor] [lk_connection_entityimage] on ([ConnectionBase].[EntityImageId] = [lk_connection_entityimage].[ImageDescriptorId])
    left join [SystemUserBase] [lk_connectionbase_createdonbehalfby] with(nolock) on ([ConnectionBase].[CreatedOnBehalfBy] = [lk_connectionbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_connectionbase_modifiedonbehalfby] with(nolock) on ([ConnectionBase].[ModifiedOnBehalfBy] = [lk_connectionbase_modifiedonbehalfby].[SystemUserId])
    left join [SystemUserBase] [modifiedby_connection] with(nolock) on ([ConnectionBase].[ModifiedBy] = [modifiedby_connection].[SystemUserId])
    left join [TransactionCurrencyBase] [TransactionCurrency_Connection] on ([ConnectionBase].[TransactionCurrencyId] = [TransactionCurrency_Connection].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([ConnectionBase].OwnerId = XXowner.OwnerId)
