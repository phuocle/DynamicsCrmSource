

-- This stored procedure for given parameters
-- Add/remove rows to/from TeamMembership and SystemUserPrincipals
-- if teams have roles associated with them, then call  p_SystemUserBuEntityMapReinit
-- if teams have roles associated with them with IsInherited=1, then call p_PrincipalEntityMapReinitForUsersWithInheritance
-- if teams have FieldSecurityProfile associated with them, then call p_PrincipalAttributeAccessMapReinit
-- ReinitSubscriptions for user
-- Returns an integer indicating whether the stored procedure completed successfully
-- -- '0' indicates procedure completed successfully
-- -- '1' indicates failure on insert into TeamMembership due to violation of unique key constraint
-- -- '2' indicates failure on insert into SystemUserPrincipals due to violation of unique key constraint

CREATE procedure dbo.p_UserTeamsMembershipUpdate(@userId uniqueidentifier, @addTeams EntityIdCollection readonly, @removeTeams EntityIdCollection readonly, @processRoleIsInherited bit = 1, @returnVal int output ) as
begin
	SET NOCOUNT ON

	declare @countNewTeams int = 0
	declare @countDeleteTeams int = 0
	
	--Add/remove rows to/from TeamMembership and SystemUserPrincipals

	-- Process delete first to avoid unlikely but possible unique contraints violation for insert
	select @countDeleteTeams=COUNT(1) from @removeTeams
	if (@countDeleteTeams > 0 )
	begin
		delete TeamMembership where SystemUserId = @userId and TeamId in (select Id from @removeTeams)
		delete SystemUserPrincipals where SystemUserId = @userId and PrincipalId in (select Id from @removeTeams)
	end

	-- Process new teams
	select @countNewTeams=COUNT(1) from @addTeams
	if (@countNewTeams > 0)
	begin
		-- Because of delay in user cache refresh in web farm environment @addTeams passed from webserver W2 can have user teams already persistent in db by webserver W1.
		-- During login scenarios there may be multiple threads that call this stored procedure, which can result in a race condition when inserting into TeamMembership and
		-- SystemUserPrincipals tables. This leads to 'violation of UNIQUE KEY constraint' exceptions when later threads try to resinsert the same values into these tables.
		-- The key constraint violation exceptions thrown can be swallowed by the stored procedure and these later threads can return early since the race winner will complete
		-- the remainder of the procedure.
		begin try
			insert into TeamMembership (SystemUserId, TeamId )
				select @userId, Id from @addTeams	
		end try
		begin catch
			if ERROR_NUMBER() = 2627 -- Violation of UNIQUE KEY constraint
			begin
				set @returnVal = 1 -- Insert into TeamMembership failed due to violation of UNIQUE KEY constraint
				return
			end
			else
				throw -- Error not related to violation of UNIQUE KEY constaint
		end catch

		begin try
			insert into SystemUserPrincipals(SystemUserId, PrincipalId)
				select @userId, Id from @addTeams
		end try
		begin catch
			if ERROR_NUMBER() = 2627 -- Violation of UNIQUE KEY constraint
			begin
				set @returnVal = 2
				return -- Insert into SystemUserPrincipals failed due to violation of UNIQUE KEY constraint
			end
			else
				throw -- Error not related to violation of UNIQUE KEY constaint
		end catch
	end

	-- Note: amount of sql work done in this sp can be big, 
	-- TODO andreism: consider async recomputation of security maps with eventual consistency
	if (@countDeleteTeams > 0 or @countNewTeams > 0)
	begin
		-- if teams have roles associated with them, then call p_SystemUserBuEntityMapReinit
		select top(1) 1 from TeamRoles tr where tr.TeamId in 
					(select Id from @addTeams union select Id from @removeTeams)
		if (@@ROWCOUNT > 0)
					exec p_SystemUserBuEntityMapReinit @userId, null, null, null

		-- if teams have roles associated with them with IsInherited=1, then call p_PrincipalEntityMapReinitForUsersWithInheritance
		if (@processRoleIsInherited = 1)
		begin
			;with TeamIds(TeamId) as(select Id from @addTeams union select Id from @removeTeams) 
			select top(1) 1 from Role r 
				join TeamRoles tr on tr.RoleId = r.RoleId 
				join Team t on t.TeamId = tr.TeamId 
				join TeamIds ti on ti.TeamId = t.TeamId
				where r.IsInherited = 1
			if (@@ROWCOUNT > 0)
			begin
				declare @principalIds EntityIdCollection;
				insert into @principalIds(id) select @userId
				exec p_PrincipalEntityMapReinitForUsersWithInheritance @principalIds
			end
		end

		-- if teams have FieldSecurityProfile associated with them, then call p_PrincipalAttributeAccessMapReinit
		select top(1) 1 from TeamProfiles tp where tp.TeamId in 
				(select Id from @addTeams union select Id from @removeTeams)
		if (@@ROWCOUNT > 0)
			exec p_PrincipalAttributeAccessMapReinit @userId, 8, 0

		-- ReinitSubscriptions for user
		-- ADD CHECK FOR CDS LITE, Subscription Entity is not present.
		-- Todo: 1821101 to move this reference to service file
		IF OBJECT_ID('dbo.Subscription', 'U') IS NOT NULL 
		BEGIN
			DECLARE @query NVARCHAR(MAX) = 'update Subscription set ReInitialize = 1 where SystemUserId = ''' + cast(@userId as nvarchar(36)) + '''';
			EXECUTE(@query)
		END
	end
	set @returnVal = 0 -- success
end