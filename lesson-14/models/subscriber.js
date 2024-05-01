// ./models/subscriber.js
"use strict";

/**
 * @TODO: Listing 14.3 (p. 206)
 * 스키마 정의
 */
const mongoose = require("mongoose"),
    subscriberSchema = mongoose.Schema({
        name: String, // 스키마의 속성 추가
        email: String,
        newsletter: Boolean
    });

module.exports = mongoose.model(
    "Subscriber",
    subscriberSchema

);

// Subscriber 모델 생성
