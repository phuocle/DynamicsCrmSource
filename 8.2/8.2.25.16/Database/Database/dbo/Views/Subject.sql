


--
-- base view for Subject
--
create view dbo.[Subject]
 (
    -- logical attributes
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedByExternalPartyYomiName],
    [CreatedByExternalPartyName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedByYomiName],
    [CreatedByName],
    [ModifiedByExternalPartyYomiName],
    [ModifiedByExternalPartyName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [OrganizationIdName],
    [ParentSubjectName],

    -- physical attributes
    [SubjectId],
    [Title],
    [OrganizationId],
    [Description],
    [ParentSubject],
    [FeatureMask],
    [CreatedBy],
    [CreatedOn],
    [ModifiedBy],
    [ModifiedOn],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [CreatedByExternalParty],
    [ModifiedByExternalParty]
) with view_metadata as
select
    -- logical attributes
    [lk_subjectbase_createdonbehalfby].[YomiFullName],
    [lk_subjectbase_createdonbehalfby].[FullName],
    [lk_externalparty_subject_createdby].[YomiFullName],
    [lk_externalparty_subject_createdby].[FullName],
    [lk_subjectbase_modifiedby].[FullName],
    [lk_subjectbase_modifiedby].[YomiFullName],
    [lk_subjectbase_createdby].[YomiFullName],
    [lk_subjectbase_createdby].[FullName],
    [lk_externalparty_subject_modifiedby].[YomiFullName],
    [lk_externalparty_subject_modifiedby].[FullName],
    [lk_subjectbase_modifiedonbehalfby].[FullName],
    [lk_subjectbase_modifiedonbehalfby].[YomiFullName],
    [organization_subjects].[Name],
    [subject_parent_subject].[Title],

    -- physical attribute
    [SubjectBase].[SubjectId],
    [SubjectBase].[Title],
    [SubjectBase].[OrganizationId],
    [SubjectBase].[Description],
    [SubjectBase].[ParentSubject],
    [SubjectBase].[FeatureMask],
    [SubjectBase].[CreatedBy],
    [SubjectBase].[CreatedOn],
    [SubjectBase].[ModifiedBy],
    [SubjectBase].[ModifiedOn],
    [SubjectBase].[VersionNumber],
    [SubjectBase].[ImportSequenceNumber],
    [SubjectBase].[OverriddenCreatedOn],
    [SubjectBase].[CreatedOnBehalfBy],
    [SubjectBase].[ModifiedOnBehalfBy],
    [SubjectBase].[CreatedByExternalParty],
    [SubjectBase].[ModifiedByExternalParty]
from [SubjectBase] 
    left join [ExternalPartyBase] [lk_externalparty_subject_createdby] on ([SubjectBase].[CreatedByExternalParty] = [lk_externalparty_subject_createdby].[ExternalPartyId])
    left join [ExternalPartyBase] [lk_externalparty_subject_modifiedby] on ([SubjectBase].[ModifiedByExternalParty] = [lk_externalparty_subject_modifiedby].[ExternalPartyId])
    left join [SystemUserBase] [lk_subjectbase_createdby] with(nolock) on ([SubjectBase].[CreatedBy] = [lk_subjectbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_subjectbase_createdonbehalfby] with(nolock) on ([SubjectBase].[CreatedOnBehalfBy] = [lk_subjectbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_subjectbase_modifiedby] with(nolock) on ([SubjectBase].[ModifiedBy] = [lk_subjectbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_subjectbase_modifiedonbehalfby] with(nolock) on ([SubjectBase].[ModifiedOnBehalfBy] = [lk_subjectbase_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_subjects] with(nolock) on ([SubjectBase].[OrganizationId] = [organization_subjects].[OrganizationId])
    left join [SubjectBase] [subject_parent_subject] on ([SubjectBase].[ParentSubject] = [subject_parent_subject].[SubjectId])
