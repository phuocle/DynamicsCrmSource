CREATE TABLE [dbo].[ImageDescriptor] (
    [Title]             NVARCHAR (200)   NULL,
    [ImageURL]          NVARCHAR (200)   NULL,
    [ObjectTypeCode]    INT              NULL,
    [ImageDescriptorId] UNIQUEIDENTIFIER NOT NULL,
    [Size]              INT              NULL,
    [ImageData]         IMAGE            NULL,
    [FileType]          NVARCHAR (256)   NULL,
    [ImageTimestamp]    BIGINT           NULL,
    [ObjectId]          UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_ImageDescriptor] PRIMARY KEY CLUSTERED ([ImageDescriptorId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ImageDescriptor]', @OptionName = N'text in row', @OptionValue = N'7000';

