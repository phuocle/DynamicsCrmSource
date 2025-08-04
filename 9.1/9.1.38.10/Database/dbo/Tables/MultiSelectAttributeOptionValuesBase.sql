CREATE TABLE [dbo].[MultiSelectAttributeOptionValuesBase] (
    [SelectedOptionValues]     NVARCHAR (MAX)   NOT NULL,
    [ObjectColumnNumber]       INT              NOT NULL,
    [MultiSelectFullTextIdKey] BIGINT           IDENTITY (-9223372036854775808, 1) NOT NULL,
    [ObjectId]                 UNIQUEIDENTIFIER NOT NULL,
    [ObjectIdTypeCode]         INT              NOT NULL,
    CONSTRAINT [ndx_MultiSelectFullTextIdKey] PRIMARY KEY NONCLUSTERED ([MultiSelectFullTextIdKey] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[MultiSelectAttributeOptionValuesBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[MultiSelectAttributeOptionValuesBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE CLUSTERED INDEX [cndx_MultiSelectAttributeOptionValues]
    ON [dbo].[MultiSelectAttributeOptionValuesBase]([ObjectIdTypeCode] ASC, [ObjectColumnNumber] ASC, [ObjectId] ASC) WITH (FILLFACTOR = 80);

