
				
create view dbo.[LocalizedLabelLogicalView] as (SELECT * FROM [LocalizedLabel] WHERE OverwriteTime = 0)