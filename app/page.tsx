"use client"

import { useState } from "react"
import DiagnosisFlow from "@/components/diagnosis-flow"
import Dashboard from "@/components/dashboard"
import { ArrowRight } from "lucide-react"

type CareType = "sudden" | "gradual"
type SuddenPhase = "acute" | "rehab" | "home" | "facility" | "no-hospital"
type GradualPhase = "pre-visit" | "pre-insurance" | "home-care"

interface DiagnosisResult {
  type: CareType
  phase: SuddenPhase | GradualPhase
}

export default function Home() {
  const [diagnosisResult, setDiagnosisResult] = useState<DiagnosisResult | null>(null)

  const handleDiagnosisComplete = (result: DiagnosisResult) => {
    setDiagnosisResult(result)
  }

  const getInitialPhase = (result: DiagnosisResult): number => {
    if (result.type === "sudden") {
      switch (result.phase) {
        case "acute":
          return 1 // 急性期病院
        case "rehab":
          return 2 // リハビリ病院
        case "home":
        case "facility":
          return 5 // 在宅介護開始 or 施設入所
        case "no-hospital":
          return 5 // 在宅介護開始
        default:
          return 1
      }
    } else {
      switch (result.phase) {
        case "pre-visit":
          return 0 // 予兆・気づき期
        case "pre-insurance":
          return 1 // 受診・診断期
        case "home-care":
          return 2 // 軽度在宅ケア期
        default:
          return 0
      }
    }
  }

  if (!diagnosisResult) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto py-16">
          {/* ヒーローセクション */}
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl font-bold">もしもナビ</h1>
            
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-xl text-gray-600">
                介護の始まりで、迷わない。
              </p>
              <p className="text-lg text-gray-500">
                流れ・タスク・相談先がひと目でわかる、"介護の地図帳"。<br />
                "もしも"の不安に、あなたのそばに寄り添います。
              </p>
            </div>
          </div>

          {/* 診断フロー */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg border p-8">
              <DiagnosisFlow onComplete={handleDiagnosisComplete} />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto py-8">
        <Dashboard 
          defaultTab="flow"
          initialCareType={diagnosisResult.type}
          initialPhase={getInitialPhase(diagnosisResult)}
        />
      </div>
    </div>
  )
}
