USE [D365_MSCRM]
GO
/****** Object:  UserDefinedFunction [dbo].[GetSubsidiaryBusinesses]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


-- Function returns BUs subtree with depth
create function [dbo].[GetSubsidiaryBusinesses](@rootId uniqueidentifier) returns @SubsidiaryBusinesses table 
            (businessunitid uniqueidentifier primary key, depth int)
as
begin;
            declare @depth int;
            select @depth = 0;
            -- This does check function parameter @rootId is existing BU
            insert @SubsidiaryBusinesses 
                        select @rootId, @depth from BusinessUnitBase where BusinessUnitId = @rootId;
            while (@@rowcount > 0)
            begin;
                        select @depth = @depth + 1;
                        insert @SubsidiaryBusinesses
                                    select t.BusinessUnitId, @depth
                                    from BusinessUnitBase t
                                    where exists(
                                                select * from @SubsidiaryBusinesses s
                                                where s.depth = (@depth - 1) and s.businessunitid = t.ParentBusinessUnitId);
            end;
            return;
end;
GO
