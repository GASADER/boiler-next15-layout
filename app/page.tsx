import Link from "next/link"

export default function HomePage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Welcome 👋</h1>
      <p>ไปที่ <Link href="/dashboard" className="text-blue-600">Dashboard</Link></p>
    </div>
  )
}
