CREATE TABLE [dbo].[CRMAutoTuneIndex] (
    [SqlServerName]     NVARCHAR (128) NULL,
    [DatabaseName]      NVARCHAR (128) NULL,
    [Object_Id]         INT            NOT NULL,
    [Table]             [sysname]      NOT NULL,
    [Index_Id]          INT            NOT NULL,
    [Index]             [sysname]      NULL,
    [Type_Desc]         NVARCHAR (60)  NULL,
    [Keys]              NVARCHAR (MAX) NULL,
    [Included]          NVARCHAR (MAX) NULL,
    [Is_Unique]         BIT            NULL,
    [Fill_Factor]       TINYINT        NOT NULL,
    [Is_Padded]         BIT            NULL,
    [Has_Filter]        BIT            NULL,
    [Filter_Definition] NVARCHAR (MAX) NULL,
    [CreationTime]      DATETIME       NULL
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[CRMAutoTuneIndex]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[CRMAutoTuneIndex] SET (LOCK_ESCALATION = DISABLE);

