CREATE TYPE [dbo].[ObjectTypeCodeIdAttributeCollection] AS TABLE (
    [typecode]      INT              NOT NULL,
    [id]            UNIQUEIDENTIFIER NOT NULL,
    [attributename] NVARCHAR (250)   NOT NULL,
    PRIMARY KEY CLUSTERED ([id] ASC, [typecode] ASC, [attributename] ASC));

