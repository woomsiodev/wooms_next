import type { Metadata } from 'next';
import ShopifyHero from '@/components/sections/shopify/ShopifyHero';
import ShopifyAbout from '@/components/sections/shopify/ShopifyAbout';
import ShopifyStats from '@/components/sections/shopify/ShopifyStats';
import ShopifyShowcase from '@/components/sections/shopify/ShopifyShowcase';

export const metadata: Metadata = {
  title: 'Shopify WMS - Lagersoftware für Shopify | wooms',
  description: 'Professionelle Lagerverwaltung für Shopify Stores. KI-gestützte Versandsoftware und Warehouse Management System perfekt integriert mit Shopify.com',
  keywords: 'shopify WMS, lagersoftware shopify, versandsoftware, shopify warehouse management, shopify fulfillment',
};

export default function ShopifyPage() {
  return (
    <main className="min-h-screen bg-white">
      <ShopifyHero />
      <ShopifyAbout />
      <ShopifyStats />
      <ShopifyShowcase />
    </main>
  );
}
