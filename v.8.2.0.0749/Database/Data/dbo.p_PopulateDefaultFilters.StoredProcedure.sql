USE [D365_MSCRM]
GO
/****** Object:  StoredProcedure [dbo].[p_PopulateDefaultFilters]    Script Date: 4/10/2017 9:59:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


-- Create the stored procedure p_PopulateDefaultFilters.
--
create procedure [dbo].[p_PopulateDefaultFilters](
    @userid uniqueidentifier,
    @bizid uniqueidentifier)
as;
begin;
    set nocount on;

    declare @name nvarchar(200);
    declare @description nvarchar(max);
    declare @fetchxml nvarchar(max);
    declare @rtc int;
    declare @qt int;

    declare c cursor local FORWARD_ONLY READ_ONLY for
    select Name,
           Description,
           FetchXml,
           ReturnedTypeCode,
           QueryType
    from FilterTemplate;

    open c;

    fetch next from c into @name, @description, @fetchxml, @rtc, @qt;

    while (@@fetch_status = 0)
    begin;
        insert into UserQueryBase (UserQueryId, Name, Description, OwnerId, OwningBusinessUnit, FetchXml, CreatedBy, CreatedOn, ModifiedBy, ModifiedOn, ReturnedTypeCode, QueryType)
        values(newid(), @name, @description, @userid, @bizid, @fetchxml, @userid, dbo.fn_GetUtcDateTrunc(), @userid, dbo.fn_GetUtcDateTrunc(), @rtc, @qt);

        fetch next from c into @name, @description, @fetchxml, @rtc, @qt;
    end;  -- while (@@fetch_status = 0)

    close c;
    deallocate c;
end;
GO
