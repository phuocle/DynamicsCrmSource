

create function dbo.fn_FindUserGuid ()
returns uniqueidentifier
as
begin;
	declare @userGuid uniqueidentifier;

	--- test whether the query is runing by priviledged user with user role of CRMReaderRole
	--- if it is dbo, we trust it as well. 
	--- There is an issue in SQL. If the user is a dbo, if it not member of any role
	if (is_member('CRMReaderRole') | is_member('db_owner')) = 1
	begin;
		select @userGuid = cast(context_info() as uniqueidentifier);
	end;

	if @userGuid is null
	begin;
		select @userGuid = s.SystemUserId
		from SystemUserBase as s
		where s.DomainName = suser_sname();
	end;
	return @userGuid;
end;
GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_FindUserGuid] TO [CRM\ReportingGroup {a63a05a4-7923-45ba-a9a3-f0eea9c6a849}]
    AS [dbo];


GO
GRANT EXECUTE
    ON OBJECT::[dbo].[fn_FindUserGuid] TO [CRMReaderRole]
    AS [dbo];

