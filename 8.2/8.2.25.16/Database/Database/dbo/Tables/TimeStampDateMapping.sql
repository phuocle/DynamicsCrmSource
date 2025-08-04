CREATE TABLE [dbo].[TimeStampDateMapping] (
    [TimeStamp]              BIGINT           NOT NULL,
    [Date]                   DATETIME         NOT NULL,
    [TimeStampDateMappingId] UNIQUEIDENTIFIER CONSTRAINT [DF_TimeStampDateMapping_TimeStampDateMappingId] DEFAULT (newid()) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_ChangeTrackingDbTimestamp] PRIMARY KEY NONCLUSTERED ([TimeStampDateMappingId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE CLUSTERED INDEX [fndx_Date_ChangeTrackingDbTimestamp]
    ON [dbo].[TimeStampDateMapping]([Date] ASC) WITH (FILLFACTOR = 80);

