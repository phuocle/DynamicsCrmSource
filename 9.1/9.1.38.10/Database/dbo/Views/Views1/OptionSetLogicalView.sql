 
					
create view dbo.[OptionSetLogicalView] as SELECT * FROM [OptionSet] WHERE OverwriteTime = 0 AND ComponentState <> 5