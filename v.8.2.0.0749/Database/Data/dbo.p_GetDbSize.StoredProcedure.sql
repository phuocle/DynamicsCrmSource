USE [D365_MSCRM]
GO
/****** Object:  StoredProcedure [dbo].[p_GetDbSize]    Script Date: 4/10/2017 9:59:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


create procedure [dbo].[p_GetDbSize]
as;
begin;
    set nocount on;

    declare @pageSize int = 8; -- page size is 8 KB fixed in SQL Server
    declare @kbytesToMB int = 1024;

    select (sum(cast(size as bigint)) * @pageSize / @kbytesToMB) as DbSize
    from sys.database_files;
end;
GO
