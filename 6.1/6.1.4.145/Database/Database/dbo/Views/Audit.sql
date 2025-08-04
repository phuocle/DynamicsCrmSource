


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
    [ObjectIdName]
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
    [AuditBase].[ObjectIdName]
from [AuditBase] 
    left join [SystemUserBase] [lk_audit_callinguserid] with(nolock) on ([AuditBase].[CallingUserId] = [lk_audit_callinguserid].[SystemUserId])
    left join [SystemUserBase] [lk_audit_userid] with(nolock) on ([AuditBase].[UserId] = [lk_audit_userid].[SystemUserId])
