USE [D365_MSCRM]
GO
/****** Object:  StoredProcedure [dbo].[p_ShrinkMirroredFile]    Script Date: 4/10/2017 9:59:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
;

create procedure [dbo].[p_ShrinkMirroredFile](
	@fName sysname,
	@dbName sysname,
	@target_percent int = null
) as
begin;
	if convert(nvarchar, serverproperty('edition')) <> 'SQL Azure'
	begin;
		declare @filename sysname;
		declare @filesize int;
		declare @sql nvarchar(1024);
         
		-- Shrink the local file
		if @target_percent is null
		begin;
			dbcc shrinkfile (@fName);
		end;
		else
		begin; 
			dbcc shrinkfile (@fName, @target_percent);
		end;

		-- Propogate the shrinking to the mirrored database
		declare c cursor local for 
		select [name], [size] from sys.master_files where (type=0 or type=1) and database_id = db_id (@dbName);
		open c;
		fetch next from c into @filename, @filesize;

		while @@fetch_status=0
		begin;
			set @filesize=(@filesize+1)*8;
			set @sql='alter database ' + quotename(@dbName) + ' modify file ( name=' 
				+ @filename + ', size=' + cast(@filesize as nvarchar) + 'kb )';
			execute sp_executesql @sql;
			fetch next from c into @filename, @filesize;
		end;
		close c;
		deallocate c;
	end;
end;
GO
