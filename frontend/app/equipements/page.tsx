import EquipmentCard from "@/components/CarteEquipement"
import { GetEquipment } from "@/function/equipment/function";
import { Equipment } from "@/types/equipement";


/* REQUETE - AFFICHER LES EQUIPEMENTS */
export default async function EquipmentListPage() {
  const { equipments }: { equipments: Equipment[] } = await GetEquipment()

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Équipements</h1>
      <div className="grid gap-4">
        {equipments.map((eq: any) => (
          <EquipmentCard key={eq.id} equipment={eq} />
        ))}
      </div>
    </main>
  );
}
