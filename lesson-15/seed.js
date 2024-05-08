// 모듈 가져오기
const mongoose = require("mongoose"),
    Subscriber = require("./models/subscriber");

// 데이터베이스 연결 설정
mongoose.connect(
    "mongodb+srv://jmllem:7a6bnMVb4Qsje6Ba@jmllem.f6uraub.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true }
);

// 연결 확인 및 에러 핸들링
mongoose.connection.on('connected', () => {
    console.log("Connected to MongoDB");
});

mongoose.connection.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
});

// subscribers 배열 생성 (5개 이상)
var subscribers = [
    {
        name: "Aaron",
        email: "aaron@aaron.kr",
        phoneNumber: "12345",
    },
    {
        name: "Trump",
        email: "donald@trump.com",
        phoneNumber: "11111111",
    },
    {
        name: "Biden",
        email: "whoami@usa.com",
        phoneNumber: "0000000",
    },
    {
        name: "Yoon",
        email: "yoon@suck-yul.com",
        phoneNumber: "9999999",
    },
    {
        name: "Kim",
        email: "kim@jongeun.com",
        phoneNumber: "666",
    },
    {
        name: "JongKook",
        email: "gymjk@youtube.com",
        phoneNumber: "22222",
    },
];

// 기존 데이터 제거 후 새로운 데이터 추가
Subscriber.deleteMany()
    .then(() => {
        console.log("Subscribers deleted!");
        // 새로운 구독자 추가
        return Subscriber.insertMany(subscribers);
    })
    .then(() => {
        console.log("Successfully added new users!");
    })
    .catch(e => {
        console.log(`Error: ${e}`);
    })
    .finally(() => {
        console.log("Closing DB connection.");
        mongoose.connection.close();
    });
