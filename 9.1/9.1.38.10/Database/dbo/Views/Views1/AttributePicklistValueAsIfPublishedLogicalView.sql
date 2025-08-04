 
					
create view dbo.[AttributePicklistValueAsIfPublishedLogicalView] as SELECT * FROM [AttributePicklistValue] WHERE OverwriteTime = 0 AND ComponentState <> 5