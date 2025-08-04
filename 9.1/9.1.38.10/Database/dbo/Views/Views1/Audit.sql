


--
-- base view for Audit
--
create view dbo.[Audit]
 (
    -- logical attributes
    [UserIdName],
    [CallingUserIdName],

    -- physical attributes
    [AttributeMask],
    [TransactionId],
    [Action],
    [ObjectId],
    [UserId],
    [ChangeData],
    [CreatedOn],
    [Operation],
    [AuditId],
    [CallingUserId],
    [ObjectTypeCode],
    [ObjectIdName],
    [RegardingObjectId],
    [RegardingObjectIdName],
    [UserAdditionalInfo]
) with view_metadata as
select
    -- logical attributes
    [lk_audit_userid].[FullName],
    [lk_audit_callinguserid].[FullName],

    -- physical attribute
    [AuditBase].[AttributeMask],
    [AuditBase].[TransactionId],
    [AuditBase].[Action],
    [AuditBase].[ObjectId],
    [AuditBase].[UserId],
    [AuditBase].[ChangeData],
    [AuditBase].[CreatedOn],
    [AuditBase].[Operation],
    [AuditBase].[AuditId],
    [AuditBase].[CallingUserId],
    [AuditBase].[ObjectTypeCode],
    [AuditBase].[ObjectIdName],
    [AuditBase].[RegardingObjectId],
    [AuditBase].[RegardingObjectIdName],
    [AuditBase].[UserAdditionalInfo]
from [AuditBase] 
    left join [SystemUserBase] [lk_audit_callinguserid] on ([AuditBase].[CallingUserId] = [lk_audit_callinguserid].[SystemUserId])
    left join [SystemUserBase] [lk_audit_userid] on ([AuditBase].[UserId] = [lk_audit_userid].[SystemUserId])
