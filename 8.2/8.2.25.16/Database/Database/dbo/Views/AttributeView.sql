
				
create view dbo.[AttributeView] as (SELECT * FROM [Attribute] WHERE OverwriteTime = 0 AND ComponentState = 0)