 
					
create view dbo.[ViewAttributeAsIfPublishedLogicalView] as SELECT * FROM [ViewAttribute] WHERE OverwriteTime = 0 AND ComponentState <> 5