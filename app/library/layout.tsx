export default function LibraryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto px-4">
      <div className="py-4">
        <h2 className="text-2xl font-bold mb-4">資料庫</h2>
      </div>
      {children}
    </div>
  )
} 