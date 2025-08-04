
				
create view dbo.[ViewAttributeLogicalView] as (SELECT * FROM [ViewAttribute] WHERE OverwriteTime = 0)