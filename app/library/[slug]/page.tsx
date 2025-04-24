import { redirect } from "next/navigation"

interface LibraryContent {
  title: string
  content: string
}

const libraryContents: Record<string, LibraryContent> = {
  "72hours-checklist": {
    title: "72時間チェックリスト",
    content: "入院後72時間以内に確認すべき重要事項のチェックリストです。..."
  },
  "high-cost-medical-care": {
    title: "高額療養費ガイド",
    content: "高額療養費制度の概要と申請方法について解説しています。..."
  },
  "doctor-questions": {
    title: "医師に聞く質問テンプレ",
    content: "医師との面談時に確認すべき重要な質問事項をまとめています。..."
  },
  "company-report": {
    title: "会社報告メール文例",
    content: "会社への報告時に使用できるメールの文例です。..."
  },
  "family-meeting": {
    title: "家族会議アジェンダ＆記録シート",
    content: "家族会議を効果的に進めるためのアジェンダと記録用シートです。..."
  },
  "housing-guide": {
    title: "住まいを決めるための「選択ガイド」",
    content: "在宅か施設かの選択を検討する際のガイドラインです。..."
  },
  "care-insurance": {
    title: "介護保険申請パック",
    content: "介護保険の申請に必要な書類と手続きの説明です。..."
  },
  "doctor-questions-advanced": {
    title: "医師質問テンプレ（生活支援・医療行為入り）",
    content: "医療行為や生活支援に関する詳細な質問事項をまとめています。..."
  },
  "discharge-timeline": {
    title: "退院までのTo-Doタイムライン",
    content: "退院に向けた準備事項を時系列でまとめています。..."
  },
  "transport-services": {
    title: "搬送業者リスト",
    content: "信頼できる搬送業者の一覧と連絡先です。..."
  },
  "discharge-checklist": {
    title: "退院準備チェックリスト",
    content: "退院時に必要な準備と確認事項のチェックリストです。..."
  },
  "awareness-check": {
    title: "気づきセルフチェック",
    content: "認知症の初期症状に気づくためのチェックリストです。..."
  },
  "community-support": {
    title: "地域包括への相談手順",
    content: "地域包括支援センターへの相談方法と準備事項をまとめています。..."
  },
  "asset-management": {
    title: "財産管理ツール（家計・資産一覧テンプレ）",
    content: "財産管理に必要な情報を記録するためのテンプレートです。..."
  }
}

export default function LibraryPage({ params }: { params: { slug: string } }) {
  redirect("/?tab=library")
} 