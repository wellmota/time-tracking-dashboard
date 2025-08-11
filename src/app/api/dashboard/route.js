import { NextResponse } from 'next/server'
import { readFileSync } from 'fs'
import { join } from 'path'

export async function GET() {
  try {
    const filePath = join(process.cwd(), 'public', 'db.json')
    const fileContent = readFileSync(filePath, 'utf8')
    const data = JSON.parse(fileContent)
    return NextResponse.json(data.dashboard)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load data' }, { status: 500 })
  }
}
