 
					
create view dbo.[OptionSetAsIfPublishedLogicalView] as SELECT * FROM [OptionSet] WHERE OverwriteTime = 0 AND ComponentState <> 5