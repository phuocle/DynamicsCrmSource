
				
create view dbo.[LocalizedLabelView] as (SELECT * FROM [LocalizedLabel] WHERE OverwriteTime = 0 AND ComponentState = 0)