CREATE TABLE [dbo].[package_solutionBase] (
    [package_solutionId] UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]      ROWVERSION       NULL,
    [packageid]          UNIQUEIDENTIFIER NOT NULL,
    [solutionid]         UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_package_solutionBase] PRIMARY KEY CLUSTERED ([package_solutionId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [package_solutionOne] FOREIGN KEY ([packageid]) REFERENCES [dbo].[packageBase] ([packageId]),
    CONSTRAINT [package_solutionTwo] FOREIGN KEY ([solutionid]) REFERENCES [dbo].[SolutionBase] ([SolutionId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[package_solutionBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_package_solution]
    ON [dbo].[package_solutionBase]([packageid] ASC, [solutionid] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_solutionid]
    ON [dbo].[package_solutionBase]([solutionid] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

