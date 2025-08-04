
				
create view dbo.[AttributePicklistValueView] as (SELECT * FROM [AttributePicklistValue] WHERE OverwriteTime = 0 AND ComponentState = 0)