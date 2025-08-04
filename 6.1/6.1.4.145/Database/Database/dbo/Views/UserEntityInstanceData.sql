


--
-- base view for UserEntityInstanceData
--
create view dbo.[UserEntityInstanceData]
 (

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [UserEntityInstanceDataId],
    [VersionNumber],
    [OwningBusinessUnit],
    [ObjectTypeCode],
    [ReminderTime],
    [StartTime],
    [DueDate],
    [FlagDueBy],
    [CommonStart],
    [CommonEnd],
    [ToDoOrdinalDate],
    [ReminderSet],
    [FlagRequest],
    [ToDoSubOrdinal],
    [ToDoTitle],
    [PersonalCategories],
    [ObjectId],
    [FlagStatus],
    [ToDoItemFlags]
) with view_metadata as
select

    -- ownership entries
    OwnerId = [UserEntityInstanceDataBase].OwnerId,
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
    [UserEntityInstanceDataBase].[UserEntityInstanceDataId],
    [UserEntityInstanceDataBase].[VersionNumber],
    [UserEntityInstanceDataBase].[OwningBusinessUnit],
    [UserEntityInstanceDataBase].[ObjectTypeCode],
    [UserEntityInstanceDataBase].[ReminderTime],
    [UserEntityInstanceDataBase].[StartTime],
    [UserEntityInstanceDataBase].[DueDate],
    [UserEntityInstanceDataBase].[FlagDueBy],
    [UserEntityInstanceDataBase].[CommonStart],
    [UserEntityInstanceDataBase].[CommonEnd],
    [UserEntityInstanceDataBase].[ToDoOrdinalDate],
    [UserEntityInstanceDataBase].[ReminderSet],
    [UserEntityInstanceDataBase].[FlagRequest],
    [UserEntityInstanceDataBase].[ToDoSubOrdinal],
    [UserEntityInstanceDataBase].[ToDoTitle],
    [UserEntityInstanceDataBase].[PersonalCategories],
    [UserEntityInstanceDataBase].[ObjectId],
    [UserEntityInstanceDataBase].[FlagStatus],
    [UserEntityInstanceDataBase].[ToDoItemFlags]
from [UserEntityInstanceDataBase] 
    left join OwnerBase XXowner with(nolock) on ([UserEntityInstanceDataBase].OwnerId = XXowner.OwnerId)
