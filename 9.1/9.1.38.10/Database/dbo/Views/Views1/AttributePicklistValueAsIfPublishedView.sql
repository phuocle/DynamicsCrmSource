 
					
create view dbo.[AttributePicklistValueAsIfPublishedView] as SELECT * FROM [AttributePicklistValue] WHERE OverwriteTime = 0 AND ComponentState = 0