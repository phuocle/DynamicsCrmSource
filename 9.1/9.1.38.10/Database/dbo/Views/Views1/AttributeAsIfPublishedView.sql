 
					
create view dbo.[AttributeAsIfPublishedView] as SELECT * FROM [Attribute] WHERE OverwriteTime = 0 AND ComponentState = 0