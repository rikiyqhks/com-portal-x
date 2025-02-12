import { JobType } from '@/app/types/job'

export const jobs: JobType[] = [
  {
    id: '1',
    fiscalYear: 2024,
    title: 'ソフトウェアエンジニア',
    company: '株式会社テックイノベーション',
    industry: 'IT・通信',
    jobType: 'システム開発',
    employmentType: 'fulltime',
    salaryType: 'monthly',
    baseSalary: 300000,
    location: '東京都渋谷区',
    description: 'Webアプリケーション開発のポジションです。モダンな技術スタックを使用したフルスタック開発に携わっていただきます。',
    requirements: [
      '情報工学系の学部卒以上',
      'プログラミング経験（言語不問）',
      'チームでの開発経験があれば尚可'
    ],
    benefits: [
      '各種社会保険完備',
      '交通費支給',
      '昇給年1回',
      '賞与年2回'
    ],
    workingHours: '9:00-18:00（休憩1時間）',
    holidays: '完全週休2日制（土日）、祝日、年末年始',
    insurances: ['健康保険', '厚生年金', '雇用保険', '労災保険'],
    trainingSystem: '新入社員研修、技術研修、外部セミナー参加支援',
    selectionProcess: [
      '書類選考',
      '一次面接',
      '技術面接',
      '最終面接'
    ],
    contactInfo: {
      department: '人事部採用課',
      person: '山田太郎',
      email: 'recruit@example.com',
      phone: '03-1234-5678'
    }
  },
  {
    id: '2',
    fiscalYear: 2024,
    title: 'データサイエンティスト',
    company: 'AIソリューションズ株式会社',
    industry: 'IT・通信',
    jobType: 'データ分析',
    employmentType: 'fulltime',
    salaryType: 'yearly',
    baseSalary: 5000000,
    location: '東京都千代田区',
    description: '機械学習モデルの開発と実装、ビッグデータ分析を担当していただきます。',
    requirements: [
      '統計学または機械学習の知識',
      'Python, Rのいずれかの経験',
      '英語でのコミュニケーション能力'
    ],
    benefits: [
      'フレックスタイム制',
      'リモートワーク可',
      '書籍購入支援',
      '学会参加支援'
    ],
    workingHours: 'フレックスタイム制（コアタイム 11:00-15:00）',
    holidays: '完全週休2日制（土日）、祝日',
    insurances: ['健康保険', '厚生年金', '雇用保険', '労災保険'],
    trainingSystem: 'オンライン学習支援、カンファレンス参加支援',
    selectionProcess: [
      '書類選考',
      'コーディングテスト',
      '面接2回'
    ],
    contactInfo: {
      department: '採用担当',
      person: '鈴木花子',
      email: 'ai-recruit@example.com',
      phone: '03-2345-6789'
    }
  },
  {
    id: '3',
    fiscalYear: 2024,
    title: '製造技術エンジニア',
    company: '日本製造工業株式会社',
    industry: '製造',
    jobType: '製造・生産',
    employmentType: 'fulltime',
    salaryType: 'monthly',
    baseSalary: 280000,
    location: '神奈川県横浜市',
    description: '最新の製造ラインの設計・管理・改善を担当していただきます。',
    requirements: [
      '機械工学系の学部卒以上',
      '製造業での実務経験',
      'CAD使用経験'
    ],
    benefits: [
      '社宅制度あり',
      '家族手当',
      '退職金制度',
      '資格取得支援'
    ],
    workingHours: '8:30-17:30（休憩1時間）',
    holidays: '週休2日制（土日）、祝日、夏季・年末年始',
    insurances: ['健康保険', '厚生年金', '雇用保険', '労災保険'],
    trainingSystem: '技術研修、安全研修、管理職研修',
    selectionProcess: [
      '書類選考',
      '適性検査',
      '面接2回'
    ],
    contactInfo: {
      department: '人事部',
      person: '田中一郎',
      email: 'manufacturing@example.com',
      phone: '045-345-6789'
    }
  },
  {
    id: '4',
    fiscalYear: 2024,
    title: 'マーケティングマネージャー',
    company: 'グローバルブランド株式会社',
    industry: 'サービス',
    jobType: 'マーケティング',
    employmentType: 'fulltime',
    salaryType: 'yearly',
    baseSalary: 6000000,
    location: '東京都港区',
    description: 'デジタルマーケティング戦略の立案と実行を担当していただきます。',
    requirements: [
      'マーケティング経験5年以上',
      'デジタル広告の知識',
      'マネジメント経験'
    ],
    benefits: [
      '業績連動賞与',
      '株式報酬制度',
      '育児・介護支援',
      '選択型福利厚生'
    ],
    workingHours: '9:30-18:30（フレックスタイム制）',
    holidays: '完全週休2日制、祝日、有給休暇20日',
    insurances: ['健康保険', '厚生年金', '雇用保険', '労災保険'],
    trainingSystem: 'リーダーシップ研修、海外研修',
    selectionProcess: [
      '書類選考',
      'グループディスカッション',
      '面接3回'
    ],
    contactInfo: {
      department: '採用チーム',
      person: '佐藤美咲',
      email: 'marketing@example.com',
      phone: '03-4567-8901'
    }
  },
  {
    id: '5',
    fiscalYear: 2024,
    title: '店舗スタッフ',
    company: 'カフェチェーン株式会社',
    industry: 'サービス',
    jobType: '接客',
    employmentType: 'parttime',
    salaryType: 'hourly',
    baseSalary: 1200,
    location: '東京都新宿区',
    description: 'カフェでの接客、調理、店舗運営をお願いします。',
    requirements: [
      '高校卒業以上',
      '接客経験歓迎',
      '土日祝日勤務可能な方'
    ],
    benefits: [
      '交通費支給',
      '社員割引',
      'シフト制',
      '昇給あり'
    ],
    workingHours: 'シフト制（1日4-8時間）',
    holidays: 'シフト制（週2日以上）',
    insurances: ['労災保険'],
    trainingSystem: '入店時研修、接客研修',
    selectionProcess: [
      '書類選考',
      '面接1回'
    ],
    contactInfo: {
      department: '採用担当',
      person: '小林健一',
      email: 'cafe-staff@example.com',
      phone: '03-5678-9012'
    }
  },
  {
    id: '6',
    fiscalYear: 2023,
    title: '経理スタッフ',
    company: '総合商社株式会社',
    industry: 'サービス',
    jobType: '経理・財務',
    employmentType: 'contract',
    salaryType: 'monthly',
    baseSalary: 250000,
    location: '大阪府大阪市',
    description: '経理業務全般、決算業務、税務申告補助をお願いします。',
    requirements: [
      '経理実務経験3年以上',
      '日商簿記2級以上',
      'Excel中級以上'
    ],
    benefits: [
      '交通費全額支給',
      '社会保険完備',
      '残業手当',
      '資格手当'
    ],
    workingHours: '9:00-17:30（休憩1時間）',
    holidays: '完全週休2日制（土日）、祝日',
    insurances: ['健康保険', '厚生年金', '雇用保険', '労災保険'],
    trainingSystem: '実務研修、会計ソフト研修',
    selectionProcess: [
      '書類選考',
      '適性検査',
      '面接2回'
    ],
    contactInfo: {
      department: '人事部',
      person: '中村洋子',
      email: 'accounting@example.com',
      phone: '06-1234-5678'
    }
  },
  {
    id: '7',
    fiscalYear: 2023,
    title: 'UI/UXデザイナー',
    company: 'デジタルクリエイト株式会社',
    industry: 'IT・通信',
    jobType: 'デザイン',
    employmentType: 'fulltime',
    salaryType: 'monthly',
    baseSalary: 350000,
    location: '東京都目黒区',
    description: 'Webサービス、モバイルアプリのUI/UXデザインを担当していただきます。',
    requirements: [
      'デザイン実務経験3年以上',
      'Figma, Adobe XD等の使用経験',
      'プロトタイピングの経験'
    ],
    benefits: [
      'フレックスタイム制',
      'リモートワーク可',
      'デザインツール支給',
      '副業可'
    ],
    workingHours: 'フレックスタイム制',
    holidays: '完全週休2日制（土日）、祝日',
    insurances: ['健康保険', '厚生年金', '雇用保険', '労災保険'],
    trainingSystem: 'デザイン研修、海外カンファレンス参加',
    selectionProcess: [
      'ポートフォリオ審査',
      'デザイン課題',
      '面接2回'
    ],
    contactInfo: {
      department: 'デザイン採用担当',
      person: '山本真由美',
      email: 'design@example.com',
      phone: '03-6789-0123'
    }
  },
  {
    id: '8',
    fiscalYear: 2023,
    title: '営業職',
    company: '住宅メーカー株式会社',
    industry: '不動産',
    jobType: '営業',
    employmentType: 'fulltime',
    salaryType: 'monthly',
    baseSalary: 270000,
    location: '埼玉県さいたま市',
    description: '戸建て住宅の提案営業をお願いします。未経験者歓迎です。',
    requirements: [
      '普通自動車免許',
      'コミュニケーション能力',
      '営業経験不問'
    ],
    benefits: [
      '営業手当',
      '報奨金制度',
      'マイカー手当',
      '引越手当'
    ],
    workingHours: '9:00-18:00（休憩1時間）',
    holidays: '週休2日制（火・水）、祝日',
    insurances: ['健康保険', '厚生年金', '雇用保険', '労災保険'],
    trainingSystem: '新人研修3ヶ月、商品研修',
    selectionProcess: [
      '書類選考',
      'グループディスカッション',
      '面接2回'
    ],
    contactInfo: {
      department: '営業採用課',
      person: '高橋誠',
      email: 'sales@example.com',
      phone: '048-234-5678'
    }
  },
  {
    id: '9',
    fiscalYear: 2023,
    title: '看護師',
    company: '総合病院メディカルケア',
    industry: '医療',
    jobType: '医療',
    employmentType: 'fulltime',
    salaryType: 'monthly',
    baseSalary: 320000,
    location: '東京都世田谷区',
    description: '総合病院での看護業務全般をお願いします。',
    requirements: [
      '看護師免許',
      '実務経験2年以上',
      '夜勤可能な方'
    ],
    benefits: [
      '夜勤手当',
      '住宅手当',
      '退職金制度',
      '院内保育所'
    ],
    workingHours: '日勤8:30-17:30、夜勤16:30-9:30',
    holidays: '4週8休制',
    insurances: ['健康保険', '厚生年金', '雇用保険', '労災保険'],
    trainingSystem: '新人研修、専門研修、海外研修制度',
    selectionProcess: [
      '書類選考',
      '適性検査',
      '面接2回'
    ],
    contactInfo: {
      department: '看護部採用担当',
      person: '白石優子',
      email: 'nurse@example.com',
      phone: '03-7890-1234'
    }
  },
  {
    id: '10',
    fiscalYear: 2023,
    title: '倉庫作業員',
    company: '物流センター株式会社',
    industry: '物流',
    jobType: '物流',
    employmentType: 'contract',
    salaryType: 'hourly',
    baseSalary: 1300,
    location: '千葉県船橋市',
    description: '商品の入出荷作業、在庫管理業務をお願いします。',
    requirements: [
      'フォークリフト免許あれば尚可',
      '体力に自信のある方',
      '長期勤務できる方'
    ],
    benefits: [
      '交通費支給',
      '社会保険完備',
      '制服貸与',
      '昇給あり'
    ],
    workingHours: '8:00-17:00（実働8時間）',
    holidays: 'シフト制（月8日休み）',
    insurances: ['健康保険', '厚生年金', '雇用保険', '労災保険'],
    trainingSystem: '安全研修、業務研修',
    selectionProcess: [
      '書類選考',
      '面接1回'
    ],
    contactInfo: {
      department: '採用担当',
      person: '木村達也',
      email: 'warehouse@example.com',
      phone: '047-345-6789'
    }
  }
]