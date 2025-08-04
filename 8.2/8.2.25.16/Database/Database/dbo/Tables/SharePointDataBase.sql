CREATE TABLE [dbo].[SharePointDataBase] (
    [RegardingObjectId]       NVARCHAR (160)   NULL,
    [CreatedBy]               UNIQUEIDENTIFIER NULL,
    [ModifiedOn]              DATETIME         NOT NULL,
    [NextPageToken]           NVARCHAR (160)   NULL,
    [SharePointDataId]        UNIQUEIDENTIFIER NOT NULL,
    [ModifiedBy]              UNIQUEIDENTIFIER NULL,
    [UserId]                  UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [Location]                UNIQUEIDENTIFIER NULL,
    [Data]                    NVARCHAR (MAX)   NULL,
    [PreviousPageToken]       NVARCHAR (160)   NULL,
    [CreatedOn]               DATETIME         NOT NULL,
    [IsValid]                 BIT              CONSTRAINT [DF_SharePointDataBase_IsValid] DEFAULT ((1)) NULL,
    [OrganizationId]          UNIQUEIDENTIFIER NOT NULL,
    [OverwriteTime]           DATETIME         CONSTRAINT [DF_SharePointDataBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [RegardingObjectTypeCode] INT              NULL,
    CONSTRAINT [ndx_PrimaryKey_SharePointData] PRIMARY KEY CLUSTERED ([SharePointDataId] ASC) WITH (FILLFACTOR = 80)
);

