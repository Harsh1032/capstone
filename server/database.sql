CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    latestAction VARCHAR(20),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Deposit (
    id SERIAL PRIMARY KEY,
    userID INT REFERENCES Users(user_id),
    topUpResourceID INT,
    topUpValueID INT,
    topUpNumber VARCHAR(50),
    topUpSeries VARCHAR(50),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Withdrawn (
    id SERIAL PRIMARY KEY,
    userID INT REFERENCES Users(user_id),
    userWithdrawName VARCHAR(100),
    packageId INT,
    status VARCHAR(20) DEFAULT 'Pending',
    content TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE UserEventRecord (
    id SERIAL PRIMARY KEY,
    userID INT REFERENCES Users(user_id),
    eventID INT,
    valuePoint INT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE TopUpResource (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE TopUpValue (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    value INT NOT NULL
);

CREATE TABLE  Package (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    value INT NOT NULL
);

CREATE TABLE  Event (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    isActive BOOLEAN DEFAULT TRUE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

/* 


INSERT INTO TopUpValue (name, value) VALUES ('10,000đ', 10000);
INSERT INTO TopUpValue (name, value) VALUES ('20,000đ', 20000);
INSERT INTO TopUpValue (name, value) VALUES ('30,000đ', 30000);
INSERT INTO TopUpValue (name, value) VALUES ('50,000đ', 50000);
INSERT INTO TopUpValue (name, value) VALUES ('100,000đ (Có Cơ Hội Nhận 950 FC)', 100000);
INSERT INTO TopUpValue (name, value) VALUES ('200,000đ (Có Cơ Hội Nhận 1,900 FC)', 200000);
INSERT INTO TopUpValue (name, value) VALUES ('300,000đ (Có Cơ Hội Nhận 2,800 FC)', 300000);
INSERT INTO TopUpValue (name, value) VALUES ('500,000đ (Có Cơ Hội Nhận 3,200 FC)', 500000);
INSERT INTO TopUpValue (name, value) VALUES ('1,000,000đ (Có Cơ Hội Nhận 5,600 FC)', 1000000);





*/