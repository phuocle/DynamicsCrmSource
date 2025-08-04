 
					
create view dbo.[AttributeAsIfPublishedLogicalView] as SELECT * FROM [Attribute] WHERE OverwriteTime = 0 AND ComponentState <> 5