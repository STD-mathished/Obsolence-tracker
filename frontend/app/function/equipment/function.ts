// app/api/equipments/route.ts

// afficher les equipements
export async function GetEquipment() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!baseUrl) {
      throw new Error("NEXT_PUBLIC_API_URL n'est pas configuré")
  }

  const equiRes = await fetch(`${baseUrl}/equipments`, { cache: 'no-store' });
  if (!equiRes.ok) {
    throw new Error("Une erreur est survenue lors du chargement")
  }

  const data = await equiRes.json(); 
  return data; 
}

// ajouter un equipement
export async function PostEquipment({form, setForm} : {form:any, setForm:any}) {
      try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL;
      const res = await fetch(`${baseUrl}/equipments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.detail || res.statusText);
      }
      setForm({ name: "", code: "", commissioning_date: "", status: "" });
    } catch (err: any) {
    }
}
