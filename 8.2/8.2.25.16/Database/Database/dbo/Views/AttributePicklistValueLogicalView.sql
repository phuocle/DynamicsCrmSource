
				
create view dbo.[AttributePicklistValueLogicalView] as (SELECT * FROM [AttributePicklistValue] WHERE OverwriteTime = 0)