

CREATE FUNCTION [dbo].[fn_CalculateFileSizeForTables]()
RETURNS @FileInformation TABLE 
(
	TableName NVARCHAR(128),
	TotalFileSize BIGINT,
	TotalBodySize BIGINT,
	FileCount BIGINT
)
AS
BEGIN
	--Calculate from AnnotationBase
	INSERT INTO @FileInformation
		SELECT 'AnnotationBase', SUM(CONVERT(BIGINT, FileSize)), 0, COUNT_BIG(*) from
		(SELECT IsDocument, AnnotationId, FileSize from AnnotationBase WHERE DocumentBody IS NOT NULL
		UNION
		SELECT IsDocument, AnnotationId, FileSize from AnnotationBase WHERE FilePointer IS NOT NULL) AS A
		WHERE IsDocument = 1

	--Update TotalBodySize of AnnotationBase by dividing FileSize by 0.75 to get the length of documentBody
	UPDATE @FileInformation SET TotalBodySize =
		(SELECT SUM(CONVERT(BIGINT, FileSize))/0.75 from AnnotationBase WHERE DocumentBody IS NOT NULL)
		WHERE TableName = 'AnnotationBase'
	
	--Calculate from Attachment
	INSERT INTO @FileInformation
		SELECT 'Attachment', SUM(CONVERT(BIGINT, A.FileSize)), 0, COUNT_BIG(*) from
		(SELECT AttachmentId, FileSize from Attachment WHERE Body IS NOT NULL
		UNION
		SELECT AttachmentId, FileSize from Attachment WHERE FilePointer IS NOT NULL) AS A

	--Update TotalBodySize of Attachment by dividing FileSize by 0.75 to get the length of Body
	UPDATE @FileInformation SET TotalBodySize =
		(SELECT SUM(CONVERT(BIGINT, FileSize))/0.75 from Attachment WHERE Body IS NOT NULL)
		WHERE TableName = 'Attachment'
	
	--Calculate from FileAttachment
	INSERT INTO @FileInformation
		select FI.TableName, sum(CONVERT(BIGINT, FI.size)), 0, COUNT_BIG(*) from
		(SELECT FA.FileSizeInBytes as size, FA.ObjectIdTypeCode, E.Name as TableName from FileAttachment FA
		JOIN (SELECT  Name, ObjectTypeCode FROM Entity WHERE OverwriteTime = 0) as E
		on FA.ObjectIdTypeCode = E.ObjectTypeCode ) as FI group by FI.TableName
	
	RETURN
END