


--
-- base view for ProvisionLanguageForUser
--
create view dbo.[ProvisionLanguageForUser]
 (

    -- physical attributes
    [ProvisionLanguageForUserId],
    [Name],
    [OperationStatus],
    [AsyncOperationId],
    [Lcid],
    [UserId],
    [OrganizationId]
) with view_metadata as
select

    -- physical attribute
    [ProvisionLanguageForUserBase].[ProvisionLanguageForUserId],
    [ProvisionLanguageForUserBase].[Name],
    [ProvisionLanguageForUserBase].[OperationStatus],
    [ProvisionLanguageForUserBase].[AsyncOperationId],
    [ProvisionLanguageForUserBase].[Lcid],
    [ProvisionLanguageForUserBase].[UserId],
    [ProvisionLanguageForUserBase].[OrganizationId]
from [ProvisionLanguageForUserBase] 
