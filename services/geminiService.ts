import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

export const getDruidAdvice = async (
  role: string,
  context: string
): Promise<string> => {
  if (!apiKey) {
    throw new Error("Clé API manquante. Veuillez configurer process.env.API_KEY.");
  }

  const prompt = `
    Tu es le "Druide Numérique" du village NIRD (Numérique Inclusif, Responsable et Durable).
    
    Contexte :
    Le monde est dominé par l'Empire "Goliath" (Big Tech), qui impose l'obsolescence programmée (fin de support Windows 10), le pillage de données et des licences coûteuses.
    Un village d'irréductibles résiste encore et toujours à l'envahisseur grâce au Logiciel Libre, au réemploi et à la sobriété numérique.
    
    Ton interlocuteur est : ${role}
    Sa situation/question est : "${context}"
    
    Ta mission :
    Fournir une réponse sous forme de "Parchemin de Sagesse" (Markdown).
    
    Structure de la réponse :
    1. **Salutations du Village** : Une intro humoristique et chaleureuse (style Asterix/Résistance).
    2. **Le Diagnostic du Druide** : Analyse brève du problème (dépendance, coût, écologie).
    3. **La Potion Magique (Solutions NIRD)** : 
       - Solutions concrètes et libres (ex: Linux Mint/Ubuntu au lieu de Windows, LibreOffice, Nextcloud).
       - Astuces pour faire durer le matériel.
       - Arguments pour convaincre les décideurs.
    4. **L'Appel à la Résistance** : Une conclusion encourageante pour rejoindre la démarche NIRD.
    
    Ton : Ludique, motivant, un peu rebelle mais très pédagogique. Utilise des émojis (🌿, 🛡️, 💻, ✊).
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 },
      }
    });

    return response.text || "Le Druide médite... Réessayez plus tard.";
  } catch (error) {
    console.error("Erreur lors de la consultation du Druide:", error);
    throw error;
  }
};