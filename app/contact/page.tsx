'use client';

import { useState } from 'react';
import Link from 'next/link';
import NavBar from '@/components/navigation/HomeNavBar';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      if (res.ok) {
        setSubmitted(true);
      } else {
        const error = await res.json();
        alert('Erreur lors de l’envoi : ' + error?.message || 'Inconnue');
      }
    } catch (error) {
      console.error('Erreur côté client :', error);
      alert('Une erreur est survenue.');
    }
  };

  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Nous contacter
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Tu as une question, une suggestion ou besoin d’un support ? Écris-nous !
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Merci pour ton message !</h2>
              <p>Nous te répondrons dans les plus brefs délais.</p>
              <Link
                href="/"
                className="mt-4 inline-block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
              >
                Retour à l&apos;accueil
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ton nom"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ton@email.com"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Objet
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
                >
                  <option value="">Sélectionne un sujet</option>
                  <option value="support">Support technique</option>
                  <option value="feedback">Retour utilisateur</option>
                  <option value="business">Partenariat / Business</option>
                  <option value="bug">Signaler un bug</option>
                  <option value="other">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Écris ton message..."
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Envoyer le message
              </button>
            </form>
          )}
        </div>
      </section>

    </>
  );
}