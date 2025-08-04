CREATE TABLE [dbo].[SharePointDataBase] (
    [RegardingObjectId]       NVARCHAR (160)   NULL,
    [SharePointDataId]        UNIQUEIDENTIFIER NOT NULL,
    [CreatedBy]               UNIQUEIDENTIFIER NULL,
    [PreviousPageToken]       NVARCHAR (160)   NULL,
    [ModifiedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [OverwriteTime]           DATETIME         CONSTRAINT [DF_SharePointDataBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [Location]                UNIQUEIDENTIFIER NULL,
    [UserId]                  UNIQUEIDENTIFIER NULL,
    [ModifiedBy]              UNIQUEIDENTIFIER NULL,
    [CreatedOn]               DATETIME         NOT NULL,
    [IsValid]                 BIT              CONSTRAINT [DF_SharePointDataBase_IsValid] DEFAULT ((1)) NULL,
    [OrganizationId]          UNIQUEIDENTIFIER NOT NULL,
    [NextPageToken]           NVARCHAR (160)   NULL,
    [Data]                    NVARCHAR (MAX)   NULL,
    [ModifiedOn]              DATETIME         NOT NULL,
    [CreatedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [RegardingObjectTypeCode] INT              NULL,
    CONSTRAINT [ndx_PrimaryKey_SharePointData] PRIMARY KEY CLUSTERED ([SharePointDataId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[SharePointDataBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[SharePointDataBase] SET (LOCK_ESCALATION = DISABLE);

