 
					
create view dbo.[OptionSetAsIfPublishedView] as SELECT * FROM [OptionSet] WHERE OverwriteTime = 0 AND ComponentState = 0