

/*
This proc is to be used to match two subjects: whether subject2 is a high level subject of subject1.
*/
CREATE procedure [dbo].[p_MatchSubjects]( @SubjectId1 uniqueidentifier, @SubjectId2 uniqueidentifier) as
begin
	set nocount on

	declare @SubjectId uniqueidentifier
	select @SubjectId = @SubjectId1

	select @SubjectId = ParentSubject from Subject where SubjectId = @SubjectId
	while( @@ROWCOUNT > 0 and @SubjectId <> @SubjectId2 and not ( @SubjectId is null ) )
	begin
		select @SubjectId = ParentSubject from Subject where SubjectId = @SubjectId
	end
	select @SubjectId as 'subjectid'
end


