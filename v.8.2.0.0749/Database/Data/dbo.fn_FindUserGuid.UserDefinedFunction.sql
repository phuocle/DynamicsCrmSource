USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[fn_FindUserGuid]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create function [dbo].[fn_FindUserGuid] ()
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
