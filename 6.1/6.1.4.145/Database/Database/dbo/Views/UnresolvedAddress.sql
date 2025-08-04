


--
-- base view for UnresolvedAddress
--
create view dbo.[UnresolvedAddress]
 (

    -- physical attributes
    [UnresolvedAddressId],
    [FullName],
    [Telephone],
    [EMailAddress],
    [VersionNumber]
) with view_metadata as
select

    -- physical attribute
    [UnresolvedAddressBase].[UnresolvedAddressId],
    [UnresolvedAddressBase].[FullName],
    [UnresolvedAddressBase].[Telephone],
    [UnresolvedAddressBase].[EMailAddress],
    [UnresolvedAddressBase].[VersionNumber]
from [UnresolvedAddressBase] 
