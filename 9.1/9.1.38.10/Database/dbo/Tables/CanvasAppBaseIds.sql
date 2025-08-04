﻿CREATE TABLE [dbo].[CanvasAppBaseIds] (
    [CanvasAppId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_CanvasAppBaseIds] PRIMARY KEY CLUSTERED ([CanvasAppId] ASC)
);


GO
ALTER TABLE [dbo].[CanvasAppBaseIds] SET (LOCK_ESCALATION = DISABLE);

