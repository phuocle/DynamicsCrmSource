﻿CREATE TABLE [dbo].[ImportMapBaseIds] (
    [ImportMapId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_ImportMapBaseIds] PRIMARY KEY CLUSTERED ([ImportMapId] ASC)
);


GO
ALTER TABLE [dbo].[ImportMapBaseIds] SET (LOCK_ESCALATION = DISABLE);

