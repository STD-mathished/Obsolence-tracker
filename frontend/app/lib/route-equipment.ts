import { NextResponse } from 'next/server'

//retourne tous les equipements un tableau de tous les equipements
export async function Get() {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL
    if (!baseUrl) {
        return NextResponse.json(
          { error: "NEXT_PUBLIC_API_URL n'est pas défini" },
          { status: 500 }
        )
      }

  const equiRes = await fetch(`${baseUrl}/equipments`, { cache: "no-store" });
  if (!equiRes.ok) {
    return NextResponse.json(
      { error: "Impossible de charger la liste des équipements" },
      { status: equiRes.status }
    )
  }
  const { equipments } = await equiRes.json()
  return new NextResponse(equipments)
}

export async function POST() {
  return new NextResponse('method post ok');
}
