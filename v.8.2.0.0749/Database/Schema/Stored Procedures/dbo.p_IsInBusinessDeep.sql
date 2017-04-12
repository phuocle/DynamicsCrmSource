SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


/*
This proc is to be used to test if ?BusinessId is in ParentId's business hierarchy.
*/
create procedure [dbo].[p_IsInBusinessDeep](
    @BusinessId uniqueidentifier,
    @ParentId uniqueidentifier) 
as;
begin;
    set nocount on;

    declare @tempParentId uniqueidentifier;
    select @tempParentId = @BusinessId;

    declare @curBizId uniqueidentifier;

    while (@tempParentId is not null)
    begin;
        if (@tempParentId = @ParentId)
        begin;
            select IsInBusinessDeep = 1;
            return;
        end;

        select @curBizId = @tempParentId;

        select @tempParentId = ParentBusinessUnitId
        from BusinessUnitBase
        where BusinessUnitId = @curBizId;
    end;

    select IsInBusinessDeep = 0;
end;
GO
