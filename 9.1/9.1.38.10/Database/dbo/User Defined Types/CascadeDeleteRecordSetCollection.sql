CREATE TYPE [dbo].[CascadeDeleteRecordSetCollection] AS TABLE (
    [Index]               INT              NOT NULL,
    [ActionType]          INT              NOT NULL,
    [ChildEntityId]       UNIQUEIDENTIFIER NOT NULL,
    [ChildObjectTypeCode] INT              NOT NULL,
    [ColumnNumber]        INT              NOT NULL,
    [ComponentState]      INT              NOT NULL);

