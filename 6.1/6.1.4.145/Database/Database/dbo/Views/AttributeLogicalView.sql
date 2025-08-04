
				
create view dbo.[AttributeLogicalView] as (SELECT * FROM [Attribute] WHERE OverwriteTime = 0)