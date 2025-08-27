CREATE TABLE Users (
    ID INT IDENTITY(1, 1) PRIMARY KEY,
    UserName VARCHAR(50),
    Password VARCHAR(50),
    LastLogin DateTime,
    UserSettings NVARCHAR(MAX),
    CONSTRAINT CHK_UserSetting_JSON
)