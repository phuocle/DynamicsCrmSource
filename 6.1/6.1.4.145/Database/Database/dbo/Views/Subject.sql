


--
-- base view for Subject
--
create view dbo.[Subject]
 (
    -- logical attributes
    [ParentSubjectName],
    [ModifiedOnBehalfByName],
    [ModifiedByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByYomiName],
    [OrganizationIdName],
    [CreatedOnBehalfByName],
    [CreatedByYomiName],
    [ModifiedByYomiName],
    [CreatedByName],

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
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [subject_parent_subject].[Title],
    [lk_subjectbase_modifiedonbehalfby].[FullName],
    [lk_subjectbase_modifiedby].[FullName],
    [lk_subjectbase_createdonbehalfby].[YomiFullName],
    [lk_subjectbase_modifiedonbehalfby].[YomiFullName],
    [organization_subjects].[Name],
    [lk_subjectbase_createdonbehalfby].[FullName],
    [lk_subjectbase_createdby].[YomiFullName],
    [lk_subjectbase_modifiedby].[YomiFullName],
    [lk_subjectbase_createdby].[FullName],

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
    [SubjectBase].[ModifiedOnBehalfBy]
from [SubjectBase] 
    left join [SystemUserBase] [lk_subjectbase_createdby] with(nolock) on ([SubjectBase].[CreatedBy] = [lk_subjectbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_subjectbase_createdonbehalfby] with(nolock) on ([SubjectBase].[CreatedOnBehalfBy] = [lk_subjectbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_subjectbase_modifiedby] with(nolock) on ([SubjectBase].[ModifiedBy] = [lk_subjectbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_subjectbase_modifiedonbehalfby] with(nolock) on ([SubjectBase].[ModifiedOnBehalfBy] = [lk_subjectbase_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_subjects] with(nolock) on ([SubjectBase].[OrganizationId] = [organization_subjects].[OrganizationId])
    left join [SubjectBase] [subject_parent_subject] on ([SubjectBase].[ParentSubject] = [subject_parent_subject].[SubjectId])
