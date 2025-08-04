

CREATE PROCEDURE dbo.p_DeleteLocalizedLabelForSubjectInPhoneCallQuickForm
AS
BEGIN

DECLARE @SubjectCellId UNIQUEIDENTIFIER
SET @SubjectCellId = '158B4BE7-0C89-D5EA-C13C-D8D21D2C4B96'

/*
Delete all existing rows in the localizedlabel table for the above mentioned ObjectId.
This ensures the Forms Infra will pick up the DisplayName of the attribute from the Attribute's localized label to be displayed on the Form.
*/
DELETE FROM LocalizedLabel WHERE ObjectId = @SubjectCellId 

PRINT 'p_DeleteLocalizedLabelForSubjectInPhoneCallQuickForm sproc created'
END