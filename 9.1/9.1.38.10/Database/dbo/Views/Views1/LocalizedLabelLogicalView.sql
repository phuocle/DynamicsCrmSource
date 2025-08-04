 
					
create view dbo.[LocalizedLabelLogicalView] as SELECT * FROM [LocalizedLabel] WHERE OverwriteTime = 0 AND ComponentState <> 5