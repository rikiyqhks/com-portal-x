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
  school VARCHAR(1500),
  name VARCHAR(1500),
  grade SMALLINT,
  department VARCHAR(1500),
  major VARCHAR(1500),
  email VARCHAR(1500),
  password VARCHAR(1500),
  faceURL VARCHAR(1500),
  barcodeURL VARCHAR(1500),
  QRURL VARCHAR(1500)
);

-- お知らせテーブルの作成
CREATE TABLE edu_oca.notification(
  id SERIAL PRIMARY KEY,
  title VARCHAR(1500),
  breakdown VARCHAR(1500),
  owner VARCHAR(1500)
);

-- 教科テーブルの作成
CREATE TABLE edu_oca.subject(
  id SERIAL PRIMARY KEY,
  name VARCHAR(1500),
  instructor VARCHAR(1500),
  credit NUMERIC
);

-- 講義テーブルの作成
CREATE TABLE edu_oca.course(
  id SERIAL PRIMARY KEY,
  academicYear SMALLINT,
  semester CHAR(2),
  subjectId SERIAL,
  electable BOOLEAN,
  room VARCHAR(1500),
  class SMALLINT,
  cancelled SMALLINT
);

-- 履修登録テーブルの作成
CREATE TABLE edu_oca.registration(
  id SERIAL PRIMARY KEY,
  courseId SMALLINT
);

-- アンケートテーブルの作成
CREATE TABLE edu_oca.survey(
  id SERIAL PRIMARY KEY,
  title VARCHAR(1500),
  contents VARCHAR(2000),
  applicant VARCHAR(1500),
  deadline TIMESTAMP WITH TIME ZONE,
  reaction INTEGER
);

-- 身分上の変更届テーブル（各種申請の子テーブル）の作成
CREATE TABLE edu_oca.changeStatus(
  id SERIAL PRIMARY KEY,
  typeId SERIAL,
  accountId SERIAL,
  name VARCHAR(1500),
  date TIMESTAMP WITHOUT TIME ZONE,
  newAddress VARCHAR(1500),
  addressOwner VARCHAR(1500),
  number VARCHAR(1500),
  numberOwner VARCHAR(1500),
  transportation VARCHAR(1500),
  email VARCHAR(1500),
  yourName VARCHAR(1500),
  parent VARCHAR(1500),
  quarantor VARCHAR(1500)
);

-- 在学証明書テーブル（各種申請の子テーブル）の作成
CREATE TABLE edu_oca.enrolled(
  id SERIAL PRIMARY KEY,
  typeId SERIAL,
  accountId SERIAL,
  name VARCHAR(1500),
  amount VARCHAR(15),
  price SMALLINT,
  reason VARCHAR(1500),
  jobHounting VARCHAR(1500),
  transfer VARCHAR(1500),
  other VARCHAR(1500),
  VISA TIMESTAMP WITHOUT TIME ZONE,
  remark VARCHAR(1500),
);

-- 卒業証明書テーブル（各種申請の子テーブル）の作成
CREATE TABLE edu_oca.graduated(
  id SERIAL PRIMARY KEY,
  typeId SERIAL,
  accountId SERIAL,
  name VARCHAR(1500),
  amount VARCHAR(15),
  price SMALLINT,
  reason VARCHAR(1500),
  jobHounting VARCHAR(1500),
  transfer VARCHAR(1500),
  other VARCHAR(1500),
  VISA TIMESTAMP WITHOUT TIME ZONE,
  remark VARCHAR(1500),
);

-- 成績証明書テーブル（各種申請の子テーブル）の作成
CREATE TABLE edu_oca.transfer(
  id SERIAL PRIMARY KEY,
  typeId SERIAL,
  accountId SERIAL,
  name VARCHAR(1500),
  amount VARCHAR(15),
  price SMALLINT,
  reason VARCHAR(1500),
  jobHounting VARCHAR(1500),
  transfer VARCHAR(1500),
  other VARCHAR(1500),
  VISA TIMESTAMP WITHOUT TIME ZONE,
  remark VARCHAR(1500),
);

-- 卒業見込証明書テーブル（各種申請の子テーブル）の作成
CREATE TABLE edu_oca.transfer(
  id SERIAL PRIMARY KEY,
  typeId SERIAL,
  accountId SERIAL,
  name VARCHAR(1500),
  amount VARCHAR(15),
  price SMALLINT,
  reason VARCHAR(1500),
  jobHounting VARCHAR(1500),
  transfer VARCHAR(1500),
  other VARCHAR(1500),
  VISA TIMESTAMP WITHOUT TIME ZONE,
  remark VARCHAR(1500),
);

-- 健康診断証明書テーブル（各種申請の子テーブル）の作成
CREATE TABLE edu_oca.transfer(
  id SERIAL PRIMARY KEY,
  typeId SERIAL,
  accountId SERIAL,
  name VARCHAR(1500),
  amount VARCHAR(15),
  price SMALLINT,
  reason VARCHAR(1500),
  jobHounting VARCHAR(1500),
  transfer VARCHAR(1500),
  other VARCHAR(1500),
  VISA TIMESTAMP WITHOUT TIME ZONE,
  remark VARCHAR(1500),
);

-- 在籍期間証明書テーブル（各種申請の子テーブル）の作成
CREATE TABLE edu_oca.transfer(
  id SERIAL PRIMARY KEY,
  typeId SERIAL,
  accountId SERIAL,
  name VARCHAR(1500),
  amount VARCHAR(15),
  price SMALLINT,
  reason VARCHAR(1500),
  jobHounting VARCHAR(1500),
  transfer VARCHAR(1500),
  other VARCHAR(1500),
  VISA TIMESTAMP WITHOUT TIME ZONE,
  remark VARCHAR(1500),
);

-- 出席率証明書テーブル（各種申請の子テーブル）の作成
CREATE TABLE edu_oca.transfer(
  id SERIAL PRIMARY KEY,
  typeId SERIAL,
  accountId SERIAL,
  name VARCHAR(1500),
  amount VARCHAR(15),
  price SMALLINT,
  reason VARCHAR(1500),
  jobHounting VARCHAR(1500),
  transfer VARCHAR(1500),
  other VARCHAR(1500),
  VISA TIMESTAMP WITHOUT TIME ZONE,
  remark VARCHAR(1500),
);

-- 編入学証明書テーブル（各種申請の子テーブル）の作成
CREATE TABLE edu_oca.transfer(
  id SERIAL PRIMARY KEY,
  typeId SERIAL,
  accountId SERIAL,
  name VARCHAR(1500),
  amount VARCHAR(15),
  price SMALLINT,
  reason VARCHAR(1500),
  jobHounting VARCHAR(1500),
  transfer VARCHAR(1500),
  other VARCHAR(1500),
  VISA TIMESTAMP WITHOUT TIME ZONE,
  remark VARCHAR(1500),
);

-- 学生証再交付願テーブル（各種申請の子テーブル）の作成
CREATE TABLE edu_oca.reissueSIDC(
  id SERIAL PRIMARY KEY,
  typeId SERIAL,
  accountId SERIAL,
  name VARCHAR(1500),
  amount VARCHAR(15),
  price SMALLINT,
  birth TIMESTAMP WITHOUT TIME ZONE
);

-- 公欠届テーブル（各種申請の子テーブル）の作成
CREATE TABLE edu_oca.officialAbsence(
  id SERIAL PRIMARY KEY,
  typeId SERIAL,
  accountId SERIAL,
  name VARCHAR(1500),
  reason VARCHAR(1500),
  date_1 TIMESTAMP WITH TIME ZONE,
  breakdown_1 VARCHAR(1500),
  date_2 TIMESTAMP WITH TIME ZONE,
  breakdown_2 VARCHAR(1500),
  date_3 TIMESTAMP WITH TIME ZONE,
  breakdown_3 VARCHAR(1500),
  date_4 TIMESTAMP WITH TIME ZONE,
  breakdown_4 VARCHAR(1500),
  date_5 TIMESTAMP WITH TIME ZONE,
  breakdown_5 VARCHAR(1500),
  imageURL TEXT
);

-- 就職活動報告テーブル（各種申請の子テーブル）の作成
CREATE TABLE edu_oca.jobHounting(
  id SERIAL PRIMARY KEY,
  typeId SERIAL,
  accountId SERIAL,
  name VARCHAR(1500),
  reason VARCHAR(1500),
  document VARCHAR(1500),
  date TIMESTAMP WITHOUT TIME ZONE,
  interview VARCHAR(1500),
  internship VARCHAR(1500),
  examination VARCHAR(1500),
  test VARCHAR(1500),
  breakdown VARCHAR(1500),
  schedule VARCHAR(1500)
);

-- 体調報告テーブル（各種申請の子テーブル）の作成
CREATE TABLE edu_oca.condition(
  id SERIAL PRIMARY KEY,
  typeId SERIAL,
  accountId SERIAL,
  name VARCHAR(1500),
  breakdown_1 VARCHAR(1500),
  breakdown_2 VARCHAR(1500),
  breakdown_3 VARCHAR(1500),
  breakdown_4 VARCHAR(1500),
  breakdown_5 VARCHAR(1500),
  breakdown_6 VARCHAR(1500),
  breakdown_7 VARCHAR(1500),
  breakdown_8 VARCHAR(1500),
  breakdown_9 VARCHAR(1500),
  breakdown_10 VARCHAR(1500),
);

-- Wi-Fiの申請テーブル（各種申請の子テーブル）の作成
CREATE TABLE edu_oca.applicationWiFi(
  id SERIAL PRIMARY KEY,
  typeId SERIAL,
  accountId SERIAL,
  name VARCHAR(1500),
  wifiAddress VARCHAR(900)
);

-- 求人票テーブル
CREATE TABLE edu_oca.jobPosting(
  id SERIAL PRIMARY KEY,
  companyId SERIAL,
  name VARCHAR(1500),
  kanaName VARCHAR(1500),
  address VARCHAR(1500),
  number VARCHAR(1500),
  FAX VARCHAR(1500),
  URL VARCHAR(1500),
  specialNote VARCHAR(1500),
  contract VARCHAR(1500),
  probationaryPeriod VARCHAR(1500),
  location VARCHAR(1500),
  overtime VARCHAR(1500),
  allowance VARCHAR(1500),
  bonus VARCHAR(1500),
  socialInsurance VARCHAR(1500),
  expectedDate TIMESTAMP WITHOUT TIME ZONE,
  industry VARCHAR(1500),
  job VARCHAR(1500),
  holiday VARCHAR(1500),
  oherShift VARCHAR(1500),
  expenses VARCHAR(1500),
  salaryRaise VARCHAR(1500),
  hut VARCHAR(1500),
  companyHousing VARCHAR(1500),
  subsidies VARCHAR(1500),
  supplement VARCHAR(1500),
  remark VARCHAR(1500),
  receptionDate TIMESTAMP WITHOUT TIME ZONE,
  deadline TIMESTAMP WITHOUT TIME ZONE,
  hopeDescipline VARCHAR(1500),
  recruitmentGraduate VARCHAR(1500),
  HRPro VARCHAR(1500),
  briefing VARCHAR(1500),
  howToApply VARCHAR(1500),
  submitDocument VARCHAR(1500),
  examination VARCHAR(1500),
  examContent VARCHAR(1500),
  testContent VARCHAR(1500),
  jobOpenings VARCHAR(1500),
  qualification VARCHAR(1500),
  HRContent VARCHAR(1500),
  lastYearResult VARCHAR(1500),
  message VARCHAR(1500),
  fileURL VARCHAR(1500),
  
)

-- 講義中間テーブルの作成
CREATE TABLE edu_oca.accoutCourse(
  id SERIAL PRIMARY KEY,
  accountId SERIAL,
  courseId SERIAL,
  attendance SMALLINT,
  officialAbsence SMALLINT,
  absence SMALLINT,
  lateness SMALLINT,
  early SMALLINT,
  gradeRating VARCHAR(1500)
);

-- 履修登録中間テーブルの作成
CREATE TABLE edu_oca.accountRegistration(
  id SERIAL PRIMARY KEY,
  accountId SERIAL,
  courseId SERIAL,
  isElected BOOLEAN
);

-- アンケート中間テーブルの作成
CREATE TABLE edu_oca.accountSurvey(
  id SERIAL PRIMARY KEY,
  accountId SERIAL,
  surveyId SERIAL,
  isCompleted BOOLEAN
);