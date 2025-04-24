import Link from "next/link"
import { FileText, Book, CheckSquare } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"

interface Document {
  id: string
  title: string
  description: string
  type: "チェックリスト" | "ガイド" | "テンプレート"
  phase: "急性期病院" | "リハビリ病院" | "退院準備" | "在宅介護" | "共通"
}

const documents: Document[] = [
  {
    id: "72hours-checklist",
    title: "72時間チェックリスト",
    description: "入院後72時間以内に確認すべき重要事項のリスト",
    type: "チェックリスト",
    phase: "急性期病院"
  },
  {
    id: "high-cost-medical-care",
    title: "高額療養費ガイド",
    description: "高額療養費制度の仕組みと申請方法の解説",
    type: "ガイド",
    phase: "急性期病院"
  },
  {
    id: "doctor-questions",
    title: "医師に聞く質問テンプレ",
    description: "主治医に確認すべき重要事項のリスト",
    type: "テンプレート",
    phase: "急性期病院"
  },
  {
    id: "company-report",
    title: "会社報告メール文例",
    description: "勤務先への連絡に使える文例集",
    type: "テンプレート",
    phase: "急性期病院"
  },
  {
    id: "family-meeting",
    title: "家族会議アジェンダ＆記録シート",
    description: "家族会議を効果的に進めるためのアジェンダと記録",
    type: "テンプレート",
    phase: "リハビリ病院"
  },
  {
    id: "housing-guide",
    title: "住まいを決めるための「選択ガイド」",
    description: "在宅か施設かの選択を検討する際のガイドライン",
    type: "ガイド",
    phase: "リハビリ病院"
  },
  {
    id: "care-insurance",
    title: "介護保険申請パック",
    description: "介護保険の申請に必要な書類と手続きの説明",
    type: "ガイド",
    phase: "リハビリ病院"
  },
  {
    id: "doctor-questions-advanced",
    title: "医師質問テンプレ（生活支援・医療行為入り）",
    description: "医療行為や生活支援に関する詳細な質問事項",
    type: "テンプレート",
    phase: "リハビリ病院"
  },
  {
    id: "discharge-timeline",
    title: "退院までのTo-Doタイムライン",
    description: "退院に向けた準備事項を時系列で整理",
    type: "チェックリスト",
    phase: "退院準備"
  },
  {
    id: "transport-services",
    title: "搬送業者リスト",
    description: "信頼できる搬送業者の一覧と連絡先",
    type: "ガイド",
    phase: "退院準備"
  },
  {
    id: "discharge-checklist",
    title: "退院準備チェックリスト",
    description: "退院時に必要な準備と確認事項",
    type: "チェックリスト",
    phase: "退院準備"
  },
  {
    id: "awareness-check",
    title: "気づきセルフチェック",
    description: "認知症の初期症状に気づくためのチェックリスト",
    type: "チェックリスト",
    phase: "共通"
  },
  {
    id: "community-support",
    title: "地域包括への相談手順",
    description: "地域包括支援センターへの相談方法と準備事項",
    type: "ガイド",
    phase: "共通"
  },
  {
    id: "asset-management",
    title: "財産管理ツール",
    description: "財産管理に必要な情報を記録するためのテンプレート",
    type: "テンプレート",
    phase: "共通"
  }
]

function DocumentCard({ document }: { document: Document }) {
  const icons = {
    "チェックリスト": <CheckSquare className="h-4 w-4 text-green-500" />,
    "ガイド": <Book className="h-4 w-4 text-blue-500" />,
    "テンプレート": <FileText className="h-4 w-4 text-purple-500" />
  }

  return (
    <Link href={`/library/${document.id}`}>
      <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            {icons[document.type]}
            <div>
              <h3 className="font-medium">{document.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{document.description}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs px-2 py-1 bg-secondary rounded-full">{document.type}</span>
                <span className="text-xs px-2 py-1 bg-secondary rounded-full">{document.phase}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export default function LibraryPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Input 
          type="search" 
          placeholder="資料を検索..." 
          className="max-w-sm"
        />
      </div>

      <Tabs defaultValue="いきなり型">
        <TabsList>
          <TabsTrigger value="いきなり型">いきなり型</TabsTrigger>
          <TabsTrigger value="じわじわ型">じわじわ型</TabsTrigger>
          <TabsTrigger value="共通資料">共通資料</TabsTrigger>
        </TabsList>

        <TabsContent value="いきなり型" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {documents
              .filter(doc => doc.phase !== "共通")
              .map(document => (
                <DocumentCard key={document.id} document={document} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="じわじわ型" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {documents
              .filter(doc => doc.phase === "共通")
              .map(document => (
                <DocumentCard key={document.id} document={document} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="共通資料" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {documents
              .filter(doc => doc.phase === "共通")
              .map(document => (
                <DocumentCard key={document.id} document={document} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 