"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Send, User, Bot, HelpCircle, CheckCircle, AlertCircle, Clock } from "lucide-react"

export default function ChatSupport() {
  const [message, setMessage] = useState("")

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">チャット相談窓口</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card className="h-[600px] flex flex-col">
            <CardHeader className="pb-2">
              <CardTitle>相談チャット</CardTitle>
              <CardDescription>質問や困りごとを入力してください</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
              <SystemMessage />
              <BotMessage
                message="こんにちは！介護フロー管理アシスタントです。どのようなことでお困りですか？"
                options={[
                  { icon: <CheckCircle className="h-4 w-4" />, label: "やることリストについて" },
                  { icon: <HelpCircle className="h-4 w-4" />, label: "質問があります" },
                  { icon: <AlertCircle className="h-4 w-4" />, label: "困っていることがあります" },
                ]}
              />
              <UserMessage message="介護保険の申請方法について教えてください" />
              <BotMessage
                message="介護保険の申請は以下の手順で行います：

1. お住まいの市区町村の介護保険窓口に申請書を提出
2. 認定調査（訪問調査）を受ける
3. 主治医意見書の作成（市区町村から主治医に依頼）
4. 審査判定（約30日程度）
5. 認定結果通知の受け取り

申請に必要な書類は以下の通りです：
- 介護保険要介護認定申請書
- 本人確認書類（保険証など）
- 主治医の連絡先

詳しい申請書の書き方や記入例をご覧になりますか？"
                options={[
                  { icon: <CheckCircle className="h-4 w-4" />, label: "申請書の書き方を見る" },
                  { icon: <Clock className="h-4 w-4" />, label: "申請から認定までの期間は？" },
                ]}
              />
            </CardContent>
            <CardFooter className="border-t p-4">
              <div className="flex w-full items-center space-x-2">
                <Input placeholder="メッセージを入力..." value={message} onChange={(e) => setMessage(e.target.value)} />
                <Button type="submit" size="icon">
                  <Send className="h-4 w-4" />
                  <span className="sr-only">送信</span>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card className="h-[600px] overflow-y-auto">
            <CardHeader>
              <CardTitle>よくある質問</CardTitle>
              <CardDescription>一般的な質問と回答</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FaqItem
                question="介護保険の申請はいつからできますか？"
                answer="65歳以上の方は原則いつでも申請可能です。40〜64歳の方は特定疾病（16種類）がある場合に申請できます。状態の変化に気づいたら早めの申請をおすすめします。"
              />
              <FaqItem
                question="要介護認定の結果が出るまでどのくらいかかりますか？"
                answer="原則30日以内に結果が通知されます。ただし、調査や審査の状況により遅れる場合もあります。申請時に「暫定ケアプラン」を作成することで、結果を待たずにサービスを利用開始できる場合もあります。"
              />
              <FaqItem
                question="リハビリ病院から退院後、在宅と施設どちらがいいですか？"
                answer="これは本人の状態や家族の状況、住環境などによって異なります。主治医の意見、本人の希望、家族の介護力、住宅環境、利用可能なサービスなどを総合的に検討して決定します。「在宅 vs 施設 決定シート」を活用すると比較検討しやすくなります。"
              />
              <FaqItem
                question="親が急に入院しました。まず何をすべきですか？"
                answer="まずは「限度額適用認定証」の申請を行い、入院費用の窓口負担を軽減しましょう。次に保険証や服薬情報を病院に提出し、主治医から現在の状態と今後の見通しについて説明を受けてください。「急性期チェックリスト」を参照すると漏れなく対応できます。"
              />
              <FaqItem
                question="認知症の兆候があります。どうしたらいいですか？"
                answer="まずはかかりつけ医に相談し、必要に応じて認知症専門医（神経内科、精神科、脳神経外科など）の受診をおすすめします。早期発見・早期対応が重要です。また、お住まいの地域の認知症初期集中支援チームに相談するのも有効です。"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function SystemMessage() {
  return (
    <div className="bg-muted p-3 rounded-md text-sm text-center">
      チャットでのやり取りは、より良いサポートのために記録されます。
      複雑な案件は専門スタッフに転送されることがあります。
    </div>
  )
}

interface BotMessageProps {
  message: string
  options?: { icon: React.ReactNode; label: string }[]
}

function BotMessage({ message, options }: BotMessageProps) {
  return (
    <div className="flex gap-3">
      <Avatar>
        <AvatarFallback className="bg-primary text-primary-foreground">
          <Bot className="h-5 w-5" />
        </AvatarFallback>
      </Avatar>
      <div className="space-y-3 flex-1">
        <div className="bg-muted p-3 rounded-lg">
          <p className="whitespace-pre-line">{message}</p>
        </div>
        {options && (
          <div className="flex flex-wrap gap-2">
            {options.map((option, index) => (
              <Button key={index} variant="outline" size="sm" className="gap-1">
                {option.icon}
                {option.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function UserMessage({ message }: { message: string }) {
  return (
    <div className="flex gap-3 justify-end">
      <div className="space-y-3 flex-1">
        <div className="bg-primary text-primary-foreground p-3 rounded-lg ml-auto max-w-[80%]">
          <p>{message}</p>
        </div>
      </div>
      <Avatar>
        <AvatarFallback className="bg-muted">
          <User className="h-5 w-5" />
        </AvatarFallback>
      </Avatar>
    </div>
  )
}

interface FaqItemProps {
  question: string
  answer: string
}

function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        className="flex justify-between items-center w-full p-3 text-left font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span className="text-primary">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <div className="p-3 pt-0 text-sm text-muted-foreground">{answer}</div>}
    </div>
  )
}
