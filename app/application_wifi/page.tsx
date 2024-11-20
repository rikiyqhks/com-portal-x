'use client'

import { NextPage } from 'next'

/**
 * 校内WiFiの利用規約と申請状況のページを表示する
 * @returns 校内WiFiの利用規約と申請状況
 */
const Application_WiFi: NextPage = () => {
  return (
    <main className='w-full h-auto flex flex-col justify-center items-center gap-5 py-12'>
      <section className='max-w-[300px] w-[300px] md:max-w-[800px] md:w-[800px] flex flex-col gap-4 py-2'>
        <h1 className='text-2xl font-thin'>校内WiFiの利用規約と申請状況</h1>
        {/* お知らせ */}
        <section className='max-w-[300px] w-[300px] md:max-w-[800px] md:w-[800px] flex flex-col gap-4 px-4 py-2'>
          <h1 className='text-xl font-thin'>お知らせ</h1>
          <div className='w-auto h-auto flex flex-col justify-center border border-slate-200 rounded-md shadow-md p-5'>
            <ul className='text-sm'>
              <li>・携帯端末からcomwifiに接続し、ネットワーク申請を行ってください。</li>
              <li>※２階受付前にアクセス必要情報（パスワードなど）を掲示しています。</li>
              <li>校内Wi-Fiが利用できるまで2週間ほどかかる場合がございます。</li>
              <li>校内Wi-Fiは、全フロアでご利用いただけます。</li>
            </ul>
          </div>
        </section>
        {/* 利用規約 */}
        <section className='max-w-[300px] w-[300px] md:max-w-[800px] md:w-[800px] flex flex-col gap-4 px-4 py-2'>
          <h1 className='text-xl font-thin'>利用規約</h1>
          <div className='w-auto h-auto flex flex-col justify-center border border-slate-200 rounded-md shadow-md p-5'>
            <ol className='text-sm'>
              <li>１．基本的事項の遵守としてインターネット利用の一般的なマナーやモラル、及び技術的ルールを遵守して頂きます。</li>
              <li>２．第三者に迷惑・不利益を与える等の行為、モラルに著しく反する等の場合、当Wi-Fiの利用を停止させて頂く場合がございます。</li>
              <li>３．当Wi-Fiを利用するにあたり、自ら行なった行為及びそれらの結果について、当人がその責任を負担するものとし ます。</li>
              <li>４．本申請書で入力された情報は、関係者部内でのみ使用します。又、本人の同意を得ずに第三者に開示する事はありません。</li>
              <li>５．当Wi-Fiシステムは、緊急に停止せざるを得ないとき（天災など）は利用者への事前の通達や承諾を得ることなく停止することがあります。</li>
              <li>６．当Wi-Fiは事前の通知をすることなくシステム内容を変更することがあります。内容変更後は、変更後の内容のみ有効とさせて頂きます。</li>
              <li>７．禁止事項として以下に列挙します。</li>
              <li>a）利用規約に違反する行為。</li>
              <li>b）学校･学生･第三者のプライバシー、名誉又は信用を毀損する恐れがある行為。</li>
              <li>c）学校･学生･第三者の特許権、商標権、著作権その他の財産的又は人格的な権利を侵害し、又は侵害する恐れのある行為。</li>
              <li>d）学校･学生･第三者を誹謗中傷すること又は不快感を抱かせること。</li>
              <li>e）売買又は金銭的な利害の発生する行為。</li>
              <li>f）有害なコンピュータプログラム等を送信又は書き込むこと。</li>
              <li>g）学校又は第三者の業務を妨害する行為。</li>
              <li>h）青少年の心身に悪影響を及ぼす恐れがある行為。</li>
              <li>i）スパムメール、ジャンクメール、チェーンレター等を送信すること。</li>
              <li>j）公序良俗に反する行為。</li>
              <li>k）犯罪的行為に結びつく恐れのある行為。</li>
              <li>l）法令に違反する行為。</li>
              <li>８．当Wi-Fiは在学中のみのサービスとなります。卒業後は申請書及び、申請情報を破棄させて頂きます。</li>
            </ol>
          </div>
        </section>
        {/* 学校名 */}
        <div className='flex flex-col justify-center gap-2 my-5'>
          <label
            className='mb-2 inline-block text-sm text-gray-800 md:text-base'
            htmlFor='school'
          >
            WiFiアドレス
            <span className='text-red-500'>*</span>
          </label>
          <input
            className='w-[300px] md:w-[800px] border-b px-3 py-2 text-xs md:text-base text-gray-800 outline-none cursor-text'
            type='text'
            value=''
            placeholder='WiFiアドレスを入力'
            name='school'
          />
        </div>
        {/* ボタンの配置 */}
        <section className='flex flex-row justify-between items-center mx-20'>
          <button
            className='text-xs md:text-sm px-3 md:px-10 py-3 md:py-4 rounded-xl bg-slate-300 hover:bg-slate-300 border-2 border-2-slate-300 duration-200 shadow hover:shadow-md'
            disabled
          >
            キャンセル
          </button>
          <button
            className='text-xs md:text-sm px-3 md:px-10 py-3 md:py-4 rounded-xl bg-amber-400 hover:bg-amber-500 duration-200 shadow hover:shadow-md'
            onClick={() => alert('提出が完了しました。')}
          >
            申請する
          </button>
        </section>
      </section>
    </main>
  )
}

export default Application_WiFi