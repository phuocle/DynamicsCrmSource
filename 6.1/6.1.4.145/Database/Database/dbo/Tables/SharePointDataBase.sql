CREATE TABLE [dbo].[SharePointDataBase] (
    [ModifiedBy]              UNIQUEIDENTIFIER NULL,
    [Data]                    NVARCHAR (MAX)   NULL,
    [CreatedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [Location]                UNIQUEIDENTIFIER NULL,
    [RegardingObjectId]       NVARCHAR (160)   NULL,
    [CreatedOn]               DATETIME         NOT NULL,
    [IsValid]                 BIT              CONSTRAINT [DF_SharePointDataBase_IsValid] DEFAULT ((1)) NULL,
    [OrganizationId]          UNIQUEIDENTIFIER NOT NULL,
    [NextPageToken]           NVARCHAR (160)   NULL,
    [CreatedBy]               UNIQUEIDENTIFIER NULL,
    [OverwriteTime]           DATETIME         CONSTRAINT [DF_SharePointDataBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [ModifiedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [UserId]                  UNIQUEIDENTIFIER NULL,
    [SharePointDataId]        UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOn]              DATETIME         NOT NULL,
    [PreviousPageToken]       NVARCHAR (160)   NULL,
    [RegardingObjectTypeCode] INT              NULL,
    CONSTRAINT [ndx_PrimaryKey_SharePointData] PRIMARY KEY CLUSTERED ([SharePointDataId] ASC) WITH (FILLFACTOR = 80)
);

