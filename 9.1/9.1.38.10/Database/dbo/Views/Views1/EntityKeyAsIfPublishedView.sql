 
					
create view dbo.[EntityKeyAsIfPublishedView] as SELECT * FROM [EntityKey] WHERE OverwriteTime = 0 AND ComponentState = 0