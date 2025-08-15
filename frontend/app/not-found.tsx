export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-4xl font-bold mb-4">404 - Page non trouvée</h1>
      <p className="mb-6 text-lg">Désolé, la page que vous cherchez n'existe pas.</p>
      <a
        href="/equipements"
        className="text-blue-500 hover:underline"
      >
        ← Retour à la liste des équipements
      </a>
    </div>
  );
}
