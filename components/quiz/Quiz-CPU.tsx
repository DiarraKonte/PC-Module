'use client';
import React, { useState } from 'react';

type Step = 1 | 2 | 3 | 4 | 5;
type UsageType = 'gaming' | 'streaming' | 'creation' | 'mixed';
type BudgetRange = 'entry' | 'mid' | 'high' | 'enthusiast';
type SocketType = 'am4' | 'am5' | 'lga1700' | 'lga1851' | 'none';
type Overclock = 'yes' | 'no' | 'maybe';

interface CpuRecommendation {
  name: string;
  brand: 'AMD' | 'Intel';
  specs: string;
  priceRange: string;
  bestFor: string;
}

export default function QuizCPU() {
  const [step, setStep] = useState<Step>(1);
  const [usage, setUsage] = useState<UsageType>();
  const [budget, setBudget] = useState<BudgetRange>();
  const [socket, setSocket] = useState<SocketType>();
  const [overclock, setOverclock] = useState<Overclock>();
  const [recommendation, setRecommendation] = useState<CpuRecommendation[]>([]);

  const cpuDatabase: CpuRecommendation[] = [
    // AMD Ryzen 9000 Series
    {
      name: 'Ryzen 9 9950X',
      brand: 'AMD',
      specs: '16c/32t - 5.7GHz - 170W - AM5',
      priceRange: '1000-1200€',
      bestFor: 'Création/Streaming ultime'
    },
    {
      name: 'Ryzen 7 9800X3D',
      brand: 'AMD',
      specs: '8c/16t - 5.2GHz - 120W - AM5 (3D V-Cache)',
      priceRange: '600-700€',
      bestFor: 'Gaming compétitif'
    },
    
    // Intel 14th Gen
    {
      name: 'Core i9-14900KS',
      brand: 'Intel',
      specs: '24c/32t - 6.2GHz - 253W - LGA1700',
      priceRange: '800-1000€',
      bestFor: 'Performance brute'
    },
    {
      name: 'Core i7-14700KF',
      brand: 'Intel',
      specs: '20c/28t - 5.6GHz - 190W - LGA1700',
      priceRange: '450-550€',
      bestFor: 'Streaming/Jeux'
    },
    
    // Autres
    {
      name: 'Ryzen 5 9600',
      brand: 'AMD',
      specs: '6c/12t - 5.1GHz - 65W - AM5',
      priceRange: '250-300€',
      bestFor: 'Budget gaming'
    }
  ];

  const handleRecommendation = () => {
    const results = cpuDatabase.filter(cpu => {
      // Logique complexe de matching
      const isAMDMatch = socket === 'am5' && cpu.brand === 'AMD';
      const isIntelMatch = socket?.includes('lga') && cpu.brand === 'Intel';
      
      return (
        (usage === 'gaming' && cpu.name.includes('X3D')) ||
        (usage === 'creation' && cpu.specs.includes('16c')) ||
        (budget === 'entry' && cpu.priceRange.includes('250')) ||
        (overclock === 'yes' && !cpu.name.includes('non-K')) ||
        isAMDMatch || isIntelMatch
      );
    });

    setRecommendation(results.slice(0, 3));
    setStep(5);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">🖥️ Assistant de choix de CPU 2024</h1>

      {/* Étape 1 - Usage */}
      {step === 1 && (
        <div className="space-y-4">
          <h2 className="text-xl mb-4">1. Usage principal du PC</h2>
          <div className="grid grid-cols-2 gap-4">
            <button onClick={() => setUsage('gaming')} className="p-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              🎮 Gaming pur
            </button>
            <button onClick={() => setUsage('streaming')} className="p-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              📺 Streaming/Jeux
            </button>
            <button onClick={() => setUsage('creation')} className="p-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              🎨 Création 3D/Video
            </button>
            <button onClick={() => setUsage('mixed')} className="p-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              🏠 Usage mixte
            </button>
          </div>
          <button onClick={() => setStep(2)} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Suivant →
          </button>
        </div>
      )}

      {/* Étape 2 - Budget */}
      {step === 2 && (
        <div className="space-y-4">
          <h2 className="text-xl mb-4">2. Budget processeur</h2>
          <div className="grid grid-cols-2 gap-4">
            <button onClick={() => setBudget('entry')} className="p-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              🟢 150-300€
            </button>
            <button onClick={() => setBudget('mid')} className="p-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              🟡 300-600€
            </button>
            <button onClick={() => setBudget('high')} className="p-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              🔴 600-1000€
            </button>
            <button onClick={() => setBudget('enthusiast')} className="p-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              🟣 1000€+
            </button>
          </div>
          <div className="flex gap-4 mt-4">
            <button onClick={() => setStep(1)} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
              ← Retour
            </button>
            <button onClick={() => setStep(3)} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Suivant →
            </button>
          </div>
        </div>
      )}

      {/* Étape 3 - Socket */}
      {step === 3 && (
        <div className="space-y-4">
          <h2 className="text-xl mb-4">3. Plateforme existante</h2>
          <div className="grid grid-cols-2 gap-4">
            <button onClick={() => setSocket('am4')} className="p-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              AMD AM4
            </button>
            <button onClick={() => setSocket('am5')} className="p-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              AMD AM5 (Ryzen 7000/9000)
            </button>
            <button onClick={() => setSocket('lga1700')} className="p-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              Intel LGA1700 (13th/14th Gen)
            </button>
            <button onClick={() => setSocket('none')} className="p-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              🆕 Nouvelle configuration
            </button>
          </div>
          <div className="flex gap-4 mt-4">
            <button onClick={() => setStep(2)} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
              ← Retour
            </button>
            <button onClick={() => setStep(4)} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Suivant →
            </button>
          </div>
        </div>
      )}

      {/* Étape 4 - Overclocking */}
      {step === 4 && (
        <div className="space-y-4">
          <h2 className="text-xl mb-4">4. Overclocking prévu ?</h2>
          <div className="grid grid-cols-3 gap-4">
            <button onClick={() => setOverclock('yes')} className="p-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              ✅ Oui
            </button>
            <button onClick={() => setOverclock('no')} className="p-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              ❌ Non
            </button>
            <button onClick={() => setOverclock('maybe')} className="p-4 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
              🤔 Peut-être
            </button>
          </div>
          <div className="flex gap-4 mt-4">
            <button onClick={() => setStep(3)} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
              ← Retour
            </button>
            <button onClick={handleRecommendation} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              Voir les résultats
            </button>
          </div>
        </div>
      )}

      {/* Résultats */}
      {step === 5 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center">🎉 Nos recommandations</h2>
          
          {recommendation.map((cpu, index) => (
            <div key={index} className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-700">
              <h3 className="text-xl font-semibold">{cpu.name}</h3>
              <div className="mt-2 space-y-1">
                <p>🏷️ Marque: {cpu.brand}</p>
                <p>⚙️ Spécifications: {cpu.specs}</p>
                <p>💰 Prix: {cpu.priceRange}</p>
                <p>🎯 Idéal pour: {cpu.bestFor}</p>
              </div>
            </div>
          ))}

          <button 
            onClick={() => setStep(1)} 
            className="w-full mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            🔄 Recommencer
          </button>
        </div>
      )}
    </div>
  );
}