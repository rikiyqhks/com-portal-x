-- データベースの作成
CREATE DATABASE comportalx;

-- デフォルト値の設定
ALTER DATABASE comportalx SET timezone TO 'Asia/Tokyo';

-- スキーマの作成（滋慶学園グループの他校にも対応）
CREATE SCHEMA edu_oca;
CREATE SCHEMA edu_osm;

-- アカウントテーブルの作成
CREATE TABLE edu_oca.account(
  id SERIAL PRIMARY KEY,
  school VARCHAR(30),
  name VARCHAR(30),
  grade SMALLINT,
  affiliation VARCHAR(20),
  email VARCHAR(30),
  password VARCHAR(30)
);

-- 教科テーブル
CREATE TABLE edu_oca.subject(
  id SERIAL PRIMARY KEY,
  name VARCHAR(20),
  instructor VARCHAR(30),
  credit NUMERIC
);

-- 講義テーブル
CREATE TABLE edu_oca.course(
  id SERIAL PRIMARY KEY,
  academicYear SMALLINT,
  semester CHAR(2),
  subjectId SERIAL,
  electable BOOLEAN,
  room VARCHAR(10),
  class SMALLINT,
  cancelled SMALLINT
);

-- 履修登録テーブル
CREATE TABLE edu_oca.registration(
  id SERIAL PRIMARY KEY,
  courseId SMALLINT
);

-- アンケートテーブル
CREATE TABLE edu_oca.survey(
  id SERIAL PRIMARY KEY,
  title VARCHAR(30),
  applicant VARCHAR(30),
  deadline TIMESTAMP WITH TIME ZONE,
);

-- 公欠届テーブル（各種申請の子テーブル）
CREATE TABLE edu_oca.officialAbsence(
  id SERIAL PRIMARY KEY,
  typeId SERIAL,
  accountId SERIAL,
  name VARCHAR(20),
  reason VARCHAR(100),
  date_1 TIMESTAMP WITH TIME ZONE,
  
);

-- 講義中間テーブル
CREATE TABLE edu_oca.accoutCourse(
  id SERIAL PRIMARY KEY,
  accountId SERIAL,
  courseId SERIAL,
  attendance SMALLINT,
  officialAbsence SMALLINT,
  absence SMALLINT,
  lateness SMALLINT,
  early SMALLINT,
  gradeRating VARCHAR(10)
);

-- 履修登録中間テーブル
CREATE TABLE edu_oca.accountRegistration(
  id SERIAL PRIMARY KEY,
  accountId SERIAL,
  courseId SERIAL,
  isElected BOOLEAN
);

-- アンケート中間テーブル
CREATE TABLE edu_oca.accountSurvey(
  id SERIAL PRIMARY KEY,
  accountId SERIAL,
  surveyId SERIAL,
  isCompleted BOOLEAN
);